import SellerCenterTitle from "./SellerCenterTitle";
import SellerNav from "./SellerNav";
import "./sellerTemplate.css";

const SellerTemplate = (childTemp, title) => {
  const hash = window.location.hash.slice(1);
  const sellerTemp = document.createElement("div");
  sellerTemp.classList.add("seller__template");
  sellerTemp.insertAdjacentHTML("beforeend", SellerCenterTitle(title)
  );
  sellerTemp.appendChild(SellerNav(hash));
  sellerTemp.appendChild(childTemp);
  return sellerTemp;
};

export default SellerTemplate;
