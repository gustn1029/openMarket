import "./sellerCenterTitle.css";

const template = (title = "", hash = "") => {
  let template = "";
  if (hash === "make-product") {
    template = `<h2 class="col-span-2 py-[42px]">상품 등록</h2>`;
  } else {
    template = `
            <div class="w-full py-[42px] flex justify-between items-center">
                <div class="text-[2.25rem] flex items-center">
                    <h2 class="sans-bold">대시보드</h2>
                    <strong class="font-[400] ml-[16px] text-[#21BF48]">${title}</strong>
                </div>
                <button class="upload__btn flex items-center gap-[8px] block leading-[24px] text-[1.125rem] rounded-[5px] py-[15px] px-[20px] text-white bg-[#21BF48]">상품 업로드</button>
            </div>
        `;
  }

  return template;
};

const SellerCenterTitle = (title = "", hash = "") => {
  const div = document.createElement("div");
  const temp = template(title, hash);
  div.insertAdjacentHTML("beforeend", temp);
  div.classList.add("col-span-2")

  return div;
};

export default SellerCenterTitle;
