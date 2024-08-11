// components/Home.js
import { Header } from "../header";
import ProductList from "../productList.js";
import Details from "../details.js";
import Cart from "../cart.js";
import Loading from "./loading/Loading.js";
import { root } from "../main.js";
import Order from "../order.js";
import Footer from "../footer.js";

/**
 * 
 * @param content 현재 화면이 어떤 화면인지 체크 
 * @param id 디테일 화면일 때 출력할 상품의 아이디
 * @returns 
 */
const Home = async (content = "", id = "") => {
  const $main = document.createElement("main");
  const loading = Loading();
  root.appendChild(loading);

  $main.classList.add("m-[80px_0_180px]");
  if (content === "") {
    $main.appendChild(await ProductList()); // 기본 페이지 로드
  } else if (content === "details") {
    $main.appendChild(await Details(id)); // 상세 페이지 로드
  } else if (content === "cart") {
    $main.appendChild(await Cart()); // 장바구니 페이지 로드
  } else if (content === "order") {
    $main.appendChild(await Order()); // 장바구니 페이지 로드
  }

  root.innerHTML = "";
  root.appendChild(Header());
  root.appendChild($main);
  root.appendChild(Footer());
  loading.remove();

  return root;
};

export default Home;