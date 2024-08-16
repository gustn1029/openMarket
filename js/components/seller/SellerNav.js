const navItem = (href, text) => {
    const navItem = `
        <li class="seller__nav__item">
            <a href="#${href}">${text}</a>
        </li>
    `;

    return navItem;
}

const template = () => {
    const itemData = [
        {
            href: "",
            text: "판매중인 상품"
        },
        {
            href: "",
            text: "주문/배송"
        },
        {
            href: "",
            text: "문의/리뷰"
        },
        {
            href: "",
            text: "통계"
        },
        {
            href: "",
            text: "스토어 설정"
        },
    ];
    const nav = `
                <ul class="seller__nav__list">
                    ${itemData.map((el)=> navItem(el.href, el.text)).join("")}
                </ul>
    `
    
    return nav
}

const SellerNav = () => {
    const temp = template();
    const nav = document.createElement("nav");
    nav.classList.add("seller__nav");
    nav.insertAdjacentHTML("beforeend", temp);
  return nav;
}

export default SellerNav;