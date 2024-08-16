// components/Home.js
import { Header } from "../header";
import ProductList from "../productList.js";
import Details from "../details.js";
import Cart from "../cart.js";
import Loading from "./loading/Loading.js";
import { root } from "../main.js";
import Order from "../order.js";
import Footer from "../footer.js";
import Banner from "./banner/Banner.js";
import SellerTemplate from "./seller/SellerTemplate.js";
import SellerProductList from "./seller/SellerProductList.js";

/**
 * 
 * @param content 현재 화면이 어떤 화면인지 체크 
 * @param id 디테일 화면일 때 출력할 상품의 아이디
 * @returns 
 */
const Home = async (content = "", id = "") => {
  const bannerData = [
    {
      imageUrl:"https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"/openMarket/#",
      text:"호두샵 배너 이미지1",
    },
    {
      imageUrl:"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"",
      text:"호두샵 배너 이미지2",
    },
    {
      imageUrl:"https://images.unsplash.com/photo-1653152748678-6d843daabac5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"",
      text:"호두샵 배너 이미지3",
    }
  ]
  const $main = document.createElement("main");
  const loading = Loading();
  const banner = Banner(bannerData, false, "max-h-[500px] h-full overflow-hidden");
  root.appendChild(loading);

  if (content === "") {
    $main.appendChild(banner);
    $main.appendChild(await ProductList()); // 기본 페이지 로드
  } else if (content === "details") {
    $main.appendChild(await Details(id)); // 상세 페이지 로드
  } else if (content === "cart") {
    $main.appendChild(await Cart()); // 장바구니 페이지 로드
  } else if (content === "order") {
    $main.appendChild(await Order()); // 장바구니 페이지 로드
  } else if (content === "seller-center") {
    const productList = SellerProductList();
    $main.appendChild(SellerTemplate(productList));
  }

  if(content !== "") {
    $main.classList.add("m-[80px_0_180px]");
    banner && banner.remove();
  } else {
    $main.classList.add("m-[0_0_180px]");
  }

  root.innerHTML = "";
  root.appendChild(Header());
  root.appendChild($main);
  root.appendChild(Footer());
  loading.remove();

  return root;
};

export default Home;