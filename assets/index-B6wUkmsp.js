(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();const W=(t,e,s,o="text")=>{const r=document.createElement("div");r.classList.add("modal");const c=`
        <button type="button" class="close__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        ${o==="text"?`<p class="text-center mb-[30px]">${t}</p>`:`<div class="text-center mb-[30px]">${t}</div>`}
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">${o==="text"?"아니오":"취소"}</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">${o==="text"?"예":"수정"}</button>
        </div>
    `;r.insertAdjacentHTML("beforeend",c);const a=r.querySelector(".close__btn"),n=r.querySelector(".close__btn__second"),b=r.querySelector(".event__btn");return a.addEventListener("click",s),n.addEventListener("click",s),b.addEventListener("click",e),r},R=JSON.parse(localStorage.getItem("user")),oe=()=>{let t=[];const s={href:R?"#":"#login",text:R?"마이페이지":"로그인",class:R?"myPage":"login",children:R?[{href:"#",text:"마이페이지",class:"myPage"},{href:"#logout",text:"로그아웃",class:"logout"}]:[]},o=[{href:"#cart",text:"장바구니",class:"cart"}],r=[{href:"#seller-center",text:"판매자 센터"}];return o.push(s),r.unshift(s),R&&R.user_type==="SELLER"?t=r:t=o,`
        <section class="inner flex w-full bg-white py-[20px]">
            <div class="flex items-center grow gap-[30px]">
                <a href="/openMarket/">
                    <h1 class="w-[124px] h-[38px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-cover">호두 오픈마켓</h1>
                </a>
                <div class="max-w-[400px] w-full flex gap-[5px] rounded-[50px] border-[2px] border-[#21BF48] items-center px-[22px] py-[9px]">
                  <label for="search-input" class="grow">
                  <span class="tag__hidden">검색어 입력</span>
                      <input type="text" placeholder="상품을 검색해보세요!" class="leading-[20px] flex-1 outline-none" id="search-input" />
                  </label>
                  <button type="button" class="w-[28px] h-[28px] bg-[url('/images/icon-search.svg')] bg-no-repeat bg-cover indent-[-9999px]">검색</button>
                </div>
            </div>
            <nav>
            <ul class="flex items-center nav__list">
                ${t.map(a=>{let n="";return a.text==="판매자 센터"?n=`<a href="${a.href}" class="seller block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat bg-top">${a.text}</a>`:n=`<a href="${a.href}" class="nav__list__item ${a.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px] hover:text-[#21BF48]">${a.text}</a>`,a.children&&a.children.length>0&&(n+=`
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${a.children.map(b=>`<li class="relative z-[1]">
                                <a href="${b.href}" class="block ${b.class} text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${b.text}</a>
                              </li>`).join("")}
                        </ul>
                      `),`
                              <li class="relative nav__list__item bg-no-repeat bg-top group/item">
                                ${n}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    `},ce=()=>{const t=document.createElement("header"),e=oe();let s=null;t.id="header",t.insertAdjacentHTML("beforeend",e);const o=t.querySelector(".cart"),r=n=>{n.preventDefault(),s&&s.remove()},c=n=>{n.preventDefault(),window.location.hash="login",localStorage.setItem("beforePage",window.location.hash)};t.addEventListener("click",n=>{n.target.classList.contains("logout")&&(n.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="logout")}),o.addEventListener("click",n=>{n.preventDefault(),R?window.location.hash="cart":(s=W("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",c,r),O.appendChild(s))});const a=t.querySelectorAll(".myPage");return a.length>0&&a.forEach(n=>n.addEventListener("click",b=>b.preventDefault())),t},le=async(t="")=>{try{const e=await fetch(`${T}/products/${t&&`?page=${t}`}`);if(e.ok)return await e.json()}catch(e){console.error(e)}},re=async(t="")=>{const e=await le(t);console.log(e);const o=`
              <section class="grid gap-[50px]">
                ${`<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${e.results.map(a=>`
                            <li class="">
                              <a href="#details/${a.product_id}" class="grid gap-[10px] product__anchor">
                                  <div class="product__img relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${a.image}" alt="${a.product_name}" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${a.store_name.replace(/\x08/g,"")}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${a.product_name.replace(/\x08/g,"")}
                                  </h3>
                                  <strong class="text-[1.5rem] leading-[1]">${a.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1rem]">원</span></strong>
                                </a>
                              </li>
                        `).join("")}
                  </ul>
              `}
                <div class="text-center">
                    <button class="${e.previous?"prev__btn":"text-[#c4c4c4]"} mr-[20px]" type="button">prev</button>
                    <button class="${e.next?"next__btn":"text-[#c4c4c4]"}" type="button">next</button>
                </div>
              </section>
              `,r=e.previous?e.previous.split("page=")[1]:"",c=e.next?e.next.split("page=")[1]:"";return{template:o,prev:r,next:c}},ie=async()=>{const t=sessionStorage.getItem("page");let e;t===""||t===null?e=await re():e=await re(t);const s=document.createElement("div");let o=0;s.classList.add("inner"),s.insertAdjacentHTML("beforeend",e.template);const r={prev:e.prev?e.prev:"",next:e.next?e.next:1},c=async a=>{o=a;const n=await re(a);s.innerHTML="",s.insertAdjacentHTML("beforeend",n.template),r.prev=n.prev,r.next=n.next,document.documentElement.scrollTop=0};return s.addEventListener("click",async a=>{a.target.classList.contains("prev__btn")&&(a.preventDefault(),c(r.prev)),a.target.classList.contains("next__btn")&&(a.preventDefault(),c(r.next)),(a.target.parentNode.classList.contains("product__anchor")||a.target.parentNode.classList.contains("product__img"))&&sessionStorage.setItem("page",o===0?"":o)}),s},se=[{data:"button-info",text:"버튼",value:""},{data:"review",text:"리뷰",value:""},{data:"qna",text:"Q&A",value:""},{data:"return-info",text:"반품/교환정보",value:""}],de=async(t="")=>{try{const e=await fetch(`${T}/products/${parseInt(t)}/`);if(e.ok)return await e.json()}catch(e){console.error(e)}},pe=async t=>{console.log(t);const e=await de(t);console.log(e);const s="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center";return{detail:`
        <section class="">
            <h2 class="tag__hidden">상품 디테일</h2>
            <section class="flex gap-[50px] mb-[140px]">
                <h3 class="tag__hidden">상품 디테일 정보</h3>
                <div class="max-w-[600px] max-h-[600px] grow">
                <img src="${e.image}" alt="${e.product_name}" class="w-full aspect-square" />
            </div>
            <div class="flex grow flex-col justify-between">
                <div>
                    <p class="mb-[16px] text-[#767676] leading-[1] text-[1.125rem]">
                    ${e.store_name}
                    </p>
                    <h4 class="mb-[20px] text-[1.125rem] leading-[2.25rem]">
                        ${e.product_name}
                    </h4>
                    <strong class="text-[2.25rem] leading-[1]">${e.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1.125rem]">원</span></strong>
                </div>
                <div class="grid gap-[30px] text-[1.125rem]">
                    <p class="pb-[18px] text-[#767676] border-b-2 border-b-[#c4c4c4] ">${e.shipping_method=="PARCEL"?"택배배송":"배달"} / ${e.shipping_fee===0?"무료배송":`배송비: ${e.shipping_fee}원`}</p>
                    <div class="quantity__wrap flex pb-[28px] border-b-2 border-b-[#c4c4c4]">
                        <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${s} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                        <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">${e.stock===0?0:1}</p>
                        <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${s} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
                    </div>
                    <div class="flex w-full justify-between items-center gap-28px">
                        <p>총 상품 금액</p>
                        <div>
                            <p class="relative inline-block translate-y-[-3px] text-[#767676]">
                                총 수량 
                                <em class="total__quantity not-italic text-[#21BF48] font-bold">
                                ${e.stock===0?0:1}
                                </em>
                                개
                            </p>
                            <strong class="ml-[28px] text-[2.25rem] leading-[1] text-[#21BF48]">
                                ${e.stock===0?"매진":`<span class="total__price">${e.price.toLocaleString()}</span><span class="ml-[2px] text-normal font-normal text-[1.125rem]">원</span>`}
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
                    ${se.map((r,c)=>(r.value=`${r.text} 정보`,`
                            <li>
                                <button type="button" data-tab="${r.data}" class="detail__tab__btn ${c===0?"active":""} relative w-full leading-[20px] py-[20px]">${r.text}</button>
                            </li>
                        `)).join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `,data:e}},ue=async t=>{const e=JSON.parse(localStorage.getItem("user")),s=await pe(t),o=document.createElement("div");o.classList.add("inner"),o.insertAdjacentHTML("beforeend",s.detail);let r=!1,c=null;const a=o.querySelector(".quantity__wrap"),n=o.querySelector(".product__quantity"),b=o.querySelector(".total__quantity"),$=o.querySelector(".total__price"),A=o.querySelector(".buy__btn"),v=o.querySelector(".cart__btn"),l=o.querySelector(".side__info__tab"),S=o.querySelector(".detail__side__infomation");let k=o.querySelector(".side__info__tab button.active");const h=p=>{const x=p.textContent,f=$.textContent.replaceAll(",","");x==="더하기"?s.data.stock>parseInt(n.textContent)?(n.textContent=++n.textContent,b.textContent=n.textContent,$.textContent=(parseInt(f)+s.data.price).toLocaleString()):alert(`이 상품은 최대 ${s.data.stock}까지 구매 가능합니다.`):x==="빼기"&&1<parseInt(n.textContent)&&(n.textContent=--n.textContent,b.textContent=n.textContent,$.textContent=(parseInt(f)-s.data.price).toLocaleString())},_=()=>{const p=s.data.shipping_method==="PARCEL"?"택배배송":"배달";let x=s.data.shipping_fee;const f=$.textContent.replace(",","");let C=parseInt(f)+x;const N="direct_order",I=0,H={product_id:s.data.product_id,product_name:s.data.product_name,image:s.data.image,quantity:n.textContent,store_name:s.data.store_name,shipping_method:p,shipping_fee:x===0?"무료배송":`${x.toLocaleString()}원`,total_price:C},z={orderType:N,total:C,parcel:x,discount:I,products:[H]};sessionStorage.setItem("order",JSON.stringify(z)),window.location.hash="order"},D=()=>{c!==null&&c.remove(),r=!1},F=()=>{e?window.location.hash="cart":window.location.hash="login"},J=()=>{if(!e){r||(c=W("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",F,D),O.appendChild(c),r=!0),localStorage.setItem("beforePage",window.location.hash);return}const p={product_id:s.data.product_id,quantity:parseInt(n.textContent)};fetch(`${T}/cart/`,{method:"POST",headers:{Authorization:`JWT ${e.token}`,"Content-type":"application/json"},body:JSON.stringify(p)}).then(f=>{f.ok&&(r||(c=W("해당 상품이 장바구니에 담겼습니다.<br>장바구니로 이동하시겠습니까?",F,D),O.appendChild(c),r=!0))}).catch(f=>console.error(f))},d=(p,x)=>{let f=p.getAttribute("data-tab");x.classList.contains("active")&&x.classList.remove("active"),!p.classList.contains("active")&&p.classList.add("active"),se.forEach(C=>{C.data===f&&(S.innerHTML=C.value)}),k=p};return a.addEventListener("click",p=>{p.target.nodeName==="BUTTON"&&h(p.target)}),A.addEventListener("click",_),v.addEventListener("click",p=>{p.preventDefault(),J()}),l.addEventListener("click",p=>{p.target.nodeName==="BUTTON"&&(p.preventDefault(),d(p.target,k))}),o},G=()=>{const t=document.createElement("div");return t.classList.add("loading"),t},_e=async(t="")=>{try{const e=await fetch(`${T}/products/${parseInt(t)}/`);if(e.ok)return await e.json()}catch(e){console.error(e)}},me=async(t="")=>{try{const e=await fetch(`${T}/cart/${t!==""?`?page=${t}`:""}`,{method:"get",headers:{Authorization:`JWT ${U.token}`}});if(e.ok)return await e.json()}catch(e){console.error(e)}},K=async(t="")=>{const e=await me();console.log(e);const s="px-[10px] py-[20px]",o="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",r=`
                        <tr class="block">
                            <td colspan-"4" class="py-[175px] text-center">
                                <div>
                                    <p class="text-[1.125rem] leading-[20px] mb-[20px]">장바구니에 담긴 상품이 없습니다.</p>
                                    <p class="text-[0.875rem] text-[#767676]">원하는 상품을 장바구니에 담아보세요!</p>
                                </div>
                            </td>
                        </tr>
                      `,c=[{title:"총 상품금액",price:0,className:"total__price"},{title:"상품 할인",price:0,className:"product__discount"},{title:"배송비",price:0,className:"parcel__price"},{title:"결제 예정 금액",price:0,className:"estimated__amount"}];async function a(){const l=[];for(const S of e.results){const k=await _e(S.product_id),h={...S,image:k.image,product_name:k.product_name,store_name:k.store_name,price:k.price,shipping_fee:k.shipping_fee,shipping_method:k.shipping_method,stock:k.stock};l.push(h)}return l}const b=(await a()).map(l=>{const S=l.quantity===0?"매진":`${(l.price*l.quantity+l.shipping_fee).toLocaleString()}`;return`<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="checkbox__${l.cart_item_id}">
                <input type="checkbox" class="item__checkbox" value="${l.cart_item_id}" id="checkbox__${l.cart_item_id}" />
            </label>
        </td>
        <td class="${s} flex-[2_4_0%]">
            <a href="/openMarket/#details/${l.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img 
                          src="${l.image}" 
                          alt="${l.product_name}" 
                          class="product__img__${l.cart_item_id} w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" 
                        />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="store__name__${l.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                            ${l.store_name}
                            </p>
                            <h4 class="product__name__${l.cart_item_id} text-[1.125rem] leading-[2.25rem]" data-productId="${l.product_id}" data-active="${l.is_active}">
                                ${l.product_name}
                            </h4>
                            <strong class="product__price__${l.cart_item_id} text-[1rem] leading-[1]">${l.price.toLocaleString()}원</strong>
                        </div>
                        <p class="shipping__${l.cart_item_id} pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">${l.shipping_method==="PARCEL"?"택배배송":"배달"} / ${l.shipping_fee===0?"무료배송":`배송비: ${l.shipping_fee.toLocaleString()}원`}</p>
                    </div>
                </section>
            </a>
        </td>
        <td class="${s} flex-[1_4_0%]">
            <div data-cartId="${l.cart_item_id}" data-productId="${l.product_id}" class="quantity__wrap cursor-pointer flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${o} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity__${l.cart_item_id} w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${l.stock}">${l.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${o} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${s} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757]"><span class="totalPrice__${l.cart_item_id}">${S}</span>원</strong>
            <button type="button" data-cartId="${l.cart_item_id}" data-productId="${l.product_id}" class="item__order__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
             <button type="button" data-cartId="${l.cart_item_id}" class="delete__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">삭제</button>
        </td>
    </tr>`}),$=`
    <section>
        <h2 class="mb-[52px] text-[2.25rem] leading-[2.75rem] font-bold text-center">장바구니</h2>
        <table class="w-full grid mb-[80px]">
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
            <tbody class="grid gap-[10px] mb-[30px]">
            ${e.results.length>0?b.join(""):r}
            </tbody>
            <tfoot>
                <tr class="block">
                  <td colspan="4" class="block text-center">
                    <button class="${e.previous?"prev__btn":"text-[#c4c4c4]"} mr-[20px]" type="button">prev</button>
                    <button class="${e.next?"next__btn":"text-[#c4c4c4]"}" type="button">next</button>
                  </td>
                </tr>
            </tfoot>
        </table>
        <div class="mb-[30px] flex w-full pt-[46px] pb-[34px] text-center bg-[#F2F2F2] rounded-[10px]">
        ${c.map((l,S)=>`
                <div class="w-[25%] relative">
                    <strong class="block mb-[12px] ${S===c.length-1?"font-bold":"font-normal"} leading-[20px]">
                        ${l.title}
                    </strong>
                    <p class="leading-[45px] ${S===c.length-1?"text-[2.25rem] text-[#EB5757]":"text-[1.5rem]"}">
                        <em class="${l.className} font-bold">
                            ${l.price}
                        </em>
                        <span class="${S===c.length-1?"text-[1.125rem]":"text-[1rem]"}">원</span>
                    </p>
                </div>
                `).join("")}
        </div>
        <button class="cart__sellect__order__btn block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `,A=e.previous?e.previous.split("page=")[1]:"",v=e.next?e.next.split("page=")[1]:"";return{template:$,prev:A,next:v}},ge=async()=>{const t=document.createElement("div");let e=await K(),s=null,o=null,r=null,c=!1,a=new Set,n="",b=0,$=0,A=0;t.classList.add("inner"),t.insertAdjacentHTML("beforeend",e.template);const v={prev:e.prev?e.prev:"",next:e.next?e.next:1},l=async d=>{currentPage=d;const p=await K(d);t.innerHTML="",t.insertAdjacentHTML("beforeend",p.template),v.prev=p.prev,v.next=p.next,document.documentElement.scrollTop=0},S=(d,p,x,f)=>{const C=t.querySelectorAll(".item__checkbox"),N=t.querySelector("#check__all");let I=0,H=0;if(d.value==="check__all")C.forEach(q=>{const u=q.value;!a.has(u)&&d.checked===!0?a.add(u):d.checked===!1&&a.clear(),q.checked=d.checked});else{const q=d.value;d.checked===!0?a.add(q):a.delete(q)}const z=Array.from(a).reduce((q,u)=>{const y=t.querySelector(`.totalPrice__${u}`),E=t.querySelector(`.shipping__${u}`).textContent.trim().split("배송비:")[1],B=E?E.replace(/[,\s원]/g,""):0,i=parseInt(y.textContent.replace(/[,\s원]/g,"")),g=parseInt(B);return I+=g,H+=i-g,q+i},0);x.textContent=I.toLocaleString(),p.textContent=z.toLocaleString(),f.textContent=H.toLocaleString(),N.checked=C.length===a.size},k=(d,p,x)=>(p.textContent=$,d.classList.contains("modal__quantity__plus__btn")?x>parseInt(p.textContent)?p.textContent=++$:alert(`이 상품은 최대 ${x}까지 구매 가능합니다.`):d.classList.contains("modal__quantity__minus__btn")&&1<parseInt(p.textContent)&&(p.textContent=--$),$),h=async d=>{let p=new Set,x=0,f=0,C=0,N="";d?(p.add(d),N="cart_one_order"):(a.forEach(q=>p.add(q)),N="cart_order");const I=[],H=[...p].map(async q=>{const u=t.querySelector(`.product__name__${q}`),y=u.textContent.trim(),m=u.getAttribute("data-active"),E=u.getAttribute("data-productId"),B=t.querySelector(`.product__img__${q}`).getAttribute("src"),i=t.querySelector(`.product__quantity__${q}`).textContent.trim(),g=t.querySelector(`.store__name__${q}`).textContent.trim(),L=t.querySelector(`.shipping__${q}`).textContent.split(" / "),M=L[0],w=L[1].includes("배송비:")?L[1].replace("배송비: ",""):L[1],Z=t.querySelector(`.totalPrice__${q}`),X=Z.textContent.replace(/[,\s원]/g,""),ee={product_id:E,product_name:y,image:B,quantity:i,store_name:g,shipping_method:M,shipping_fee:w,total_price:Z.textContent};if(m==="false"&&await fetch(`${T}/cart/${q}/`,{method:"PUT",headers:{Authorization:`JWT ${U.token}`,"Content-type":"application/json"},body:JSON.stringify({product_id:parseInt(E),quantity:parseInt(i),is_active:!0})}),w.includes("원")){const te=w.replace(/[,\s원]/g,""),Y=parseInt(te);f+=Y}x+=parseInt(X),I.push(ee)});await Promise.all(H);const z={orderType:N,total:x,parcel:f,discount:C,products:I};if(I.length===0){alert("구매하실 상품을 선택해주세요.");return}sessionStorage.setItem("order",JSON.stringify(z)),window.location.hash="order"},_=()=>{o!==null&&o.remove(),c=!1},D=()=>{const d=G();t.appendChild(d);const p={product_id:parseInt(b),quantity:$,is_active:!1};fetch(`${T}/cart/${n}/`,{method:"PUT",headers:{Authorization:`JWT ${U.token}`,"Content-type":"application/json"},body:JSON.stringify(p)}).then(async f=>{if(f.ok){_(),n="",$=0,A=0,b="";const C=await K();t.innerHTML="",t.insertAdjacentHTML("beforeend",C.template)}}).catch(f=>console.error(f)).finally(()=>{d.remove(),c=!1})},F=()=>{const d=G();t.appendChild(d),fetch(`${T}/cart/${s}`,{method:"DELETE",headers:{Authorization:`JWT ${U.token}`}}).then(async x=>{if(x.ok){_(),alert("해당 상품이 삭제되었습니다.");const f=await K();t.innerHTML="",t.insertAdjacentHTML("beforeend",f.template)}}).catch(x=>console.error(x)).finally(()=>{d.remove()})},J=d=>{var C;const p=t.querySelector(".estimated__amount"),x=t.querySelector(".parcel__price"),f=t.querySelector(".total__price");if(d.target.classList.contains("prev__btn")&&(d.preventDefault(),l(v.prev)),d.target.classList.contains("next__btn")&&(d.preventDefault(),l(v.next)),d.target.parentNode.classList.contains("quantity__wrap")||d.target.parentNode.classList.contains("quantity__modal")){const N="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",I=`
          <div class="quantity__wrap cursor-pointer flex justify-center">
              <button type="button" class="modal__quantity__minus__btn rounded-[5px_0_0_5px] ${N} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
              <p class="modal__product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">0</p>
              <button type="button" class="modal__quantity__plus__btn rounded-[0_5px_5px_0] ${N} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
      `;if(!c){n=d.target.parentNode.getAttribute("data-cartid"),b=d.target.parentNode.getAttribute("data-productId");const H=t.querySelector(`.product__quantity__${n}`);A=H.getAttribute("data-stock"),$=H.textContent,o=W(I,D,_,"cont"),o.classList.add("quantity__modal"),t.appendChild(o),r=t.querySelector(".modal__product__quantity"),c=!0}k(d.target,r,A)}if(d.target.nodeName==="INPUT"&&S(d.target,p,x,f),d.target.classList.contains("delete__btn")&&(s=d.target.getAttribute("data-cartId"),c||(o=W("상품을 삭제하시겠습니까?",F,_),c=!0,O.appendChild(o))),d.target.classList.contains("item__order__btn")||d.target.classList.contains("cart__sellect__order__btn")){d.preventDefault();const N=(C=d.target)==null?void 0:C.getAttribute("data-cartId");h(N)}};return t.addEventListener("click",J),t},P=(t,e,s="text",o="",r="",c=!0)=>`
      <label for="${t}" class="${r} relative">
          <span>${e}</span>
          <input class="${o}" type="${s}" id="${t}" ${c?"required":""} />
      </label>
    `,j=(t,e=!0,s="")=>`<p class="error__message ${s} ${e?"text-[#eb5757]":"text-[#21BF48]"}">${t}</p>`,xe=()=>{const t=sessionStorage.getItem("order"),e=JSON.parse(t),s=e.products,o=[{text:"신용/체크카드",value:"CARD"},{text:"무통장 입금",value:"DEPOSIT"},{text:"휴대폰 결제",value:"PHONE_PAYMENT"},{text:"네이버페이",value:"NAVERPAY"},{text:"카카오페이",value:"KAKAOPAY"}],r="px-[10px] pt-[8px] pb-[17px] text-center",a=`
      <section id="order">
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
                ${s.map(n=>`<tr class="relative flex items-center border-b border-b-[#c4c4c4]">
          <td class="${r} text-left flex-[2_5_0%]">
              <a href="/openMarket/#details/${n.product_id}">
                  <section class="flex gap-[36px]">
                      <h3 class="tag__hidden">상품 디테일 정보</h3>
                          <img 
                            src="${n.image}" 
                            alt="${n.product_name}" 
                            class="product__img__${n.cart_item_id} w-full aspect-square max-w-[104px] w-full max-h-[104px] rounded-[5px]" 
                          />
                      <div class="flex grow flex-col gap-[6px] justify-center items-start">
                        <p class="store__name__${n.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                        ${n.store_name}
                        </p>
                        <h4 class="product__name__${n.cart_item_id} text-[1.125rem] leading-[2.25rem]">
                            ${n.product_name}
                        </h4>
                        <p class="pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">수량 : ${n.quantity}개</p>
                      </div>
                  </section>
              </a>
          </td>
          <td class="${r} flex-[1_5_0%]">
              ${e.discount===0?"-":`${e.total.toLocaleString()}원`}
          </td>
          <td class="${r} flex-[1_5_0%] text-center">
          ${n.shipping_fee}
          </td>
          <td class="${r} font-bold flex-[1_5_0%]">
            ${n.total_price}원
          </td>
      </tr>`).join("")}
              </tbody>
              <tfoot>
                  <tr class="block">
                      <td colspan="4" class="block text-right">
                            <p class="sans-medium">총 주문금액 <em class="ml-[10px] text-[1.5rem] text-[#EB5757] font-bold">${e.total.toLocaleString()}원</em></p>
                      </td>
                  </tr>
              </tfoot>
          </table>
          <form class="w-full text-[1.125rem]">
            <section class="mb-[62px]">
                <h3 class="mb-[40px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">배송정보</h3>
                    <section class="form__wrap mb-[40px]">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">주문자 정보</h4>
                        <div>${P("buyerName","이름","text","order__input","order__label")}</div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${P("buyerPhone__first","주문자 휴대폰 첫 번째 3자리","text","order__input","order__label__phone")}
                                    ${P("buyerPhone__middle","주문자 휴대폰 중간번호 3~4자리","text","order__input","order__label__phone")}
                                    ${P("buyerPhone__last","주문자 휴대폰 마지막 4자리","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${P("buyerEmail","이메일","email","order__input","order__label")}
                        </div>
                    </section>
                    <section class="form__wrap">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">배송지 정보</h4>
                        <div>
                            ${P("recieverName","수령인","text","order__input","order__label")}
                        </div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${P("recieverPhone__first","수령인 휴대폰 첫 번째 3자리","text","order__input","order__label__phone")}
                                    ${P("recieverPhone__middle","수령인 휴대폰 중간번호 3~4자리","text","order__input","order__label__phone")}
                                    ${P("recieverPhone__last","수령인 휴대폰 마지막 4자리","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="order__label__address">
                                <strong>배송주소</strong>
                                <div>
                                    <div class="zipCode__wrap">
                                        ${P("recieverZipCode","우편번호","text","order__input")}
                                        <button class="zipCode__btn">우편번호 검색</button>
                                    </div>
                                    ${P("recieverAddress","주소","text","order__input")}
                                    ${P("recieverDetailAddress","상세 주소","text","order__input","",!1)}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${P("recieverMessage","배송 메시지","text","order__input","order__label__message")}
                        </div>
                    </section>
                </section>
                <section class="flex justify-between">
                    <h3 class="tag__hidden">결제수단 및 최종 결제 정보</h3>
                    <section class="max-w-[760px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">결제수단</h4>
                        <div class="payment">
                            ${o.map(n=>`
                                    <label for="${n.value}">
                                        <input 
                                            type="radio" 
                                            name="payment__method"
                                            value="${n.value}"
                                            id="${n.value}" 
                                        />
                                        <p>${n.text}</p>
                                    </label>
                                `).join("")}
                        </div>
                    </section>
                    <section class="max-w-[480px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px]">최종결제 정보</h4>
                        <div class="finally__order__list">
                            <ul>
                              <li>
                                <p>상품금액</p>
                                <strong>
                                  ${(e.total-e.parcel).toLocaleString()}
                                  <span>원</span>
                                </strong>
                              </li>
                              <li>
                                <p>할인</p>
                                <strong>
                                  ${e.discount.toLocaleString()}
                                  <span>원</span>
                                </strong>
                              </li>
                              <li>
                                <p>배송비</p>
                                <strong>
                                  ${e.parcel.toLocaleString()}
                                  <span>원</span>
                                </strong>
                              </li>
                              <li 
                                class="finally__total__price__wrap"
                              >
                                <p>결제금액</p>
                                <strong>${e.total.toLocaleString()}<span>원</span></strong>
                              </li>
                            </ul>
                            <div class="finally__order__wrap">
                              <label for="order__check">
                                <input type="checkbox" id="order__check" />
                                <p class="order__checkbox__text">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
                              </label>
                              <button type="submit" class="order__submit__btn">결제하기</button>
                            </div>
                        </div>
                    </section>
                </section>
            </form>
      </section>
    `;return e.orderType==="cart_order"?{template:a,total:e.total,orderType:e.orderType}:{template:a,orderType:e.orderType,total:e.total,quantity:e.products[0].quantity,productId:e.products[0].product_id}},be=async()=>{const t=document.createElement("div");let e=xe(),s=null,o=!1,r=!1,c=!1,a=!1,n="",b=[];t.classList.add("inner"),t.insertAdjacentHTML("beforeend",e.template);const $=t.querySelector("#buyerName"),A=t.querySelector("#buyerPhone__first"),v=t.querySelector("#buyerPhone__middle"),l=t.querySelector("#buyerPhone__last"),S=t.querySelector("#buyerEmail"),k=t.querySelector("#recieverName"),h=t.querySelector("#recieverPhone__first"),_=t.querySelector("#recieverPhone__middle"),D=t.querySelector("#recieverPhone__last"),F=t.querySelector(".zipCode__btn"),J=t.querySelector("#recieverZipCode"),d=t.querySelector("#recieverAddress"),p=t.querySelector("#recieverDetailAddress"),x=t.querySelector("#recieverMessage"),f=t.querySelector(".payment"),C=t.querySelector(".order__checkbox__text"),N=t.querySelector(".order__submit__btn");A.setAttribute("maxlength","3"),v.setAttribute("maxlength","4"),l.setAttribute("maxlength","4"),h.setAttribute("maxlength","3"),_.setAttribute("maxlength","4"),D.setAttribute("maxlength","4");const I=[{name:"buyerName",tag:$,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z\uac00-\ud7af]{2,}$/,regexErrorMessage:"입력에는 최소 3자 이상, 문자만 입력이 가능합니다."},{name:"buyerPhone__last",tag:l,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{4}$/,regexErrorMessage:"입력에는 숫자 4자리만 입력이 가능합니다."},{name:"buyerPhone__middle",tag:v,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 3~4자리만 입력이 가능합니다."},{name:"buyerPhone__first",tag:A,emptyErrorMessage:"영역이 비어있습니다.",regex:/^01[016789]$/,regexErrorMessage:"입력에는 010,016,017,018,019만 입력이 가능합니다."},{name:"buyerEmail",tag:S,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,regexErrorMessage:"이메일을 다시 확인해주세요."},{name:"recieverName",tag:k,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z\uac00-\ud7af]{2,}$/,regexErrorMessage:"입력에는 최소 3자 이상, 문자만 입력이 가능합니다."},{name:"recieverPhone__last",tag:D,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 4자리만 입력이 가능합니다."},{name:"recieverPhone__middle",tag:_,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 3~4자리만 입력이 가능합니다."},{name:"recieverPhone__first",tag:h,emptyErrorMessage:"영역이 비어있습니다.",regex:/^01[016789]$/,regexErrorMessage:"입력에는 010,016,017,018,019만 입력이 가능합니다."},{name:"zipCode",tag:J,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{5}$/,regexErrorMessage:"입력에는 숫자 5자리만 입력이 가능합니다."},{name:"recieverAddress",tag:d,emptyErrorMessage:"영역이 비어있습니다.",regex:/.*$/s,regexErrorMessage:"입력에 사용 불가능한 문자가 포함되어 있습니다."},{name:"recieverMessage",tag:x,emptyErrorMessage:"영역이 비어있습니다.",regex:/.*$/s,regexErrorMessage:""}],H=(i,g,L)=>{let M=null;return i.parentNode.textContent.includes("휴대폰")||i.parentNode.textContent.includes("주소")?(M=j(`${i.parentNode.textContent}${g}`,!0,L),i.parentNode.parentNode.parentNode.insertAdjacentHTML("afterend",M)):i.parentNode.textContent.includes("우편번호")?(M=j(`${i.parentNode.textContent}${g}`,!0,L),i.parentNode.parentNode.insertAdjacentHTML("afterend",M)):(M=j(`${i.parentNode.textContent}${g}`,!0,L),i.parentNode.insertAdjacentHTML("afterend",M)),M},z=(i,g,L)=>{const M=t.querySelector(`.errorMessage__regex__${g.name}`),w=t.querySelector(`.errorMessage__empty__${L}`);M&&M.remove(),g.regex.test(i.value)?M&&M.remove():(console.log(`${i.parentNode.textContent.trim()} ${g.regexErrorMessage}`),H(i,g.regexErrorMessage,`errorMessage__regex__${g.name}`),i.focus()),w&&i.value!==""&&w.remove(),a=!0},q=()=>{b.length>0&&b.forEach((i,g)=>{const L=t.querySelector(`.errorMessage__empty__${g}`);L&&(L.remove(),b=b.filter(M=>!L.classList.contains(M)))}),I.forEach((i,g)=>{let L=null;(!i||i.tag.value==="")&&(L=H(i.tag,i.emptyErrorMessage,`errorMessage__empty__${g}`)),L?(b.push(`errorMessage__empty__${g}`),c=!1):c=!0})},u=i=>{const g=i.target;g.nodeName==="INPUT"&&(n=g.value)},y=i=>{i.preventDefault(),s=W("추후 업데이트 예정입니다.",B,B),o||t.appendChild(s)},m=()=>{const i=G(),g=e.orderType,L=k.value,M=`${h.value}${_.value}${D.value}`,w=`${J.value}, ${d.value}${p.value!==""?` ${p.value}`:""}`,Z=x.value,X=parseInt(e==null?void 0:e.productId),ee=parseInt(e==null?void 0:e.quantity),te=e.total;O.appendChild(i);const Y={total_price:te,order_kind:g,receiver:L,receiver_phone_number:M,address:w,address_message:Z,payment_method:n};g!=="cart_order"&&(Y.product_id=X,Y.quantity=ee),fetch(`${T}/order/`,{method:"post",headers:{Authorization:`JWT ${U.token}`,"Content-type":"application/json"},body:JSON.stringify(Y)}).then(async V=>{if(V.ok){const ae=await V.json();console.log(ae),alert("주문을 완료했습니다."),window.location.hash=""}}).catch(V=>console.error(V.message)).finally(()=>{i.remove()})},E=i=>{if(i.preventDefault(),q(),!!c&&a){if(!n){alert("결제수단을 선택해주세요.");return}if(!N.classList.contains("on")){alert("주문 내용 확인 및 정보 제공 등에 동의해주세요.");return}m()}},B=()=>{s!==null&&s.remove(),o=!1};return I.forEach((i,g)=>{i.tag.addEventListener("change",L=>{z(L.target,i,g)})}),F.addEventListener("click",y),C.addEventListener("click",()=>{t.querySelector("#order__check").checked?(N.classList.remove("on"),r=!1):(N.classList.add("on"),r=!0),console.log(r)}),f.addEventListener("click",u),N.addEventListener("click",E),t},he=()=>{const t=[{text:"호두샵 소개",href:"#"},{text:"이용약관",href:"#"},{text:"개인정보처리방침",href:"#"},{text:"전자금융거래약관",href:"#"},{text:"청소년보호정책",href:"#"},{text:"제휴문의",href:"#"}],e=[{text:"호두샵 인스타그램",href:"#",image_url:"/openMarket/images/icon-insta.svg"},{text:"호두샵 페이스북",href:"#",image_url:"/openMarket/images/icon-fb.svg"},{text:"호두샵 유튜브",href:"#",image_url:"/openMarket/images/icon-yt.svg"}];return`
        <div class="inner">
            <section class="mb-[30px] flex justify-between items-center pb-[22px] border-b border-b-[#c4c4c4]">
                <h2 class="tag__hidden">호두샵 약관 관련 리스트 및 sns 리스트</h2>
                <ul class="terms__list flex gap-[32px]">
                    ${t.map(o=>`
                                <li class="text-[0.875rem] ${o.text==="개인정보처리방침"?"font-bold":""}">
                                    <a href="${o.href}">${o.text}</a>
                                </li>
                                `).join("")}
                </ul>
                <ul class="flex gap-[14px]">
                    ${e.map(o=>`
                                <li>
                                    <a href="${o.href}" class="block indent-[-9999px] w-[32px] h-[32px]" style="background:url('${o.image_url}') no-repeat center center;">${o.text}</a>
                                </li>
                                `).join("")}
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
    `},fe=()=>{const t=document.createElement("footer");return t.insertAdjacentHTML("beforeend",he()),t.id="footer",t},Q=async(t="",e="")=>{const s=document.createElement("main"),o=G();return O.appendChild(o),s.classList.add("m-[80px_0_180px]"),t===""?s.appendChild(await ie()):t==="details"?s.appendChild(await ue(e)):t==="cart"?s.appendChild(await ge()):t==="order"&&s.appendChild(await be()),O.innerHTML="",O.appendChild(ce()),O.appendChild(s),O.appendChild(fe()),o.remove(),O},ve=()=>{const t=["010","011","016","017","018","019"];return`
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
                        ${P("userId","아이디","text","join__input","flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${P("userPassword","비밀번호","password","join__input")}
                    ${P("userPassword-check","비밀번호 재확인","password","join__input")}
                    ${P("userName","이름","text","join__input")}
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code"></p>
                            <ul class="select__list">${t.map(s=>`<li class="select__option" data-value="${s}">${s}</li>`).join("")}</ul>
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
                        <span>호두샵의 <em>이용약관</em> 및 <em>개인정보처리방침</em>에 대한 내용을 확인하였고 동의합니다.</span>
                    </label>
                    <button class="btn join__btn" type="submit">가입하기</button>
                </div>
            </form>
        `},ye=()=>{const t=document.getElementById("app");t.innerHTML=ve(),JSON.parse(localStorage.getItem("user"));let e="BUYER";const s=document.querySelector("button.customer"),o=document.querySelector("button.seller"),r=document.getElementById("userId"),c=document.querySelector(".id__check__btn"),a=document.getElementById("userPassword"),n=document.getElementById("userPassword-check"),b=document.getElementById("userName"),$=document.querySelector(".selected__code"),A=document.querySelector(".select__list"),v=document.getElementById("userPhoneNumber-middle"),l=document.getElementById("userPhoneNumber-last");document.getElementById("userStoreName");const S=document.getElementById("join__checkbox"),k=document.querySelector(".join__btn"),h=document.querySelector(".user__section");let _=null,D=null,F,J=!1,d,p="";const x=(u,y,m)=>{y.classList.remove("active"),!u.classList.contains("active")&&u.classList.add("active"),h.classList.remove(e.toLowerCase()),h.classList.add(m.toLowerCase()),e=m,r.value="",a.value="",_!==null&&_.remove(),_=null},f=(u,y,m)=>{x(u,y,m);let E=document.createElement("div"),B=`
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${P("userBusinessNumber","사업자 등록번호","number","join__input","flex-1")}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${P("userStoreName","스토어 이름","text","join__input")}
    `;E.classList.add("user__seller__form__add__wrap"),E.insertAdjacentHTML("beforeend",B),h.appendChild(E),D=document.querySelector(".user__seller__form__add__wrap")},C=()=>{let u={};_!==null&&_.remove(),fetch(`${T}/accounts/signup/valid/username/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({username:r.value})}).then(async m=>{const E=await m.json();return m.ok?(u={error:!1,text:E.Success},r.classList.contains("error")&&r.classList.remove("error"),d=r.value,F=!0):(u={error:!0,text:E.FAIL_Message},r.value="",r.focus(),!r.classList.contains("error")&&r.classList.add("error"),F=!1),u}).then(m=>{const E=r.value;/^[a-zA-Z0-9]{0,20}$/.test(E)?(r.classList.contains("error")&&r.classList.remove("error"),c.parentNode.insertAdjacentHTML("afterend",j(m.text,m.error))):(!r.classList.contains("error")&&r.classList.add("error"),c.parentNode.insertAdjacentHTML("afterend",j("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.")),_=document.querySelector(".error__message")),_=document.querySelector(".error__message")}).catch(m=>{console.error(m)})},N=()=>{const u=a.value,y=/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]?)[a-zA-Z\d\W_]{8,}$/;console.log(!y.test(u)),_!==null&&_.remove(),y.test(u)?(a.classList.contains("error")&&a.classList.remove("error"),!a.classList.contains("check")&&a.classList.add("check")):(a.parentNode.insertAdjacentHTML("afterend",j("8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.")),!a.classList.contains("error")&&a.classList.add("error"),a.classList.contains("check")&&a.classList.remove("chcek"),_=document.querySelector(".error__message"),a.focus())},I=()=>{const u=a.value,y=n.value;_!==null&&_.remove(),u!==y?(!n.classList.contains("error")&&n.classList.add("error"),n.classList.contains("check")&&n.classList.remove("check"),n.insertAdjacentHTML("afterend",j("비밀번호가 일치하지 않습니다.")),n.focus(),_=document.querySelector(".error__message")):(n.classList.contains("error")&&n.classList.remove("error"),!n.classList.contains("check")&&n.classList.add("check"))},H=u=>{const y=u.getAttribute("data-value");y&&($.textContent=y,A.parentNode.classList.remove("view"))},z=()=>{_!==null&&_.remove();let u={};const y=/[0-9]{10}/,m=h.querySelector("#userBusinessNumber"),E=m.value;if(!y.test(E)){m.parentNode.parentNode.insertAdjacentHTML("afterend",j("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")),_=document.querySelector(".error__message");return}fetch(`${T}/accounts/signup/valid/company_registration_number/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({company_registration_number:m.value})}).then(async i=>{const g=await i.json();return i.ok?(u={error:!1,text:g.Success},m.classList.contains("error")&&m.classList.remove("error"),p=m.value,J=!0):(u={error:!0,text:g.FAIL_Message},m.value="",m.focus(),!m.classList.contains("error")&&m.classList.add("error"),J=!1),u}).then(i=>{m.classList.contains("error")&&m.classList.remove("error"),m.parentNode.parentNode.insertAdjacentHTML("afterend",j(i.text,i.error)),_=document.querySelector(".error__message")}).catch(i=>{console.error(i)})},q=async u=>{let y={};const m=r.value,E=a.value,B=n.value,i=b.value,g=`${$.textContent}${v.value}${l.value}`,L=/^1[0-9]{8,9}$/;if(_!==null&&_.remove(),!F){c.parentNode.insertAdjacentHTML("afterend",j("아이디 중복 확인이 필요합니다.")),!r.classList.contains("error")&&r.classList.add("error"),_=document.querySelector(".error__message");return}if(d!==r.value){c.parentNode.insertAdjacentHTML("afterend",j("중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다.")),!r.classList.contains("error")&&r.classList.add("error"),_=document.querySelector(".error__message"),F=!1;return}if(!L.test(parseInt(g))){l.parentNode.insertAdjacentHTML("afterend",j("핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다.")),_=document.querySelector(".error__message");return}if(!S.checked){S.parentNode.insertAdjacentHTML("afterend",j("약관에 동의해야 회원 가입이 가능합니다.")),_=document.querySelector(".error__message");return}if(u==="BUYER")y={username:m,password:E,password2:B,phone_number:g,name:i};else{const w=h.querySelector("#userBusinessNumber").value,Z=h.querySelector("#userStoreName").value;if(!J){userBusinessNumber.parentNode.parentNode.insertAdjacentHTML("afterend",j("사업자등록번호 인증이 필요합니다."));return}if(w!==p){w.parentNode.parentNode.insertAdjacentHTML("afterend",j("인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다.")),!w.classList.contains("error")&&w.classList.add("error"),_=document.querySelector(".error__message"),J=!1;return}y={username:m,password:E,password2:B,phone_number:g,name:i,company_registration_number:w,store_name:Z}}console.log(y);const M=await fetch(`${T}/accounts//${e==="BUYER"?"signup/":"signup_seller/"}`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(y)});if(M.ok)alert("회원가입이 정상적으로 처리됐습니다."),window.location.href="/openMarket/#login";else{const w=await M.json();(w==null?void 0:w.phone_number)!==void 0?(l.parentNode.insertAdjacentHTML("afterend",j(w.phone_number.join(""))),_=document.querySelector(".error__message")):(w==null?void 0:w.store_name)!==void 0&&(h.querySelector("#userStoreName").parentNode.insertAdjacentHTML("afterend",j(w.store_name.join(""))),_=document.querySelector(".error__message"))}};s.addEventListener("click",u=>{u.preventDefault(),D!==null&&D.remove(),x(s,o,"BUYER")}),o.addEventListener("click",u=>{u.preventDefault(),f(o,s,"SELLER")}),c.addEventListener("click",u=>{u.preventDefault(),C()}),a.addEventListener("change",N),n.addEventListener("change",I),$.addEventListener("click",()=>$.parentNode.classList.toggle("view")),A.addEventListener("click",u=>{H(u.target)}),h.addEventListener("click",async u=>{u.preventDefault(),u.target.classList.contains("busness__number__check__btn")&&await z()}),k.addEventListener("click",async u=>{u.preventDefault(),await q(e)})},$e=()=>`
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
      `,Le=()=>{const t=document.getElementById("app");t.innerHTML=$e();let e="BUYER";const s=document.querySelector("button.customer"),o=document.querySelector("button.seller"),r=document.querySelector(".user__form"),c=document.querySelector(".user__section"),a=document.getElementById("userId"),n=document.getElementById("userPassword");let b=null;const $=(v,l)=>{const S=l.getAttribute("data-type").toLowerCase(),k=v.getAttribute("data-type");l.classList.remove("active"),!v.classList.contains("active")&&v.classList.add("active"),c.classList.remove(S),c.classList.add(k.toLowerCase()),e=k,a.value="",n.value="",b!==null&&b.remove(),b=null},A=()=>{b!==null&&b.remove();const v=a.value,l=n.value,S={username:v,password:l,login_type:e};fetch(`${T}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)}).then(h=>{if(h.ok)return h.json();n.insertAdjacentHTML("afterend",j("아이디 또는 비밀번호가 일치하지 않습니다.")),b=document.querySelector(".error__message")}).then(h=>{const _={user_type:h.user_type,token:h.token,cart:[]};localStorage.setItem("user",JSON.stringify(_))}).then(()=>{const h=localStorage.getItem("beforePage");window.location.href=`/openMarket/${h||""}`,window.location.reload(),localStorage.removeItem("beforePage")})};s.addEventListener("click",v=>{v.preventDefault(),$(s,o)}),o.addEventListener("click",v=>{v.preventDefault(),$(o,s)}),r.addEventListener("submit",v=>{v.preventDefault(),A()})},we=()=>{fetch(`${T}/accounts/logout/`,{method:"post"}).then(e=>{e.ok&&(localStorage.removeItem("user"),localStorage.getItem("beforePage"),window.location.href="/openMarket/#",window.location.reload(),localStorage.removeItem("beforePage"))}).catch(e=>console.error(e.message))},T="https://openmarket.weniv.co.kr",O=document.getElementById("app"),U=JSON.parse(localStorage.getItem("user")),ne=async()=>{const t=window.location.hash.slice(1);if(O.innerHTML="",!t)await Q();else if(t==="login")U||Le();else if(t==="sign-up")U||ye();else if(t==="logout")we();else if(t.includes("details")){const[e,s]=t.split("/");console.log(e,"content"),console.log(e,"content"),await Q(e,s)}else t==="cart"?await Q("cart"):t==="order"?await Q("order"):window.location.href="/openMarket/"};window.addEventListener("hashchange",ne);window.addEventListener("DOMContentLoaded",ne);
