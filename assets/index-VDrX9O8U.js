(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const R=(e,t,n)=>{const o=document.createElement("div");o.classList.add("modal");const s=`
        <button type="button" class="close__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        <p class="text-center mb-[30px]">${e}</p>
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">아니오</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">예</button>
        </div>
    `;o.insertAdjacentHTML("beforeend",s);const l=o.querySelector(".close__btn"),r=o.querySelector(".close__btn__second"),i=o.querySelector(".event__btn");return l.addEventListener("click",n),r.addEventListener("click",n),i.addEventListener("click",t),o},N=JSON.parse(localStorage.getItem("user")),ee=()=>{let e=[];const n={href:N?"#":"#login",text:N?"마이페이지":"로그인",class:N?"myPage":"login",children:N?[{href:"#my-page",text:"마이페이지",class:"myPage"},{href:"#logout",text:"로그아웃",class:"logout"}]:[]},o=[{href:"#cart",text:"장바구니",class:"cart"}],s=[{href:"#seller-center",text:"판매자 센터"}];return o.push(n),s.unshift(n),N&&N.user_type==="SELLER"?e=s:e=o,`
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
                ${e.map(r=>{let i="";return r.text==="판매자 센터"?i=`<a href="${r.href}" class="seller block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat bg-top">${r.text}</a>`:i=`<a href="${r.href}" class="nav__list__item ${r.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px] hover:text-[#21BF48]">${r.text}</a>`,r.children&&r.children.length>0&&(i+=`
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${r.children.map(x=>`<li class="relative z-[1]">
                                <a href="${x.href}" class="block ${x.class} text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${x.text}</a>
                              </li>`).join("")}
                        </ul>
                      `),`
                              <li class="relative nav__list__item bg-no-repeat bg-top group/item">
                                ${i}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    `},te=()=>{const e=document.createElement("header"),t=ee();let n=null;e.id="header",e.insertAdjacentHTML("beforeend",t);const o=e.querySelector(".cart"),s=i=>{i.preventDefault(),n&&n.remove()},l=i=>{i.preventDefault(),window.location.hash="login",localStorage.setItem("beforePage",window.location.hash)};e.addEventListener("click",i=>{i.target.classList.contains("logout")&&(i.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="logout")}),o.addEventListener("click",i=>{i.preventDefault(),N?window.location.hash="cart":(n=R("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",l,s),j.appendChild(n))});const r=e.querySelector(".myPage");return r&&r.addEventListener("click",i=>i.preventDefault()),e},se=async(e="")=>{try{const t=await fetch(`${q}/products/${e&&`?page=${e}`}`);if(t.ok)return await t.json()}catch(t){console.error(t)}},O=async(e="")=>{const t=await se(e);console.log(t);const o=`
              <section class="grid gap-[50px]">
                ${`<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${t.results.map(r=>`
                            <li class="">
                              <a href="#details/${r.product_id}" class="grid gap-[10px] product__anchor">
                                  <div class="product__img relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${r.image}" alt="${r.product_name}" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${r.store_name}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${r.product_name}
                                  </h3>
                                  <strong class="text-[1.5rem] leading-[1]">${r.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1rem]">원</span></strong>
                                </a>
                              </li>
                        `).join("")}
                  </ul>
              `}
                <div class="text-center">
                    <button class="${t.previous?"prev__btn":"text-[#c4c4c4]"} mr-[20px]" type="button">prev</button>
                    <button class="${t.next?"next__btn":"text-[#c4c4c4]"}" type="button">next</button>
                </div>
              </section>
              `,s=t.previous?t.previous.split("page=")[1]:"",l=t.next?t.next.split("page=")[1]:"";return{template:o,prev:s,next:l}},ne=async()=>{const e=sessionStorage.getItem("page");let t;e===""||e===null?t=await O():t=await O(e);const n=document.createElement("div");let o=0;n.classList.add("inner"),n.insertAdjacentHTML("beforeend",t.template);const s={prev:t.prev?t.prev:"",next:t.next?t.next:1},l=async r=>{o=r;const i=await O(r);n.innerHTML="",n.insertAdjacentHTML("beforeend",i.template),s.prev=i.prev,s.next=i.next,document.documentElement.scrollTop=0};return n.addEventListener("click",async r=>{r.target.classList.contains("prev__btn")&&(r.preventDefault(),l(s.prev)),r.target.classList.contains("next__btn")&&(r.preventDefault(),l(s.next)),(r.target.parentNode.classList.contains("product__anchor")||r.target.parentNode.classList.contains("product__img"))&&sessionStorage.setItem("page",o===0?"":o)}),n},W=[{data:"button-info",text:"버튼",value:""},{data:"review",text:"리뷰",value:""},{data:"qna",text:"Q&A",value:""},{data:"return-info",text:"반품/교환정보",value:""}],re=async(e="")=>{try{const t=await fetch(`${q}/products/${parseInt(e)}/`);if(t.ok)return await t.json()}catch(t){console.error(t)}},ae=async e=>{console.log(e);const t=await re(e);console.log(t);const n="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center";return{detail:`
        <section class="">
            <h2 class="tag__hidden">상품 디테일</h2>
            <section class="flex gap-[50px] mb-[140px]">
                <h3 class="tag__hidden">상품 디테일 정보</h3>
                <div class="max-w-[600px] max-h-[600px] grow">
                <img src="${t.image}" alt="${t.product_name}" class="w-full aspect-square" />
            </div>
            <div class="flex grow flex-col justify-between">
                <div>
                    <p class="mb-[16px] text-[#767676] leading-[1] text-[1.125rem]">
                    ${t.store_name}
                    </p>
                    <h4 class="mb-[20px] text-[1.125rem] leading-[2.25rem]">
                        ${t.product_name}
                    </h4>
                    <strong class="text-[2.25rem] leading-[1]">${t.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1.125rem]">원</span></strong>
                </div>
                <div class="grid gap-[30px] text-[1.125rem]">
                    <p class="pb-[18px] text-[#767676] border-b-2 border-b-[#c4c4c4] ">${t.shipping_method=="PARCEL"?"택배배송":"배달"} / ${t.shipping_fee===0?"무료배송":`배송비: ${t.shipping_fee}원`}</p>
                    <div class="quantity__wrap flex pb-[28px] border-b-2 border-b-[#c4c4c4]">
                        <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${n} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                        <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">${t.stock===0?0:1}</p>
                        <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${n} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
                    </div>
                    <div class="flex w-full justify-between items-center gap-28px">
                        <p>총 상품 금액</p>
                        <div>
                            <p class="relative inline-block translate-y-[-3px] text-[#767676]">
                                총 수량 
                                <em class="total__quantity not-italic text-[#21BF48] font-bold">
                                ${t.stock===0?0:1}
                                </em>
                                개
                            </p>
                            <strong class="ml-[28px] text-[2.25rem] leading-[1] text-[#21BF48]">
                                ${t.stock===0?"매진":`<span class="total__price">${t.price.toLocaleString()}</span><span class="ml-[2px] text-normal font-normal text-[1.125rem]">원</span>`}
                            </strong>
                        </div>
                    </div>
                    <div class="flex gap-[14px]">
                        <button type="button" class="buy__btn flex-[2_3_0%] py-[20px] text-white leading-[20px] bg-[#21BF48] rounded-[5px]">바로 구매</button>
                        <button type="button" class="cart__btn flex-[1_3_0%] py-[20px] text-white leading-[20px] bg-[#767676] rounded-[5px]">장바구니</button>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <h3 class="tag__hidden">상품 부가 정보</h3>
                <ul class="side__info__tab grid grid-cols-4 text-[1.125rem]">
                    ${W.map((s,l)=>(s.value=`${s.text} 정보`,`
                            <li>
                                <button type="button" data-tab="${s.data}" class="detail__tab__btn ${l===0?"active":""} relative w-full leading-[20px] py-[20px]">${s.text}</button>
                            </li>
                        `)).join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `,stock:t.stock,price:t.price,productId:t.product_id}},oe=async e=>{const t=JSON.parse(localStorage.getItem("user")),n=await ae(e),o=document.createElement("div");o.classList.add("inner"),o.insertAdjacentHTML("beforeend",n.detail);const s=o.querySelector(".quantity__wrap"),l=o.querySelector(".product__quantity"),r=o.querySelector(".total__quantity"),i=o.querySelector(".total__price"),x=o.querySelector(".buy__btn"),L=o.querySelector(".cart__btn"),p=o.querySelector(".side__info__tab"),c=o.querySelector(".detail__side__infomation");let m=o.querySelector(".side__info__tab button.active");const g=a=>{const v=a.textContent,w=i.textContent.replaceAll(",","");v==="더하기"?n.stock>parseInt(l.textContent)?(l.textContent=++l.textContent,r.textContent=l.textContent,i.textContent=(parseInt(w)+n.price).toLocaleString()):alert(`이 상품은 최대 ${n.stock}까지 구매 가능합니다.`):v==="빼기"&&1<parseInt(l.textContent)&&(l.textContent=--l.textContent,r.textContent=l.textContent,i.textContent=(parseInt(w)-n.price).toLocaleString()),console.log(l.textContent)},k=()=>{let a=null;const v=()=>{a!==null&&a.remove()},w=()=>{t?window.location.hash="cart":window.location.hash="login"};if(!t){a=R("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",w,v),j.appendChild(a),localStorage.setItem("beforePage",window.location.hash);return}const h={product_id:n.productId,quantity:parseInt(l.textContent)};fetch(`${q}//cart/`,{method:"POST",headers:{Authorization:`JWT ${t.token}`,"Content-type":"application/json"},body:JSON.stringify(h)}).then(C=>{C.ok&&(alert(`해당 상품이 장바구니에 담겼습니다.
장바구니로 이동합니다.`),window.location.hash="cart")}).catch(C=>console.error(C))},_=(a,v)=>{let w=a.getAttribute("data-tab");v.classList.contains("active")&&v.classList.remove("active"),!a.classList.contains("active")&&a.classList.add("active"),W.forEach(h=>{h.data===w&&(c.innerHTML=h.value)}),m=a};return s.addEventListener("click",a=>{a.target.nodeName==="BUTTON"&&g(a.target)}),x.addEventListener("click",async a=>{a.preventDefault()}),L.addEventListener("click",a=>{a.preventDefault(),k()}),p.addEventListener("click",a=>{a.target.nodeName==="BUTTON"&&(a.preventDefault(),_(a.target,m))}),o},Y=()=>{const e=document.createElement("div");return e.classList.add("loading"),e},ce=async(e="")=>{try{const t=await fetch(`${q}/products/${parseInt(e)}/`);if(t.ok)return await t.json()}catch(t){console.error(t)}},le=async()=>{try{const e=await fetch(`${q}/cart/`,{method:"get",headers:{Authorization:`JWT ${z.token}`}});if(e.ok)return await e.json()}catch(e){console.error(e)}},F=async()=>{const e=await le();console.log(e);const t="px-[10px] py-[20px]",n="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",o=`
                        <tr>
                            <td colspan-"4" class="py-[175px] text-center">
                                <div>
                                    <p class="text-[1.125rem] leading-[20px] mb-[20px]">장바구니에 담긴 상품이 없습니다.</p>
                                    <p class="text-[0.875rem] text-[#767676]">원하는 상품을 장바구니에 담아보세요!</p>
                                </div>
                            </td>
                        </tr>
                      `,s=[{title:"총 상품금액",price:0,className:"total__price"},{title:"상품 할인",price:0,className:"product__discount"},{title:"배송비",price:0,className:"parcel__price"},{title:"결제 예정 금액",price:0,className:"estimated__amount"}];async function l(){const c=[];for(const m of e.results){const g=await ce(m.product_id),k={...m,image:g.image,product_name:g.product_name,store_name:g.store_name,price:g.price,shipping_fee:g.shipping_fee,shipping_method:g.shipping_method,stock:g.stock};c.push(k)}return c}const i=(await l()).map(c=>{const m=c.quantity===0?"매진":`${(c.price*c.quantity+c.shipping_fee).toLocaleString()}원`;return`<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="${c.cart_item_id}">
                <input type="checkbox" class="item__checkbox" value="${c.cart_item_id}" id="${c.cart_item_id}" />
            </label>
        </td>
        <td class="${t} flex-[2_4_0%]">
            <a href="/openMarket/#details/${c.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img src="${c.image}" alt="${c.product_name}" class="w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="text-[#767676] leading-[1] text-[0.875rem]">
                            ${c.store_name}
                            </p>
                            <h4 class="text-[1.125rem] leading-[2.25rem]">
                                ${c.product_name}
                            </h4>
                            <strong class="text-[1rem] leading-[1]">${c.price.toLocaleString()}원</strong>
                        </div>
                        <p class="shipping__${c.cart_item_id} pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">${c.shipping_method==="PARCEL"?"택배배송":"배달"} / ${c.shipping_fee===0?"무료배송":`배송비: ${c.shipping_fee.toLocaleString()}원`}</p>
                    </div>
                </section>
            </a>
        </td>
        <td class="${t} flex-[1_4_0%]">
            <div class="quantity__wrap flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${n} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${c.stock}">${c.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${n} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${t} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757] totalPrice__${c.cart_item_id}">${m}</strong>
            <button class="buy__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
             <button type="button" data-cartId="${c.cart_item_id}" class="delete__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">삭제</button>
        </td>
    </tr>`}),x=`
    <section>
        <h2 class="mb-[52px] text-[2.25rem] leading-[2.75rem] font-bold text-center">장바구니</h2>
        <table class="w-full grid mb-[40px]">
            <thead class=" mb-[35px] text-center rounded-[10px] bg-[#f2f2f2] py-[18px]">
                <tr class="flex items-center">
                    <th class="px-[30px] text-left">
                        <label class="cart__item__label" for="check__all">
                            <input type="checkbox" id="check__all" value="check__all" />
                        </label>
                    </th>
                    <th class="flex-[2_4_0%]">상품정보</th>
                    <th class="flex-[1_4_0%]">수량</th>
                    <th class="flex-[1_4_0%]">상품금액</th>
                </tr>
            </thead>
            <tbody class="grid gap-[10px] mb-[80px]">
            ${e.results.length>0?i.join(""):o}
            </tbody>
            <tfoot>
                <tr class="block">
                    <td colspan="4" class="flex w-full pt-[46px] pb-[34px] text-center bg-[#F2F2F2] rounded-[10px]">
                    ${s.map((c,m)=>`
                            <div class="w-[25%] relative">
                                <strong class="block mb-[12px] ${m===s.length-1?"font-bold":"font-normal"} leading-[20px]">
                                    ${c.title}
                                </strong>
                                <p class="leading-[45px] ${m===s.length-1?"text-[2.25rem] text-[#EB5757]":"text-[1.5rem]"}">
                                    <em class="${c.className} font-bold">
                                        ${c.price}
                                    </em>
                                    <span class="${m===s.length-1?"text-[1.125rem]":"text-[1rem]"}">원</span>
                                </p>
                            </div>
                            `).join("")}
                    </td>
                </tr>
            </tfoot>
        </table>
        <button class="block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `,L=e.previous?e.previous.split("page=")[1]:"",p=e.next?e.next.split("page=")[1]:"";return{template:x,prev:L,next:p}},ie=async()=>{const e=document.createElement("div");let t=await F(),n=null,o=null,s=new Set;e.classList.add("inner"),e.insertAdjacentHTML("beforeend",t.template);const l={prev:t.prev?t.prev:"",next:t.next?t.next:1},r=async p=>{currentPage=p;const c=await F();e.innerHTML="",e.insertAdjacentHTML("beforeend",c.template),l.prev=c.prev,l.next=c.next,document.documentElement.scrollTop=0},i=p=>{const c=e.querySelector(".estimated__amount"),m=e.querySelector(".parcel__price"),g=e.querySelector(".total__price"),k=e.querySelectorAll(".item__checkbox"),_=e.querySelector("#check__all");let a=0,v=0;if(p.value==="check__all")k.forEach(h=>{const E=h.value;!s.has(E)&&p.checked===!0?s.add(E):p.checked===!1&&s.clear(),h.checked=p.checked});else{const h=p.value;p.checked===!0?s.add(h):s.delete(h)}const w=Array.from(s).reduce((h,E)=>{const C=e.querySelector(`.totalPrice__${E}`),P=e.querySelector(`.shipping__${E}`).textContent.trim().split("배송비:")[1],D=P?P.replace(/[,\s원]/g,""):0,T=parseInt(C.textContent.replace(/[,\s원]/g,"")),B=parseInt(D);return console.log(B),a+=B,console.log(a),v+=T-B,h+T},0);m.textContent=a.toLocaleString(),c.textContent=w.toLocaleString(),g.textContent=v.toLocaleString(),_.checked=k.length===s.size},x=()=>{n!==null&&n.remove()},L=()=>{const p=Y();e.appendChild(p),fetch(`${q}/cart/${o}`,{method:"DELETE",headers:{Authorization:`JWT ${z.token}`}}).then(async m=>{if(m.ok){x(),alert("해당 상품이 삭제되었습니다.");const g=await F();e.innerHTML="",e.insertAdjacentHTML("beforeend",g.template)}}).catch(m=>console.error(m)).finally(()=>{p.remove()})};return e.addEventListener("click",async p=>{p.target.classList.contains("prev__btn")&&(p.preventDefault(),r(l.prev)),p.target.classList.contains("next__btn")&&(p.preventDefault(),r(l.next)),p.target.nodeName==="INPUT"&&i(p.target),p.target.classList.contains("delete__btn")&&(o=p.target.getAttribute("data-cartId"),n=R("상품을 삭제하시겠습니까?",L,x),j.appendChild(n))}),e},J=async(e="",t="")=>{const n=document.createElement("main"),o=Y();return j.appendChild(o),n.classList.add("m-[80px_0_180px]"),e===""?n.appendChild(await ne()):e==="details"?n.appendChild(await oe(t)):e==="cart"&&n.appendChild(await ie()),j.innerHTML="",j.appendChild(te()),j.appendChild(n),o.remove(),j},H=(e,t,n="text",o="")=>`
      <label for="${e}" class="${o} relative">
          <span>${t}</span>
          <input class="join__input" type="${n}" id="${e}" required />
      </label>
    `,f=(e,t=!0)=>`<p class="error__message ${t?"text-[#eb5757]":"text-[#21BF48]"}">${e}</p>`,de=()=>{const e=["010","011","016","017","018","019"];return`
            <header class="pt-[100px] text-center mb-[70px]">
                <a href="/openMarket/" class="inline-block">
                    <h1 class="w-[238px] h-[74px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-contain">호두 오픈마켓</h1>
                </a>
            </header>
            <form class="user__form max-w-[550px] w-full m-auto pb-[100px]">
                <h2 class="tag__hidden">회원가입 폼</h2>
                <ul class="user__btn__list">
                  <li>
                      <button type="button" class="customer active">구매회원 로그인</button>
                  </li>
                  <li>
                      <button type="button" class="seller">판매회원 로그인</button>
                  </li>
                </ul>
                <section class="user__section relative z-[1] customer grid gap-[12px] mb-[14px]">
                    <div class="flex items-end gap-[12px]">
                        ${H("userId","아이디","text","flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${H("userPassword","비밀번호","password")}
                    ${H("userPassword-check","비밀번호 재확인","password")}
                    ${H("userName","이름")}
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code"></p>
                            <ul class="select__list">${e.map(n=>`<li class="select__option" data-value="${n}">${n}</li>`).join("")}</ul>
                        </div>
                        <label class="tag__hidden">휴대폰 가운데 3~4자리 번호 입력</label>
                        <input class="join__input" type="text" id="userPhoneNumber-middle" maxlength="4" required />
                        <label class="tag__hidden">휴대폰 마지막 4자리 번호 입력</label>
                        <input class="join__input" type="text" id="userPhoneNumber-last" maxlength="4" required />
                    </div>
                </section>
                <div class="sign__up px-[35px] grid place-items-center gap-[34px]">
                    <label class="join__checkbox" for="join__checkbox">
                        <input type="checkbox" id="join__checkbox" />
                        <p>호두샵의 <em>이용약관</em> 및 <em>개인정보처리방침</em>에 대한 내용을 확인하였고 동의합니다.</p>
                    </label>
                    <button class="btn join__btn" type="submit">가입하기</button>
                </div>
            </form>
        `},pe=()=>{const e=document.getElementById("app");e.innerHTML=de(),JSON.parse(localStorage.getItem("user"));let t="BUYER";const n=document.querySelector("button.customer"),o=document.querySelector("button.seller"),s=document.getElementById("userId"),l=document.querySelector(".id__check__btn"),r=document.getElementById("userPassword"),i=document.getElementById("userPassword-check"),x=document.getElementById("userName"),L=document.querySelector(".selected__code"),p=document.querySelector(".select__list"),c=document.getElementById("userPhoneNumber-middle"),m=document.getElementById("userPhoneNumber-last");document.getElementById("userStoreName");const g=document.getElementById("join__checkbox"),k=document.querySelector(".join__btn"),_=document.querySelector(".user__section");let a=null,v=null,w,h=!1,E,C="";const A=(d,b,u)=>{b.classList.remove("active"),!d.classList.contains("active")&&d.classList.add("active"),_.classList.remove(t.toLowerCase()),_.classList.add(u.toLowerCase()),t=u,s.value="",r.value="",a!==null&&a.remove(),a=null},P=(d,b,u)=>{A(d,b,u);let $=document.createElement("div"),I=`
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${H("userBusinessNumber","사업자 등록번호","number","flex-1")}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${H("userStoreName","스토어 이름")}
    `;$.classList.add("user__seller__form__add__wrap"),$.insertAdjacentHTML("beforeend",I),_.appendChild($),v=document.querySelector(".user__seller__form__add__wrap")},D=()=>{let d={};a!==null&&a.remove(),fetch(`${q}/accounts/signup/valid/username/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({username:s.value})}).then(async u=>{const $=await u.json();return u.ok?(d={error:!1,text:$.Success},s.classList.contains("error")&&s.classList.remove("error"),E=s.value,w=!0):(d={error:!0,text:$.FAIL_Message},s.value="",s.focus(),!s.classList.contains("error")&&s.classList.add("error"),w=!1),d}).then(u=>{const $=s.value;/^[a-zA-Z0-9]{0,20}$/.test($)?(s.classList.contains("error")&&s.classList.remove("error"),l.parentNode.insertAdjacentHTML("afterend",f(u.text,u.error))):(!s.classList.contains("error")&&s.classList.add("error"),l.parentNode.insertAdjacentHTML("afterend",f("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.")),a=document.querySelector(".error__message")),a=document.querySelector(".error__message")}).catch(u=>{console.error(u)})},T=()=>{const d=r.value,b=/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]?)[a-zA-Z\d\W_]{8,}$/;console.log(!b.test(d)),a!==null&&a.remove(),b.test(d)?(r.classList.contains("error")&&r.classList.remove("error"),!r.classList.contains("check")&&r.classList.add("check")):(r.parentNode.insertAdjacentHTML("afterend",f("8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.")),!r.classList.contains("error")&&r.classList.add("error"),r.classList.contains("check")&&r.classList.remove("chcek"),a=document.querySelector(".error__message"),r.focus())},B=()=>{const d=r.value,b=i.value;a!==null&&a.remove(),d!==b?(!i.classList.contains("error")&&i.classList.add("error"),i.classList.contains("check")&&i.classList.remove("check"),i.insertAdjacentHTML("afterend",f("비밀번호가 일치하지 않습니다.")),i.focus(),a=document.querySelector(".error__message")):(i.classList.contains("error")&&i.classList.remove("error"),!i.classList.contains("check")&&i.classList.add("check"))},Q=d=>{const b=d.getAttribute("data-value");b&&(L.textContent=b,p.parentNode.classList.remove("view"))},Z=()=>{a!==null&&a.remove();let d={};const b=/[0-9]{10}/,u=_.querySelector("#userBusinessNumber"),$=u.value;if(!b.test($)){u.parentNode.parentNode.insertAdjacentHTML("afterend",f("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")),a=document.querySelector(".error__message");return}fetch(`${q}/accounts/signup/valid/company_registration_number/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({company_registration_number:u.value})}).then(async S=>{const M=await S.json();return S.ok?(d={error:!1,text:M.Success},u.classList.contains("error")&&u.classList.remove("error"),C=u.value,h=!0):(d={error:!0,text:M.FAIL_Message},u.value="",u.focus(),!u.classList.contains("error")&&u.classList.add("error"),h=!1),d}).then(S=>{u.classList.contains("error")&&u.classList.remove("error"),u.parentNode.parentNode.insertAdjacentHTML("afterend",f(S.text,S.error)),a=document.querySelector(".error__message")}).catch(S=>{console.error(S)})},K=async d=>{let b={};const u=s.value,$=r.value,I=i.value,S=x.value,M=`${L.textContent}${c.value}${m.value}`,G=/^1[0-9]{8,9}$/;if(a!==null&&a.remove(),!w){l.parentNode.insertAdjacentHTML("afterend",f("아이디 중복 확인이 필요합니다.")),!s.classList.contains("error")&&s.classList.add("error"),a=document.querySelector(".error__message");return}if(E!==s.value){l.parentNode.insertAdjacentHTML("afterend",f("중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다.")),!s.classList.contains("error")&&s.classList.add("error"),a=document.querySelector(".error__message"),w=!1;return}if(!G.test(parseInt(M))){m.parentNode.insertAdjacentHTML("afterend",f("핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다.")),a=document.querySelector(".error__message");return}if(!g.checked){g.parentNode.insertAdjacentHTML("afterend",f("약관에 동의해야 회원 가입이 가능합니다.")),a=document.querySelector(".error__message");return}if(d==="BUYER")b={username:u,password:$,password2:I,phone_number:M,name:S};else{const y=_.querySelector("#userBusinessNumber").value,X=_.querySelector("#userStoreName").value;if(!h){userBusinessNumber.parentNode.parentNode.insertAdjacentHTML("afterend",f("사업자등록번호 인증이 필요합니다."));return}if(y!==C){y.parentNode.parentNode.insertAdjacentHTML("afterend",f("인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다.")),!y.classList.contains("error")&&y.classList.add("error"),a=document.querySelector(".error__message"),h=!1;return}b={username:u,password:$,password2:I,phone_number:M,name:S,company_registration_number:y,store_name:X}}console.log(b);const U=await fetch(`${q}/accounts//${t==="BUYER"?"signup/":"signup_seller/"}`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(b)});if(U.ok)alert("회원가입이 정상적으로 처리됐습니다."),window.location.href="/openMarket/#login";else{const y=await U.json();(y==null?void 0:y.phone_number)!==void 0?(m.parentNode.insertAdjacentHTML("afterend",f(y.phone_number.join(""))),a=document.querySelector(".error__message")):(y==null?void 0:y.store_name)!==void 0&&(_.querySelector("#userStoreName").parentNode.insertAdjacentHTML("afterend",f(y.store_name.join(""))),a=document.querySelector(".error__message"))}};n.addEventListener("click",d=>{d.preventDefault(),v!==null&&v.remove(),A(n,o,"BUYER")}),o.addEventListener("click",d=>{d.preventDefault(),P(o,n,"SELLER")}),l.addEventListener("click",d=>{d.preventDefault(),D()}),r.addEventListener("change",T),i.addEventListener("change",B),L.addEventListener("click",()=>L.parentNode.classList.toggle("view")),p.addEventListener("click",d=>{Q(d.target)}),_.addEventListener("click",async d=>{d.preventDefault(),d.target.classList.contains("busness__number__check__btn")&&await Z()}),k.addEventListener("click",async d=>{d.preventDefault(),await K(t)})},ue=()=>`
          <header class="pt-[100px] text-center mb-[70px]">
              <a href="/openMarket/" class="inline-block">
                  <h1 class="w-[238px] h-[74px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-contain">호두 오픈마켓</h1>
              </a>
          </header>
          <form class="user__form max-w-[550px] w-full m-auto ">
              <h2 class="tag__hidden">로그인 폼</h2>
              <ul class="user__btn__list">
                <li>
                    <button type="button" class="customer active" data-type="BUYER">구매회원 로그인</button>
                </li>
                <li>
                    <button type="button" class="seller" data-type="SELLER">판매회원 로그인</button>
                </li>
              </ul>
              <section class="user__section customer mb-[30px]">
                  <label for="userId" class="tag__hidden">아이디 입력</label>
                  <input type="text" class="login__input" placeholder="아이디" id="userId" required />
                  <label for="userPassword" class="tag__hidden">비밀번호 입력</label>
                  <input type="password" class="login__input"  placeholder="비밀번호" id="userPassword" required />
                  <button class="btn btn__green mt-[18px]" type="submit">로그인</button>
              </section>
            </form>
            <div class="sign__up">
              <a href="#sign-up">회원가입</a>
              <a href="#login">비밀번호 찾기</a>
            </div>
      `,me=()=>{const e=document.getElementById("app");e.innerHTML=ue();let t="BUYER";const n=document.querySelector("button.customer"),o=document.querySelector("button.seller"),s=document.querySelector(".user__form"),l=document.querySelector(".user__section"),r=document.getElementById("userId"),i=document.getElementById("userPassword");let x=null;const L=(c,m)=>{const g=m.getAttribute("data-type").toLowerCase(),k=c.getAttribute("data-type");m.classList.remove("active"),!c.classList.contains("active")&&c.classList.add("active"),l.classList.remove(g),l.classList.add(k.toLowerCase()),t=k,r.value="",i.value="",x!==null&&x.remove(),x=null},p=()=>{x!==null&&x.remove();const c=r.value,m=i.value,g={username:c,password:m,login_type:t};fetch(`${q}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(_=>{if(_.ok)return _.json();i.insertAdjacentHTML("afterend",f("아이디 또는 비밀번호가 일치하지 않습니다.")),x=document.querySelector(".error__message")}).then(_=>{const a={user_type:_.user_type,token:_.token,cart:[]};localStorage.setItem("user",JSON.stringify(a))}).then(()=>{const _=localStorage.getItem("beforePage");window.location.href=`/openMarket/${_||""}`,window.location.reload(),localStorage.removeItem("beforePage")})};n.addEventListener("click",c=>{c.preventDefault(),L(n,o)}),o.addEventListener("click",c=>{c.preventDefault(),L(o,n)}),s.addEventListener("submit",c=>{c.preventDefault(),p()})},_e=()=>{localStorage.removeItem("user");const e=localStorage.getItem("beforePage");window.location.href=`/openMarket/${e||""}`,window.location.reload(),localStorage.removeItem("beforePage")},q="https://openmarket.weniv.co.kr",j=document.getElementById("app"),z=JSON.parse(localStorage.getItem("user")),V=async()=>{const e=window.location.hash.slice(1);if(j.innerHTML="",!e)await J();else if(!z)e==="login"?me():e==="sign-up"&&pe();else if(e==="logout")_e();else if(e.includes("details")){const[t,n]=e.split("/");await J(t,n)}else e==="cart"?await J("cart"):window.location.href="/openMarket/"};window.addEventListener("hashchange",V);window.addEventListener("DOMContentLoaded",V);
