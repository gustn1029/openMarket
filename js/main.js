// main.js
import "../css/style.css";
import Home from "./components/Home.js";
import { Join } from "./join.js";
import { Login } from "./login.js";
import Logout from "./logout.js";

export const url = "https://openmarket.weniv.co.kr";
export const root = document.getElementById("app");
export const user = JSON.parse(localStorage.getItem("user"));

const router = async () => {
  const hash = window.location.hash.slice(1);

  root.innerHTML = "";
  if (!hash) {
    await Home();
  } else if (!user) {
    if (hash === "login") {
      Login();
    } else if (hash === "sign-up") {
      Join();
    }
  } else if (hash === "logout") {
    Logout();
  } else if (hash.includes("details")) {
    const [content, id] = hash.split("/");
    await Home(content, id);
  } else if (hash === "cart") {
    await Home("cart");
  } else {
    window.location.href = "/openMarket/"
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
