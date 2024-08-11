(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const W=(t,e,n,a="text")=>{const r=document.createElement("div");r.classList.add("modal");const o=`
        <button type="button" class="close__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        ${a==="text"?`<p class="text-center mb-[30px]">${t}</p>`:`<div class="text-center mb-[30px]">${t}</div>`}
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">${a==="text"?"아니오":"취소"}</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">${a==="text"?"예":"수정"}</button>
        </div>
    `;r.insertAdjacentHTML("beforeend",o);const c=r.querySelector(".close__btn"),s=r.querySelector(".close__btn__second"),b=r.querySelector(".event__btn");return c.addEventListener("click",n),s.addEventListener("click",n),b.addEventListener("click",e),r},ne=()=>{const t=JSON.parse(localStorage.getItem("user"));let e=[];const a={href:t?"#":"#login",text:t?"마이페이지":"로그인",class:t?"myPage":"login",children:t?[{href:"#",text:"마이페이지",class:"myPage"},{href:"#logout",text:"로그아웃",class:"logout"}]:[]},r=[{href:"#cart",text:"장바구니",class:"cart"}],o=[{href:"#seller-center",text:"판매자 센터"}];return r.push(a),o.unshift(a),t&&t.user_type==="SELLER"?e=o:e=r,{template:`
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
                ${e.map(s=>{let b="";return s.text==="판매자 센터"?b=`<a href="${s.href}" class="seller block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat bg-top">${s.text}</a>`:b=`<a href="${s.href}" class="nav__list__item ${s.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px] hover:text-[#21BF48]">${s.text}</a>`,s.children&&s.children.length>0&&(b+=`
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${s.children.map(x=>`<li class="relative z-[1]">
                                <a href="${x.href}" class="block ${x.class} text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${x.text}</a>
                              </li>`).join("")}
                        </ul>
                      `),`
                              <li class="relative nav__list__item bg-no-repeat bg-top group/item">
                                ${b}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    `,user:t}},ae=()=>{const t=document.createElement("header"),e=ne();let n=null;t.id="header",t.insertAdjacentHTML("beforeend",e.template);const a=t.querySelector(".cart"),r=s=>{s.preventDefault(),n&&n.remove()},o=s=>{s.preventDefault(),localStorage.setItem("beforePage","#cart"),window.location.hash="login"};t.addEventListener("click",s=>{s.target.classList.contains("logout")&&(s.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="logout"),s.target.classList.contains("login")&&(s.preventDefault(),localStorage.setItem("beforePage",window.location.hash),window.location.hash="login")}),a.addEventListener("click",s=>{s.preventDefault(),e.user?window.location.hash="cart":(n=W("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",o,r),O.appendChild(n))});const c=t.querySelectorAll(".myPage");return c.length>0&&c.forEach(s=>s.addEventListener("click",b=>b.preventDefault())),t},oe=async(t="")=>{try{const e=await fetch(`${H}/products/${t&&`?page=${t}`}`);if(e.ok)return await e.json()}catch(e){console.error(e)}},X=async(t="")=>{const e=await oe(t),a=`
              <section class="grid gap-[50px]">
                ${`<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${e.results.map(c=>`
                            <li class="">
                              <a href="#details/${c.product_id}" class="grid gap-[10px] product__anchor">
                                  <div class="product__img relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${c.image}" alt="${c.product_name}" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${c.store_name.replace(/\x08/g,"")}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${c.product_name.replace(/\x08/g,"")}
                                  </h3>
                                  <strong class="text-[1.5rem] leading-[1]">${c.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1rem]">원</span></strong>
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
              `,r=e.previous?e.previous.split("page=")[1]:"",o=e.next?e.next.split("page=")[1]:"";return{template:a,prev:r,next:o}},ce=async()=>{const t=sessionStorage.getItem("page");let e;t===""||t===null?e=await X():e=await X(t);const n=document.createElement("div");let a=0;n.classList.add("inner"),n.insertAdjacentHTML("beforeend",e.template);const r={prev:e.prev?e.prev:"",next:e.next?e.next:1},o=async c=>{a=c;const s=await X(c);n.innerHTML="",n.insertAdjacentHTML("beforeend",s.template),r.prev=s.prev,r.next=s.next,document.documentElement.scrollTop=0};return n.addEventListener("click",async c=>{c.target.classList.contains("prev__btn")&&(c.preventDefault(),o(r.prev)),c.target.classList.contains("next__btn")&&(c.preventDefault(),o(r.next)),(c.target.parentNode.classList.contains("product__anchor")||c.target.parentNode.classList.contains("product__img"))&&sessionStorage.setItem("page",a===0?"":a)}),n},se=[{data:"button-info",text:"버튼",value:""},{data:"review",text:"리뷰",value:""},{data:"qna",text:"Q&A",value:""},{data:"return-info",text:"반품/교환정보",value:""}],le=async(t="")=>{try{const e=await fetch(`${H}/products/${parseInt(t)}/`);if(e.ok)return await e.json()}catch(e){console.error(e)}},ie=async t=>{const e=await le(t),n="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center";return{detail:`
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
                        <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${n} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                        <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">${e.stock===0?0:1}</p>
                        <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${n} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
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
                    ${se.map((r,o)=>(r.value=`${r.text} 정보`,`
                            <li>
                                <button type="button" data-tab="${r.data}" class="detail__tab__btn ${o===0?"active":""} relative w-full leading-[20px] py-[20px]">${r.text}</button>
                            </li>
                        `)).join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `,data:e}},de=async t=>{const e=JSON.parse(localStorage.getItem("user")),n=await ie(t),a=document.createElement("div");a.classList.add("inner"),a.insertAdjacentHTML("beforeend",n.detail);let r=!1,o=null;const c=a.querySelector(".quantity__wrap"),s=a.querySelector(".product__quantity"),b=a.querySelector(".total__quantity"),x=a.querySelector(".total__price"),k=a.querySelector(".buy__btn"),w=a.querySelector(".cart__btn"),i=a.querySelector(".side__info__tab"),L=a.querySelector(".detail__side__infomation");let y=a.querySelector(".side__info__tab button.active");const q=l=>{const u=l.textContent,f=x.textContent.replaceAll(",","");u==="더하기"?n.data.stock>parseInt(s.textContent)?(s.textContent=++s.textContent,b.textContent=s.textContent,x.textContent=(parseInt(f)+n.data.price).toLocaleString()):alert(`이 상품은 최대 ${n.data.stock}까지 구매 가능합니다.`):u==="빼기"&&1<parseInt(s.textContent)&&(s.textContent=--s.textContent,b.textContent=s.textContent,x.textContent=(parseInt(f)-n.data.price).toLocaleString())},_=()=>{const l=n.data.shipping_method==="PARCEL"?"택배배송":"배달";let u=n.data.shipping_fee;const f=x.textContent.replace(",","");let $=parseInt(f)+u;const j="direct_order",A=0,I={product_id:n.data.product_id,product_name:n.data.product_name,image:n.data.image,quantity:s.textContent,store_name:n.data.store_name,shipping_method:l,shipping_fee:u===0?"무료배송":`${u.toLocaleString()}원`,total_price:$},T={orderType:j,total:$,parcel:u,discount:A,products:[I]};sessionStorage.setItem("order",JSON.stringify(T)),window.location.hash="order"},P=()=>{o!==null&&o.remove(),r=!1},B=()=>{e?window.location.hash="cart":(localStorage.setItem("beforePage",window.location.hash),window.location.hash="login")},F=()=>{if(!e){r||(o=W("로그인이 필요한 서비스입니다.<br>로그인 하시겠습니까?",B,P),O.appendChild(o),r=!0);return}const l={product_id:n.data.product_id,quantity:parseInt(s.textContent)};fetch(`${H}/cart/`,{method:"POST",headers:{Authorization:`JWT ${e.token}`,"Content-type":"application/json"},body:JSON.stringify(l)}).then(f=>{f.ok&&(r||(o=W("해당 상품이 장바구니에 담겼습니다.<br>장바구니로 이동하시겠습니까?",B,P),O.appendChild(o),r=!0))}).catch(f=>console.error(f))},J=(l,u)=>{let f=l.getAttribute("data-tab");u.classList.contains("active")&&u.classList.remove("active"),!l.classList.contains("active")&&l.classList.add("active"),se.forEach($=>{$.data===f&&(L.innerHTML=$.value)}),y=l};return c.addEventListener("click",l=>{l.target.nodeName==="BUTTON"&&q(l.target)}),k.addEventListener("click",_),w.addEventListener("click",l=>{l.preventDefault(),F()}),i.addEventListener("click",l=>{l.target.nodeName==="BUTTON"&&(l.preventDefault(),J(l.target,y))}),a},K=()=>{const t=document.createElement("div");return t.classList.add("loading"),t},pe=async(t="")=>{try{const e=await fetch(`${H}/products/${parseInt(t)}/`);if(e.ok)return await e.json()}catch(e){console.error(e)}},ue=async(t="")=>{const e=JSON.parse(localStorage.getItem("user"));try{const n=await fetch(`${H}/cart/${t!==""?`?page=${t}`:""}`,{method:"get",headers:{Authorization:`JWT ${e.token}`}});if(n.ok)return await n.json()}catch(n){console.error(n)}},V=async(t="")=>{const e=await ue(),n="px-[10px] py-[20px]",a="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",r=`
                        <tr class="block">
                            <td colspan-"4" class="py-[175px] text-center">
                                <div>
                                    <p class="text-[1.125rem] leading-[20px] mb-[20px]">장바구니에 담긴 상품이 없습니다.</p>
                                    <p class="text-[0.875rem] text-[#767676]">원하는 상품을 장바구니에 담아보세요!</p>
                                </div>
                            </td>
                        </tr>
                      `,o=[{title:"총 상품금액",price:0,className:"total__price"},{title:"상품 할인",price:0,className:"product__discount"},{title:"배송비",price:0,className:"parcel__price"},{title:"결제 예정 금액",price:0,className:"estimated__amount"}];async function c(){const i=[];for(const L of e.results){const y=await pe(L.product_id),q={...L,image:y.image,product_name:y.product_name,store_name:y.store_name,price:y.price,shipping_fee:y.shipping_fee,shipping_method:y.shipping_method,stock:y.stock};i.push(q)}return i}const b=(await c()).map(i=>{const L=i.quantity===0?"매진":`${(i.price*i.quantity+i.shipping_fee).toLocaleString()}`;return`<tr class="relative flex items-center rounded-[10px] border border-[#e0e0e0]">
        <td class="px-[30px]">
            <label class="cart__item__label" for="checkbox__${i.cart_item_id}">
                <input type="checkbox" class="item__checkbox" value="${i.cart_item_id}" id="checkbox__${i.cart_item_id}" />
            </label>
        </td>
        <td class="${n} flex-[2_4_0%]">
            <a href="/openMarket/#details/${i.product_id}">
                <section class="flex gap-[36px]">
                    <h3 class="tag__hidden">상품 디테일 정보</h3>
                        <img 
                          src="${i.image}" 
                          alt="${i.product_name}" 
                          class="product__img__${i.cart_item_id} w-full aspect-square max-w-[160px] w-full max-h-[160px] rounded-[5px]" 
                        />
                    <div class="flex grow flex-col justify-between">
                        <div class="grid gap-[10px]">
                            <p class="store__name__${i.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                            ${i.store_name}
                            </p>
                            <h4 class="product__name__${i.cart_item_id} text-[1.125rem] leading-[2.25rem]" data-productId="${i.product_id}" data-active="${i.is_active}">
                                ${i.product_name}
                            </h4>
                            <strong class="product__price__${i.cart_item_id} text-[1rem] leading-[1]">${i.price.toLocaleString()}원</strong>
                        </div>
                        <p class="shipping__${i.cart_item_id} pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">${i.shipping_method==="PARCEL"?"택배배송":"배달"} / ${i.shipping_fee===0?"무료배송":`배송비: ${i.shipping_fee.toLocaleString()}원`}</p>
                    </div>
                </section>
            </a>
        </td>
        <td class="${n} flex-[1_4_0%]">
            <div data-cartId="${i.cart_item_id}" data-productId="${i.product_id}" class="quantity__wrap cursor-pointer flex justify-center">
                <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${a} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                <p class="product__quantity__${i.cart_item_id} w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]" data-stock="${i.stock}">${i.quantity}</p>
                <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${a} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
        </td>
        <td class="${n} flex-[1_4_0%] text-center">
            <strong class="block leading-[20px] mb-[28px] text-[1.125rem] text-[#EB5757]"><span class="totalPrice__${i.cart_item_id}">${L}</span>원</strong>
            <button type="button" data-cartId="${i.cart_item_id}" data-productId="${i.product_id}" class="item__order__btn leading-[20px] mx-auto px-[35px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">주문하기</button>
             <button type="button" data-cartId="${i.cart_item_id}" class="delete__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">삭제</button>
        </td>
    </tr>`}),x=`
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
        ${o.map((i,L)=>`
                <div class="w-[25%] relative">
                    <strong class="block mb-[12px] ${L===o.length-1?"font-bold":"font-normal"} leading-[20px]">
                        ${i.title}
                    </strong>
                    <p class="leading-[45px] ${L===o.length-1?"text-[2.25rem] text-[#EB5757]":"text-[1.5rem]"}">
                        <em class="${i.className} font-bold">
                            ${i.price}
                        </em>
                        <span class="${L===o.length-1?"text-[1.125rem]":"text-[1rem]"}">원</span>
                    </p>
                </div>
                `).join("")}
        </div>
        <button class="cart__sellect__order__btn block mx-auto px-[65px] py-[19px] text-[1.5rem] text-white bg-[#21BF48] rounded-[5px] leading-[30px]">주문하기</button>
    </section>
  `,k=e.previous?e.previous.split("page=")[1]:"",w=e.next?e.next.split("page=")[1]:"";return{template:x,prev:k,next:w}},_e=async()=>{const t=JSON.parse(localStorage.getItem("user")),e=document.createElement("div");let n=await V(),a=null,r=null,o=null,c=!1,s=new Set,b="",x=0,k=0,w=0;e.classList.add("inner"),e.insertAdjacentHTML("beforeend",n.template);const i={prev:n.prev?n.prev:"",next:n.next?n.next:1},L=async l=>{currentPage=l;const u=await V(l);e.innerHTML="",e.insertAdjacentHTML("beforeend",u.template),i.prev=u.prev,i.next=u.next,document.documentElement.scrollTop=0},y=(l,u,f,$)=>{const j=e.querySelectorAll(".item__checkbox"),A=e.querySelector("#check__all");let I=0,T=0;if(l.value==="check__all")j.forEach(d=>{const v=d.value;!s.has(v)&&l.checked===!0?s.add(v):l.checked===!1&&s.clear(),d.checked=l.checked});else{const d=l.value;l.checked===!0?s.add(d):s.delete(d)}const z=Array.from(s).reduce((d,v)=>{const g=e.querySelector(`.totalPrice__${v}`),p=e.querySelector(`.shipping__${v}`).textContent.trim().split("배송비:")[1],m=p?p.replace(/[,\s원]/g,""):0,h=parseInt(g.textContent.replace(/[,\s원]/g,"")),S=parseInt(m);return I+=S,T+=h-S,d+h},0);f.textContent=I.toLocaleString(),u.textContent=z.toLocaleString(),$.textContent=T.toLocaleString(),A.checked=j.length===s.size},q=(l,u,f)=>(u.textContent=k,l.classList.contains("modal__quantity__plus__btn")?f>parseInt(u.textContent)?u.textContent=++k:alert(`이 상품은 최대 ${f}까지 구매 가능합니다.`):l.classList.contains("modal__quantity__minus__btn")&&1<parseInt(u.textContent)&&(u.textContent=--k),k),_=async l=>{let u=new Set,f=0,$=0,j=0,A="";l?(u.add(l),A="cart_one_order"):(s.forEach(d=>u.add(d)),A="cart_order");const I=[],T=[...u].map(async d=>{const v=e.querySelector(`.product__name__${d}`),g=v.textContent.trim(),M=v.getAttribute("data-active"),p=v.getAttribute("data-productId"),m=e.querySelector(`.product__img__${d}`).getAttribute("src"),h=e.querySelector(`.product__quantity__${d}`).textContent.trim(),S=e.querySelector(`.store__name__${d}`).textContent.trim(),D=e.querySelector(`.shipping__${d}`).textContent.split(" / "),C=D[0],U=D[1].includes("배송비:")?D[1].replace("배송비: ",""):D[1],Z=e.querySelector(`.totalPrice__${d}`),Q=Z.textContent.replace(/[,\s원]/g,""),Y={product_id:p,product_name:g,image:m,quantity:h,store_name:S,shipping_method:C,shipping_fee:U,total_price:Z.textContent};if(M==="false"&&await fetch(`${H}/cart/${d}/`,{method:"PUT",headers:{Authorization:`JWT ${t.token}`,"Content-type":"application/json"},body:JSON.stringify({product_id:parseInt(p),quantity:parseInt(h),is_active:!0})}),U.includes("원")){const te=U.replace(/[,\s원]/g,""),R=parseInt(te);$+=R}f+=parseInt(Q),I.push(Y)});await Promise.all(T);const z={orderType:A,total:f,parcel:$,discount:j,products:I};if(I.length===0){alert("구매하실 상품을 선택해주세요.");return}sessionStorage.setItem("order",JSON.stringify(z)),window.location.hash="order"},P=()=>{r!==null&&r.remove(),c=!1},B=()=>{const l=K();e.appendChild(l);const u={product_id:parseInt(x),quantity:k,is_active:!1};fetch(`${H}/cart/${b}/`,{method:"PUT",headers:{Authorization:`JWT ${t.token}`,"Content-type":"application/json"},body:JSON.stringify(u)}).then(async $=>{if($.ok){P(),b="",k=0,w=0,x="";const j=await V();e.innerHTML="",e.insertAdjacentHTML("beforeend",j.template)}}).catch($=>console.error($)).finally(()=>{l.remove(),c=!1})},F=()=>{const l=K();e.appendChild(l),fetch(`${H}/cart/${a}`,{method:"DELETE",headers:{Authorization:`JWT ${t.token}`}}).then(async f=>{if(f.ok){P(),alert("해당 상품이 삭제되었습니다.");const $=await V();e.innerHTML="",e.insertAdjacentHTML("beforeend",$.template)}}).catch(f=>console.error(f)).finally(()=>{l.remove()})},J=l=>{var j;const u=e.querySelector(".estimated__amount"),f=e.querySelector(".parcel__price"),$=e.querySelector(".total__price");if(l.target.classList.contains("prev__btn")&&(l.preventDefault(),L(i.prev)),l.target.classList.contains("next__btn")&&(l.preventDefault(),L(i.next)),l.target.parentNode.classList.contains("quantity__wrap")||l.target.parentNode.classList.contains("quantity__modal")){const A="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center",I=`
          <div class="quantity__wrap cursor-pointer flex justify-center">
              <button type="button" class="modal__quantity__minus__btn rounded-[5px_0_0_5px] ${A} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
              <p class="modal__product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">0</p>
              <button type="button" class="modal__quantity__plus__btn rounded-[0_5px_5px_0] ${A} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
            </div>
      `;if(!c){b=l.target.parentNode.getAttribute("data-cartid"),x=l.target.parentNode.getAttribute("data-productId");const T=e.querySelector(`.product__quantity__${b}`);w=T.getAttribute("data-stock"),k=T.textContent,r=W(I,B,P,"cont"),r.classList.add("quantity__modal"),e.appendChild(r),o=e.querySelector(".modal__product__quantity"),c=!0}q(l.target,o,w)}if(l.target.nodeName==="INPUT"&&y(l.target,u,f,$),l.target.classList.contains("delete__btn")&&(a=l.target.getAttribute("data-cartId"),c||(r=W("상품을 삭제하시겠습니까?",F,P),c=!0,O.appendChild(r))),l.target.classList.contains("item__order__btn")||l.target.classList.contains("cart__sellect__order__btn")){l.preventDefault();const A=(j=l.target)==null?void 0:j.getAttribute("data-cartId");_(A)}};return e.addEventListener("click",J),e},E=(t,e,n="text",a="",r="",o=!0)=>`
      <label for="${t}" class="${r} relative">
          <span>${e}</span>
          <input class="${a}" type="${n}" id="${t}" ${o?"required":""} />
      </label>
    `,N=(t,e=!0,n="")=>`<p class="error__message ${n} ${e?"text-[#eb5757]":"text-[#21BF48]"}">${t}</p>`,me=()=>{const t=sessionStorage.getItem("order"),e=JSON.parse(t),n=e.products,a=[{text:"신용/체크카드",value:"CARD"},{text:"무통장 입금",value:"DEPOSIT"},{text:"휴대폰 결제",value:"PHONE_PAYMENT"},{text:"네이버페이",value:"NAVERPAY"},{text:"카카오페이",value:"KAKAOPAY"}],r="px-[10px] pt-[8px] pb-[17px] text-center",c=`
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
                ${n.map(s=>`<tr class="relative flex items-center border-b border-b-[#c4c4c4]">
          <td class="${r} text-left flex-[2_5_0%]">
              <a href="/openMarket/#details/${s.product_id}">
                  <section class="flex gap-[36px]">
                      <h3 class="tag__hidden">상품 디테일 정보</h3>
                          <img 
                            src="${s.image}" 
                            alt="${s.product_name}" 
                            class="product__img__${s.cart_item_id} w-full aspect-square max-w-[104px] w-full max-h-[104px] rounded-[5px]" 
                          />
                      <div class="flex grow flex-col gap-[6px] justify-center items-start">
                        <p class="store__name__${s.cart_item_id} text-[#767676] leading-[1] text-[0.875rem]">
                        ${s.store_name}
                        </p>
                        <h4 class="product__name__${s.cart_item_id} text-[1.125rem] leading-[2.25rem]">
                            ${s.product_name}
                        </h4>
                        <p class="pb-[16px] text-[0.875rem] leading-[1] text-[#767676]">수량 : ${s.quantity}개</p>
                      </div>
                  </section>
              </a>
          </td>
          <td class="${r} flex-[1_5_0%]">
              ${e.discount===0?"-":`${e.total.toLocaleString()}원`}
          </td>
          <td class="${r} flex-[1_5_0%] text-center">
          ${s.shipping_fee}
          </td>
          <td class="${r} font-bold flex-[1_5_0%]">
            ${s.total_price}원
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
                        <div>${E("buyerName","이름","text","order__input","order__label")}</div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${E("buyerPhone__first","주문자 휴대폰 첫 번째 3자리","text","order__input","order__label__phone")}
                                    ${E("buyerPhone__middle","주문자 휴대폰 중간번호 3~4자리","text","order__input","order__label__phone")}
                                    ${E("buyerPhone__last","주문자 휴대폰 마지막 4자리","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${E("buyerEmail","이메일","email","order__input","order__label")}
                        </div>
                    </section>
                    <section class="form__wrap">
                        <h4 class="sans-medium pb-[8px] border-b-2 border-b-[#c4c4c4]">배송지 정보</h4>
                        <div>
                            ${E("recieverName","수령인","text","order__input","order__label")}
                        </div>
                        <div>
                            <div class="order__label">
                                <strong>휴대폰</strong>
                                <div>
                                    ${E("recieverPhone__first","수령인 휴대폰 첫 번째 3자리","text","order__input","order__label__phone")}
                                    ${E("recieverPhone__middle","수령인 휴대폰 중간번호 3~4자리","text","order__input","order__label__phone")}
                                    ${E("recieverPhone__last","수령인 휴대폰 마지막 4자리","text","order__input","order__label__phone")}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="order__label__address">
                                <strong>배송주소</strong>
                                <div>
                                    <div class="zipCode__wrap">
                                        ${E("recieverZipCode","우편번호","text","order__input")}
                                        <button class="zipCode__btn">우편번호 검색</button>
                                    </div>
                                    ${E("recieverAddress","주소","text","order__input")}
                                    ${E("recieverDetailAddress","상세 주소","text","order__input","",!1)}
                                </div>
                            </div>
                        </div>
                        <div>
                            ${E("recieverMessage","배송 메시지","text","order__input","order__label__message")}
                        </div>
                    </section>
                </section>
                <section class="flex justify-between">
                    <h3 class="tag__hidden">결제수단 및 최종 결제 정보</h3>
                    <section class="max-w-[760px] w-full">
                        <h4  class="mb-[18px] text-[1.5rem] font-[600] leading-[30px] pb-[18px] border-b-2 border-b-[#c4c4c4]">결제수단</h4>
                        <div class="payment">
                            ${a.map(s=>`
                                    <label for="${s.value}">
                                        <input 
                                            type="radio" 
                                            name="payment__method"
                                            value="${s.value}"
                                            id="${s.value}" 
                                        />
                                        <span>${s.text}</span>
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
    `;return e.orderType==="cart_order"?{template:c,total:e.total,orderType:e.orderType}:{template:c,orderType:e.orderType,total:e.total,quantity:e.products[0].quantity,productId:e.products[0].product_id}},ge=async()=>{const t=document.createElement("div");let e=me(),n=null,a=!1,r=!1,o=!1,c="",s=[];t.classList.add("inner"),t.insertAdjacentHTML("beforeend",e.template);const b=t.querySelector("#buyerName"),x=t.querySelector("#buyerPhone__first"),k=t.querySelector("#buyerPhone__middle"),w=t.querySelector("#buyerPhone__last"),i=t.querySelector("#buyerEmail"),L=t.querySelector("#recieverName"),y=t.querySelector("#recieverPhone__first"),q=t.querySelector("#recieverPhone__middle"),_=t.querySelector("#recieverPhone__last"),P=t.querySelector(".zipCode__btn"),B=t.querySelector("#recieverZipCode"),F=t.querySelector("#recieverAddress"),J=t.querySelector("#recieverDetailAddress"),l=t.querySelector("#recieverMessage"),u=t.querySelector(".payment"),f=t.querySelector(".order__checkbox__text"),$=t.querySelector(".order__submit__btn");x.setAttribute("maxlength","3"),k.setAttribute("maxlength","4"),w.setAttribute("maxlength","4"),y.setAttribute("maxlength","3"),q.setAttribute("maxlength","4"),_.setAttribute("maxlength","4");const j=[{name:"buyerName",tag:b,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z\uac00-\ud7af]{2,}$/,regexErrorMessage:"입력에는 최소 3자 이상, 문자만 입력이 가능합니다."},{name:"buyerPhone__last",tag:w,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{4}$/,regexErrorMessage:"입력에는 숫자 4자리만 입력이 가능합니다."},{name:"buyerPhone__middle",tag:k,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 3~4자리만 입력이 가능합니다."},{name:"buyerPhone__first",tag:x,emptyErrorMessage:"영역이 비어있습니다.",regex:/^01[016789]$/,regexErrorMessage:"입력에는 010,016,017,018,019만 입력이 가능합니다."},{name:"buyerEmail",tag:i,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,regexErrorMessage:"이메일을 다시 확인해주세요."},{name:"recieverName",tag:L,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[a-zA-Z\uac00-\ud7af]{2,}$/,regexErrorMessage:"입력에는 최소 3자 이상, 문자만 입력이 가능합니다."},{name:"recieverPhone__last",tag:_,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 4자리만 입력이 가능합니다."},{name:"recieverPhone__middle",tag:q,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{3,4}$/,regexErrorMessage:"입력에는 숫자 3~4자리만 입력이 가능합니다."},{name:"recieverPhone__first",tag:y,emptyErrorMessage:"영역이 비어있습니다.",regex:/^01[016789]$/,regexErrorMessage:"입력에는 010,016,017,018,019만 입력이 가능합니다."},{name:"zipCode",tag:B,emptyErrorMessage:"영역이 비어있습니다.",regex:/^[0-9]{5}$/,regexErrorMessage:"입력에는 숫자 5자리만 입력이 가능합니다."},{name:"recieverAddress",tag:F,emptyErrorMessage:"영역이 비어있습니다.",regex:/.*$/s,regexErrorMessage:"입력에 사용 불가능한 문자가 포함되어 있습니다."},{name:"recieverMessage",tag:l,emptyErrorMessage:"영역이 비어있습니다.",regex:/.*$/s,regexErrorMessage:""}],A=(p,m,h)=>{let S=null;return p.parentNode.textContent.includes("휴대폰")||p.parentNode.textContent.includes("주소")?(S=N(`${p.parentNode.textContent}${m}`,!0,h),p.parentNode.parentNode.parentNode.insertAdjacentHTML("afterend",S)):p.parentNode.textContent.includes("우편번호")?(S=N(`${p.parentNode.textContent}${m}`,!0,h),p.parentNode.parentNode.insertAdjacentHTML("afterend",S)):(S=N(`${p.parentNode.textContent}${m}`,!0,h),p.parentNode.insertAdjacentHTML("afterend",S)),S},I=(p,m,h)=>{const S=t.querySelector(`.errorMessage__regex__${m.name}`),D=t.querySelector(`.errorMessage__empty__${h}`);S&&S.remove(),m.regex.test(p.value)?S&&S.remove():(A(p,m.regexErrorMessage,`errorMessage__regex__${m.name}`),p.focus()),D&&p.value!==""&&D.remove(),o=!0},T=()=>{s.length>0&&s.forEach((p,m)=>{const h=t.querySelector(`.errorMessage__empty__${m}`);h&&(h.remove(),s=s.filter(S=>!h.classList.contains(S)))}),j.forEach((p,m)=>{let h=null;(!p||p.tag.value==="")&&(h=A(p.tag,p.emptyErrorMessage,`errorMessage__empty__${m}`)),h?(s.push(`errorMessage__empty__${m}`),r=!1):r=!0})},z=p=>{const m=p.target;m.nodeName==="INPUT"&&(c=m.value)},d=p=>{p.preventDefault(),n=W("추후 업데이트 예정입니다.",M,M),a||t.appendChild(n)},v=()=>{const p=K(),m=e.orderType,h=L.value,S=`${y.value}${q.value}${_.value}`,D=`${B.value}, ${F.value}${J.value!==""?` ${J.value}`:""}`,C=l.value,U=parseInt(e==null?void 0:e.productId),Z=parseInt(e==null?void 0:e.quantity),Q=e.total;O.appendChild(p);const Y={total_price:Q,order_kind:m,receiver:h,receiver_phone_number:S,address:D,address_message:C,payment_method:c};m!=="cart_order"&&(Y.product_id=U,Y.quantity=Z),fetch(`${H}/order/`,{method:"post",headers:{Authorization:`JWT ${ee.token}`,"Content-type":"application/json"},body:JSON.stringify(Y)}).then(async R=>{R.ok&&(await R.json(),alert("주문을 완료했습니다."),window.location.hash="")}).catch(R=>console.error(R.message)).finally(()=>{p.remove()})},g=p=>{if(p.preventDefault(),T(),!!r&&o){if(!c){alert("결제수단을 선택해주세요.");return}if(!$.classList.contains("on")){alert("주문 내용 확인 및 정보 제공 등에 동의해주세요.");return}v()}},M=()=>{n!==null&&n.remove(),a=!1};return j.forEach((p,m)=>{p.tag.addEventListener("change",h=>{I(h.target,p,m)})}),P.addEventListener("click",d),f.addEventListener("click",()=>{t.querySelector("#order__check").checked?$.classList.remove("on"):$.classList.add("on")}),u.addEventListener("click",z),$.addEventListener("click",g),t},xe=()=>{const t=[{text:"호두샵 소개",href:"#"},{text:"이용약관",href:"#"},{text:"개인정보처리방침",href:"#"},{text:"전자금융거래약관",href:"#"},{text:"청소년보호정책",href:"#"},{text:"제휴문의",href:"#"}],e=[{text:"호두샵 인스타그램",href:"#",image_url:"/openMarket/images/icon-insta.svg"},{text:"호두샵 페이스북",href:"#",image_url:"/openMarket/images/icon-fb.svg"},{text:"호두샵 유튜브",href:"#",image_url:"/openMarket/images/icon-yt.svg"}];return`
        <div class="inner">
            <section class="mb-[30px] flex justify-between items-center pb-[22px] border-b border-b-[#c4c4c4]">
                <h2 class="tag__hidden">호두샵 약관 관련 리스트 및 sns 리스트</h2>
                <ul class="terms__list flex gap-[32px]">
                    ${t.map(a=>`
                                <li class="text-[0.875rem] ${a.text==="개인정보처리방침"?"font-bold":""}">
                                    <a href="${a.href}">${a.text}</a>
                                </li>
                                `).join("")}
                </ul>
                <ul class="flex gap-[14px]">
                    ${e.map(a=>`
                                <li>
                                    <a href="${a.href}" class="block indent-[-9999px] w-[32px] h-[32px]" style="background:url('${a.image_url}') no-repeat center center;">${a.text}</a>
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
    `},be=()=>{const t=document.createElement("footer");return t.insertAdjacentHTML("beforeend",xe()),t.id="footer",t},he=(t,e,n,a=0)=>`
        <h2 class="tag__hidden">호두샵 메인페이지 배너</h2>
        <div class="slider relative ${n}">
            ${t.map((o,c)=>`
                    <div class="slide absolute lef-0 top-0 ${c===a?"opacity-100":"opacity-0"} transition-all duration-300">
                        ${e?`<a href="${t[a].link}">`:""}
                            <img class="" src="${o.imageUrl}" alt="${o.text}" />
                        ${e?"</a>":""}
                    </div>
                `).join("")}
            <button class="slider__prev__btn">이전</button>
            <button class="slider__next__btn">다음</button>
        </div>
    `,fe=(t,e=!0,n="")=>{let a=0;const r=he(t,e,n,a),o=document.createElement("section");o.classList.add("banner"),o.insertAdjacentHTML("beforeend",r);const c=o.querySelectorAll(".slide"),s=()=>{c.forEach((x,k)=>{x.classList.toggle("opacity-100",k===a),x.classList.toggle("opacity-0",k!==a)})},b=x=>{x.textContent==="이전"?a=a>0?a-1:t.length-1:a=a>=t.length-1?0:a+1,s()};return s(),o.addEventListener("click",x=>{x.target.nodeName==="BUTTON"&&b(x.target)}),o},G=async(t="",e="")=>{const n=[{imageUrl:"https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",link:"/openMarket/#",text:"호두샵 배너 이미지1"},{imageUrl:"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",link:"",text:"호두샵 배너 이미지2"},{imageUrl:"https://images.unsplash.com/photo-1653152748678-6d843daabac5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",link:"",text:"호두샵 배너 이미지3"}],a=document.createElement("main"),r=K(),o=fe(n,!1,"max-h-[500px] h-full overflow-hidden");return O.appendChild(r),t===""?(a.appendChild(o),a.appendChild(await ce())):t==="details"?a.appendChild(await de(e)):t==="cart"?a.appendChild(await _e()):t==="order"&&a.appendChild(await ge()),t!==""?(a.classList.add("m-[80px_0_180px]"),o&&o.remove()):a.classList.add("m-[0_0_180px]"),O.innerHTML="",O.appendChild(ae()),O.appendChild(a),O.appendChild(be()),r.remove(),O},ve=()=>{const t=["010","011","016","017","018","019"];return`
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
                        ${E("userId","아이디","text","join__input","flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${E("userPassword","비밀번호","password","join__input")}
                    ${E("userPassword-check","비밀번호 재확인","password","join__input")}
                    ${E("userName","이름","text","join__input")}
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code"></p>
                            <ul class="select__list">${t.map(n=>`<li class="select__option" data-value="${n}">${n}</li>`).join("")}</ul>
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
        `},ye=()=>{const t=document.getElementById("app");t.innerHTML=ve(),JSON.parse(localStorage.getItem("user"));let e="BUYER";const n=document.querySelector("button.customer"),a=document.querySelector("button.seller"),r=document.getElementById("userId"),o=document.querySelector(".id__check__btn"),c=document.getElementById("userPassword"),s=document.getElementById("userPassword-check"),b=document.getElementById("userName"),x=document.querySelector(".selected__code"),k=document.querySelector(".select__list"),w=document.getElementById("userPhoneNumber-middle"),i=document.getElementById("userPhoneNumber-last");document.getElementById("userStoreName");const L=document.getElementById("join__checkbox"),y=document.querySelector(".join__btn"),q=document.querySelector(".user__section");let _=null,P=null,B,F=!1,J,l="";const u=(d,v,g)=>{v.classList.remove("active"),!d.classList.contains("active")&&d.classList.add("active"),q.classList.remove(e.toLowerCase()),q.classList.add(g.toLowerCase()),e=g,r.value="",c.value="",_!==null&&_.remove(),_=null},f=(d,v,g)=>{u(d,v,g);let M=document.createElement("div"),p=`
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${E("userBusinessNumber","사업자 등록번호","number","join__input","flex-1")}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${E("userStoreName","스토어 이름","text","join__input")}
    `;M.classList.add("user__seller__form__add__wrap"),M.insertAdjacentHTML("beforeend",p),q.appendChild(M),P=document.querySelector(".user__seller__form__add__wrap")},$=()=>{let d={};_!==null&&_.remove(),fetch(`${H}/accounts/signup/valid/username/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({username:r.value})}).then(async g=>{const M=await g.json();return g.ok?(d={error:!1,text:M.Success},r.classList.contains("error")&&r.classList.remove("error"),J=r.value,B=!0):(d={error:!0,text:M.FAIL_Message},r.value="",r.focus(),!r.classList.contains("error")&&r.classList.add("error"),B=!1),d}).then(g=>{const M=r.value;/^[a-zA-Z0-9]{0,20}$/.test(M)?(r.classList.contains("error")&&r.classList.remove("error"),o.parentNode.insertAdjacentHTML("afterend",N(g.text,g.error))):(!r.classList.contains("error")&&r.classList.add("error"),o.parentNode.insertAdjacentHTML("afterend",N("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.")),_=document.querySelector(".error__message")),_=document.querySelector(".error__message")}).catch(g=>{console.error(g)})},j=()=>{const d=c.value,v=/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]?)[a-zA-Z\d\W_]{8,}$/;_!==null&&_.remove(),v.test(d)?(c.classList.contains("error")&&c.classList.remove("error"),!c.classList.contains("check")&&c.classList.add("check")):(c.parentNode.insertAdjacentHTML("afterend",N("8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.")),!c.classList.contains("error")&&c.classList.add("error"),c.classList.contains("check")&&c.classList.remove("chcek"),_=document.querySelector(".error__message"),c.focus())},A=()=>{const d=c.value,v=s.value;_!==null&&_.remove(),d!==v?(!s.classList.contains("error")&&s.classList.add("error"),s.classList.contains("check")&&s.classList.remove("check"),s.insertAdjacentHTML("afterend",N("비밀번호가 일치하지 않습니다.")),s.focus(),_=document.querySelector(".error__message")):(s.classList.contains("error")&&s.classList.remove("error"),!s.classList.contains("check")&&s.classList.add("check"))},I=d=>{const v=d.getAttribute("data-value");v&&(x.textContent=v,k.parentNode.classList.remove("view"))},T=()=>{_!==null&&_.remove();let d={};const v=/[0-9]{10}/,g=q.querySelector("#userBusinessNumber"),M=g.value;if(!v.test(M)){g.parentNode.parentNode.insertAdjacentHTML("afterend",N("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")),_=document.querySelector(".error__message");return}fetch(`${H}/accounts/signup/valid/company_registration_number/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({company_registration_number:g.value})}).then(async m=>{const h=await m.json();return m.ok?(d={error:!1,text:h.Success},g.classList.contains("error")&&g.classList.remove("error"),l=g.value,F=!0):(d={error:!0,text:h.FAIL_Message},g.value="",g.focus(),!g.classList.contains("error")&&g.classList.add("error"),F=!1),d}).then(m=>{g.classList.contains("error")&&g.classList.remove("error"),g.parentNode.parentNode.insertAdjacentHTML("afterend",N(m.text,m.error)),_=document.querySelector(".error__message")}).catch(m=>{console.error(m)})},z=async d=>{let v={};const g=r.value,M=c.value,p=s.value,m=b.value,h=`${x.textContent}${w.value}${i.value}`,S=/^1[0-9]{8,9}$/;if(_!==null&&_.remove(),!B){o.parentNode.insertAdjacentHTML("afterend",N("아이디 중복 확인이 필요합니다.")),!r.classList.contains("error")&&r.classList.add("error"),_=document.querySelector(".error__message");return}if(J!==r.value){o.parentNode.insertAdjacentHTML("afterend",N("중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다.")),!r.classList.contains("error")&&r.classList.add("error"),_=document.querySelector(".error__message"),B=!1;return}if(!S.test(parseInt(h))){i.parentNode.insertAdjacentHTML("afterend",N("핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다.")),_=document.querySelector(".error__message");return}if(!L.checked){L.parentNode.insertAdjacentHTML("afterend",N("약관에 동의해야 회원 가입이 가능합니다.")),_=document.querySelector(".error__message");return}if(d==="BUYER")v={username:g,password:M,password2:p,phone_number:h,name:m};else{const C=q.querySelector("#userBusinessNumber").value,U=q.querySelector("#userStoreName").value;if(!F){userBusinessNumber.parentNode.parentNode.insertAdjacentHTML("afterend",N("사업자등록번호 인증이 필요합니다."));return}if(C!==l){C.parentNode.parentNode.insertAdjacentHTML("afterend",N("인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다.")),!C.classList.contains("error")&&C.classList.add("error"),_=document.querySelector(".error__message"),F=!1;return}v={username:g,password:M,password2:p,phone_number:h,name:m,company_registration_number:C,store_name:U}}const D=await fetch(`${H}/accounts//${e==="BUYER"?"signup/":"signup_seller/"}`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(v)});if(D.ok)alert("회원가입이 정상적으로 처리됐습니다."),window.location.href="/openMarket/#login";else{const C=await D.json();(C==null?void 0:C.phone_number)!==void 0?(i.parentNode.insertAdjacentHTML("afterend",N(C.phone_number.join(""))),_=document.querySelector(".error__message")):(C==null?void 0:C.store_name)!==void 0&&(q.querySelector("#userStoreName").parentNode.insertAdjacentHTML("afterend",N(C.store_name.join(""))),_=document.querySelector(".error__message"))}};n.addEventListener("click",d=>{d.preventDefault(),P!==null&&P.remove(),u(n,a,"BUYER")}),a.addEventListener("click",d=>{d.preventDefault(),f(a,n,"SELLER")}),o.addEventListener("click",d=>{d.preventDefault(),$()}),c.addEventListener("change",j),s.addEventListener("change",A),x.addEventListener("click",()=>x.parentNode.classList.toggle("view")),k.addEventListener("click",d=>{I(d.target)}),q.addEventListener("click",async d=>{d.preventDefault(),d.target.classList.contains("busness__number__check__btn")&&await T()}),y.addEventListener("click",async d=>{d.preventDefault(),await z(e)})},$e=()=>`
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
      `,we=()=>{const t=document.getElementById("app");t.innerHTML=$e();let e="BUYER";const n=document.querySelector("button.customer"),a=document.querySelector("button.seller"),r=document.querySelector(".user__form"),o=document.querySelector(".user__section"),c=document.getElementById("userId"),s=document.getElementById("userPassword");let b=null;const x=(w,i)=>{const L=i.getAttribute("data-type").toLowerCase(),y=w.getAttribute("data-type");i.classList.remove("active"),!w.classList.contains("active")&&w.classList.add("active"),o.classList.remove(L),o.classList.add(y.toLowerCase()),e=y,c.value="",s.value="",b!==null&&b.remove(),b=null},k=async()=>{b!==null&&b.remove();const w=c.value,i=s.value,L={username:w,password:i,login_type:e};try{const y=await fetch(`${H}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(y.ok){const q=await y.json(),_={user_type:q.user_type,token:q.token,cart:[]};localStorage.setItem("user",JSON.stringify(_));const P=localStorage.getItem("beforePage");window.location.href=`/openMarket/${P||""}`,localStorage.removeItem("beforePage")}else s.insertAdjacentHTML("afterend",N("아이디 또는 비밀번호가 일치하지 않습니다.")),b=document.querySelector(".error__message")}catch(y){console.error(y.message)}};n.addEventListener("click",w=>{w.preventDefault(),x(n,a)}),a.addEventListener("click",w=>{w.preventDefault(),x(a,n)}),r.addEventListener("submit",w=>{w.preventDefault(),k()})},Le=()=>{fetch(`${H}/accounts/logout/`,{method:"post"}).then(e=>{e.ok&&(localStorage.removeItem("user"),localStorage.getItem("beforePage"),window.location.href="/openMarket/#",window.location.reload(),localStorage.removeItem("beforePage"))}).catch(e=>console.error(e.message))},H="https://openmarket.weniv.co.kr",O=document.getElementById("app"),ee=JSON.parse(localStorage.getItem("user")),re=async()=>{const t=window.location.hash.slice(1);if(O.innerHTML="",!t)await G();else if(t==="login")ee||we();else if(t==="sign-up")ee||ye();else if(t==="logout")Le();else if(t.includes("details")){const[e,n]=t.split("/");await G(e,n)}else t==="cart"?await G("cart"):t==="order"?await G("order"):window.location.href="/openMarket/"},Se=()=>{re(),window.addEventListener("hashchange",re)};window.addEventListener("DOMContentLoaded",Se);
