import "../css/style.css";
import Home from "./components/Home.js";
import { Join } from "./join.js";
import { Login } from "./login.js";
import Logout from "./logout.js";

export const url = "https://openmarket.weniv.co.kr";

export const root = document.getElementById("app");

const router = async () => {
  const hash = window.location.href.split("#")[1];

  root.innerHTML = "";
  if (!hash) {
    await Home();
  } else if (hash === "login") {
    Login();
  } else if (hash === "sign-up") {
    Join();
  } else if (hash === "logout") {
    Logout();
  } else if (hash.includes("details")) {
    const content = hash.split("/")[0];
    const id = hash.split("/")[1];
    await Home(content,id);
  }
};

window.addEventListener("hashchange", router);

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  router();
});

// window.addEventListener("unload",() => {
//   localStorage.removeItem("user");
// })
