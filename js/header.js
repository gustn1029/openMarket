export const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let listArr = [];
  const myPageChildren = [
    {
      href: '#my-page',
      text: "마이페이지",
    },
    {
      href: "#logout",
      text: "로그아웃",
    },
  ];

  const dependentItem = {
    href: user ? `#` : "#login",
    text: user ? "마이페이지" : "로그인",
    imageUrl: "/images/icon-user.svg",
    children: user ? myPageChildren:[],
  };

  const buyerListItem = [
    {
      href: "#cart",
      text: "장바구니",
      imageUrl: "/images/icon-shopping-cart.svg",
    },
  ];

  const sellerListItem = [
    {
      href: "#seller-center",
      text: "판매자 센터",
      imageUrl: "/images/icon-shopping-bag.svg",
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
    <header class="">
        <section class="inner flex w-full bg-white py-[20px]">
            <div class="flex items-center grow gap-[30px]">
                <a href="/openMarket">
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
                      itemPublish = `<a href="${el.href}" class="block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px]" style="background: url('/openMarket${el.imageUrl}') no-repeat 20px center; background-color: #21BF48;">${el.text}</a>`;
                    } else {
                      itemPublish = `<a href="${el.href}" class="block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]" style="background: url('/openMarket${el.imageUrl}') no-repeat center top">${el.text}</a>`;
                    }

                    if(el.children && el.children.length > 0) {
                      itemPublish += `
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${el.children.map((item) => {
                              return `<li class="relative z-[1]">
                                <a href="${item.href}" class="block text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${item.text}</a>
                              </li>`
                            }).join("")}
                        </ul>
                      `
                    }
                    return `
                              <li class="relative group/item">
                                ${itemPublish}
                              </li>`;
                  })
                  .join("")}
                </ul>
            </nav>
        </section>
    </header>
    `;

  return $header;
};
