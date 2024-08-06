import { Header } from "../header";
import { root } from "../main";
import CartList from "../cartList.js";
import Details from "../details.js";

const Home = async (content="",id="") => {
    const $main = document.createElement("main");
    $main.classList.add("m-[80px_0_180px]")
    if(content ==="") {
        $main.appendChild(await CartList());
    } else if (content ==="details") {
        $main.appendChild(await Details(id));
    }
    root.innerHTML = "";
    root.appendChild(Header());
    root.appendChild($main);

    return root;
}

export default Home;