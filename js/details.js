import { root, url } from "./main";
import "../css/details.css";
import Modal from "./components/modal/Modal";
import { checkToken, updateToken } from "./utils/token";

// 부가 정보 탭에서 사용하는 배열
const tabArr = [
  {
    data: "button-info",
    text: "버튼",
    value: "",
  },
  {
    data: "review",
    text: "리뷰",
    value: "",
  },
  {
    data: "qna",
    text: "Q&A",
    value: "",
  },
  {
    data: "return-info",
    text: "반품/교환정보",
    value: "",
  },
];

const fetchData = async (id = "") => {
  updateToken();
  try {
    const res = await fetch(`${url}/products/${parseInt(id)}/`);
    if (res.ok) {
      const json = await res.json();
      if (json.code) {
        checkToken(json.code);
      };
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const template = async (id) => {
  const data = await fetchData(id);
  const user = JSON.parse(localStorage.getItem("user"));

  const btnStyle = ` ${user && user.user_type === "SELLER" ? "seller cursor-auto":""} w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center`;
  const detail = `
        <section class="">
            <h2 class="tag__hidden">상품 디테일</h2>
            <section class="flex gap-[50px] mb-[140px]">
                <h3 class="tag__hidden">상품 디테일 정보</h3>
                <div class="max-w-[600px] max-h-[600px] grow">
                <img src="${data.image}" alt="${
    data.name
  }" class="w-full aspect-square" />
            </div>
            <div class="flex grow flex-col justify-between">
                <div>
                    <p class="mb-[16px] text-[#767676] leading-[1] text-[1.125rem]">
                    ${data?.seller.store_name}
                    </p>
                    <h4 class="mb-[20px] text-[1.125rem] leading-[2.25rem]">
                        ${data.name}
                    </h4>
                    <strong class="text-[2.25rem] leading-[1]">${data.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1.125rem]">원</span></strong>
                </div>
                <div class="grid gap-[30px] text-[1.125rem]">
                    <p class="pb-[18px] text-[#767676] border-b-2 border-b-[#c4c4c4] ">${
                      data.shipping_method == "PARCEL" ? "택배배송" : "배달"
                    } / ${
    data.shipping_fee === 0 ? "무료배송" : `배송비: ${data.shipping_fee}원`
  }</p>
                    <div class="quantity__wrap flex pb-[28px] border-b-2 border-b-[#c4c4c4]">
                        <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${btnStyle} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                        <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">${
                          data.stock === 0 ? 0 : 1
                        }</p>
                        <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${btnStyle} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
                    </div>
                    <div class="flex w-full justify-between items-center gap-28px">
                        <p>총 상품 금액</p>
                        <div>
                            <p class="relative inline-block translate-y-[-3px] text-[#767676]">
                                총 수량 
                                <em class="total__quantity not-italic text-[#21BF48] font-bold">
                                ${data.stock === 0 ? 0 : 1}
                                </em>
                                개
                            </p>
                            <strong class="ml-[28px] text-[2.25rem] leading-[1] text-[#21BF48]">
                                ${
                                  data.stock === 0
                                    ? "매진"
                                    : `<span class="total__price">${data.price.toLocaleString()}</span><span class="ml-[2px] text-normal font-normal text-[1.125rem]">원</span>`
                                }
                            </strong>
                        </div>
                    </div>
                    <div class="flex gap-[14px]">
                        <button type="button" class="${user && user.user_type === "SELLER" ? "sellor bg-[#c4c4c4] cursor-auto":"bg-[#21BF48]"} buy__btn flex-[2_3_0%] py-[20px] text-white leading-[20px] rounded-[5px]">바로 구매</button>
                        <button type="button" class="${user && user.user_type === "SELLER" ? "sellor bg-[#c4c4c4] cursor-auto":" bg-[#767676]"} cart__btn flex-[1_3_0%] py-[20px] text-white leading-[20px] rounded-[5px]">장바구니</button>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <h3 class="tag__hidden">상품 부가 정보</h3>
                <ul class="side__info__tab grid grid-cols-4 text-[1.125rem]">
                    ${tabArr
                      .map((el, idx) => {
                        el.value = `${el.text} 정보`;
                        return `
                            <li>
                                <button type="button" data-tab="${
                                  el.data
                                }" class="detail__tab__btn ${
                          idx === 0 ? "active" : ""
                        } relative w-full leading-[20px] py-[20px]">${
                          el.text
                        }</button>
                            </li>
                        `;
                      })
                      .join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `;

  return {
    detail: detail,
    data: data,
  };
};

const Details = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const temp = await template(id);
  const inner = document.createElement("div");
  inner.classList.add("inner");
  inner.insertAdjacentHTML("beforeend", temp.detail);

  let isModal = false;
  let modal = null;

  // 요소 선택
  const quantityWrap = inner.querySelector(".quantity__wrap");
  const quantity = inner.querySelector(".product__quantity");
  const totalQuantity = inner.querySelector(".total__quantity");
  const totalPrice = inner.querySelector(".total__price");
  const buyBtn = inner.querySelector(".buy__btn");
  const cartBtn = inner.querySelector(".cart__btn");
  const sideInfoTab = inner.querySelector(".side__info__tab");
  const sideInfo = inner.querySelector(".detail__side__infomation");
  let beforeSideInfoTab = inner.querySelector(".side__info__tab button.active");

  // 수량 조절 버튼 클릭 핸들러
  const quantityHandler = (btn) => {
    const btnText = btn.textContent;
    const convertedPrice = totalPrice.textContent.replaceAll(",", "");
    const seller = btn.classList.contains("seller");
    if(seller) {
      return;
    }

    if (btnText === "더하기") {
      if (temp.data.stock > parseInt(quantity.textContent)) {
        quantity.textContent = ++quantity.textContent;
        totalQuantity.textContent = quantity.textContent;
        totalPrice.textContent = (
          parseInt(convertedPrice) + temp.data.price
        ).toLocaleString();
      } else {
        alert(`이 상품은 최대 ${temp.data.stock}까지 구매 가능합니다.`);
      }
    } else if (btnText === "빼기") {
      if (1 < parseInt(quantity.textContent)) {
        quantity.textContent = --quantity.textContent;
        totalQuantity.textContent = quantity.textContent;
        totalPrice.textContent = (
          parseInt(convertedPrice) - temp.data.price
        ).toLocaleString();
      }
    }
  };

  // 구매 버튼 클릭 핸들러
  const buyBtnClickHandler = () => {
    if(user.user_type === "SELLER") {
      return;
    }

    const shippingMethod =
      temp.data.shipping_method === "PARCEL" ? "택배배송" : "배달";
    let shippingFee = temp.data.shipping_fee;
    const price = totalPrice.textContent.replace(",", "");
    let totalOrderPrice = parseInt(price) + shippingFee;
    const orderType = "direct_order";
    const discount = 0;

    const data = {
      product_id: temp.data.product_id,
      name: temp.data.name,
      image: temp.data.image,
      quantity: quantity.textContent,
      store_name: temp.data.seller.store_name,
      shipping_method: shippingMethod,
      shipping_fee:
        shippingFee === 0 ? "무료배송" : `${shippingFee.toLocaleString()}원`,
      total_price: totalOrderPrice,
    };

    const order = {
      orderType: orderType,
      total: totalOrderPrice,
      parcel: shippingFee,
      discount: discount,
      products: [data],
      product_id: temp.data.id
    };

    sessionStorage.setItem("order", JSON.stringify(order));
    window.location.hash = "order";
  };

  // 모달 닫기 핸들러
  const ModalCloseHandler = () => {
    modal !== null && modal.remove();
    isModal = false;
  };

  // 모달 이벤트 핸들러
  const ModalEventHandler = () => {
    if (user) {
      window.location.hash = "cart";
    } else {
      localStorage.setItem("beforePage", window.location.hash);
      window.location.hash = "login";
    }
  };

  // 장바구니 버튼 클릭 핸들러
  const cartBtnClickHandler = () => {
    if (!user) {
      if (!isModal) {
        modal = Modal(
          `로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?`,
          ModalEventHandler,
          ModalCloseHandler
        );
        root.appendChild(modal);
        isModal = true;
      }
      return;
    }

    if(user.user_type === "SELLER") {
      return;
    }
    updateToken();
    const data = {
      product_id: temp.data.id,
      quantity: parseInt(quantity.textContent),
    };

    const res = fetch(`${url}/cart/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    res
      .then((res) => {
        if (res.ok) {
          if (!isModal) {
            modal = Modal(
              `해당 상품이 장바구니에 담겼습니다.<br>장바구니로 이동하시겠습니까?`,
              ModalEventHandler,
              ModalCloseHandler
            );
            root.appendChild(modal);
            isModal = true;
          }
        }
      })
      .catch((error) => console.error(error));
  };

  // 사이드 정보 탭 핸들러
  const sideInfoTabHandler = (activeTab, unactiveTab) => {
    let activeTabValue = activeTab.getAttribute("data-tab");

    unactiveTab.classList.contains("active") &&
      unactiveTab.classList.remove("active");

    !activeTab.classList.contains("active") &&
      activeTab.classList.add("active");

    tabArr.forEach((el) => {
      if (el.data === activeTabValue) {
        sideInfo.innerHTML = el.value;
      }
    });

    beforeSideInfoTab = activeTab;
  };

  // 이벤트 핸들러
  quantityWrap.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      quantityHandler(e.target);
    }
  });

  buyBtn.addEventListener("click", buyBtnClickHandler);

  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();

    cartBtnClickHandler();
  });
  sideInfoTab.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      e.preventDefault();
      sideInfoTabHandler(e.target, beforeSideInfoTab);
    }
  });

  return inner;
};

export default Details;
