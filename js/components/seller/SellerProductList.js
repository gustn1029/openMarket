const template = () => {
  return "list";
};

const SellerProductList = () => {
  const section = document.createElement("section");
  const temp = template();

  section.insertAdjacentHTML("beforeend", temp);
  return section;
};

export default SellerProductList;
