import { root, url, user } from "./main";
import "../css/cart.css";
import Modal from "./components/modal/Modal";
import Loading from "./components/loading/Loading";

const detailFetchData = async (id = "") => {
  try {
    const res = await fetch(`${url}/products/${parseInt(id)}/`);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async () => {
  try {
    const res = await fetch(`${url}/cart/`, {
      method: "get",
      headers: {
        Authorization: `JWT ${user.token}`,
      },
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const template = async () => {
  const data = await fetchData();
  console.log(data);
  // 공통 스타일
  const tdStyle = `px-[10px] py-[20px]`;
  const btnStyle = `w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center`;
  const emptyMessage = `
                        <tr class="block">
                            <td colspan-"4" class="py-[175px] text-center">
                                <div>
                                    <p class="text-[1.125rem] leading-[20px] mb-[20px]">장바구니에 담긴 상품이 없습니다.</p>
                                    <p class="text-[0.875rem] text-[#767676]">원하는 상품을 장바구니에 담아보세요!</p>
                                </div>
                            </td>
                        </tr>
                      `;

  const tfootData = [
    {
      title: "총 상품금액",
      price: 0,
      className: "total__price",
    },
    {
      title: "상품 할인",
      price: 0,
      className: "product__discount",
    },
    {
      title: "배송비",
      price: 0,
      className: "parcel__price",
    },
    {
      title: "결제 예정 금액",
      price: 0,
      className: "estimated__amount",
    },
  ];
  async function setCartData() {
    const cartData = [];

    for (const el of data.results) {
      const detail = await detailFetchData(el.product_id);
      const item = {
        ...el,
        image: detail.image,
        product_name: detail.product_name,
        store_name: detail.store_name,
        price: detail.price,
        shipping_fee: detail.shipping_fee,
        shipping_method: detail.shipping_method,
        stock: detail.stock,
      };

      cartData.push(item);
    }

    return cartData;
  }

  const cartData = await setCartData();

  const list = cartData.map((el) => {
    const totalPrice =
      el.quantity === 0
        ? "매진"
        : `${(el.price * el.quantity + el.shipping_fee).toLocaleString()}`;
    return `<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="checkbox__${el.cart_item_id}">
                <input type="checkbox" class="item__checkbox" value="${
                  el.cart_item_id
                }" id="checkbox__${el.cart_item_id}" />
            </label>
        </td>
        <td class="${tdStyle} flex-[2_4_0%]">
            <a href="/openMarket/#details/${el.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img 
                          src="${el.image}" 
                          alt="${el.product_name}" 
                          class="product__img__${
                            el.cart_item_id
                          } w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" 
                        />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="store__name__${
                              el.cart_item_id
                            } text-[#767676] leading-[1] text-[0.875rem]">
                            ${el.store_name}
                            </p>
                            <h4 class="product__name__${
                              el.cart_item_id
                            } text-[1.125rem] leading-[2.25rem]" data-productId="${
      el.product_id
    }" data-active="${el.is_active}">
                                ${el.product_name}
                            </h4>
                            <strong class="product__price__${
                              el.cart_item_id
                            } text-[1rem] leading-[1]">${el.price.toLocaleString()}원</strong>
                        </div>
                        <p class="shipping__${
                          el.cart_item_id
                        } pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">${
      el.shipping_method === "PARCEL" ? "택배배송" : "배달"
    } / ${
      el.shipping_fee === 0
        ? "무료배송"
        : `배송비: ${el.shipping_fee.toLocaleString()}원`
    }</p>
                    </div>
                </section>
            </a>
        </td>
        <td class="${tdStyle} flex-[1_4_0%]">
            <div data-cartId="${el.cart_item_id}" data-productId="${
      el.product_id
    }" class="quantity__wrap cursor-pointer flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${btnStyle} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity__${
                  el.cart_item_id
                } w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${
      el.stock
    }">${el.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${btnStyle} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${tdStyle} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757]"><span class="totalPrice__${
              el.cart_item_id
            }">${totalPrice}</span>원</strong>
            <button type="button" data-cartId="${
              el.cart_item_id
            }" data-productId="${
      el.product_id
    }" class="item__order__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
             <button type="button" data-cartId="${
               el.cart_item_id
             }" class="delete__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">삭제</button>
        </td>
    </tr>`;
  });

  const temp = `
    <section>
        <h2 class="mb-[52px] text-[2.25rem] leading-[2.75rem] font-bold text-center">장바구니</h2>
        <table class="w-full grid mb-[40px]">
            <thead class=" mb-[35px] text-center rounded-[10px] bg-[#f2f2f2] py-[18px]">
                <tr class="flex items-center">
                    <th class="px-[30px] text-left">
                        <label class="cart__item__label" for="check__all">
                            <input type="checkbox" id="check__all" value="check__all" />
                        </label>
                    </th>
                    <th class="flex-[2_4_0%]">상품정보</th>
                    <th class="flex-[1_4_0%]">수량</th>
                    <th class="flex-[1_4_0%]">상품금액</th>
                </tr>
            </thead>
            <tbody class="grid gap-[10px] mb-[80px]">
            ${data.results.length > 0 ? list.join("") : emptyMessage}
            </tbody>
            <tfoot>
                <tr class="block">
                    <td colspan="4" class="flex w-full pt-[46px] pb-[34px] text-center bg-[#F2F2F2] rounded-[10px]">
                    ${tfootData
                      .map((el, idx) => {
                        return `
                            <div class="w-[25%] relative">
                                <strong class="block mb-[12px] ${
                                  idx === tfootData.length - 1
                                    ? "font-bold"
                                    : "font-normal"
                                } leading-[20px]">
                                    ${el.title}
                                </strong>
                                <p class="leading-[45px] ${
                                  idx === tfootData.length - 1
                                    ? "text-[2.25rem] text-[#EB5757]"
                                    : "text-[1.5rem]"
                                }">
                                    <em class="${el.className} font-bold">
                                        ${el.price}
                                    </em>
                                    <span class="${
                                      idx === tfootData.length - 1
                                        ? "text-[1.125rem]"
                                        : "text-[1rem]"
                                    }">원</span>
                                </p>
                            </div>
                            `;
                      })
                      .join("")}
                    </td>
                </tr>
            </tfoot>
        </table>
        <button class="cart__sellect__order__btn block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `;

  const prev = data.previous ? data.previous.split("page=")[1] : "";
  const next = data.next ? data.next.split("page=")[1] : "";

  return { template: temp, prev: prev, next: next };
};

const Cart = async () => {
  const inner = document.createElement("div");
  let temp = await template();
  // 삭제할 아이디를 담을 변수
  let deleteId = null;
  // 모달이 있을 때는 모달 태그로 초기화 됨
  let modal = null;
  let modalQuantity = null;
  // 모달이 띄워져 있는지 확인
  let isModal = false;
  // 선택한 카트 아이디의 최종 금액, 배송비, 할인을 저장하는 set
  let setAmount = new Set();
  let cartId = "";
  let productId = 0;
  let cartQuantity = 0;
  let cartStock = 0;

  inner.classList.add("inner");
  inner.insertAdjacentHTML("beforeend", temp.template);

  const pagination = {
    prev: temp.prev ? temp.prev : "",
    next: temp.next ? temp.next : 1,
  };

  const paginationHandler = async (page) => {
    currentPage = page;
    const newData = await template(page);

    inner.innerHTML = "";
    inner.insertAdjacentHTML("beforeend", newData.template);

    pagination.prev = newData.prev;
    pagination.next = newData.next;

    document.documentElement.scrollTop = 0;
  };

  // 체크박스 이벤트 실행 함수
  const checkboxHandler = (
    checkbox,
    estimatedAmount,
    parcelPrice,
    productPrice
  ) => {
    const checkboxs = inner.querySelectorAll(".item__checkbox");
    const allCheckbox = inner.querySelector("#check__all");
    let parcelData = 0;
    let productPriceData = 0;
    if (checkbox.value === "check__all") {
      checkboxs.forEach((el) => {
        const itemId = el.value;
        if (!setAmount.has(itemId) && checkbox.checked === true) {
          setAmount.add(itemId);
        } else if (checkbox.checked === false) {
          setAmount.clear();
        }
        el.checked = checkbox.checked;
      });
    } else {
      const itemId = checkbox.value;

      if (checkbox.checked === true) {
        setAmount.add(itemId);
      } else {
        setAmount.delete(itemId);
      }
    }
    const total = Array.from(setAmount).reduce((sum, itemId) => {
      const price = inner.querySelector(`.totalPrice__${itemId}`);
      const parcel = inner.querySelector(`.shipping__${itemId}`);
      const parcelPrice = parcel.textContent.trim().split("배송비:")[1];
      const convertedParcel = parcelPrice
        ? parcelPrice.replace(/[,\s원]/g, "")
        : 0;
      const itemPrice = parseInt(price.textContent.replace(/[,\s원]/g, ""));
      const itemParcel = parseInt(convertedParcel);
      parcelData += itemParcel;
      productPriceData += itemPrice - itemParcel;
      return sum + itemPrice;
    }, 0);

    parcelPrice.textContent = parcelData.toLocaleString();
    estimatedAmount.textContent = total.toLocaleString();
    productPrice.textContent = productPriceData.toLocaleString();

    allCheckbox.checked = checkboxs.length === setAmount.size;
  };

  // 수량 수정할 때 실행되는 이벤트
  const quantityHandler = (btn, modalQuantity, stock) => {
    modalQuantity.textContent = cartQuantity;
    if (btn.classList.contains("modal__quantity__plus__btn")) {
      if (stock > parseInt(modalQuantity.textContent)) {
        modalQuantity.textContent = ++cartQuantity;
      } else {
        alert(`이 상품은 최대 ${stock}까지 구매 가능합니다.`);
      }
    } else if (btn.classList.contains("modal__quantity__minus__btn")) {
      if (1 < parseInt(modalQuantity.textContent)) {
        modalQuantity.textContent = --cartQuantity;
      }
    }

    return cartQuantity;
  };

  const orderBtnClickHandler = async (cartId) => {
    let orderData = new Set();
    let total = 0;
    let orderType = "";
    if (cartId) {
      orderData.add(cartId);
      orderType = "cart_one_order";
    } else {
      setAmount.forEach((el) => orderData.add(el));
      orderType = "cart_order";
    }
    const products = [];

    orderData.forEach(async (itemId) => {
      const product = inner.querySelector(`.product__name__${itemId}`);
      const productName = product.textContent.trim();
      const productIsActive = product.getAttribute("data-active");
      const productId = product.getAttribute("data-productId");
      const productImage = inner
        .querySelector(`.product__img__${itemId}`)
        .getAttribute("src");
      const productQuantity = inner
        .querySelector(`.product__quantity__${itemId}`)
        .textContent.trim();
      const storeName = inner
        .querySelector(`.store__name__${itemId}`)
        .textContent.trim();
      const shipping = inner
        .querySelector(`.shipping__${itemId}`)
        .textContent.split(" / ");
      const shippingMethod = shipping[0];
      const shippingFee = shipping[1].includes("배송비:") ? shipping[1].replace("배송비: ","") : shipping[1];
      const totalPrice = inner.querySelector(`.totalPrice__${itemId}`);
      const convertedPrice = totalPrice.textContent.replace(/[,\s원]/g, "");

      const data = {
        product_id: productId,
        product_name: productName,
        image: productImage,
        quantity: productQuantity,
        store_name: storeName,
        shipping_method: shippingMethod,
        shipping_fee: shippingFee,
        total_price: totalPrice.textContent,
      };

      if (!productIsActive) {
        await fetch(`${url}/${cartId}`, {
          method: "PUT",
          headers: {
            Authorization: `JWT ${user.token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            product_id: parseInt(productId),
            quantity: parseInt(productQuantity),
            is_active: true,
          }),
        });
      }

      total += parseInt(convertedPrice);
      products.push(data);
    });

    const order = {
      orderType:orderType,
      total: total,
      products: products
    }

    if(products.length === 0) {
      alert("구매하실 상품을 선택해주세요.");
      return;
    }
    sessionStorage.setItem("order",JSON.stringify(order));
    window.location.hash = "order";
  };

  // 모달 닫는 함수
  const ModalCloseHandler = () => {
    modal !== null && modal.remove();
    isModal = false;
  };

  // 상품 수량 수정 모달 이벤트
  const modalQuantityEventHandler = () => {
    const loading = Loading();
    inner.appendChild(loading);

    const data = {
      product_id: parseInt(productId),
      quantity: cartQuantity,
      is_active: false,
    };
    const res = fetch(`${url}/cart/${cartId}/`, {
      method: "PUT",
      headers: {
        Authorization: `JWT ${user.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    res
      .then(async (res) => {
        if (res.ok) {
          ModalCloseHandler();
          cartId = "";
          cartQuantity = 0;
          cartStock = 0;
          productId = "";
          const newData = await template();
          inner.innerHTML = "";
          inner.insertAdjacentHTML("beforeend", newData.template);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        loading.remove();
        isModal = false;
      });
  };

  // 상품 삭제 모달 이벤트
  const modalDeleteEventHandler = () => {
    const loading = Loading();
    inner.appendChild(loading);
    const res = fetch(`${url}/cart/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${user.token}`,
      },
    });

    res
      .then(async (res) => {
        if (res.ok) {
          ModalCloseHandler();
          alert("해당 상품이 삭제되었습니다.");
          const newData = await template();
          inner.innerHTML = "";
          inner.insertAdjacentHTML("beforeend", newData.template);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        loading.remove();
      });
  };

  // inner click시 실행되는 함수를 컨트롤 하는 함수
  const controller = (e) => {
    const estimatedAmount = inner.querySelector(".estimated__amount");
    const parcelPrice = inner.querySelector(".parcel__price");
    const productPrice = inner.querySelector(".total__price");
    if (e.target.classList.contains("prev__btn")) {
      e.preventDefault();
      paginationHandler(pagination.prev);
    }
    if (e.target.classList.contains("next__btn")) {
      e.preventDefault();
      paginationHandler(pagination.next);
    }

    if (
      e.target.parentNode.classList.contains("quantity__wrap") ||
      e.target.parentNode.classList.contains("quantity__modal")
    ) {
      const btnStyle = `w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center`;
      const cont = `
          <div class="quantity__wrap cursor-pointer flex justify-center">
              <button type="button" class="modal__quantity__minus__btn rounded-[5px_0_0_5px] ${btnStyle} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
              <p class="modal__product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">0</p>
              <button type="button" class="modal__quantity__plus__btn rounded-[0_5px_5px_0] ${btnStyle} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
      `;
      if (!isModal) {
        cartId = e.target.parentNode.getAttribute("data-cartid");
        productId = e.target.parentNode.getAttribute("data-productId");
        const quantity = inner.querySelector(`.product__quantity__${cartId}`);
        cartStock = quantity.getAttribute("data-stock");
        cartQuantity = quantity.textContent;

        modal = Modal(
          cont,
          modalQuantityEventHandler,
          ModalCloseHandler,
          "cont"
        );
        modal.classList.add("quantity__modal");
        inner.appendChild(modal);
        modalQuantity = inner.querySelector(".modal__product__quantity");
        isModal = true;
      }
      quantityHandler(e.target, modalQuantity, cartStock);
    }

    if (e.target.nodeName === "INPUT") {
      checkboxHandler(e.target, estimatedAmount, parcelPrice, productPrice);
    }

    if (e.target.classList.contains("delete__btn")) {
      deleteId = e.target.getAttribute("data-cartId");
      if (!isModal) {
        modal = Modal(
          "상품을 삭제하시겠습니까?",
          modalDeleteEventHandler,
          ModalCloseHandler
        );
        isModal = true;
        root.appendChild(modal);
      }
    }

    if (
      e.target.classList.contains("item__order__btn") ||
      e.target.classList.contains("cart__sellect__order__btn")
    ) {
      e.preventDefault();
      const cartid = e.target?.getAttribute("data-cartId");
      orderBtnClickHandler(cartid);
    }
  };

  inner.addEventListener("click", controller);

  return inner;
};

export default Cart;
