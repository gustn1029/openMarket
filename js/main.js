import "../css/style.css";
import { header } from "./header.js";


document.querySelector("#app").innerHTML = `
  ${header()}
`;
