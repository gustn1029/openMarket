(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const V=(e,t,a,l="text")=>{const n=document.createElement("div");n.classList.add("modal");const i=`
        <button type="button" class="close__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        ${l==="text"?`<p class="text-center mb-[30px]">${e}</p>`:`<div class="text-center mb-[30px]">${e}</div>`}
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">${l==="text"?"아니오":"취소"}</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">${l==="text"?"예":"수정"}</button>
        </div>
    `;n.insertAdjacentHTML("beforeend",i);const s=n.querySelector(".close__btn"),r=n.querySelector(".close__btn__second"),b=n.querySelector(".event__btn");return s.addEventListener("click",a),r.addEventListener("click",a),b.addEventListener("click",t),n},F=JSON.parse(localStorage.getItem("user")),ee=()=>{let e=[];const a={href:F?"#":"#login",text:F?"마이페이지":"로그인",class:F?"myPage":"login",children:F?[{href:"#my-page",text:"마이페이지",class:"myPage"},{href:"#logout",text:"로그아웃",class:"logout"}]:[]},l=[{href:"#cart",text:"장바구니",class:"cart"}],n=[{href:"#seller-center",text:"판매자 센터"}];return l.push(a),n.unshift(a),F&&F.user_type==="SELLER"?e=n:e=l,`
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
                ${e.map(s=>{let r="";return s.text==="판매자 센터"?r=`<a href="${s.href}" class="seller block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat bg-top">${s.text}</a>`:r=`<a href="${s.href}" class="nav__list__item ${s.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px] hover:text-[#21BF48]">${s.text}</a>`,s.children&&s.children.length>0&&(r+=`
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${s.children.map(b=>`<li class="relative z-[1]">
                                <a href="${b.href}" class="block ${b.class} text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${b.text}</a>
                              </li>`).join("")}
                        </ul>
                      `),`
                              <li class="relative nav__list__item bg-no-repeat bg-top group/item">
                                ${r}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    `},te=()=>{const e=document.createElement("header"),t=ee();let a=null;e.id="header",e.insertAdjacentHTML("beforeend",t);const l=e.querySelector(".cart"),n=r=>{r.preventDefault(),a&&a.remove()},i=r=>{r.preventDefault(),window.location.hash="login",localStorage.setItem("beforePage",window.location.hash)};e.addEventListener("click",r=>{r.target.classList.contains("logout")&&(r.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="logout")}),l.addEventListener("click",r=>{r.preventDefault(),F?window.location.hash="cart":(a=V("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",i,n),O.appendChild(a))});const s=e.querySelector(".myPage");return s&&s.addEventListener("click",r=>r.preventDefault()),e},ne=async(e="")=>{try{const t=await fetch(`${I}/products/${e&&`?page=${e}`}`);if(t.ok)return await t.json()}catch(t){console.error(t)}},K=async(e="")=>{const t=await ne(e);console.log(t);const l=`
              <section class="grid gap-[50px]">
                ${`<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${t.results.map(s=>`
                            <li class="">
                              <a href="#details/${s.product_id}" class="grid gap-[10px] product__anchor">
                                  <div class="product__img relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${s.image}" alt="${s.product_name}" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${s.store_name}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${s.product_name}
                                  </h3>
                                  <strong class="text-[1.5rem] leading-[1]">${s.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1rem]">원</span></strong>
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
              `,n=t.previous?t.previous.split("page=")[1]:"",i=t.next?t.next.split("page=")[1]:"";return{template:l,prev:n,next:i}},se=async()=>{const e=sessionStorage.getItem("page");let t;e===""||e===null?t=await K():t=await K(e);const a=document.createElement("div");let l=0;a.classList.add("inner"),a.insertAdjacentHTML("beforeend",t.template);const n={prev:t.prev?t.prev:"",next:t.next?t.next:1},i=async s=>{l=s;const r=await K(s);a.innerHTML="",a.insertAdjacentHTML("beforeend",r.template),n.prev=r.prev,n.next=r.next,document.documentElement.scrollTop=0};return a.addEventListener("click",async s=>{s.target.classList.contains("prev__btn")&&(s.preventDefault(),i(n.prev)),s.target.classList.contains("next__btn")&&(s.preventDefault(),i(n.next)),(s.target.parentNode.classList.contains("product__anchor")||s.target.parentNode.classList.contains("product__img"))&&sessionStorage.setItem("page",l===0?"":l)}),a},Q=[{data:"button-info",text:"버튼",value:""},{data:"review",text:"리뷰",value:""},{data:"qna",text:"Q&A",value:""},{data:"return-info",text:"반품/교환정보",value:""}],re=async(e="")=>{try{const t=await fetch(`${I}/products/${parseInt(e)}/`);if(t.ok)return await t.json()}catch(t){console.error(t)}},ae=async e=>{console.log(e);const t=await re(e);console.log(t);const a="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center";return{detail:`
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
                        <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${a} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                        <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">${t.stock===0?0:1}</p>
                        <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${a} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
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
                    ${Q.map((n,i)=>(n.value=`${n.text} 정보`,`
                            <li>
                                <button type="button" data-tab="${n.data}" class="detail__tab__btn ${i===0?"active":""} relative w-full leading-[20px] py-[20px]">${n.text}</button>
                            </li>
                        `)).join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `,stock:t.stock,price:t.price,productId:t.product_id}},oe=async e=>{const t=JSON.parse(localStorage.getItem("user")),a=await ae(e),l=document.createElement("div");l.classList.add("inner"),l.insertAdjacentHTML("beforeend",a.detail);const n=l.querySelector(".quantity__wrap"),i=l.querySelector(".product__quantity"),s=l.querySelector(".total__quantity"),r=l.querySelector(".total__price"),b=l.querySelector(".buy__btn"),h=l.querySelector(".cart__btn"),P=l.querySelector(".side__info__tab"),o=l.querySelector(".detail__side__infomation");let m=l.querySelector(".side__info__tab button.active");const v=c=>{const C=c.textContent,j=r.textContent.replaceAll(",","");C==="더하기"?a.stock>parseInt(i.textContent)?(i.textContent=++i.textContent,s.textContent=i.textContent,r.textContent=(parseInt(j)+a.price).toLocaleString()):alert(`이 상품은 최대 ${a.stock}까지 구매 가능합니다.`):C==="빼기"&&1<parseInt(i.textContent)&&(i.textContent=--i.textContent,s.textContent=i.textContent,r.textContent=(parseInt(j)-a.price).toLocaleString()),console.log(i.textContent)},M=()=>{let c=null;const C=()=>{c!==null&&c.remove()},j=()=>{t?window.location.hash="cart":window.location.hash="login"};if(!t){c=V("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",j,C),O.appendChild(c),localStorage.setItem("beforePage",window.location.hash);return}const A={product_id:a.productId,quantity:parseInt(i.textContent)};fetch(`${I}//cart/`,{method:"POST",headers:{Authorization:`JWT ${t.token}`,"Content-type":"application/json"},body:JSON.stringify(A)}).then(_=>{_.ok&&(alert(`해당 상품이 장바구니에 담겼습니다.
장바구니로 이동합니다.`),window.location.hash="cart")}).catch(_=>console.error(_))},g=(c,C)=>{let j=c.getAttribute("data-tab");C.classList.contains("active")&&C.classList.remove("active"),!c.classList.contains("active")&&c.classList.add("active"),Q.forEach(A=>{A.data===j&&(o.innerHTML=A.value)}),m=c};return n.addEventListener("click",c=>{c.target.nodeName==="BUTTON"&&v(c.target)}),b.addEventListener("click",async c=>{c.preventDefault()}),h.addEventListener("click",c=>{c.preventDefault(),M()}),P.addEventListener("click",c=>{c.target.nodeName==="BUTTON"&&(c.preventDefault(),g(c.target,m))}),l},Z=()=>{const e=document.createElement("div");return e.classList.add("loading"),e},ce=async(e="")=>{try{const t=await fetch(`${I}/products/${parseInt(e)}/`);if(t.ok)return await t.json()}catch(t){console.error(t)}},le=async()=>{try{const e=await fetch(`${I}/cart/`,{method:"get",headers:{Authorization:`JWT ${z.token}`}});if(e.ok)return await e.json()}catch(e){console.error(e)}},W=async()=>{const e=await le();console.log(e);const t="px-[10px] py-[20px]",a="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",l=`
                        <tr class="block">
                            <td colspan-"4" class="py-[175px] text-center">
                                <div>
                                    <p class="text-[1.125rem] leading-[20px] mb-[20px]">장바구니에 담긴 상품이 없습니다.</p>
                                    <p class="text-[0.875rem] text-[#767676]">원하는 상품을 장바구니에 담아보세요!</p>
                                </div>
                            </td>
                        </tr>
                      `,n=[{title:"총 상품금액",price:0,className:"total__price"},{title:"상품 할인",price:0,className:"product__discount"},{title:"배송비",price:0,className:"parcel__price"},{title:"결제 예정 금액",price:0,className:"estimated__amount"}];async function i(){const o=[];for(const m of e.results){const v=await ce(m.product_id),M={...m,image:v.image,product_name:v.product_name,store_name:v.store_name,price:v.price,shipping_fee:v.shipping_fee,shipping_method:v.shipping_method,stock:v.stock};o.push(M)}return o}const r=(await i()).map(o=>{const m=o.quantity===0?"매진":`${(o.price*o.quantity+o.shipping_fee).toLocaleString()}`;return`<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="checkbox__${o.cart_item_id}">
                <input type="checkbox" class="item__checkbox" value="${o.cart_item_id}" id="checkbox__${o.cart_item_id}" />
            </label>
        </td>
        <td class="${t} flex-[2_4_0%]">
            <a href="/openMarket/#details/${o.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img 
                          src="${o.image}" 
                          alt="${o.product_name}" 
                          class="product__img__${o.cart_item_id} w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" 
                        />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="store__name__${o.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                            ${o.store_name}
                            </p>
                            <h4 class="product__name__${o.cart_item_id} text-[1.125rem] leading-[2.25rem]" data-productId="${o.product_id}" data-active="${o.is_active}">
                                ${o.product_name}
                            </h4>
                            <strong class="product__price__${o.cart_item_id} text-[1rem] leading-[1]">${o.price.toLocaleString()}원</strong>
                        </div>
                        <p class="shipping__${o.cart_item_id} pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">${o.shipping_method==="PARCEL"?"택배배송":"배달"} / ${o.shipping_fee===0?"무료배송":`배송비: ${o.shipping_fee.toLocaleString()}원`}</p>
                    </div>
                </section>
            </a>
        </td>
        <td class="${t} flex-[1_4_0%]">
            <div data-cartId="${o.cart_item_id}" data-productId="${o.product_id}" class="quantity__wrap cursor-pointer flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${a} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity__${o.cart_item_id} w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${o.stock}">${o.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${a} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${t} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757]"><span class="totalPrice__${o.cart_item_id}">${m}</span>원</strong>
            <button type="button" data-cartId="${o.cart_item_id}" data-productId="${o.product_id}" class="item__order__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
             <button type="button" data-cartId="${o.cart_item_id}" class="delete__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">삭제</button>
        </td>
    </tr>`}),b=`
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
            ${e.results.length>0?r.join(""):l}
            </tbody>
            <tfoot>
                <tr class="block">
                    <td colspan="4" class="flex w-full pt-[46px] pb-[34px] text-center bg-[#F2F2F2] rounded-[10px]">
                    ${n.map((o,m)=>`
                            <div class="w-[25%] relative">
                                <strong class="block mb-[12px] ${m===n.length-1?"font-bold":"font-normal"} leading-[20px]">
                                    ${o.title}
                                </strong>
                                <p class="leading-[45px] ${m===n.length-1?"text-[2.25rem] text-[#EB5757]":"text-[1.5rem]"}">
                                    <em class="${o.className} font-bold">
                                        ${o.price}
                                    </em>
                                    <span class="${m===n.length-1?"text-[1.125rem]":"text-[1rem]"}">원</span>
                                </p>
                            </div>
                            `).join("")}
                    </td>
                </tr>
            </tfoot>
        </table>
        <button class="cart__sellect__order__btn block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `,h=e.previous?e.previous.split("page=")[1]:"",P=e.next?e.next.split("page=")[1]:"";return{template:b,prev:h,next:P}},ie=async()=>{const e=document.createElement("div");let t=await W(),a=null,l=null,n=null,i=!1,s=new Set,r="",b=0,h=0,P=0;e.classList.add("inner"),e.insertAdjacentHTML("beforeend",t.template);const o={prev:t.prev?t.prev:"",next:t.next?t.next:1},m=async d=>{currentPage=d;const _=await W();e.innerHTML="",e.insertAdjacentHTML("beforeend",_.template),o.prev=_.prev,o.next=_.next,document.documentElement.scrollTop=0},v=(d,_,$,L)=>{const N=e.querySelectorAll(".item__checkbox"),D=e.querySelector("#check__all");let k=0,H=0;if(d.value==="check__all")N.forEach(T=>{const p=T.value;!s.has(p)&&d.checked===!0?s.add(p):d.checked===!1&&s.clear(),T.checked=d.checked});else{const T=d.value;d.checked===!0?s.add(T):s.delete(T)}const J=Array.from(s).reduce((T,p)=>{const x=e.querySelector(`.totalPrice__${p}`),y=e.querySelector(`.shipping__${p}`).textContent.trim().split("배송비:")[1],E=y?y.replace(/[,\s원]/g,""):0,S=parseInt(x.textContent.replace(/[,\s원]/g,"")),B=parseInt(E);return k+=B,H+=S-B,T+S},0);$.textContent=k.toLocaleString(),_.textContent=J.toLocaleString(),L.textContent=H.toLocaleString(),D.checked=N.length===s.size},M=(d,_,$)=>(_.textContent=h,d.classList.contains("modal__quantity__plus__btn")?$>parseInt(_.textContent)?_.textContent=++h:alert(`이 상품은 최대 ${$}까지 구매 가능합니다.`):d.classList.contains("modal__quantity__minus__btn")&&1<parseInt(_.textContent)&&(_.textContent=--h),h),g=async d=>{let _=new Set,$=0,L="";d?(_.add(d),L="cart_one_order"):(s.forEach(k=>_.add(k)),L="cart_order");const N=[];_.forEach(async k=>{const H=e.querySelector(`.product__name__${k}`),J=H.textContent.trim(),T=H.getAttribute("data-active"),p=H.getAttribute("data-productId"),x=e.querySelector(`.product__img__${k}`).getAttribute("src"),u=e.querySelector(`.product__quantity__${k}`).textContent.trim(),y=e.querySelector(`.store__name__${k}`).textContent.trim(),E=e.querySelector(`.shipping__${k}`).textContent.split(" / "),S=E[0],B=E[1].includes("배송비:")?E[1].replace("배송비: ",""):E[1],R=e.querySelector(`.totalPrice__${k}`),U=R.textContent.replace(/[,\s원]/g,""),w={product_id:p,product_name:J,image:x,quantity:u,store_name:y,shipping_method:S,shipping_fee:B,total_price:R.textContent};T||await fetch(`${I}/${d}`,{method:"PUT",headers:{Authorization:`JWT ${z.token}`,"Content-type":"application/json"},body:JSON.stringify({product_id:parseInt(p),quantity:parseInt(u),is_active:!0})}),$+=parseInt(U),N.push(w)});const D={orderType:L,total:$,products:N};if(N.length===0){alert("구매하실 상품을 선택해주세요.");return}sessionStorage.setItem("order",JSON.stringify(D)),window.location.hash="order"},c=()=>{l!==null&&l.remove(),i=!1},C=()=>{const d=Z();e.appendChild(d);const _={product_id:parseInt(b),quantity:h,is_active:!1};fetch(`${I}/cart/${r}/`,{method:"PUT",headers:{Authorization:`JWT ${z.token}`,"Content-type":"application/json"},body:JSON.stringify(_)}).then(async L=>{if(L.ok){c(),r="",h=0,P=0,b="";const N=await W();e.innerHTML="",e.insertAdjacentHTML("beforeend",N.template)}}).catch(L=>console.error(L)).finally(()=>{d.remove(),i=!1})},j=()=>{const d=Z();e.appendChild(d),fetch(`${I}/cart/${a}`,{method:"DELETE",headers:{Authorization:`JWT ${z.token}`}}).then(async $=>{if($.ok){c(),alert("해당 상품이 삭제되었습니다.");const L=await W();e.innerHTML="",e.insertAdjacentHTML("beforeend",L.template)}}).catch($=>console.error($)).finally(()=>{d.remove()})},A=d=>{var N;const _=e.querySelector(".estimated__amount"),$=e.querySelector(".parcel__price"),L=e.querySelector(".total__price");if(d.target.classList.contains("prev__btn")&&(d.preventDefault(),m(o.prev)),d.target.classList.contains("next__btn")&&(d.preventDefault(),m(o.next)),d.target.parentNode.classList.contains("quantity__wrap")||d.target.parentNode.classList.contains("quantity__modal")){const D="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",k=`
          <div class="quantity__wrap cursor-pointer flex justify-center">
              <button type="button" class="modal__quantity__minus__btn rounded-[5px_0_0_5px] ${D} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
              <p class="modal__product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">0</p>
              <button type="button" class="modal__quantity__plus__btn rounded-[0_5px_5px_0] ${D} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
      `;if(!i){r=d.target.parentNode.getAttribute("data-cartid"),b=d.target.parentNode.getAttribute("data-productId");const H=e.querySelector(`.product__quantity__${r}`);P=H.getAttribute("data-stock"),h=H.textContent,l=V(k,C,c,"cont"),l.classList.add("quantity__modal"),e.appendChild(l),n=e.querySelector(".modal__product__quantity"),i=!0}M(d.target,n,P)}if(d.target.nodeName==="INPUT"&&v(d.target,_,$,L),d.target.classList.contains("delete__btn")&&(a=d.target.getAttribute("data-cartId"),i||(l=V("상품을 삭제하시겠습니까?",j,c),i=!0,O.appendChild(l))),d.target.classList.contains("item__order__btn")||d.target.classList.contains("cart__sellect__order__btn")){d.preventDefault();const D=(N=d.target)==null?void 0:N.getAttribute("data-cartId");g(D)}};return e.addEventListener("click",A),e},f=(e,t,a="text",l="",n="")=>`
      <label for="${e}" class="${n} relative">
          <span>${t}</span>
          <input class="${l}" type="${a}" id="${e}" required />
      </label>
    `,de=()=>{const e=sessionStorage.getItem("order"),t=JSON.parse(e),a=t.products,l=[{text:"신용/체크카드",value:"CARD"},{text:"무통장 입금",value:"DEPOSIT"},{text:"휴대폰 결제",value:"PHONE_PAYMENT"},{text:"네이버페이",value:"NAVERPAY"},{text:"카카오페이",value:"KAKAOPAY"}],n="px-[10px] pt-[8px] pb-[17px] text-center";return`
      <section>
          <h2 class="mb-[52px] text-[2.25rem] leading-[2.75rem] font-bold text-center">주문/결제하기</h2>
          <table class="w-full grid mb-[100px] text-[1.125rem]">
              <thead class=" mb-[16px] text-center rounded-[10px] bg-[#f2f2f2] py-[18px]">
                  <tr class="flex items-center">
                      <th class="px-[10px] flex-[2_5_0%]">상품정보</th>
                      <th class="px-[10px] flex-[1_5_0%]">할인</th>
                      <th class="px-[10px] flex-[1_5_0%]">배송비</th>
                      <th class="px-[10px] flex-[1_5_0%]">상품금액</th>
                  </tr>
              </thead>
              <tbody class="grid gap-[16px] mb-[30px]">
                ${a.map(r=>`<tr class="relative flex items-center border-b border-b-[#c4c4c4]">
          <td class="${n} text-left flex-[2_5_0%]">
              <a href="/openMarket/#details/${r.product_id}">
                  <section class="flex gap-[36px]">
                      <h3 class="tag__hidden">상품 디테일 정보</h3>
                          <img 
                            src="${r.image}" 
                            alt="${r.product_name}" 
                            class="product__img__${r.cart_item_id} w-full aspect-square max-w-[104px] w-full max-h-[104px] rounded-[5px]" 
                          />
                      <div class="flex grow flex-col gap-[6px] justify-center items-start">
                        <p class="store__name__${r.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                        ${r.store_name}
                        </p>
                        <h4 class="product__name__${r.cart_item_id} text-[1.125rem] leading-[2.25rem]">
                            ${r.product_name}
                        </h4>
                        <p class="pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">수량 : ${r.quantity}개</p>
                      </div>
                  </section>
              </a>
          </td>
          <td class="${n} flex-[1_5_0%]">
              -
          </td>
          <td class="${n} flex-[1_5_0%] text-center">
          ${r.shipping_fee}
          </td>
          <td class="${n} font-bold flex-[1_5_0%]">
            ${r.total_price}원
          </td>
      </tr>`).join("")}
              </tbody>
              <tfoot>
                  <tr class="block">
                      <td colspan="4" class="block text-right">
                            <p class="sans-medium">총 주문금액 <em class="ml-[10px] text-[1.5rem] text-[#EB5757] font-bold">${t.total.toLocaleString()}원</em></p>
                      </td>
                  </tr>
              </tfoot>
          </table>
          <form class="w-full text-[1.125rem]">
            <section class="mb-[62px]">
                <h3 class="mb-[40px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">배송정보</h3>
                    <section class="form__wrap mb-[40px]">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">주문자 정보</h4>
                        <div>${f("buyerName","이름","text","order__input","order__label")}</div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${f("buyerPhone__first","휴대폰 첫 번째 3자리 입력","text","order__input","order__label__phone")}
                                    ${f("buyerPhone__middle","휴대폰 중간번호 3~4자리 입력","text","order__input","order__label__phone")}
                                    ${f("buyerPhone__last","휴대폰 마지막 4자리 입력","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${f("buyerEmail","이메일","email","order__input","order__label")}
                        </div>
                    </section>
                    <section class="form__wrap">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">배송지 정보</h4>
                        <div>
                            ${f("recieverName","수령인","text","order__input","order__label")}
                        </div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${f("recieverPhone__first","휴대폰 첫 번째 3자리 입력","text","order__input","order__label__phone")}
                                    ${f("recieverPhone__middle","휴대폰 중간번호 3~4자리 입력","text","order__input","order__label__phone")}
                                    ${f("recieverPhone__last","휴대폰 마지막 4자리 입력","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="order__label__address">
                                <strong>배송주소</strong>
                                <div>
                                    <div class="zipCode__wrap">
                                        ${f("recieverZipCode","우편번호 입력","text","order__input")}
                                        <button class="zipCode__btn">우편번호 검색</button>
                                    </div>
                                    ${f("recieverAddress","주소 입력:","text","order__input")}
                                    ${f("recieverDetailAddress","상세 주소 입력","text","order__input")}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${f("recieverMessage","배송 메시지","text","order__input","order__label__message")}
                        </div>
                    </section>
                </section>
                <section class="flex justify-between">
                    <h3 class="tag__hidden">결제수단 및 최종 결제 정보</h3>
                    <section class="max-w-[760px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">결제수단</h4>
                        <div class="payment">
                            ${l.map(r=>`
                                    <label for="${r.value}">
                                        <input 
                                            type="radio" 
                                            name="payment__method"
                                            value="${r.value}"
                                            id="${r.value}" 
                                        />
                                        <p>${r.text}</p>
                                    </label>
                                `).join("")}
                        </div>
                    </section>
                    <section class="max-w-[480px] w-full">
                        <h4  class="mb-[40px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">최종결제 정보</h4>
                    </section>
                </section>
            </form>
      </section>
    `},pe=async()=>{const e=document.createElement("div");let t=de();return e.classList.add("inner"),e.insertAdjacentHTML("beforeend",t),e},Y=async(e="",t="")=>{const a=document.createElement("main"),l=Z();return O.appendChild(l),a.classList.add("m-[80px_0_180px]"),e===""?a.appendChild(await se()):e==="details"?a.appendChild(await oe(t)):e==="cart"?a.appendChild(await ie()):e==="order"&&a.appendChild(await pe()),O.innerHTML="",O.appendChild(te()),O.appendChild(a),l.remove(),O},q=(e,t=!0)=>`<p class="error__message ${t?"text-[#eb5757]":"text-[#21BF48]"}">${e}</p>`,ue=()=>{const e=["010","011","016","017","018","019"];return`
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
                        ${f("userId","아이디","text","join__input","flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${f("userPassword","비밀번호","password","join__input")}
                    ${f("userPassword-check","비밀번호 재확인","password","join__input")}
                    ${f("userName","이름","text","join__input")}
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code"></p>
                            <ul class="select__list">${e.map(a=>`<li class="select__option" data-value="${a}">${a}</li>`).join("")}</ul>
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
        `},_e=()=>{const e=document.getElementById("app");e.innerHTML=ue(),JSON.parse(localStorage.getItem("user"));let t="BUYER";const a=document.querySelector("button.customer"),l=document.querySelector("button.seller"),n=document.getElementById("userId"),i=document.querySelector(".id__check__btn"),s=document.getElementById("userPassword"),r=document.getElementById("userPassword-check"),b=document.getElementById("userName"),h=document.querySelector(".selected__code"),P=document.querySelector(".select__list"),o=document.getElementById("userPhoneNumber-middle"),m=document.getElementById("userPhoneNumber-last");document.getElementById("userStoreName");const v=document.getElementById("join__checkbox"),M=document.querySelector(".join__btn"),g=document.querySelector(".user__section");let c=null,C=null,j,A=!1,d,_="";const $=(p,x,u)=>{x.classList.remove("active"),!p.classList.contains("active")&&p.classList.add("active"),g.classList.remove(t.toLowerCase()),g.classList.add(u.toLowerCase()),t=u,n.value="",s.value="",c!==null&&c.remove(),c=null},L=(p,x,u)=>{$(p,x,u);let y=document.createElement("div"),E=`
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${f("userBusinessNumber","사업자 등록번호","number","join__input","flex-1")}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${f("userStoreName","스토어 이름","text","join__input")}
    `;y.classList.add("user__seller__form__add__wrap"),y.insertAdjacentHTML("beforeend",E),g.appendChild(y),C=document.querySelector(".user__seller__form__add__wrap")},N=()=>{let p={};c!==null&&c.remove(),fetch(`${I}/accounts/signup/valid/username/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({username:n.value})}).then(async u=>{const y=await u.json();return u.ok?(p={error:!1,text:y.Success},n.classList.contains("error")&&n.classList.remove("error"),d=n.value,j=!0):(p={error:!0,text:y.FAIL_Message},n.value="",n.focus(),!n.classList.contains("error")&&n.classList.add("error"),j=!1),p}).then(u=>{const y=n.value;/^[a-zA-Z0-9]{0,20}$/.test(y)?(n.classList.contains("error")&&n.classList.remove("error"),i.parentNode.insertAdjacentHTML("afterend",q(u.text,u.error))):(!n.classList.contains("error")&&n.classList.add("error"),i.parentNode.insertAdjacentHTML("afterend",q("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.")),c=document.querySelector(".error__message")),c=document.querySelector(".error__message")}).catch(u=>{console.error(u)})},D=()=>{const p=s.value,x=/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]?)[a-zA-Z\d\W_]{8,}$/;console.log(!x.test(p)),c!==null&&c.remove(),x.test(p)?(s.classList.contains("error")&&s.classList.remove("error"),!s.classList.contains("check")&&s.classList.add("check")):(s.parentNode.insertAdjacentHTML("afterend",q("8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.")),!s.classList.contains("error")&&s.classList.add("error"),s.classList.contains("check")&&s.classList.remove("chcek"),c=document.querySelector(".error__message"),s.focus())},k=()=>{const p=s.value,x=r.value;c!==null&&c.remove(),p!==x?(!r.classList.contains("error")&&r.classList.add("error"),r.classList.contains("check")&&r.classList.remove("check"),r.insertAdjacentHTML("afterend",q("비밀번호가 일치하지 않습니다.")),r.focus(),c=document.querySelector(".error__message")):(r.classList.contains("error")&&r.classList.remove("error"),!r.classList.contains("check")&&r.classList.add("check"))},H=p=>{const x=p.getAttribute("data-value");x&&(h.textContent=x,P.parentNode.classList.remove("view"))},J=()=>{c!==null&&c.remove();let p={};const x=/[0-9]{10}/,u=g.querySelector("#userBusinessNumber"),y=u.value;if(!x.test(y)){u.parentNode.parentNode.insertAdjacentHTML("afterend",q("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")),c=document.querySelector(".error__message");return}fetch(`${I}/accounts/signup/valid/company_registration_number/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({company_registration_number:u.value})}).then(async S=>{const B=await S.json();return S.ok?(p={error:!1,text:B.Success},u.classList.contains("error")&&u.classList.remove("error"),_=u.value,A=!0):(p={error:!0,text:B.FAIL_Message},u.value="",u.focus(),!u.classList.contains("error")&&u.classList.add("error"),A=!1),p}).then(S=>{u.classList.contains("error")&&u.classList.remove("error"),u.parentNode.parentNode.insertAdjacentHTML("afterend",q(S.text,S.error)),c=document.querySelector(".error__message")}).catch(S=>{console.error(S)})},T=async p=>{let x={};const u=n.value,y=s.value,E=r.value,S=b.value,B=`${h.textContent}${o.value}${m.value}`,R=/^1[0-9]{8,9}$/;if(c!==null&&c.remove(),!j){i.parentNode.insertAdjacentHTML("afterend",q("아이디 중복 확인이 필요합니다.")),!n.classList.contains("error")&&n.classList.add("error"),c=document.querySelector(".error__message");return}if(d!==n.value){i.parentNode.insertAdjacentHTML("afterend",q("중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다.")),!n.classList.contains("error")&&n.classList.add("error"),c=document.querySelector(".error__message"),j=!1;return}if(!R.test(parseInt(B))){m.parentNode.insertAdjacentHTML("afterend",q("핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다.")),c=document.querySelector(".error__message");return}if(!v.checked){v.parentNode.insertAdjacentHTML("afterend",q("약관에 동의해야 회원 가입이 가능합니다.")),c=document.querySelector(".error__message");return}if(p==="BUYER")x={username:u,password:y,password2:E,phone_number:B,name:S};else{const w=g.querySelector("#userBusinessNumber").value,X=g.querySelector("#userStoreName").value;if(!A){userBusinessNumber.parentNode.parentNode.insertAdjacentHTML("afterend",q("사업자등록번호 인증이 필요합니다."));return}if(w!==_){w.parentNode.parentNode.insertAdjacentHTML("afterend",q("인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다.")),!w.classList.contains("error")&&w.classList.add("error"),c=document.querySelector(".error__message"),A=!1;return}x={username:u,password:y,password2:E,phone_number:B,name:S,company_registration_number:w,store_name:X}}console.log(x);const U=await fetch(`${I}/accounts//${t==="BUYER"?"signup/":"signup_seller/"}`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(x)});if(U.ok)alert("회원가입이 정상적으로 처리됐습니다."),window.location.href="/openMarket/#login";else{const w=await U.json();(w==null?void 0:w.phone_number)!==void 0?(m.parentNode.insertAdjacentHTML("afterend",q(w.phone_number.join(""))),c=document.querySelector(".error__message")):(w==null?void 0:w.store_name)!==void 0&&(g.querySelector("#userStoreName").parentNode.insertAdjacentHTML("afterend",q(w.store_name.join(""))),c=document.querySelector(".error__message"))}};a.addEventListener("click",p=>{p.preventDefault(),C!==null&&C.remove(),$(a,l,"BUYER")}),l.addEventListener("click",p=>{p.preventDefault(),L(l,a,"SELLER")}),i.addEventListener("click",p=>{p.preventDefault(),N()}),s.addEventListener("change",D),r.addEventListener("change",k),h.addEventListener("click",()=>h.parentNode.classList.toggle("view")),P.addEventListener("click",p=>{H(p.target)}),g.addEventListener("click",async p=>{p.preventDefault(),p.target.classList.contains("busness__number__check__btn")&&await J()}),M.addEventListener("click",async p=>{p.preventDefault(),await T(t)})},me=()=>`
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
      `,xe=()=>{const e=document.getElementById("app");e.innerHTML=me();let t="BUYER";const a=document.querySelector("button.customer"),l=document.querySelector("button.seller"),n=document.querySelector(".user__form"),i=document.querySelector(".user__section"),s=document.getElementById("userId"),r=document.getElementById("userPassword");let b=null;const h=(o,m)=>{const v=m.getAttribute("data-type").toLowerCase(),M=o.getAttribute("data-type");m.classList.remove("active"),!o.classList.contains("active")&&o.classList.add("active"),i.classList.remove(v),i.classList.add(M.toLowerCase()),t=M,s.value="",r.value="",b!==null&&b.remove(),b=null},P=()=>{b!==null&&b.remove();const o=s.value,m=r.value,v={username:o,password:m,login_type:t};fetch(`${I}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then(g=>{if(g.ok)return g.json();r.insertAdjacentHTML("afterend",q("아이디 또는 비밀번호가 일치하지 않습니다.")),b=document.querySelector(".error__message")}).then(g=>{const c={user_type:g.user_type,token:g.token,cart:[]};localStorage.setItem("user",JSON.stringify(c))}).then(()=>{const g=localStorage.getItem("beforePage");window.location.href=`/openMarket/${g||""}`,window.location.reload(),localStorage.removeItem("beforePage")})};a.addEventListener("click",o=>{o.preventDefault(),h(a,l)}),l.addEventListener("click",o=>{o.preventDefault(),h(l,a)}),n.addEventListener("submit",o=>{o.preventDefault(),P()})},be=()=>{fetch(`${I}/accounts/logout/`,{method:"post"}).then(t=>{t.ok&&(localStorage.removeItem("user"),localStorage.getItem("beforePage"),window.location.href="/openMarket/#",window.location.reload(),localStorage.removeItem("beforePage"))}).catch(t=>console.error(t.message))},I="https://openmarket.weniv.co.kr",O=document.getElementById("app"),z=JSON.parse(localStorage.getItem("user")),G=async()=>{const e=window.location.hash.slice(1);if(O.innerHTML="",!e)await Y();else if(!z)e==="login"?xe():e==="sign-up"&&_e();else if(e==="logout")be();else if(e.includes("details")){const[t,a]=e.split("/");await Y(t,a)}else e==="cart"?await Y("cart"):e==="order"?await Y("order"):window.location.href="/openMarket/"};window.addEventListener("hashchange",G);window.addEventListener("DOMContentLoaded",G);
