const thData = ["상품 정보", "판매 가격", "수정", "삭제"]

const template = () => {
  const productList = `
    <h3 class="tag__hidden">상품 리스트</h3>
    <table class="w-full rounded-[5px] overflow-hidden">
      <colgroup>
        <col class="w-[50%]" />
        <col class="w-[calc(50%-280px)]" />
        <col class="w-[140px]" />
        <col class="w-[140px]" />
      </colgroup>
      <thead>
        <tr>
          ${thData.map((el) => `<th class="py-[20px] leading-[20px] text-[1.125rem] bg-white">상품 정보</th>`).join("")}
        </tr>
      </thead>
    </table>
  `
  return productList;
};

const SellerProductList = () => {
  const section = document.createElement("section");
  section.classList.add("min-h-[884px]");
  section.classList.add("bg-[#F2F2F2]");
  section.classList.add("border");
  section.classList.add("border-[#c4c4c4]");
  section.classList.add("rounded-[5px]");
  const temp = template();

  section.insertAdjacentHTML("beforeend", temp);
  return section;
};

export default SellerProductList;
