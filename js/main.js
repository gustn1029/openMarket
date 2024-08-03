import "../css/style.css";
import { Header } from "./header.js";
import { Join } from "./join.js";
import { Login } from "./login.js";




const router = () => {
  const url = window.location.href.split("#")[1];
  if(!url) {
    document.querySelector("#app").innerHTML = `
    ${Header()}
  `;
  } else if(url === "login") {
    Login();
  } else if(url === "sign-up") {
    Join();
  }
}

window.addEventListener("hashchange", router);

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  router();
});

window.addEventListener("unload",() => {
  localStorage.removeItem("user");
})


