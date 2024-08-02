import "../css/style.css";
import { Header } from "./header.js";
import { Login } from "./login.js";




const router = () => {
  const url = window.location.href.split("#")[1];
  if(!url) {
    document.querySelector("#app").innerHTML = `
    ${Header()}
  `;
  } else if(url === "login") {
    Login();
  }
}

window.addEventListener("hashchange", router);

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  router();
});