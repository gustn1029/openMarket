const navItem = (href, text, isSeleted) => {
    const navItem = `
        <li class="seller__nav__item">
            <a href="#${href}" class="block leading-[20px] p-[20px_15px] hover:bg-[#EFFFF3] rounded-[5px] ${isSeleted ? "text-white bg-[#21BF48]":""}">${text}</a>
        </li>
    `;

    return navItem;
}

const template = (hash = "") => {
    const itemData = [
        {
            href: "seller-center",
            text: "판매중인 상품"
        },
        {
            href: "seller-center/order",
            text: "주문/배송"
        },
        {
            href: "seller-center/review",
            text: "문의/리뷰"
        },
        {
            href: "seller-center/chart",
            text: "통계"
        },
        {
            href: "seller-center/setting",
            text: "스토어 설정"
        },
    ];
    const nav = `
                <ul class="seller__nav__list grid gap-[10px] max-h-[calc(100vh-220px)]">
                    ${itemData.map((el)=> navItem(el.href, el.text, hash === el.href)).join("")}
                </ul>
    `
    
    return nav
}

const SellerNav = (hash) => {
    const temp = template(hash);
    const nav = document.createElement("nav");
    nav.classList.add("seller__nav");
    nav.insertAdjacentHTML("beforeend", temp);
  return nav;
}

export default SellerNav;