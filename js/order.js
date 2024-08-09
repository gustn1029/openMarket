import LabelInput from "./components/LabelInput";
import "../css/order.css";

const template = () => {
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
  const btnStyle = `w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center`;
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
                            class="product__img__${el.cart_item_id} w-full aspect-square max-w-[104px] w-full max-h-[104px] rounded-[5px]" 
                          />
                      <div class="flex grow flex-col gap-[6px] justify-center items-start">
                        <p class="store__name__${el.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                        ${el.store_name}
                        </p>
                        <h4 class="product__name__${el.cart_item_id} text-[1.125rem] leading-[2.25rem]">
                            ${el.product_name}
                        </h4>
                        <p class="pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">수량 : ${el.quantity}개</p>
                      </div>
                  </section>
              </a>
          </td>
          <td class="${tdStyle} flex-[1_5_0%]">
              -
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
      <section>
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
                                      "휴대폰 첫 번째 3자리 입력",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "buyerPhone__middle",
                                      "휴대폰 중간번호 3~4자리 입력",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "buyerPhone__last",
                                      "휴대폰 마지막 4자리 입력",
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
                                      "휴대폰 첫 번째 3자리 입력",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "recieverPhone__middle",
                                      "휴대폰 중간번호 3~4자리 입력",
                                      "text",
                                      "order__input",
                                      "order__label__phone"
                                    )}
                                    ${LabelInput(
                                      "recieverPhone__last",
                                      "휴대폰 마지막 4자리 입력",
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
                                          "우편번호 입력",
                                          "text",
                                          "order__input"
                                        )}
                                        <button class="zipCode__btn">우편번호 검색</button>
                                    </div>
                                    ${LabelInput(
                                      "recieverAddress",
                                      "주소 입력:",
                                      "text",
                                      "order__input"
                                    )}
                                    ${LabelInput(
                                      "recieverDetailAddress",
                                      "상세 주소 입력",
                                      "text",
                                      "order__input"
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
                            ${radioData.map((el) => {
                              return `
                                    <label for="${el.value}">
                                        <input 
                                            type="radio" 
                                            name="payment__method"
                                            value="${el.value}"
                                            id="${el.value}" 
                                        />
                                        <p>${el.text}</p>
                                    </label>
                                `;
                            }).join("")}
                        </div>
                    </section>
                    <section class="max-w-[480px] w-full">
                        <h4  class="mb-[40px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">최종결제 정보</h4>
                    </section>
                </section>
            </form>
      </section>
    `;

  return temp;
};

const Order = async () => {
  const inner = document.createElement("div");
  let temp = template();

  inner.classList.add("inner");
  inner.insertAdjacentHTML("beforeend", temp);

  return inner;
};

export default Order;
