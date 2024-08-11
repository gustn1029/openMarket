// main.js
import "../css/style.css";
import Home from "./components/Home.js";
import { Join } from "./join.js";
import { Login } from "./login.js";
import Logout from "./logout.js";

// API URL과 사용자 정보를 export
export const url = "https://openmarket.weniv.co.kr";
export const root = document.getElementById("app");
export const user = JSON.parse(localStorage.getItem("user"));

// 라우터 함수 정의
const router = async () => {
  const hash = window.location.hash.slice(1);

  root.innerHTML = "";
  if (!hash) {
    await Home();
  } else if (hash === "login") {
    if (!user) {
      Login();
    }
  } else if (hash === "sign-up") {
    if (!user) {
      Join();
    }
  } else if (hash === "logout") {
    Logout();
  } else if (hash.includes("details")) {
    const [content, id] = hash.split("/");
    await Home(content, id);
  } else if (hash === "cart") {
    await Home("cart");
  } else if (hash === "order") {
    await Home("order");
  } else {
    window.location.href = "/openMarket/";
  }
};

// 해시체인지 이벤트 핸들러 실행 함수
const initRouter = () => {
  router();

  window.addEventListener("hashchange", router);
};

// 페이지 로드 시 router 함수와 해시 변경 이벤트 리스너 추가
window.addEventListener("DOMContentLoaded", initRouter);
