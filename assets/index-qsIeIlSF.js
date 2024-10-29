(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();const V=(t,e,r,s="text")=>{const n=document.createElement("div");n.classList.add("modal");const c=`
        <button type="button" class="close__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        ${s==="text"?`<p class="text-center mb-[30px]">${t}</p>`:`<div class="text-center mb-[30px]">${t}</div>`}
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">${s==="text"?"아니오":"취소"}</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">${s==="text"?"예":"수정"}</button>
        </div>
    `;n.insertAdjacentHTML("beforeend",c);const o=n.querySelector(".close__btn"),a=n.querySelector(".close__btn__second"),_=n.querySelector(".event__btn");return o.addEventListener("click",r),a.addEventListener("click",r),_.addEventListener("click",e),n},ie=()=>`
    <section class="flex items-center gap-[16px] w-full bg-white px-[100px] py-[25px]">
        <a href="/openMarket/">
            <h1 class="w-[80px] h-[24px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-cover">호두 오픈마켓</h1>
        </a>
        <strong class="text-[1.875rem] leading-[40px]">판매자 센터</strong>
      </section>
  `,de=t=>{let e=[];const s={href:t?"#":"#login",text:t?"마이페이지":"로그인",class:t?"myPage":"login",children:t?[{href:"#",text:"마이페이지",class:"myPage"},{href:"#logout",text:"로그아웃",class:"logout"}]:[]},n=[{href:"#cart",text:"장바구니",class:"cart"}],c=[{href:"#seller-center",text:"판매자 센터"}];return n.push(s),c.unshift(s),t&&t.user_type==="SELLER"?e=c:e=n,`
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
                ${e.map(a=>{let _="";return a.text==="판매자 센터"?_=`<a href="${a.href}" class="seller block bg-no-repeat bg-top text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat">${a.text}</a>`:_=`<a href="${a.href}" class="bg-no-repeat bg-top ${a.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px] hover:text-[#21BF48]">${a.text}</a>`,a.children&&a.children.length>0&&(_+=`
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${a.children.map(u=>`<li class="relative z-[1]">
                                <a href="${u.href}" class="block ${u.class} text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${u.text}</a>
                              </li>`).join("")}
                        </ul>
                      `),`
                              <li class="relative nav__list__item group/item">
                                ${_}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    `},pe=()=>{const t=JSON.parse(localStorage.getItem("user"));return{template:window.location.hash.slice(1).includes("seller-center")?ie():de(t),user:t}},ue=()=>{const t=document.createElement("header"),e=pe();let r=null;t.id="header",t.insertAdjacentHTML("beforeend",e.template);const s=t.querySelector(".cart"),n=a=>{a.preventDefault(),r&&r.remove()},c=a=>{a.preventDefault(),localStorage.setItem("beforePage","#cart"),window.location.hash="login"};t.addEventListener("click",a=>{a.target.classList.contains("logout")&&(a.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="logout"),a.target.classList.contains("login")&&(a.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="login")}),s&&s.addEventListener("click",a=>{a.preventDefault(),e.user?window.location.hash="cart":(r=V("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",c,n),D.appendChild(r))});const o=t.querySelectorAll(".myPage");return o.length>0&&o.forEach(a=>a.addEventListener("click",_=>_.preventDefault())),t},W=async()=>{const t=JSON.parse(localStorage.getItem("user")),e=await fetch("https://estapi.openmarket.weniv.co.kr/accounts/token/refresh/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({refresh:t.refresh})});if(e.ok){const r=await e.json();localStorage.setItem("user",JSON.stringify({...t,token:r.access}))}else alert("새로운 토큰을 발급하는 데에 실패했습니다.")},X=t=>{t==="token_not_valid"&&(localStorage.removeItem("user"),alert("토큰이 만료되어 다시 로그인 합니다."),window.location.href="/#login")},_e=async(t="")=>{try{W();const e=await fetch(`${P}/products/${t&&`?page=${t}`}`);if(e.ok){const r=await e.json();return r.code&&X(r.code),r}}catch(e){console.error(e)}},ne=async(t="")=>{const e=await _e(t),s=`
              <section class="grid gap-[50px]">
                ${`<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${e.results.map(o=>{var a,_,u;return`
                            <li class="">
                              <a href="#details/${o==null?void 0:o.id}" class="grid gap-[10px] product__anchor">
                                  <div class="product__img relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${o.image}" alt="${o==null?void 0:o.name}" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${(_=(a=o==null?void 0:o.seller)==null?void 0:a.store_name)==null?void 0:_.replace(/\x08/g,"")}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${(u=o==null?void 0:o.name)==null?void 0:u.replace(/\x08/g,"")}
                                  </h3>
                                  <strong class="text-[1.5rem] leading-[1]">${o.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1rem]">원</span></strong>
                                </a>
                              </li>
                        `}).join("")}
                  </ul>
              `}
                <div class="text-center">
                    <button class="${e.previous?"prev__btn":"text-[#c4c4c4]"} mr-[20px]" type="button">prev</button>
                    <button class="${e.next?"next__btn":"text-[#c4c4c4]"}" type="button">next</button>
                </div>
              </section>
              `,n=e.previous?e.previous.split("page=")[1]:"",c=e.next?e.next.split("page=")[1]:"";return{template:s,prev:n,next:c}},me=async()=>{const t=sessionStorage.getItem("page");let e;t===""||t===null?e=await ne():e=await ne(t);const r=document.createElement("div");let s=0;r.classList.add("inner"),r.insertAdjacentHTML("beforeend",e.template);const n={prev:e.prev?e.prev:"",next:e.next?e.next:1},c=async o=>{s=o;const a=await ne(o);r.innerHTML="",r.insertAdjacentHTML("beforeend",a.template),n.prev=a.prev,n.next=a.next,document.documentElement.scrollTop=0};return r.addEventListener("click",async o=>{o.target.classList.contains("prev__btn")&&(o.preventDefault(),c(n.prev)),o.target.classList.contains("next__btn")&&(o.preventDefault(),c(n.next)),(o.target.parentNode.classList.contains("product__anchor")||o.target.parentNode.classList.contains("product__img"))&&sessionStorage.setItem("page",s===0?"":s)}),r},le=[{data:"button-info",text:"버튼",value:""},{data:"review",text:"리뷰",value:""},{data:"qna",text:"Q&A",value:""},{data:"return-info",text:"반품/교환정보",value:""}],xe=async(t="")=>{W();try{const e=await fetch(`${P}/products/${parseInt(t)}/`);if(e.ok){const r=await e.json();return r.code&&X(r.code),r}}catch(e){console.error(e)}},ge=async t=>{const e=await xe(t),r=JSON.parse(localStorage.getItem("user")),s=` ${r&&r.user_type==="SELLER"?"seller cursor-auto":""} w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center`;return{detail:`
        <section class="">
            <h2 class="tag__hidden">상품 디테일</h2>
            <section class="flex gap-[50px] mb-[140px]">
                <h3 class="tag__hidden">상품 디테일 정보</h3>
                <div class="max-w-[600px] max-h-[600px] grow">
                <img src="${e.image}" alt="${e.name}" class="w-full aspect-square" />
            </div>
            <div class="flex grow flex-col justify-between">
                <div>
                    <p class="mb-[16px] text-[#767676] leading-[1] text-[1.125rem]">
                    ${e==null?void 0:e.seller.store_name}
                    </p>
                    <h4 class="mb-[20px] text-[1.125rem] leading-[2.25rem]">
                        ${e.name}
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
                        <button type="button" class="${r&&r.user_type==="SELLER"?"sellor bg-[#c4c4c4] cursor-auto":"bg-[#21BF48]"} buy__btn flex-[2_3_0%] py-[20px] text-white leading-[20px] rounded-[5px]">바로 구매</button>
                        <button type="button" class="${r&&r.user_type==="SELLER"?"sellor bg-[#c4c4c4] cursor-auto":" bg-[#767676]"} cart__btn flex-[1_3_0%] py-[20px] text-white leading-[20px] rounded-[5px]">장바구니</button>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <h3 class="tag__hidden">상품 부가 정보</h3>
                <ul class="side__info__tab grid grid-cols-4 text-[1.125rem]">
                    ${le.map((c,o)=>(c.value=`${c.text} 정보`,`
                            <li>
                                <button type="button" data-tab="${c.data}" class="detail__tab__btn ${o===0?"active":""} relative w-full leading-[20px] py-[20px]">${c.text}</button>
                            </li>
                        `)).join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `,data:e}},be=async t=>{const e=JSON.parse(localStorage.getItem("user")),r=await ge(t),s=document.createElement("div");s.classList.add("inner"),s.insertAdjacentHTML("beforeend",r.detail);let n=!1,c=null;const o=s.querySelector(".quantity__wrap"),a=s.querySelector(".product__quantity"),_=s.querySelector(".total__quantity"),u=s.querySelector(".total__price"),w=s.querySelector(".buy__btn"),L=s.querySelector(".cart__btn"),i=s.querySelector(".side__info__tab"),b=s.querySelector(".detail__side__infomation");let f=s.querySelector(".side__info__tab button.active");const S=l=>{const x=l.textContent,v=u.textContent.replaceAll(",","");l.classList.contains("seller")||(x==="더하기"?r.data.stock>parseInt(a.textContent)?(a.textContent=++a.textContent,_.textContent=a.textContent,u.textContent=(parseInt(v)+r.data.price).toLocaleString()):alert(`이 상품은 최대 ${r.data.stock}까지 구매 가능합니다.`):x==="빼기"&&1<parseInt(a.textContent)&&(a.textContent=--a.textContent,_.textContent=a.textContent,u.textContent=(parseInt(v)-r.data.price).toLocaleString()))},m=()=>{if(!e){n||(c=V("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",T,j),D.appendChild(c),n=!0);return}if(e.user_type==="SELLER")return;const l=r.data.shipping_method==="PARCEL"?"택배배송":"배달";let x=r.data.shipping_fee;const v=u.textContent.replace(",","");let k=parseInt(v)+x;const A="direct_order",I=0,H={product_id:r.data.product_id,name:r.data.name,image:r.data.image,quantity:a.textContent,store_name:r.data.seller.store_name,shipping_method:l,shipping_fee:x===0?"무료배송":`${x.toLocaleString()}원`,total_price:k},B={orderType:A,total:k,parcel:x,discount:I,products:[H],product_id:r.data.id};sessionStorage.setItem("order",JSON.stringify(B)),window.location.hash="order"},j=()=>{c!==null&&c.remove(),n=!1},T=()=>{e?window.location.hash="cart":(localStorage.setItem("beforePage",window.location.hash),window.location.hash="login")},O=()=>{if(!e){n||(c=V("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",T,j),D.appendChild(c),n=!0);return}if(e.user_type==="SELLER")return;W();const l={product_id:r.data.id,quantity:parseInt(a.textContent)};fetch(`${P}/cart/`,{method:"POST",headers:{Authorization:`Bearer ${e.token}`,"Content-type":"application/json"},body:JSON.stringify(l)}).then(v=>{v.ok&&(n||(c=V("해당 상품이 장바구니에 담겼습니다.<br>장바구니로 이동하시겠습니까?",T,j),D.appendChild(c),n=!0))}).catch(v=>console.error(v))},z=(l,x)=>{let v=l.getAttribute("data-tab");x.classList.contains("active")&&x.classList.remove("active"),!l.classList.contains("active")&&l.classList.add("active"),le.forEach(k=>{k.data===v&&(b.innerHTML=k.value)}),f=l};return o.addEventListener("click",l=>{l.target.nodeName==="BUTTON"&&S(l.target)}),w.addEventListener("click",m),L.addEventListener("click",l=>{l.preventDefault(),O()}),i.addEventListener("click",l=>{l.target.nodeName==="BUTTON"&&(l.preventDefault(),z(l.target,f))}),s},K=()=>{const t=document.createElement("div");return t.classList.add("loading"),t},he=async(t="")=>{try{const e=await fetch(`${P}/products/${parseInt(t)}/`);if(e.ok)return await e.json()}catch(e){console.error(e)}},fe=async(t="")=>{W();const e=JSON.parse(localStorage.getItem("user"));e===null&&(alert("로그인해 주세요."),window.location.hash="#login");try{const r=await fetch(`${P}/cart/${t!==""?`?page=${t}`:""}`,{method:"get",headers:{Authorization:`Bearer ${e.token}`}});if(r.ok){const s=await r.json();return s.code&&X(s.code),s}}catch(r){console.error(r)}},ee=async(t="")=>{const e=await fe(t),r="px-[10px] py-[20px]",s="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",n=`
                        <tr class="flex items-center justify-center">
                            <td class="py-[175px] text-center">
                                <div>
                                    <p class="text-[1.125rem] leading-[20px] mb-[20px]">장바구니에 담긴 상품이 없습니다.</p>
                                    <p class="text-[0.875rem] text-[#767676]">원하는 상품을 장바구니에 담아보세요!</p>
                                </div>
                            </td>
                        </tr>
                      `,c=[{title:"총 상품금액",price:0,className:"total__price"},{title:"상품 할인",price:0,className:"product__discount"},{title:"배송비",price:0,className:"parcel__price"},{title:"결제 예정 금액",price:0,className:"estimated__amount"}];async function o(){const i=[];for(const b of e.results){const f=await he(b.product.id),S={...b,image:f.image,name:f.name,store_name:f.seller.store_name,price:f.price,shipping_fee:f.shipping_fee,shipping_method:f.shipping_method,stock:f.stock};i.push(S)}return i}const _=(await o()).map(i=>{const b=i.quantity===0?"매진":`${(i.price*i.quantity+i.shipping_fee).toLocaleString()}`;return`<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="checkbox__${i.id}">
                <input type="checkbox" class="item__checkbox" value="${i.id}" id="checkbox__${i.id}" />
            </label>
        </td>
        <td class="${r} flex-[2_4_0%]">
            <a href="/openMarket/#details/${i.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img 
                          src="${i.image}" 
                          alt="${i.name}" 
                          class="product__img__${i.id} w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" 
                        />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="store__name__${i.id} text-[#767676] leading-[1] text-[0.875rem]">
                            ${i.store_name}
                            </p>
                            <h4 class="product__name__${i.id} text-[1.125rem] leading-[2.25rem]" data-productId="${i.product.id}" data-active="${i.is_active}">
                                ${i.name}
                            </h4>
                            <strong class="product__price__${i.id} text-[1rem] leading-[1]">${i.price.toLocaleString()}원</strong>
                        </div>
                        <p class="shipping__${i.id} pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">${i.shipping_method==="PARCEL"?"택배배송":"배달"} / ${i.shipping_fee===0?"무료배송":`배송비: ${i.shipping_fee.toLocaleString()}원`}</p>
                    </div>
                </section>
            </a>
        </td>
        <td class="${r} flex-[1_4_0%]">
            <div data-cartId="${i.id}" data-productId="${i.product.id}" class="quantity__wrap cursor-pointer flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${s} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity__${i.id} w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${i.stock}">${i.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${s} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${r} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757]"><span class="totalPrice__${i.id}">${b}</span>원</strong>
            <button type="button" data-cartId="${i.id}" data-productId="${i.product.id}" class="item__order__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
             <button type="button" data-cartId="${i.id}" class="delete__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">삭제</button>
        </td>
    </tr>`}),u=`
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
            ${e.results.length>0?_.join(""):n}
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
        ${c.map((i,b)=>`
                <div class="w-[25%] relative">
                    <strong class="block mb-[12px] ${b===c.length-1?"font-bold":"font-normal"} leading-[20px]">
                        ${i.title}
                    </strong>
                    <p class="leading-[45px] ${b===c.length-1?"text-[2.25rem] text-[#EB5757]":"text-[1.5rem]"}">
                        <em class="${i.className} font-bold">
                            ${i.price}
                        </em>
                        <span class="${b===c.length-1?"text-[1.125rem]":"text-[1rem]"}">원</span>
                    </p>
                </div>
                `).join("")}
        </div>
        <button class="cart__sellect__order__btn block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `,w=e.previous?e.previous.split("page=")[1]:"",L=e.next?e.next.split("page=")[1]:"";return{template:u,prev:w,next:L}},ve=async()=>{const t=JSON.parse(localStorage.getItem("user")),e=document.createElement("div");let r=await ee(),s=null,n=null,c=null,o=!1,a=new Set,_="",u=0,w=0,L=0;e.classList.add("inner"),e.insertAdjacentHTML("beforeend",r.template);const i={prev:r.prev?r.prev:"",next:r.next?r.next:1},b=async l=>{currentPage=l;const x=await ee(l);e.innerHTML="",e.insertAdjacentHTML("beforeend",x.template),i.prev=x.prev,i.next=x.next,document.documentElement.scrollTop=0},f=(l,x,v,k)=>{const A=e.querySelectorAll(".item__checkbox"),I=e.querySelector("#check__all");let H=0,B=0;if(l.value==="check__all")A.forEach(d=>{const y=d.value;!a.has(y)&&l.checked===!0?a.add(y):l.checked===!1&&a.clear(),d.checked=l.checked});else{const d=l.value;l.checked===!0?a.add(d):a.delete(d)}const Y=Array.from(a).reduce((d,y)=>{const h=e.querySelector(`.totalPrice__${y}`),p=e.querySelector(`.shipping__${y}`).textContent.trim().split("배송비:")[1],g=p?p.replace(/[,\s원]/g,""):0,$=parseInt(h.textContent.replace(/[,\s원]/g,"")),E=parseInt(g);return H+=E,B+=$-E,d+$},0);v.textContent=H.toLocaleString(),x.textContent=Y.toLocaleString(),k.textContent=B.toLocaleString(),I.checked=A.length===a.size},S=(l,x,v)=>(x.textContent=w,l.classList.contains("modal__quantity__plus__btn")?v>parseInt(x.textContent)?x.textContent=++w:alert(`이 상품은 최대 ${v}까지 구매 가능합니다.`):l.classList.contains("modal__quantity__minus__btn")&&1<parseInt(x.textContent)&&(x.textContent=--w),w),m=async l=>{let x=new Set,v=0,k=0,A=0,I="";l?(x.add(l),I="cart_order"):(a.forEach(d=>x.add(d)),I="cart_order");const H=[],B=[...x].map(async d=>{const y=e.querySelector(`.product__name__${d}`),h=y.textContent.trim(),q=y.getAttribute("data-active"),p=y.getAttribute("data-productId"),g=e.querySelector(`.product__img__${d}`).getAttribute("src"),$=e.querySelector(`.product__quantity__${d}`),E=$.textContent.trim(),J=$.getAttribute("data-stock"),M=e.querySelector(`.store__name__${d}`).textContent.trim(),U=e.querySelector(`.shipping__${d}`).textContent.split(" / "),re=U[0],Z=U[1].includes("배송비:")?U[1].replace("배송비: ",""):U[1],Q=e.querySelector(`.totalPrice__${d}`),oe=Q.textContent.replace(/[,\s원]/g,"");if(parseInt(E)>J){alert(`${h} 상품의 수량이 재고 보다 많습니다.
수정 후 다시 주문해주세요.`),console.log(d);try{const F=fetch(`${P}/cart/${d}/`,{method:"PUT",headers:{Authorization:`Bearer ${t.token}`,"Content-type":"application/json"},body:JSON.stringify({quantity:J})});if(F.ok){const se=await F.join();$.textContent=se.quantity,window.location.reload()}}catch(F){console.error(F),alert("수량을 수정하는 데에 실패했습니다.")}return}console.log("productId",p);const R={product_id:p,name:h,image:g,quantity:E,store_name:M,shipping_method:re,shipping_fee:Z,total_price:Q.textContent};if(q==="false"&&await fetch(`${P}/cart/${d}/`,{method:"PUT",headers:{Authorization:`Bearer ${t.token}`,"Content-type":"application/json"},body:JSON.stringify({product_id:parseInt(p),quantity:parseInt(E),is_active:!0})}),Z.includes("원")){const F=Z.replace(/[,\s원]/g,""),se=parseInt(F);k+=se}v+=parseInt(oe),H.push(R)});await Promise.all(B);const Y={orderType:I,total:v,parcel:k,discount:A,products:H};if(H.length===0){alert("구매하실 상품을 선택해주세요.");return}sessionStorage.setItem("order",JSON.stringify(Y)),window.location.hash="order"},j=()=>{n!==null&&n.remove(),o=!1},T=()=>{const l=K();e.appendChild(l);const x={product_id:parseInt(u),quantity:w,is_active:!0};fetch(`${P}/cart/${_}/`,{method:"PUT",headers:{Authorization:`Bearer ${t.token}`,"Content-type":"application/json"},body:JSON.stringify(x)}).then(async k=>{if(k.ok){j(),_="",w=0,L=0,u="";const A=await ee();e.innerHTML="",e.insertAdjacentHTML("beforeend",A.template),W()}}).catch(k=>console.error(k)).finally(()=>{l.remove(),o=!1})},O=()=>{const l=K();e.appendChild(l),fetch(`${P}/cart/${s}`,{method:"DELETE",headers:{Authorization:`Bearer ${t.token}`}}).then(async v=>{if(v.ok){j(),alert("해당 상품이 삭제되었습니다.");const k=await ee();e.innerHTML="",e.insertAdjacentHTML("beforeend",k.template)}}).catch(v=>console.error(v)).finally(()=>{l.remove()})},z=l=>{var A;const x=e.querySelector(".estimated__amount"),v=e.querySelector(".parcel__price"),k=e.querySelector(".total__price");if(l.target.classList.contains("prev__btn")&&(l.preventDefault(),b(i.prev)),l.target.classList.contains("next__btn")&&(l.preventDefault(),b(i.next)),l.target.parentNode.classList.contains("quantity__wrap")||l.target.parentNode.classList.contains("quantity__modal")){const I="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",H=`
          <div class="quantity__wrap cursor-pointer flex justify-center">
              <button type="button" class="modal__quantity__minus__btn rounded-[5px_0_0_5px] ${I} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
              <p class="modal__product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">0</p>
              <button type="button" class="modal__quantity__plus__btn rounded-[0_5px_5px_0] ${I} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
      `;if(!o){_=l.target.parentNode.getAttribute("data-cartid"),u=l.target.parentNode.getAttribute("data-productId");const B=e.querySelector(`.product__quantity__${_}`);L=B.getAttribute("data-stock"),w=B.textContent,n=V(H,T,j,"cont"),n.classList.add("quantity__modal"),e.appendChild(n),c=e.querySelector(".modal__product__quantity"),o=!0}S(l.target,c,L)}if(l.target.nodeName==="INPUT"&&f(l.target,x,v,k),l.target.classList.contains("delete__btn")&&(s=l.target.getAttribute("data-cartId"),o||(n=V("상품을 삭제하시겠습니까?",O,j),o=!0,D.appendChild(n))),l.target.classList.contains("item__order__btn")||l.target.classList.contains("cart__sellect__order__btn")){l.preventDefault();const I=(A=l.target)==null?void 0:A.getAttribute("data-cartId");m(I)}};return e.addEventListener("click",z),e},C=(t,e,r="text",s="",n="",c=!0)=>`
      <label for="${t}" class="${n} relative">
          <span>${e}</span>
          <input class="${s}" type="${r}" id="${t}" ${c?"required":""} />
      </label>
    `,N=(t,e=!0,r="")=>`<p class="error__message ${r} ${e?"text-[#eb5757]":"text-[#21BF48]"}">${t}</p>`,ye=()=>{W();const t=sessionStorage.getItem("order"),e=JSON.parse(t),r=e.products,s=[{text:"신용/체크카드",value:"card"},{text:"무통장 입금",value:"deposit"},{text:"휴대폰 결제",value:"phone"},{text:"네이버페이",value:"naverpay"},{text:"카카오페이",value:"kakaopay"}],n="px-[10px] pt-[8px] pb-[17px] text-center",o=`
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
                ${r.map(a=>`<tr class="relative flex items-center border-b border-b-[#c4c4c4]">
          <td class="${n} text-left flex-[2_5_0%]">
              <a href="/openMarket/#details/${a.product_id}">
                  <section class="flex gap-[36px]">
                      <h3 class="tag__hidden">상품 디테일 정보</h3>
                          <img 
                            src="${a.image}" 
                            alt="${a.name}" 
                            class="product__img__${a.cart_item_id} w-full aspect-square max-w-[104px] w-full max-h-[104px] rounded-[5px]" 
                          />
                      <div class="flex grow flex-col gap-[6px] justify-center items-start">
                        <p class="store__name__${a.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                        ${a.store_name}
                        </p>
                        <h4 class="product__name__${a.cart_item_id} text-[1.125rem] leading-[2.25rem]">
                            ${a.name}
                        </h4>
                        <p class="pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">수량 : ${a.quantity}개</p>
                      </div>
                  </section>
              </a>
          </td>
          <td class="${n} flex-[1_5_0%]">
              ${e.discount===0?"-":`${e.total.toLocaleString()}원`}
          </td>
          <td class="${n} flex-[1_5_0%] text-center">
          ${a.shipping_fee}
          </td>
          <td class="${n} font-bold flex-[1_5_0%]">
            ${a.total_price}원
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
          <form name="order__form" class="w-full text-[1.125rem]">
            <section class="mb-[62px]">
                <h3 class="mb-[40px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">배송정보</h3>
                    <section class="form__wrap mb-[40px]">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">주문자 정보</h4>
                        <div>${C("buyerName","이름","text","order__input","order__label")}</div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${C("buyerPhone__first","주문자 휴대폰 첫 번째 3자리","text","order__input","order__label__phone")}
                                    ${C("buyerPhone__middle","주문자 휴대폰 중간번호 3~4자리","text","order__input","order__label__phone")}
                                    ${C("buyerPhone__last","주문자 휴대폰 마지막 4자리","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${C("buyerEmail","이메일","email","order__input","order__label")}
                        </div>
                    </section>
                    <section class="form__wrap">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">배송지 정보</h4>
                        <div>
                            ${C("recieverName","수령인","text","order__input","order__label")}
                        </div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${C("recieverPhone__first","수령인 휴대폰 첫 번째 3자리","text","order__input","order__label__phone")}
                                    ${C("recieverPhone__middle","수령인 휴대폰 중간번호 3~4자리","text","order__input","order__label__phone")}
                                    ${C("recieverPhone__last","수령인 휴대폰 마지막 4자리","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="order__label__address">
                                <strong>배송주소</strong>
                                <div>
                                    <div class="zipCode__wrap">
                                        ${C("recieverZipCode","우편번호","text","order__input")}
                                        <button class="zipCode__btn">우편번호 검색</button>
                                    </div>
                                    ${C("recieverAddress","주소","text","order__input")}
                                    ${C("recieverDetailAddress","상세 주소","text","order__input","",!1)}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${C("recieverMessage","배송 메시지","text","order__input","order__label__message")}
                        </div>
                    </section>
                </section>
                <section class="flex justify-between">
                    <h3 class="tag__hidden">결제수단 및 최종 결제 정보</h3>
                    <section class="max-w-[760px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">결제수단</h4>
                        <div class="payment">
                            ${s.map(a=>`
                                    <label for="${a.value}">
                                        <input 
                                            type="radio" 
                                            name="payment__method"
                                            value="${a.value}"
                                            id="${a.value}" 
                                        />
                                        <span>${a.text}</span>
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
                                <span class="order__checkbox__text">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</span>
                              </label>
                              <button type="submit" class="order__submit__btn">결제하기</button>
                            </div>
                        </div>
                    </section>
                </section>
            </form>
      </section>
    `;return e.orderType==="cart_order"?{template:o,total:e.total,orderType:e.orderType}:{template:o,orderType:e.orderType,total:e.total,quantity:e.products[0].quantity,productId:e.products[0].product_id}},$e=async()=>{const t=document.createElement("div");let e=ye(),r=null,s=!1,n=!1,c=!1,o="",a=[];t.classList.add("inner"),t.insertAdjacentHTML("beforeend",e.template);const _=t.querySelector("#buyerName"),u=t.querySelector("#buyerPhone__first"),w=t.querySelector("#buyerPhone__middle"),L=t.querySelector("#buyerPhone__last"),i=t.querySelector("#buyerEmail"),b=t.querySelector("#recieverName"),f=t.querySelector("#recieverPhone__first"),S=t.querySelector("#recieverPhone__middle"),m=t.querySelector("#recieverPhone__last"),j=t.querySelector(".zipCode__btn"),T=t.querySelector("#recieverZipCode"),O=t.querySelector("#recieverAddress"),z=t.querySelector("#recieverDetailAddress"),l=t.querySelector("#recieverMessage"),x=t.querySelector(".payment"),v=t.querySelector(".order__checkbox__text"),k=t.querySelector(".order__submit__btn");u.setAttribute("maxlength","3"),w.setAttribute("maxlength","4"),L.setAttribute("maxlength","4"),f.setAttribute("maxlength","3"),S.setAttribute("maxlength","4"),m.setAttribute("maxlength","4");const A=[{name:"buyerName",tag:_,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z\uac00-\ud7af]{2,}$/,regexErrorMessage:"입력에는 최소 2자 이상, 문자만 입력이 가능합니다."},{name:"buyerPhone__last",tag:L,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{4}$/,regexErrorMessage:"입력에는 숫자 4자리만 입력이 가능합니다."},{name:"buyerPhone__middle",tag:w,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 3~4자리만 입력이 가능합니다."},{name:"buyerPhone__first",tag:u,emptyErrorMessage:"영역이 비어있습니다.",regex:/^01[016789]$/,regexErrorMessage:"입력에는 010,016,017,018,019만 입력이 가능합니다."},{name:"buyerEmail",tag:i,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,regexErrorMessage:"이메일을 다시 확인해주세요."},{name:"recieverName",tag:b,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z\uac00-\ud7af]{2,}$/,regexErrorMessage:"입력에는 최소 2자 이상, 문자만 입력이 가능합니다."},{name:"recieverPhone__last",tag:m,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 4자리만 입력이 가능합니다."},{name:"recieverPhone__middle",tag:S,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 3~4자리만 입력이 가능합니다."},{name:"recieverPhone__first",tag:f,emptyErrorMessage:"영역이 비어있습니다.",regex:/^01[016789]$/,regexErrorMessage:"입력에는 010,016,017,018,019만 입력이 가능합니다."},{name:"zipCode",tag:T,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{5}$/,regexErrorMessage:"입력에는 숫자 5자리만 입력이 가능합니다."},{name:"recieverAddress",tag:O,emptyErrorMessage:"영역이 비어있습니다.",regex:/.*$/s,regexErrorMessage:"입력에 사용 불가능한 문자가 포함되어 있습니다."},{name:"recieverMessage",tag:l,emptyErrorMessage:"영역이 비어있습니다.",regex:/.*$/s,regexErrorMessage:""}],I=(p,g,$)=>{let E=null;return p.parentNode.textContent.includes("휴대폰")||p.parentNode.textContent.includes("주소")?(E=N(`${p.parentNode.textContent}${g}`,!0,$),p.parentNode.parentNode.parentNode.insertAdjacentHTML("afterend",E)):p.parentNode.textContent.includes("우편번호")?(E=N(`${p.parentNode.textContent}${g}`,!0,$),p.parentNode.parentNode.insertAdjacentHTML("afterend",E)):(E=N(`${p.parentNode.textContent}${g}`,!0,$),p.parentNode.insertAdjacentHTML("afterend",E)),E},H=(p,g,$)=>{const E=t.querySelector(`.errorMessage__regex__${g.name}`),J=t.querySelector(`.errorMessage__empty__${$}`);E&&E.remove(),g.regex.test(p.value)?E&&E.remove():(I(p,g.regexErrorMessage,`errorMessage__regex__${g.name}`),p.focus()),J&&p.value!==""&&J.remove(),c=!0},B=()=>{a.length>0&&a.forEach((p,g)=>{const $=t.querySelector(`.errorMessage__empty__${g}`);$&&($.remove(),a=a.filter(E=>!$.classList.contains(E)))}),A.forEach((p,g)=>{let $=null;(!p||p.tag.value==="")&&($=I(p.tag,p.emptyErrorMessage,`errorMessage__empty__${g}`)),$?(a.push(`errorMessage__empty__${g}`),n=!1):n=!0})},Y=p=>{const g=p.target;g.nodeName==="INPUT"&&(o=g.value)},d=p=>{p.preventDefault(),r=V("추후 업데이트 예정입니다.",q,q),s||t.appendChild(r)},y=()=>{const p=K(),g=e.orderType,$=b.value,E=`${f.value}${S.value}${m.value}`,J=`${T.value}, ${O.value}${z.value!==""?` ${z.value}`:""}`,M=l.value;parseInt(e==null?void 0:e.productId);const U=parseInt(e==null?void 0:e.quantity),re=e.total;D.appendChild(p);const Z={total_price:re,order_type:g,receiver:$,receiver_phone_number:E,address:J,address_message:M,payment_method:o},Q=JSON.parse(sessionStorage.getItem("order"));if(g==="cart_order"){const R=[];Q.products.forEach(F=>R.push(F.product_id)),Z.cart_items=R}else Z.product=Q.product_id,Z.quantity=U;fetch(`${P}/order/`,{method:"post",headers:{Authorization:`Bearer ${ae.token}`,"Content-type":"application/json"},body:JSON.stringify(Z)}).then(async R=>{if(R.ok){const F=await R.json();F.code&&X(F.code),alert("주문을 완료했습니다."),window.location.hash="",W()}}).catch(R=>console.error(R.message)).finally(()=>{p.remove()})},h=p=>{if(p.preventDefault(),!k.classList.contains("on")){alert("주문 내용 확인 및 정보 제공 등에 동의해주세요.");return}if(B(),!!n&&c){if(!o){alert("결제수단을 선택해주세요.");return}y()}},q=()=>{r!==null&&r.remove(),s=!1};return A.forEach((p,g)=>{p.tag.addEventListener("change",$=>{H($.target,p,g)})}),j.addEventListener("click",d),v.addEventListener("click",()=>{t.querySelector("#order__check").checked?k.classList.remove("on"):k.classList.add("on")}),x.addEventListener("click",Y),k.addEventListener("click",h),t},we=()=>{const t=[{text:"호두샵 소개",href:"#"},{text:"이용약관",href:"#"},{text:"개인정보처리방침",href:"#"},{text:"전자금융거래약관",href:"#"},{text:"청소년보호정책",href:"#"},{text:"제휴문의",href:"#"}],e=[{text:"호두샵 인스타그램",href:"#",image_url:"/openMarket/images/icon-insta.svg"},{text:"호두샵 페이스북",href:"#",image_url:"/openMarket/images/icon-fb.svg"},{text:"호두샵 유튜브",href:"#",image_url:"/openMarket/images/icon-yt.svg"}];return`
        <div class="inner">
            <section class="mb-[30px] flex justify-between items-center pb-[22px] border-b border-b-[#c4c4c4]">
                <h2 class="tag__hidden">호두샵 약관 관련 리스트 및 sns 리스트</h2>
                <ul class="terms__list flex gap-[32px]">
                    ${t.map(s=>`
                                <li class="text-[0.875rem] ${s.text==="개인정보처리방침"?"font-bold":""}">
                                    <a href="${s.href}">${s.text}</a>
                                </li>
                                `).join("")}
                </ul>
                <ul class="flex gap-[14px]">
                    ${e.map(s=>`
                                <li>
                                    <a href="${s.href}" class="block indent-[-9999px] w-[32px] h-[32px]" style="background:url('${s.image_url}') no-repeat center center;">${s.text}</a>
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
    `},Le=()=>{const t=document.createElement("footer");return t.insertAdjacentHTML("beforeend",we()),t.id="footer",t},Se=(t,e,r,s=0)=>`
        <h2 class="tag__hidden">호두샵 메인페이지 배너</h2>
        <div class="slider relative ${r}">
            ${t.map((c,o)=>`
                    <div class="slide absolute lef-0 top-0 ${o===s?"opacity-100":"opacity-0"} transition-all duration-300">
                        ${e?`<a href="${c.link}">`:""}
                            <img class="" src="${c.imageUrl}" alt="${c.text}" />
                        ${e?"</a>":""}
                    </div>
                `).join("")}
            <button class="slider__prev__btn">이전</button>
            <button class="slider__next__btn">다음</button>
        </div>
    `,ke=(t,e=!0,r="")=>{let s=0;const n=Se(t,e,r,s),c=document.createElement("section");c.classList.add("banner"),c.insertAdjacentHTML("beforeend",n);const o=c.querySelectorAll(".slide"),a=()=>{o.forEach((u,w)=>{u.classList.toggle("opacity-100",w===s),u.classList.toggle("z-[1]",w===s),u.classList.toggle("opacity-0",w!==s),u.classList.toggle("z-[0]",w!==s)})},_=u=>{u.textContent==="이전"?s=s>0?s-1:t.length-1:s=s>=t.length-1?0:s+1,a()};return a(),c.addEventListener("click",u=>{u.target.nodeName==="BUTTON"&&_(u.target)}),c},Ee=(t="",e="")=>{let r="";return e==="make-product"?r='<h2 class="col-span-2 py-[42px]">상품 등록</h2>':r=`
            <div class="w-full py-[42px] flex justify-between items-center">
                <div class="text-[2.25rem] flex items-center">
                    <h2 class="sans-bold">대시보드</h2>
                    <strong class="font-[400] ml-[16px] text-[#21BF48]">${t}</strong>
                </div>
                <button class="upload__btn flex items-center gap-[8px] block leading-[24px] text-[1.125rem] rounded-[5px] py-[15px] px-[20px] text-white bg-[#21BF48]">상품 업로드</button>
            </div>
        `,r},Me=(t="",e="")=>{const r=document.createElement("div"),s=Ee(t,e);return r.insertAdjacentHTML("beforeend",s),r.classList.add("col-span-2"),r},qe=(t,e,r)=>`
        <li class="seller__nav__item">
            <a href="#${t}" class="block leading-[20px] p-[20px_15px] hover:bg-[#EFFFF3] rounded-[5px] ${r?"text-white bg-[#21BF48]":""}">${e}</a>
        </li>
    `,Ce=(t="")=>`
                <ul class="seller__nav__list grid gap-[10px] max-h-[calc(100vh-220px)]">
                    ${[{href:"seller-center",text:"판매중인 상품"},{href:"seller-center/order",text:"주문/배송"},{href:"seller-center/review",text:"문의/리뷰"},{href:"seller-center/chart",text:"통계"},{href:"seller-center/setting",text:"스토어 설정"}].map(s=>qe(s.href,s.text,t===s.href)).join("")}
                </ul>
    `,Ne=t=>{const e=Ce(t),r=document.createElement("nav");return r.classList.add("seller__nav"),r.insertAdjacentHTML("beforeend",e),r},je=(t,e)=>{const r=window.location.hash.slice(1),s=document.createElement("div");return s.classList.add("seller__template"),s.appendChild(Me(e)),s.appendChild(Ne(r)),s.appendChild(t),s},Ie=async(t="")=>{const e=JSON.parse(localStorage.getItem("user"));try{const r=await fetch(`${P}/seller/${t&&`?page=${t}`}`,{headers:{Authorization:`Bearer ${e.token}`}});if(r.ok){const s=await r.json();return s.code&&X(s.code),s}}catch(r){console.error(r)}},Ae=async t=>{const e=await Ie(t);console.log(e);const r="py-[16px] px-[30px] bg-white text-center";return{template:`
    <tbody>
    ${e.results.map(n=>`<tr class="border-t border-b border-t-[#c4c4c4] border-b-[#c4c4c4]">
              <td class="${r}">
                <a href="#details/${n.product_id}" class="flex items-center gap-[30px]">
                  <img class="block w-[70px] h-[70px] rounded-full" src="${n.image}" alt="${n.name}" />
                <div class="text-left">
                  <h4 class="text-[1.125rem] mb-[10px] leading-[22px]">${n.name}</h4>
                  <data class="text-[#767676] leading-[20px]" value="${n.stock}">재고: ${n.stock}</data>
                </div>
                </a>
              </td>
              <td class="${r}">
                ${n.price.toLocaleString()}원
              </td>
              <td class="${r}">
                <button type="button" class="rounded-[5px] w-[80px] leading-[20px] py-[10px] text-center text-white bg-[#21BF48]">수정</button>
              </td>
              <td class="${r}">
                <button type="button" class="delete__btn rounded-[5px] w-[80px] leading-[20px] py-[10px] text-center text-[#767676] border border-[#c4c4c4] hover:text-black hover:border-[#767676]" data-ProductId="${n.product_id}">삭제</button>
              </td>
          </tr>`).join("")}
    </tbody>
  `,next:e.next,previous:e.previous}},Pe=["상품 정보","판매 가격","수정","삭제"],te=async t=>{const e=await Ae(t),r=`
    <h3 class="tag__hidden">상품 리스트</h3>
    <table class="w-full border-collapse">
      <colgroup>
        <col class="w-[50%]" />
        <col class="w-[calc(50%-280px)]" />
        <col class="w-[140px]" />
        <col class="w-[140px]" />
      </colgroup>
      <thead class="border-b border-b-[#c4c4c4]">
        <tr>
          ${Pe.map(c=>'<th class="py-[20px] leading-[20px] text-[1.125rem] bg-white">상품 정보</th>').join("")}
        </tr>
      </thead>
      ${e.template}
    </table>
    <div class="text-center my-[30px]">
      <button class="${e.previous?"prev__btn":"text-[#c4c4c4]"} mr-[20px]" type="button">prev</button>
      <button class="${e.next?"next__btn":"text-[#c4c4c4]"}" type="button">next</button>
    </div>
  `,s=e.previous?e.previous.split("page=")[1]:"",n=e.next?e.next.split("page=")[1]:"";return{template:r,prev:s,next:n}},He=async()=>{const t=JSON.parse(localStorage.getItem("user")),e=sessionStorage.getItem("page"),r=document.createElement("section");r.classList.add("min-h-[884px]"),r.classList.add("bg-[#F2F2F2]"),r.classList.add("border"),r.classList.add("border-[#c4c4c4]"),r.classList.add("rounded-[5px]"),r.classList.add("overflow-hidden");let s,n=e||"",c=null,o=!1,a=null;e===""||e===null?s=await te():s=await te(e),r.insertAdjacentHTML("beforeend",s.template);const _={prev:s.prev?s.prev:"",next:s.next?s.next:1},u=async b=>{n=b;const f=await te(b);r.innerHTML="",r.insertAdjacentHTML("beforeend",f.template),_.prev=f.prev,_.next=f.next,document.documentElement.scrollTop=0},w=()=>{sessionStorage.setItem("page",n===0?"":n)},L=()=>{const b=K();r.appendChild(b),fetch(`${P}/products/${a}`,{method:"DELETE",headers:{Authorization:`Bearer ${t.token}`}}).then(async S=>{if(S.ok){i(),alert("해당 상품이 삭제되었습니다.");const m=await te(n);r.innerHTML="",r.insertAdjacentHTML("beforeend",m.template)}}).catch(S=>console.error(S)).finally(()=>{b.remove()})},i=()=>{c!==null&&c.remove(),o=!1};return r.addEventListener("click",async b=>{b.target.classList.contains("prev__btn")&&(b.preventDefault(),u(_.prev),w()),b.target.classList.contains("next__btn")&&(b.preventDefault(),u(_.next),w()),b.target.classList.contains("delete__btn")&&(a=b.target.getAttribute("data-ProductId"),o||(c=V("상품을 삭제하시겠습니까?",L,i),o=!0,r.appendChild(c)))}),r},G=async(t="",e="")=>{const r=[{imageUrl:"https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",link:"/openMarket/#",text:"호두샵 배너 이미지1"},{imageUrl:"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",link:"",text:"호두샵 배너 이미지2"},{imageUrl:"https://images.unsplash.com/photo-1653152748678-6d843daabac5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",link:"",text:"호두샵 배너 이미지3"}],s=document.createElement("main"),n=K(),c=ke(r,!1,"max-h-[500px] h-full overflow-hidden");if(D.appendChild(n),t==="")s.appendChild(c),s.appendChild(await me());else if(t==="details")s.appendChild(await be(e));else if(t==="cart")s.appendChild(await ve());else if(t==="order")s.appendChild(await $e());else if(t==="seller-center"){const o=He();s.appendChild(je(await o,"백엔드글로벌"))}return t!==""&&!t.includes("seller-center")?(s.classList.add("m-[80px_0_180px]"),c&&c.remove()):s.classList.add("m-[0_0_180px]"),D.innerHTML="",D.appendChild(ue()),D.appendChild(s),D.appendChild(Le()),n.remove(),D},Te=()=>{const t=["010","011","016","017","018","019"];return`
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
                        ${C("userId","아이디","text","join__input","flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${C("userPassword","비밀번호","password","join__input")}
                    ${C("userPassword-check","비밀번호 재확인","password","join__input")}
                    ${C("userName","이름","text","join__input")}
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code">${t[0]}</p>
                            <ul class="select__list">${t.map(r=>`<li class="select__option" data-value="${r}">${r}</li>`).join("")}</ul>
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
        `},Be=()=>{const t=document.getElementById("app");t.innerHTML=Te(),JSON.parse(localStorage.getItem("user"));let e="BUYER";const r=document.querySelector("button.customer"),s=document.querySelector("button.seller"),n=document.getElementById("userId"),c=document.querySelector(".id__check__btn"),o=document.getElementById("userPassword"),a=document.getElementById("userPassword-check"),_=document.getElementById("userName"),u=document.querySelector(".selected__code"),w=document.querySelector(".select__list"),L=document.getElementById("userPhoneNumber-middle"),i=document.getElementById("userPhoneNumber-last");document.getElementById("userStoreName");const b=document.getElementById("join__checkbox"),f=document.querySelector(".join__btn"),S=document.querySelector(".user__section");let m=null,j=null,T,O=!1,z,l="";const x=(d,y,h)=>{y.classList.remove("active"),!d.classList.contains("active")&&d.classList.add("active"),S.classList.remove(e.toLowerCase()),S.classList.add(h.toLowerCase()),e=h,n.value="",o.value="",m!==null&&m.remove(),m=null},v=(d,y,h)=>{x(d,y,h);let q=document.createElement("div"),p=`
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${C("userBusinessNumber","사업자 등록번호","number","join__input","flex-1")}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${C("userStoreName","스토어 이름","text","join__input")}
    `;q.classList.add("user__seller__form__add__wrap"),q.insertAdjacentHTML("beforeend",p),S.appendChild(q),j=document.querySelector(".user__seller__form__add__wrap")},k=()=>{let d={};m!==null&&m.remove(),fetch(`${P}/accounts/validate-username/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({username:n.value})}).then(async h=>{const q=await h.json();return h.ok?(d={error:!1,text:q.message},n.classList.contains("error")&&n.classList.remove("error"),z=n.value,T=!0):(d={error:!0,text:q.error},n.value="",n.focus(),!n.classList.contains("error")&&n.classList.add("error"),T=!1),d}).then(h=>{const q=n.value;/^[a-zA-Z0-9]{0,20}$/.test(q)?(n.classList.contains("error")&&n.classList.remove("error"),c.parentNode.insertAdjacentHTML("afterend",N(h.text,h.error))):(!n.classList.contains("error")&&n.classList.add("error"),c.parentNode.insertAdjacentHTML("afterend",N("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.")),m=document.querySelector(".error__message")),m=document.querySelector(".error__message")}).catch(h=>{console.error(h)})},A=()=>{const d=o.value,y=/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]?)[a-zA-Z\d\W_]{8,}$/;m!==null&&m.remove(),y.test(d)?(o.classList.contains("error")&&o.classList.remove("error"),!o.classList.contains("check")&&o.classList.add("check")):(o.parentNode.insertAdjacentHTML("afterend",N("8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.")),!o.classList.contains("error")&&o.classList.add("error"),o.classList.contains("check")&&o.classList.remove("chcek"),m=document.querySelector(".error__message"),o.focus())},I=()=>{const d=o.value,y=a.value;m!==null&&m.remove(),d!==y?(!a.classList.contains("error")&&a.classList.add("error"),a.classList.contains("check")&&a.classList.remove("check"),a.insertAdjacentHTML("afterend",N("비밀번호가 일치하지 않습니다.")),a.focus(),m=document.querySelector(".error__message")):(a.classList.contains("error")&&a.classList.remove("error"),!a.classList.contains("check")&&a.classList.add("check"))},H=d=>{const y=d.getAttribute("data-value");y&&(u.textContent=y,w.parentNode.classList.remove("view"))},B=()=>{m!==null&&m.remove();let d={};const y=/[0-9]{10}/,h=S.querySelector("#userBusinessNumber"),q=h.value;if(!y.test(q)){h.parentNode.parentNode.insertAdjacentHTML("afterend",N("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")),m=document.querySelector(".error__message");return}fetch(`${P}/accounts/signup/valid/company_registration_number/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({company_registration_number:h.value})}).then(async g=>{const $=await g.json();return g.ok?(d={error:!1,text:$.Success},h.classList.contains("error")&&h.classList.remove("error"),l=h.value,O=!0):(d={error:!0,text:$.FAIL_Message},h.value="",h.focus(),!h.classList.contains("error")&&h.classList.add("error"),O=!1),d}).then(g=>{h.classList.contains("error")&&h.classList.remove("error"),h.parentNode.parentNode.insertAdjacentHTML("afterend",N(g.text,g.error)),m=document.querySelector(".error__message")}).catch(g=>{console.error(g)})},Y=async d=>{var J;let y={};const h=n.value,q=o.value;a.value;const p=_.value,g=`${u.textContent}${L.value}${i.value}`,$=/^1[0-9]{8,9}$/;if(m!==null&&m.remove(),!T){c.parentNode.insertAdjacentHTML("afterend",N("아이디 중복 확인이 필요합니다.")),!n.classList.contains("error")&&n.classList.add("error"),m=document.querySelector(".error__message");return}if(z!==n.value){c.parentNode.insertAdjacentHTML("afterend",N("중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다.")),!n.classList.contains("error")&&n.classList.add("error"),m=document.querySelector(".error__message"),T=!1;return}if(!$.test(parseInt(g))){i.parentNode.insertAdjacentHTML("afterend",N("핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다.")),m=document.querySelector(".error__message");return}if(!b.checked){b.parentNode.insertAdjacentHTML("afterend",N("약관에 동의해야 회원 가입이 가능합니다.")),m=document.querySelector(".error__message");return}if(d==="BUYER")y={username:h,password:q,phone_number:g,name:p};else{const M=S.querySelector("#userBusinessNumber").value,U=S.querySelector("#userStoreName").value;if(!O){userBusinessNumber.parentNode.parentNode.insertAdjacentHTML("afterend",N("사업자등록번호 인증이 필요합니다."));return}if(M!==l){M.parentNode.parentNode.insertAdjacentHTML("afterend",N("인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다.")),!M.classList.contains("error")&&M.classList.add("error"),m=document.querySelector(".error__message"),O=!1;return}y={username:h,password:q,phone_number:g,name:p,company_registration_number:M,store_name:U}}const E=await fetch(`${P}/accounts/${e==="BUYER"?"buyer":"seller"}/signup/`,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(y)});if(E.ok)alert("회원가입이 정상적으로 처리됐습니다."),window.location.href="/openMarket/#login";else{const M=await E.json();(M==null?void 0:M.phone_number)!==void 0?(i.parentNode.insertAdjacentHTML("afterend",N(M.phone_number.join(""))),m=document.querySelector(".error__message")):(M==null?void 0:M.store_name)!==void 0&&(S.querySelector("#userStoreName").parentNode.insertAdjacentHTML("afterend",N((J=M==null?void 0:M.store_name)==null?void 0:J.join(""))),m=document.querySelector(".error__message"))}};r.addEventListener("click",d=>{d.preventDefault(),j!==null&&j.remove(),x(r,s,"BUYER")}),s.addEventListener("click",d=>{d.preventDefault(),v(s,r,"SELLER")}),c.addEventListener("click",d=>{d.preventDefault(),k()}),o.addEventListener("change",A),a.addEventListener("change",I),u.addEventListener("click",()=>u.parentNode.classList.toggle("view")),w.addEventListener("click",d=>{H(d.target)}),S.addEventListener("click",async d=>{d.preventDefault(),d.target.classList.contains("busness__number__check__btn")&&await B()}),f.addEventListener("click",async d=>{d.preventDefault(),await Y(e)})},De=()=>`
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
      `,Oe=()=>{const t=document.getElementById("app");t.innerHTML=De();let e="BUYER";const r=document.querySelector("button.customer"),s=document.querySelector("button.seller"),n=document.querySelector(".user__form"),c=document.querySelector(".user__section"),o=document.getElementById("userId"),a=document.getElementById("userPassword");let _=null;const u=(L,i)=>{const b=i.getAttribute("data-type").toLowerCase(),f=L.getAttribute("data-type");i.classList.remove("active"),!L.classList.contains("active")&&L.classList.add("active"),c.classList.remove(b),c.classList.add(f.toLowerCase()),e=f,o.value="",a.value="",_!==null&&_.remove(),_=null},w=async()=>{_!==null&&_.remove();const L=o.value,i=a.value,b={username:L,password:i,login_type:e};try{const f=await fetch(`${P}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});if(f.ok){const S=await f.json(),m={user_type:S.user.user_type,token:S.access,refresh:S.refresh,cart:[]};localStorage.setItem("user",JSON.stringify(m));const j=localStorage.getItem("beforePage");window.location.href=`/openMarket/${j||""}`,localStorage.removeItem("beforePage")}else a.insertAdjacentHTML("afterend",N("아이디 또는 비밀번호가 일치하지 않습니다.")),_=document.querySelector(".error__message")}catch(f){console.error(f.message)}};r.addEventListener("click",L=>{L.preventDefault(),u(r,s)}),s.addEventListener("click",L=>{L.preventDefault(),u(s,r)}),n.addEventListener("submit",L=>{L.preventDefault(),w()})},Fe=()=>{localStorage.removeItem("user"),window.location.href="/openMarket/#",window.location.reload(),localStorage.removeItem("beforePage")},P="https://estapi.openmarket.weniv.co.kr",D=document.getElementById("app"),ae=JSON.parse(localStorage.getItem("user")),ce=async()=>{const t=window.location.hash.slice(1);if(D.innerHTML="",!t)await G();else if(t==="login")ae||Oe();else if(t==="sign-up")ae||Be();else if(t==="logout")Fe();else if(t.includes("details")){const[e,r]=t.split("/");await G(e,r)}else t==="cart"?await G("cart"):t==="order"?await G("order"):t.includes("seller-center")?t.includes("product-listing")?await G():await G("seller-center"):window.location.href="/openMarket/"},Je=()=>{ce(),window.addEventListener("hashchange",ce)};window.addEventListener("DOMContentLoaded",Je);
