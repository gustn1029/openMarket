export const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let listArr = [];

  const dependentItem = {
    href: user ? "#my-page" : "#login",
    text: user ? "마이페이지" : "로그인",
    imageUrl: "/images/icon-user.svg",
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

  if(user && user.user_type === "SELLER") {
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
                <span class="hidden">검색어 입력</span>
                    <input type="text" placeholder="상품을 검색해보세요!" class="leading-[20px] flex-1 outline-none" id="search-input" />
                    <button type="button" class="w-[28px] h-[28px] bg-[url('/images/icon-search.svg')] bg-no-repeat bg-cover indent-[-9999px]">검색</button>
                </label>
            </div>
            <nav>
            <ul class="flex items-center">
                ${
                  listArr.map((el) => {
                          let itemPublish = "";
                          if (el.text === "판매자 센터") {
                            itemPublish = `<a href="${el.href}" class="block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px]" style="background: url('/openMarket${el.imageUrl}') no-repeat 20px center; background-color: #21BF48;">${el.text}</a>`
                          } else {
                            itemPublish = `<a href="${el.href}" class="block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]" style="background: url('/openMarket${el.imageUrl}') no-repeat center top">${el.text}</a>`;
                          }
                          return `
                              <li class="">
                                ${itemPublish}
                              </li>`;
                        })
                        .join("")
                }
                </ul>
            </nav>
        </section>
    </header>
    `;

  return $header;
};
