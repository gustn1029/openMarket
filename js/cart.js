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
                        <tr>
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
        : `${(el.price * el.quantity + el.shipping_fee).toLocaleString()}원`;
    return `<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="${el.cart_item_id}">
                <input type="checkbox" class="item__checkbox" value="${
                  el.cart_item_id
                }" id="${el.cart_item_id}" />
            </label>
        </td>
        <td class="${tdStyle} flex-[2_4_0%]">
            <a href="/openMarket/#details/${el.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img src="${el.image}" alt="${
      el.product_name
    }" class="w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="text-[#767676] leading-[1] text-[0.875rem]">
                            ${el.store_name}
                            </p>
                            <h4 class="text-[1.125rem] leading-[2.25rem]">
                                ${el.product_name}
                            </h4>
                            <strong class="text-[1rem] leading-[1]">${el.price.toLocaleString()}원</strong>
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
            <div class="quantity__wrap flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${btnStyle} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${
                  el.stock
                }">${el.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${btnStyle} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${tdStyle} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757] totalPrice__${
              el.cart_item_id
            }">${totalPrice}</strong>
            <button class="buy__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
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
        <button class="block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `;

  const prev = data.previous ? data.previous.split("page=")[1] : "";
  const next = data.next ? data.next.split("page=")[1] : "";

  return { template: temp, prev: prev, next: next };
};

const Cart = async () => {
  const inner = document.createElement("div");
  let temp = await template();
  let modal = null;
  let deleteId = null;
  // 선택한 카트 아이디의 최종 금액, 배송비, 할인을 저장하는 set
  let setAmount = new Set();

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

  const checkboxHandler = (checkbox) => {
    const estimatedAmount = inner.querySelector(".estimated__amount");
    const parcelPrice = inner.querySelector(".parcel__price");
    const productPrice = inner.querySelector(".total__price");
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
      console.log(itemParcel);
      parcelData += itemParcel;
      console.log(parcelData);
      productPriceData += itemPrice - itemParcel;
      return sum + itemPrice;
    }, 0);

    parcelPrice.textContent = parcelData.toLocaleString();
    estimatedAmount.textContent = total.toLocaleString();
    productPrice.textContent = productPriceData.toLocaleString();

    allCheckbox.checked = checkboxs.length === setAmount.size;
  };

  const ModalCloseHandler = () => {
    modal !== null && modal.remove();
  };

  const modalEventHandler = () => {
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

  inner.addEventListener("click", async (e) => {
    if (e.target.classList.contains("prev__btn")) {
      e.preventDefault();
      paginationHandler(pagination.prev);
    }
    if (e.target.classList.contains("next__btn")) {
      e.preventDefault();
      paginationHandler(pagination.next);
    }

    if (e.target.nodeName === "INPUT") {
      checkboxHandler(e.target);
    }

    if (e.target.classList.contains("delete__btn")) {
      deleteId = e.target.getAttribute("data-cartId");
      modal = Modal(
        "상품을 삭제하시겠습니까?",
        modalEventHandler,
        ModalCloseHandler
      );
      root.appendChild(modal);
    }
  });

  return inner;
};

export default Cart;
