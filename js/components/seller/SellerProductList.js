import { url } from "../../main";

const fetchData = async (page = "") => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    const res = await fetch(`${url}/seller/${page && `?page=${page}`}`, {
      headers: {
        Authorization: `JWT ${user.token}`
      }
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const tbodyTemplate = async (page) =>  {
  const data = await fetchData(page);
  console.log(data)
  const tdStyle = `py-[16px] px-[30px] bg-white text-center`
  const tbodyTemp = `
    <tbody>
    ${data.results.map((el) => {
          return `<tr class="border-t border-b border-t-[#c4c4c4] border-b-[#c4c4c4]">
              <td class="flex items-center gap-[30px] ${tdStyle}">
                <img class="block w-[70px] h-[70px] rounded-full" src="${el.image}" alt="${el.product_name}" />
                <div class="text-left">
                  <h4 class="text-[1.125rem] mb-[10px] leading-[22px]">${el.product_name}</h4>
                  <data class="text-[#767676] leading-[20px]" value="${el.stock}">재고: ${el.stock}</data>
                </div>
              </td>
              <td class="${tdStyle}">
                ${el.price.toLocaleString()}원
              </td>
              <td class="${tdStyle}">
                <button type="button" class="rounded-[5px] w-[80px] leading-[20px] py-[10px] text-center text-white bg-[#21BF48]">수정</button>
              </td>
              <td class="${tdStyle}">
                <button type="button" class="rounded-[5px] w-[80px] leading-[20px] py-[10px] text-center text-[#767676] border border-[#c4c4c4] hover:text-black hover:border-[#767676]">삭제</button>
              </td>
          </tr>`
        }).join("")}
    </tbody>
  `;

  return {template: tbodyTemp, next: data.next, previous: data.previous};
}

const thData = ["상품 정보", "판매 가격", "수정", "삭제"];

const template = async (page) => {
  const data = await tbodyTemplate(page);
  const productList = `
    <h3 class="tag__hidden">상품 리스트</h3>
    <table class="w-full border-collapse">
      <colgroup>
        <col class="w-[50%]" />
        <col class="w-[calc(50%-280px)]" />
        <col class="w-[140px]" />
        <col class="w-[140px]" />
      </colgroup>
      <thead class="border-b border-b-[#c4c4c4]">
        <tr>
          ${thData
            .map(
              (el) =>
                `<th class="py-[20px] leading-[20px] text-[1.125rem] bg-white">상품 정보</th>`
            )
            .join("")}
        </tr>
      </thead>
      ${data.template}
    </table>
    <div class="text-center my-[30px]">
      <button class="${
        data.previous ? "prev__btn" : "text-[#c4c4c4]"
      } mr-[20px]" type="button">prev</button>
      <button class="${
        data.next ? "next__btn" : "text-[#c4c4c4]"
      }" type="button">next</button>
    </div>
  `;

  
  const prev = data.previous ? data.previous.split("page=")[1] : "";
  const next = data.next ? data.next.split("page=")[1] : "";

  return { template: productList, prev: prev, next: next };
};

const SellerProductList = async () => {
  const section = document.createElement("section");
  section.classList.add("min-h-[884px]");
  section.classList.add("bg-[#F2F2F2]");
  section.classList.add("border");
  section.classList.add("border-[#c4c4c4]");
  section.classList.add("rounded-[5px]");
  section.classList.add("overflow-hidden");
  const temp = await template();

  section.insertAdjacentHTML("beforeend", temp.template);
  return section;
};

export default SellerProductList;
