import LabelInput from "./components/LabelInput";
import "../css/order.css";
import Modal from "./components/modal/Modal";
import ErrorMessage from "./components/ErrorMessage";
import { root, url, user } from "./main";
import Loading from "./components/loading/Loading";

/**
 * __이 들어간 클래스는 order.css로 제어
 * form 내부, ul 영역 등은 order.css로 제어
 */
const template = () => {
  // order정보를 가져옴
  const session = sessionStorage.getItem("order");
  const order = JSON.parse(session);
  const orderProducts = order.products;
  const radioData = [
    {
      text: "신용/체크카드",
      value: "CARD",
    },
    {
      text: "무통장 입금",
      value: "DEPOSIT",
    },
    {
      text: "휴대폰 결제",
      value: "PHONE_PAYMENT",
    },
    {
      text: "네이버페이",
      value: "NAVERPAY",
    },
    {
      text: "카카오페이",
      value: "KAKAOPAY",
    },
  ];
  // 공통 스타일
  const tdStyle = `px-[10px] pt-[8px] pb-[17px] text-center`;
  // 공통 스타일
  const list = orderProducts.map((el) => {
    return `<tr class="relative flex items-center border-b border-b-[#c4c4c4]">
          <td class="${tdStyle} text-left flex-[2_5_0%]">
              <a href="/openMarket/#details/${el.product_id}">
                  <section class="flex gap-[36px]">
                      <h3 class="tag__hidden">상품 디테일 정보</h3>
                          <img 
                            src="${el.image}" 
                            alt="${el.product_name}" 
                            class="product__img__${
                              el.cart_item_id
                            } w-full aspect-square max-w-[104px] w-full max-h-[104px] rounded-[5px]" 
                          />
                      <div class="flex grow flex-col gap-[6px] justify-center items-start">
                        <p class="store__name__${
                          el.cart_item_id
                        } text-[#767676] leading-[1] text-[0.875rem]">
                        ${el.store_name}
                        </p>
                        <h4 class="product__name__${
                          el.cart_item_id
                        } text-[1.125rem] leading-[2.25rem]">
                            ${el.product_name}
                        </h4>
                        <p class="pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">수량 : ${
                          el.quantity
                        }개</p>
                      </div>
                  </section>
              </a>
          </td>
          <td class="${tdStyle} flex-[1_5_0%]">
              ${
                order.discount === 0 ? "-" : `${order.total.toLocaleString()}원`
              }
          </td>
          <td class="${tdStyle} flex-[1_5_0%] text-center">
          ${el.shipping_fee}
          </td>
          <td class="${tdStyle} font-bold flex-[1_5_0%]">
            ${el.total_price}원
          </td>
      </tr>`;
  });

  const temp = `
      <section id="order">
          <h2 class="mb-[52px] text-[2.25rem] leading-[2.75rem] font-bold text-center">주문/결제하기</h2>
          <table class="w-full grid mb-[100px] text-[1.125rem]">
              <thead class=" mb-[16px] text-center rounded-[10px] bg-[#f2f2f2] py-[18px]">
                  <tr class="flex items-center">
                      <th class="px-[10px] flex-[2_5_0%]">상품정보</th>
                      <th class="px-[10px] flex-[1_5_0%]">할인</th>
                      <th class="px-[10px] flex-[1_5_0%]">배송비</th>
                      <th class="px-[10px] flex-[1_5_0%]">상품금액</th>
                  </tr>
              </thead>
              <tbody class="grid gap-[16px] mb-[30px]">
                ${list.join("")}
              </tbody>
              <tfoot>
                  <tr class="block">
                      <td colspan="4" class="block text-right">
                            <p class="sans-medium">총 주문금액 <em class="ml-[10px] text-[1.5rem] text-[#EB5757] font-bold">${order.total.toLocaleString()}원</em></p>
                      </td>
                  </tr>
              </tfoot>
          </table>
          <form class="w-full text-[1.125rem]">
            <section class="mb-[62px]">
                <h3 class="mb-[40px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">배송정보</h3>
                    <section class="form__wrap mb-[40px]">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">주문자 정보</h4>
                        <div>${LabelInput(
                          "buyerName",
                          "이름",
                          "text",
                          "order__input",
                          "order__label"
                        )}</div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${LabelInput(
                                      "buyerPhone__first",
                                      "주문자 휴대폰 첫 번째 3자리",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "buyerPhone__middle",
                                      "주문자 휴대폰 중간번호 3~4자리",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "buyerPhone__last",
                                      "주문자 휴대폰 마지막 4자리",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${LabelInput(
                              "buyerEmail",
                              "이메일",
                              "email",
                              "order__input",
                              "order__label"
                            )}
                        </div>
                    </section>
                    <section class="form__wrap">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">배송지 정보</h4>
                        <div>
                            ${LabelInput(
                              "recieverName",
                              "수령인",
                              "text",
                              "order__input",
                              "order__label"
                            )}
                        </div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${LabelInput(
                                      "recieverPhone__first",
                                      "수령인 휴대폰 첫 번째 3자리",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "recieverPhone__middle",
                                      "수령인 휴대폰 중간번호 3~4자리",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "recieverPhone__last",
                                      "수령인 휴대폰 마지막 4자리",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="order__label__address">
                                <strong>배송주소</strong>
                                <div>
                                    <div class="zipCode__wrap">
                                        ${LabelInput(
                                          "recieverZipCode",
                                          "우편번호",
                                          "text",
                                          "order__input"
                                        )}
                                        <button class="zipCode__btn">우편번호 검색</button>
                                    </div>
                                    ${LabelInput(
                                      "recieverAddress",
                                      "주소",
                                      "text",
                                      "order__input"
                                    )}
                                    ${LabelInput(
                                      "recieverDetailAddress",
                                      "상세 주소",
                                      "text",
                                      "order__input",
                                      "",
                                      false
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${LabelInput(
                              "recieverMessage",
                              "배송 메시지",
                              "text",
                              "order__input",
                              "order__label__message"
                            )}
                        </div>
                    </section>
                </section>
                <section class="flex justify-between">
                    <h3 class="tag__hidden">결제수단 및 최종 결제 정보</h3>
                    <section class="max-w-[760px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">결제수단</h4>
                        <div class="payment">
                            ${radioData
                              .map((el) => {
                                return `
                                    <label for="${el.value}">
                                        <input 
                                            type="radio" 
                                            name="payment__method"
                                            value="${el.value}"
                                            id="${el.value}" 
                                        />
                                        <span>${el.text}</span>
                                    </label>
                                `;
                              })
                              .join("")}
                        </div>
                    </section>
                    <section class="max-w-[480px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px]">최종결제 정보</h4>
                        <div class="finally__order__list">
                            <ul>
                              <li>
                                <p>상품금액</p>
                                <strong>
                                  ${(
                                    order.total - order.parcel
                                  ).toLocaleString()}
                                  <span>원</span>
                                </strong>
                              </li>
                              <li>
                                <p>할인</p>
                                <strong>
                                  ${order.discount.toLocaleString()}
                                  <span>원</span>
                                </strong>
                              </li>
                              <li>
                                <p>배송비</p>
                                <strong>
                                  ${order.parcel.toLocaleString()}
                                  <span>원</span>
                                </strong>
                              </li>
                              <li 
                                class="finally__total__price__wrap"
                              >
                                <p>결제금액</p>
                                <strong>${order.total.toLocaleString()}<span>원</span></strong>
                              </li>
                            </ul>
                            <div class="finally__order__wrap">
                              <label for="order__check">
                                <input type="checkbox" id="order__check" />
                                <span class="order__checkbox__text">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</span>
                              </label>
                              <button type="submit" class="order__submit__btn">결제하기</button>
                            </div>
                        </div>
                    </section>
                </section>
            </form>
      </section>
    `;

  if (order.orderType === "cart_order") {
    return { template: temp, total: order.total, orderType: order.orderType };
  } else {
    return {
      template: temp,
      orderType: order.orderType,
      total: order.total,
      quantity: order.products[0].quantity,
      productId: order.products[0].product_id,
    };
  }
};

const Order = async () => {
  const inner = document.createElement("div");
  let temp = template();
  let modal = null;
  let isModal = false;
  let isOrderCheck = false;
  let isValueEmpty = false;
  let isRegex = false;
  let selectedPayment = "";
  let errorMessages = [];

  inner.classList.add("inner");
  inner.insertAdjacentHTML("beforeend", temp.template);

  // 폼 입력 요소 선택
  const buyerName = inner.querySelector("#buyerName");
  const buyerPhoneFirst = inner.querySelector("#buyerPhone__first");
  const buyerPhoneMiddle = inner.querySelector("#buyerPhone__middle");
  const buyerPhoneLast = inner.querySelector("#buyerPhone__last");
  const buyerEmail = inner.querySelector("#buyerEmail");
  const recieverName = inner.querySelector("#recieverName");
  const recieverPhoneFirst = inner.querySelector("#recieverPhone__first");
  const recieverPhoneMiddle = inner.querySelector("#recieverPhone__middle");
  const recieverPhoneLast = inner.querySelector("#recieverPhone__last");
  const recieverZipCodeBtn = inner.querySelector(".zipCode__btn");
  const recieverZipCode = inner.querySelector("#recieverZipCode");
  const recieverAddress = inner.querySelector("#recieverAddress");
  const recieverDetailAddress = inner.querySelector("#recieverDetailAddress");
  const recieverMessage = inner.querySelector("#recieverMessage");
  const payment = inner.querySelector(".payment");
  const orderCheckbox = inner.querySelector(".order__checkbox__text");
  const orderBtn = inner.querySelector(".order__submit__btn");

  // 최대 입력 가능 글자수 세팅
  buyerPhoneFirst.setAttribute("maxlength", "3");
  buyerPhoneMiddle.setAttribute("maxlength", "4");
  buyerPhoneLast.setAttribute("maxlength", "4");
  recieverPhoneFirst.setAttribute("maxlength", "3");
  recieverPhoneMiddle.setAttribute("maxlength", "4");
  recieverPhoneLast.setAttribute("maxlength", "4");

  // 유효성 검사가 필요한 input 데이터 정의
  const inputControlData = [
    {
      name: "buyerName",
      tag: buyerName,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[a-zA-Z\uac00-\ud7af]{2,}$/,
      regexErrorMessage: "입력에는 최소 3자 이상, 문자만 입력이 가능합니다.",
    },
    {
      name: "buyerPhone__last",
      tag: buyerPhoneLast,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[0-9]{4}$/,
      regexErrorMessage: "입력에는 숫자 4자리만 입력이 가능합니다.",
    },
    {
      name: "buyerPhone__middle",
      tag: buyerPhoneMiddle,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[0-9]{3,4}$/,
      regexErrorMessage: "입력에는 숫자 3~4자리만 입력이 가능합니다.",
    },
    {
      name: "buyerPhone__first",
      tag: buyerPhoneFirst,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^01[016789]$/,
      regexErrorMessage: "입력에는 010,016,017,018,019만 입력이 가능합니다.",
    },
    {
      name: "buyerEmail",
      tag: buyerEmail,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      regexErrorMessage: "이메일을 다시 확인해주세요.",
    },
    {
      name: "recieverName",
      tag: recieverName,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[a-zA-Z\uac00-\ud7af]{2,}$/,
      regexErrorMessage: "입력에는 최소 3자 이상, 문자만 입력이 가능합니다.",
    },
    {
      name: "recieverPhone__last",
      tag: recieverPhoneLast,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[0-9]{3,4}$/,
      regexErrorMessage: "입력에는 숫자 4자리만 입력이 가능합니다.",
    },
    {
      name: "recieverPhone__middle",
      tag: recieverPhoneMiddle,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[0-9]{3,4}$/,
      regexErrorMessage: "입력에는 숫자 3~4자리만 입력이 가능합니다.",
    },
    {
      name: "recieverPhone__first",
      tag: recieverPhoneFirst,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^01[016789]$/,
      regexErrorMessage: "입력에는 010,016,017,018,019만 입력이 가능합니다.",
    },
    {
      name: "zipCode",
      tag: recieverZipCode,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /^[0-9]{5}$/,
      regexErrorMessage: "입력에는 숫자 5자리만 입력이 가능합니다.",
    },
    {
      name: "recieverAddress",
      tag: recieverAddress,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /.*$/s,
      regexErrorMessage: "입력에 사용 불가능한 문자가 포함되어 있습니다.",
    },
    {
      name: "recieverMessage",
      tag: recieverMessage,
      emptyErrorMessage: "영역이 비어있습니다.",
      regex: /.*$/s,
      regexErrorMessage: "",
    },
  ];

  // 에러메시지 출력하는 함수
  const errorMessageViewFunc = (tag, message, className) => {
    let errorMessage = null;
    if (
      tag.parentNode.textContent.includes("휴대폰") ||
      tag.parentNode.textContent.includes("주소")
    ) {
      errorMessage = ErrorMessage(
        `${tag.parentNode.textContent}${message}`,
        true,
        className
      );
      tag.parentNode.parentNode.parentNode.insertAdjacentHTML(
        "afterend",
        errorMessage
      );
    } else if (tag.parentNode.textContent.includes("우편번호")) {
      errorMessage = ErrorMessage(
        `${tag.parentNode.textContent}${message}`,
        true,
        className
      );
      tag.parentNode.parentNode.insertAdjacentHTML("afterend", errorMessage);
    } else {
      errorMessage = ErrorMessage(
        `${tag.parentNode.textContent}${message}`,
        true,
        className
      );
      tag.parentNode.insertAdjacentHTML("afterend", errorMessage);
    }

    return errorMessage;
  };

  // 입력 값이 변경될 때 호출되는 함수
  const inputValueChangeHandler = (input, obj, idx) => {
    const error = inner.querySelector(`.errorMessage__regex__${obj.name}`);
    const empty = inner.querySelector(`.errorMessage__empty__${idx}`);
    error && error.remove();

    let errorMessage = null;
    if (!obj.regex.test(input.value)) {
      errorMessageViewFunc(
        input,
        obj.regexErrorMessage,
        `errorMessage__regex__${obj.name}`
      );

      input.focus();
    } else {
      error && error.remove();
    }

    if (empty && input.value !== "") {
      empty.remove();
    }

    if (errorMessage) {
      errorMessages.push(`errorMessage__regex__${i}`);
      isRegex = false;
    } else {
      isRegex = true;
    }
  };

  // 입력 값이 비어있는지 체크하는 함수
  const valueEmptyCheckHandler = () => {
    // 에러 메시지가 출력되어 있는지 확인
    if (errorMessages.length > 0) {
      errorMessages.forEach((el, i) => {
        const errorMessage = inner.querySelector(`.errorMessage__empty__${i}`);

        if (errorMessage) {
          errorMessage.remove();
          errorMessages = errorMessages.filter(
            (item) => !errorMessage.classList.contains(item)
          );
        }
      });
    }

    inputControlData.forEach((el, i) => {
      let errorMessage = null;
      if (!el || el.tag.value === "") {
        errorMessage = errorMessageViewFunc(
          el.tag,
          el.emptyErrorMessage,
          `errorMessage__empty__${i}`
        );
      }

      if (errorMessage) {
        errorMessages.push(`errorMessage__empty__${i}`);
        isValueEmpty = false;
      } else {
        isValueEmpty = true;
      }
    });
  };

  // 결제 방법 선택 핸들러
  const paymentSelectHandler = (e) => {
    const target = e.target;
    if (target.nodeName === "INPUT") {
      const val = target.value;
      selectedPayment = val;
    }
  };

  // 우편번호 버튼 클릭 핸들러
  const recieverZipCodeBtnClickHandler = (e) => {
    e.preventDefault();
    modal = Modal(
      `추후 업데이트 예정입니다.`,
      ModalCloseHandler,
      ModalCloseHandler
    );
    if (!isModal) {
      inner.appendChild(modal);
    }
  };

  // 주문 제출 핸들러
  const orderSubmitHandler = () => {
    const loading = Loading();
    const orderType = temp.orderType;
    const reciever = recieverName.value;
    const recieverPhonNumber = `${recieverPhoneFirst.value}${recieverPhoneMiddle.value}${recieverPhoneLast.value}`;
    const address = `${recieverZipCode.value}, ${recieverAddress.value}${
      recieverDetailAddress.value !== ""
        ? ` ${recieverDetailAddress.value}`
        : ``
    }`;
    const addressMessage = recieverMessage.value;
    const productId = parseInt(temp?.productId);
    const quantity = parseInt(temp?.quantity);
    const total = temp.total;

    root.appendChild(loading);
    const data = {
      total_price: total,
      order_kind: orderType,
      receiver: reciever,
      receiver_phone_number: recieverPhonNumber,
      address: address,
      address_message: addressMessage,
      payment_method: selectedPayment,
    };

    if (orderType !== "cart_order") {
      data.product_id = productId;
      data.quantity = quantity;
    }

    // 서버에 주문 데이터 전송
    const res = fetch(`${url}/order/`, {
      method: "post",
      headers: {
        Authorization: `JWT ${user.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    res
      .then(async (res) => {
        if (res.ok) {
          alert("주문을 완료했습니다.");
          window.location.hash = "";
        }
      })
      .catch((error) => console.error(error.message))
      .finally(() => {
        loading.remove();
      });
  };

  // 주문 버튼 클릭 핸들러
  const orderBtnClickHandler = (e) => {
    e.preventDefault();

    valueEmptyCheckHandler();
    // 비어있는 값이 있으면 리턴
    if (!isValueEmpty) {
      return;
    }
    // 유효성 테스트에 통과하지 않으면 리턴
    if (!isRegex) {
      return;
    }

    if (!selectedPayment) {
      alert("결제수단을 선택해주세요.");
      return;
    }

    // 동의 체크 안하면 리턴
    if (!orderBtn.classList.contains("on")) {
      alert("주문 내용 확인 및 정보 제공 등에 동의해주세요.");
      return;
    }

    // 주문 제출
    orderSubmitHandler();
  };

  // 모달 닫는 함수
  const ModalCloseHandler = () => {
    modal !== null && modal.remove();
    isModal = false;
  };

  // 이벤트 핸들러
  inputControlData.forEach((el, i) => {
    el.tag.addEventListener("change", (e) => {
      inputValueChangeHandler(e.target, el, i);
    });
  });

  recieverZipCodeBtn.addEventListener("click", recieverZipCodeBtnClickHandler);

  orderCheckbox.addEventListener("click", () => {
    const checkbox = inner.querySelector("#order__check");
    if (!checkbox.checked) {
      orderBtn.classList.add("on");
      isOrderCheck = true;
    } else {
      orderBtn.classList.remove("on");
      isOrderCheck = false;
    }
  });

  payment.addEventListener("click", paymentSelectHandler);

  orderBtn.addEventListener("click", orderBtnClickHandler);
  return inner;
};

export default Order;
