const template = () => {
  const termsList = [
    {
      text: "호두샵 소개",
      href: "#",
    },
    {
      text: "이용약관",
      href: "#",
    },
    {
      text: "개인정보처리방침",
      href: "#",
    },
    {
      text: "전자금융거래약관",
      href: "#",
    },
    {
      text: "청소년보호정책",
      href: "#",
    },
    {
      text: "제휴문의",
      href: "#",
    },
  ];

  const snsList = [
    {
      text: "호두샵 인스타그램",
      href: "#",
      image_url: "/openMarket/images/icon-insta.svg",
    },
    {
      text: "호두샵 페이스북",
      href: "#",
      image_url: "/openMarket/images/icon-fb.svg",
    },
    {
      text: "호두샵 유튜브",
      href: "#",
      image_url: "/openMarket/images/icon-yt.svg",
    },
  ];
  const temp = `
        <div class="inner">
            <section class="mb-[30px] flex justify-between items-center pb-[22px] border-b border-b-[#c4c4c4]">
                <h2 class="tag__hidden">호두샵 약관 관련 리스트 및 sns 리스트</h2>
                <ul class="terms__list flex gap-[32px]">
                    ${termsList
                      .map((el) => {
                        return `
                                <li class="text-[0.875rem] ${el.text === "개인정보처리방침" ? "font-bold":""}">
                                    <a href="${el.href}">${el.text}</a>
                                </li>
                                `;
                      })
                      .join("")}
                </ul>
                <ul class="flex gap-[14px]">
                    ${snsList
                      .map((el) => {
                        return `
                                <li>
                                    <a href="${el.href}" class="block indent-[-9999px] w-[32px] h-[32px]" style="background:url('${el.image_url}') no-repeat center center;">${el.text}</a>
                                </li>
                                `;
                      })
                      .join("")}
                </ul>
            </section>
            <section>
                <h2 class="tag__hidden">호두샵 회사 정보</h2>
                <ul class="text-[0.875rem] text-[#767676]">
                    <li class="leading-[24px] sans-light">
                        <h3 class="font-bold">(주)HODU SHOP</h3>
                    </li>
                    <li class="leading-[24px] sans-light">
                        <address class="">
                            제주특별자치도 제주시 동광고 137 제주코딩베이스캠프
                        </address>
                    </li>
                    <li class="leading-[24px] sans-light">
                        <p>(주)사업자 번호 : 000-0000-0000 | 통신판매업</p>
                    </li>
                    <li class="leading-[24px] sans-light">
                        <p>대표 : 김호두</p>
                    </li>
                </ul>
            </section>
        </div>
    `;
    
    

  return temp;
};

/**
 * #footer, tag::before는 style.css에서 처리
 */
const Footer = () => {
  const footer = document.createElement("footer");
  footer.insertAdjacentHTML("beforeend", template());
  footer.id = "footer";
  return footer;
};

export default Footer;
