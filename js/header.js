import Modal from "./components/modal/Modal";
import { root } from "./main";

const user = JSON.parse(localStorage.getItem("user"));
const template = () => {
  let listArr = [];
  const myPageChildren = [
    {
      href: "#my-page",
      text: "마이페이지",
      class: "myPage",
    },
    {
      href: "#logout",
      text: "로그아웃",
      class: "logout",
    },
  ];

  const dependentItem = {
    href: user ? `#` : "#login",
    text: user ? "마이페이지" : "로그인",
    class: user ? `myPage` : "login",
    children: user ? myPageChildren : [],
  };

  const buyerListItem = [
    {
      href: "#cart",
      text: "장바구니",
      class: "cart",
    },
  ];

  const sellerListItem = [
    {
      href: "#seller-center",
      text: "판매자 센터",
    },
  ];

  buyerListItem.push(dependentItem);
  sellerListItem.unshift(dependentItem);

  if (user && user.user_type === "SELLER") {
    listArr = sellerListItem;
  } else {
    listArr = buyerListItem;
  }
  const $header = `
        <section class="inner flex w-full bg-white py-[20px]">
            <div class="flex items-center grow gap-[30px]">
                <a href="/openMarket/">
                    <h1 class="w-[124px] h-[38px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-cover">호두 오픈마켓</h1>
                </a>
                <label for="search-input" class="max-w-[400px] w-full flex items-center px-[22px] py-[9px] rounded-[50px] border-[2px] border-[#21BF48]">
                <span class="tag__hidden">검색어 입력</span>
                    <input type="text" placeholder="상품을 검색해보세요!" class="leading-[20px] flex-1 outline-none" id="search-input" />
                    <button type="button" class="w-[28px] h-[28px] bg-[url('/images/icon-search.svg')] bg-no-repeat bg-cover indent-[-9999px]">검색</button>
                </label>
            </div>
            <nav>
            <ul class="flex items-center nav__list">
                ${listArr
                  .map((el) => {
                    let itemPublish = "";
                    if (el.text === "판매자 센터") {
                      itemPublish = `<a href="${el.href}" class="seller block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat bg-top">${el.text}</a>`;
                    } else {
                      // bg 이미지는 hover 처리를 위해 style.css로 처리
                      itemPublish = `<a href="${el.href}" class="nav__list__item ${el.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px] hover:text-[#21BF48]">${el.text}</a>`;
                    }

                    if (el.children && el.children.length > 0) {
                      itemPublish += `
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${el.children
                            .map((item) => {
                              return `<li class="relative z-[1]">
                                <a href="${item.href}" class="block ${item.class} text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${item.text}</a>
                              </li>`;
                            })
                            .join("")}
                        </ul>
                      `;
                    }
                    return `
                              <li class="relative nav__list__item bg-no-repeat bg-top group/item">
                                ${itemPublish}
                              </li>`;
                  })
                  .join("")}
                </ul>
            </nav>
        </section>
    `;

  return $header;
};

export const Header = () => {
  const header = document.createElement("header");
  const headerTemp = template();
  let modal = null;
  header.id = "header";
  header.insertAdjacentHTML("beforeend", headerTemp);

  const cartBtn = header.querySelector(".cart");

  const ModalCloseHandler = (e) => {
    e.preventDefault();
    modal && modal.remove();
  };

  const ModalEventHandler = (e) => {
    e.preventDefault();
    window.location.hash = "login";
    localStorage.setItem("beforePage", window.location.hash);
  };

  header.addEventListener("click", (e) => {
    if (e.target.classList.contains("logout")) {
      e.preventDefault();
      localStorage.setItem("beforePage", window.location.hash);
      window.location.hash = "logout";
    }
  });
  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (user) {
      window.location.hash = "cart";
    } else {
      modal = Modal(
        `로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?`,
        ModalEventHandler,
        ModalCloseHandler
      );
      root.appendChild(modal);
    }
  });

  const myPage = header.querySelector(".myPage");
  if (myPage) {
    myPage.addEventListener("click", (e) => e.preventDefault());
  }

  return header;
};
