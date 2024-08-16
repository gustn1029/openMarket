import SellerNav from "./SellerNav";

const SellerTemplate = (childTemp) => {
  const sellerTemp = document.createElement("div");
  sellerTemp.classList.add("pl-[380px]");
  sellerTemp.classList.add("pr-[100px]");
  sellerTemp.appendChild(SellerNav());
  sellerTemp.appendChild(childTemp);
  return sellerTemp;
};

export default SellerTemplate;
