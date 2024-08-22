const fetchData = async (page = "") => {
  try {
    const res = await fetch(`${url}/seller/${page && `?page=${page}`}`);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const tbodyTemplate = (page) =>  {
  const data = fetchData(page);
}

const thData = ["상품 정보", "판매 가격", "수정", "삭제"];

const template = (page) => {
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
    </table>
  `;
  return productList;
};

const SellerProductList = () => {
  const section = document.createElement("section");
  section.classList.add("min-h-[884px]");
  section.classList.add("bg-[#F2F2F2]");
  section.classList.add("border");
  section.classList.add("border-[#c4c4c4]");
  section.classList.add("rounded-[5px]");
  section.classList.add("overflow-hidden");
  const temp = template();

  section.insertAdjacentHTML("beforeend", temp);
  return section;
};

export default SellerProductList;
