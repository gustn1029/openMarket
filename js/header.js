export const Header = () => {
  const user = localStorage.getItem("user");
  const listItem = [
    {
      href: "#cart",
      text: "장바구니",
      imageUrl: "/images/icon-shopping-cart.svg",
    },
    {
      href: user ? "#my-page" : "#login",
      text: user ? "마이페이지" : "로그인",
      imageUrl: "/images/icon-user.svg",
    },
  ];
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
            <ul class="w-[128px] flex">
                ${listItem
                  .map(
                    (el) =>
                      `<li class="w-1/2 text-center">
                        <a href="${el.href}" class="block leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]" style="background: url('/openMarket${el.imageUrl}') no-repeat center top">${el.text}</a>
                    </li>`
                  )
                  .join("")}
                </ul>
            </nav>
        </section>
    </header>
    `;

  return $header;
};
