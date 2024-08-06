(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const K=()=>{const s=JSON.parse(localStorage.getItem("user"));let e=[];const a={href:s?"#":"#login",text:s?"마이페이지":"로그인",class:s?"myPage":"login",children:s?[{href:"#my-page",text:"마이페이지",class:"myPage"},{href:"#logout",text:"로그아웃"}]:[]},t=[{href:"#cart",text:"장바구니",class:"cart"}],o=[{href:"#seller-center",text:"판매자 센터"}];return t.push(a),o.unshift(a),s&&s.user_type==="SELLER"?e=o:e=t,`
        <section class="inner flex w-full bg-white py-[20px]">
            <div class="flex items-center grow gap-[30px]">
                <a href="/openMarket">
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
                ${e.map(l=>{let m="";return l.text==="판매자 센터"?m=`<a href="${l.href}" class="seller block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px] bg-[#21BF48] bg-no-repeat bg-top">${l.text}</a>`:m=`<a href="${l.href}" class="nav__list__item ${l.class} block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]">${l.text}</a>`,l.children&&l.children.length>0&&(m+=`
                        <ul class="absolute hidden group-hover/item:grid gap-[8px] w-[130px] p-[10px] bg-white rounded-[5px] drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] left-[50%] top-[calc(100%+14px)] translate-x-[-50%]">
                          ${l.children.map(f=>`<li class="relative z-[1]">
                                <a href="${f.href}" class="block text-center text-[#767676] w-full py-[10px] border rounded-[5px] border-white hover:border-[#767676] hover:text-black">${f.text}</a>
                              </li>`).join("")}
                        </ul>
                      `),`
                              <li class="relative nav__list__item bg-no-repeat bg-top group/item">
                                ${m}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    `},Z=()=>{const s=document.createElement("header"),e=K();s.id="header",s.insertAdjacentHTML("beforeend",e);const r=s.querySelector(".myPage");return r&&r.addEventListener("click",a=>a.preventDefault()),s},G=async(s="")=>{try{const e=await fetch(`${I}/products/${s&&`?page=${s}`}`);if(e.ok){const r=await e.json();return console.log(r),r}}catch(e){console.error(e)}},A=async(s="")=>{const e=await G(s);console.log(e);const a=`
              <section class="grid gap-[50px]">
                ${`<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${e.results.map(c=>`
                            <li class="">
                              <a href="#details/${c.product_id}" class="grid gap-[10px]">
                                  <div class="relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${c.image}" alt="${c.product_name}" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${c.store_name}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${c.product_name}
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
              `,t=e.previous?e.previous.split("page=")[1]:"",o=e.next?e.next.split("page=")[1]:"";return console.log(t,"prev"),console.log(o,"next"),{template:a,prev:t,next:o}},X=async()=>{const s=await A(),e=document.createElement("div");e.classList.add("inner"),e.insertAdjacentHTML("beforeend",s.template);const r={prev:s.prev?s.prev:"",next:s.next?s.next:1},a=async t=>{const o=await A(t);console.log(o),e.innerHTML="",e.insertAdjacentHTML("beforeend",o.template),r.prev=o.prev,r.next=o.next,document.documentElement.scrollTop=0};return e.addEventListener("click",async t=>{t.target.classList.contains("prev__btn")&&(t.preventDefault(),a(r.prev)),t.target.classList.contains("next__btn")&&(t.preventDefault(),a(r.next))}),e},P=(s,e,r)=>{const a=document.createElement("div");a.classList.add("modal");const t=`
        <button type="button" class="close__btn absolute right-[18px] top-[18px] w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        <p class="text-center mb-[30px]">${s}</p>
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">아니오</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">예</button>
        </div>
    `;a.insertAdjacentHTML("beforeend",t);const o=a.querySelector(".close__btn"),c=a.querySelector(".close__btn__second"),l=a.querySelector(".event__btn");return o.addEventListener("click",r),c.addEventListener("click",r),l.addEventListener("click",e),a},O=[{data:"button-info",text:"버튼",value:""},{data:"review",text:"리뷰",value:""},{data:"qna",text:"Q&A",value:""},{data:"return-info",text:"반품/교환정보",value:""}],ee=async(s="")=>{try{const e=await fetch(`${I}/products/${parseInt(s)}/`);if(e.ok){const r=await e.json();return console.log(r),r}}catch(e){console.error(e)}},te=async s=>{console.log(s);const e=await ee(s);console.log(e);const r="w-[48px] h-[48px] indent-[-9999px] border border-[#c4c4c4] bg-no-repeat bg-center";return{detail:`
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
                    <p class="pb-[18px] text-[#767676] border-b-2 border-b-[#c4c4c4] ">택배배송 / 무료배송</p>
                    <div class="quantity__wrap flex pb-[28px] border-b-2 border-b-[#c4c4c4]">
                        <button type="button" class="quantity__minus__btn rounded-[5px_0_0_5px] ${r} bg-[url('/openMarket/images/icon-minus-line.svg')]">빼기</button>
                        <p class="product__quantity w-[50px] text-center leading-[20px] py-[12px] border-t border-t-[#c4c4c4] border-b border-b-[#c4c4c4]">${e.stock===0?0:1}</p>
                        <button type="button" class="quantity__plus__btn rounded-[0_5px_5px_0] ${r} bg-[url('/openMarket/images/icon-plus-line.svg')]">더하기</button>
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
                    ${O.map((t,o)=>(t.value=`${t.text} 정보`,`
                            <li>
                                <button type="button" data-tab="${t.data}" class="detail__tab__btn ${o===0?"active":""} relative w-full leading-[20px] py-[20px]">${t.text}</button>
                            </li>
                        `)).join("")}
                </ul>
                <section class="detail__side__infomation__wrap">
                    <h4 class="tag__hidden">선택한 부가 정보가 출력 되는 영역</h4>
                    <div class="detail__side__infomation py-[80px] px-[10px]">버튼 정보</div>
                </section>
            </section>
        </section>
    `,stock:e.stock,price:e.price,productId:e.product_id}},se=async s=>{const e=JSON.parse(localStorage.getItem("user")),r=await te(s),a=document.createElement("div");a.classList.add("inner"),a.insertAdjacentHTML("beforeend",r.detail);const t=a.querySelector(".quantity__wrap"),o=a.querySelector(".product__quantity"),c=a.querySelector(".total__quantity"),l=a.querySelector(".total__price"),m=a.querySelector(".buy__btn"),f=a.querySelector(".cart__btn"),N=a.querySelector(".side__info__tab"),_=a.querySelector(".detail__side__infomation");let y=a.querySelector(".side__info__tab button.active");const k=n=>{const h=n.textContent,v=l.textContent.replaceAll(",","");h==="더하기"?r.stock>parseInt(o.textContent)?(o.textContent=++o.textContent,c.textContent=o.textContent,l.textContent=(parseInt(v)+r.price).toLocaleString()):alert(`이 상품은 최대 ${r.stock}까지 구매 가능합니다.`):h==="빼기"&&1<parseInt(o.textContent)&&(o.textContent=--o.textContent,c.textContent=o.textContent,l.textContent=(parseInt(v)-r.price).toLocaleString()),console.log(o.textContent)},$=()=>{let n=null;const h=()=>{n!==null&&n.remove()},v=()=>{window.location.href="/openMarket/#cart"},L=`이미 장바구니에 있는 상품입니다.<br/>
    장바구니로 이동하시겠습니까?`;if(e)e.cart.forEach(S=>{S.product_id===r.productId&&(n=P(L,v,h),a.appendChild(n))});else{const q=sessionStorage.getItem("cart"),S=q?JSON.parse(q):[];if(S.length>0)n=P(L,v,h),a.appendChild(n);else{const M=l.textContent.replaceAll(",",""),H={productId:r.productId,stock:o.textContent,price:parseInt(M)};S.push(H),sessionStorage.setItem("cart",JSON.stringify(S)),alert("해당 상품이 장바구니에 담겼습니다.")}}},p=(n,h)=>{let v=n.getAttribute("data-tab");h.classList.contains("active")&&h.classList.remove("active"),!n.classList.contains("active")&&n.classList.add("active"),O.forEach(L=>{L.data===v&&(_.innerHTML=L.value)}),y=n};return t.addEventListener("click",n=>{n.target.nodeName==="BUTTON"&&k(n.target)}),m.addEventListener("click",async n=>{n.preventDefault()}),f.addEventListener("click",n=>{n.preventDefault(),$()}),N.addEventListener("click",n=>{n.target.nodeName==="BUTTON"&&(n.preventDefault(),p(n.target,y))}),a},D=async(s="",e="")=>{const r=document.createElement("main");return r.classList.add("m-[80px_0_180px]"),s===""?r.appendChild(await X()):s==="details"&&r.appendChild(await se(e)),B.innerHTML="",B.appendChild(Z()),B.appendChild(r),B},j=(s,e,r="text",a="")=>`
      <label for="${s}" class="${a} relative">
          <span>${e}</span>
          <input class="join__input" type="${r}" id="${s}" required />
      </label>
    `,b=(s,e=!0)=>`<p class="error__message ${e?"text-[#eb5757]":"text-[#21BF48]"}">${s}</p>`,ne=()=>{const s=["010","011","016","017","018","019"];return`
            <header class="pt-[100px] text-center mb-[70px]">
                <a href="/openMarket" class="inline-block">
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
                        ${j("userId","아이디","text","flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${j("userPassword","비밀번호","password")}
                    ${j("userPassword-check","비밀번호 재확인","password")}
                    ${j("userName","이름")}
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code"></p>
                            <ul class="select__list">${s.map(r=>`<li class="select__option" data-value="${r}">${r}</li>`).join("")}</ul>
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
        `},re=()=>{const s=document.getElementById("app");s.innerHTML=ne(),JSON.parse(localStorage.getItem("user"));let e="BUYER";const r=document.querySelector("button.customer"),a=document.querySelector("button.seller"),t=document.getElementById("userId"),o=document.querySelector(".id__check__btn"),c=document.getElementById("userPassword"),l=document.getElementById("userPassword-check"),m=document.getElementById("userName"),f=document.querySelector(".selected__code"),N=document.querySelector(".select__list"),_=document.getElementById("userPhoneNumber-middle"),y=document.getElementById("userPhoneNumber-last");document.getElementById("userStoreName");const k=document.getElementById("join__checkbox"),$=document.querySelector(".join__btn"),p=document.querySelector(".user__section");let n=null,h=null,v,L=!1,q,S="";const M=(i,u,d)=>{u.classList.remove("active"),!i.classList.contains("active")&&i.classList.add("active"),p.classList.remove(e.toLowerCase()),p.classList.add(d.toLowerCase()),e=d,t.value="",c.value="",n!==null&&n.remove(),n=null},H=(i,u,d)=>{M(i,u,d);let x=document.createElement("div"),C=`
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${j("userBusinessNumber","사업자 등록번호","number","flex-1")}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${j("userStoreName","스토어 이름")}
    `;x.classList.add("user__seller__form__add__wrap"),x.insertAdjacentHTML("beforeend",C),p.appendChild(x),h=document.querySelector(".user__seller__form__add__wrap")},J=()=>{let i={};n!==null&&n.remove(),fetch(`${I}/accounts/signup/valid/username/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({username:t.value})}).then(async d=>{const x=await d.json();return d.ok?(i={error:!1,text:x.Success},t.classList.contains("error")&&t.classList.remove("error"),q=t.value,v=!0):(i={error:!0,text:x.FAIL_Message},t.value="",t.focus(),!t.classList.contains("error")&&t.classList.add("error"),v=!1),i}).then(d=>{const x=t.value;/^[a-zA-Z0-9]{0,20}$/.test(x)?(t.classList.contains("error")&&t.classList.remove("error"),o.parentNode.insertAdjacentHTML("afterend",b(d.text,d.error))):(!t.classList.contains("error")&&t.classList.add("error"),o.parentNode.insertAdjacentHTML("afterend",b("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.")),n=document.querySelector(".error__message")),n=document.querySelector(".error__message")}).catch(d=>{console.error(d)})},R=()=>{const i=c.value,u=/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;n!==null&&n.remove(),u.test(i)?(c.classList.contains("error")&&c.classList.remove("error"),!c.classList.contains("check")&&c.classList.add("check")):(c.parentNode.insertAdjacentHTML("afterend",b("8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.")),!c.classList.contains("error")&&c.classList.add("error"),c.classList.contains("check")&&c.classList.remove("chcek"),n=document.querySelector(".error__message"),c.focus())},U=()=>{const i=c.value,u=l.value;n!==null&&n.remove(),i!==u?(!l.classList.contains("error")&&l.classList.add("error"),l.classList.contains("check")&&l.classList.remove("check"),l.insertAdjacentHTML("afterend",b("비밀번호가 일치하지 않습니다.")),l.focus(),n=document.querySelector(".error__message")):(l.classList.contains("error")&&l.classList.remove("error"),!l.classList.contains("check")&&l.classList.add("check"))},Y=i=>{const u=i.getAttribute("data-value");u&&(f.textContent=u,N.parentNode.classList.remove("view"))},z=()=>{n!==null&&n.remove();let i={};const u=/[0-9]{10}/,d=p.querySelector("#userBusinessNumber"),x=d.value;if(!u.test(x)){d.parentNode.parentNode.insertAdjacentHTML("afterend",b("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")),n=document.querySelector(".error__message");return}fetch(`${I}/accounts/signup/valid/company_registration_number/`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({company_registration_number:d.value})}).then(async w=>{const E=await w.json();return w.ok?(i={error:!1,text:E.Success},d.classList.contains("error")&&d.classList.remove("error"),S=d.value,L=!0):(i={error:!0,text:E.FAIL_Message},d.value="",d.focus(),!d.classList.contains("error")&&d.classList.add("error"),L=!1),i}).then(w=>{d.classList.contains("error")&&d.classList.remove("error"),d.parentNode.parentNode.insertAdjacentHTML("afterend",b(w.text,w.error)),n=document.querySelector(".error__message")}).catch(w=>{console.error(w)})},V=async i=>{let u={};const d=t.value,x=c.value,C=l.value,w=m.value,E=`${f.textContent}${_.value}${y.value}`,W=/^1[0-9]{8,9}$/;if(n!==null&&n.remove(),!v){o.parentNode.insertAdjacentHTML("afterend",b("아이디 중복 확인이 필요합니다.")),!t.classList.contains("error")&&t.classList.add("error"),n=document.querySelector(".error__message");return}if(q!==t.value){o.parentNode.insertAdjacentHTML("afterend",b("중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다.")),!t.classList.contains("error")&&t.classList.add("error"),n=document.querySelector(".error__message"),v=!1;return}if(!W.test(parseInt(E))){y.parentNode.insertAdjacentHTML("afterend",b("핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다.")),n=document.querySelector(".error__message");return}if(!k.checked){k.parentNode.insertAdjacentHTML("afterend",b("약관에 동의해야 회원 가입이 가능합니다.")),n=document.querySelector(".error__message");return}if(i==="BUYER")u={username:d,password:x,password2:C,phone_number:E,name:w};else{const g=p.querySelector("#userBusinessNumber").value,Q=p.querySelector("#userStoreName").value;if(!L){userBusinessNumber.parentNode.parentNode.insertAdjacentHTML("afterend",b("사업자등록번호 인증이 필요합니다."));return}if(g!==S){g.parentNode.parentNode.insertAdjacentHTML("afterend",b("인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다.")),!g.classList.contains("error")&&g.classList.add("error"),n=document.querySelector(".error__message"),L=!1;return}u={username:d,password:x,password2:C,phone_number:E,name:w,company_registration_number:g,store_name:Q}}console.log(u);const T=await fetch(`${I}/accounts//${e==="BUYER"?"signup/":"signup_seller/"}`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(u)});if(T.ok)alert("회원가입이 정상적으로 처리됐습니다."),window.location.href="/openMarket/#login";else{const g=await T.json();(g==null?void 0:g.phone_number)!==void 0?(y.parentNode.insertAdjacentHTML("afterend",b(g.phone_number.join(""))),n=document.querySelector(".error__message")):(g==null?void 0:g.store_name)!==void 0&&(p.querySelector("#userStoreName").parentNode.insertAdjacentHTML("afterend",b(g.store_name.join(""))),n=document.querySelector(".error__message"))}};r.addEventListener("click",i=>{i.preventDefault(),h!==null&&h.remove(),M(r,a,"BUYER")}),a.addEventListener("click",i=>{i.preventDefault(),H(a,r,"SELLER")}),o.addEventListener("click",i=>{i.preventDefault(),J()}),c.addEventListener("change",R),l.addEventListener("change",U),f.addEventListener("click",()=>f.parentNode.classList.toggle("view")),N.addEventListener("click",i=>{Y(i.target)}),p.addEventListener("click",async i=>{i.preventDefault(),i.target.classList.contains("busness__number__check__btn")&&await z()}),$.addEventListener("click",async i=>{i.preventDefault(),await V(e)})},oe=()=>`
          <header class="pt-[100px] text-center mb-[70px]">
              <a href="/openMarket" class="inline-block">
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
      `,ae=()=>{const s=document.getElementById("app");s.innerHTML=oe();let e="BUYER";const r=document.querySelector("button.customer"),a=document.querySelector("button.seller"),t=document.querySelector(".user__form"),o=document.querySelector(".user__section"),c=document.getElementById("userId"),l=document.getElementById("userPassword");let m=null;const f=(_,y)=>{const k=y.getAttribute("data-type").toLowerCase(),$=_.getAttribute("data-type");y.classList.remove("active"),!_.classList.contains("active")&&_.classList.add("active"),o.classList.remove(k),o.classList.add($.toLowerCase()),e=$,c.value="",l.value="",m!==null&&m.remove(),m=null},N=()=>{m!==null&&m.remove();const _=c.value,y=l.value,k={username:_,password:y,login_type:e};fetch(`${I}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)}).then(p=>{if(p.ok)return p.json();l.insertAdjacentHTML("afterend",b("아이디 또는 비밀번호가 일치하지 않습니다.")),m=document.querySelector(".error__message")}).then(p=>{const n={user_type:p.user_type,token:p.token,cart:[]};localStorage.setItem("user",JSON.stringify(n))}).then(()=>{window.location.href="/openMarket/"})};r.addEventListener("click",_=>{_.preventDefault(),f(r,a)}),a.addEventListener("click",_=>{_.preventDefault(),f(a,r)}),t.addEventListener("submit",_=>{_.preventDefault(),N()})},ce=()=>{localStorage.removeItem("user"),window.location.href="/openMarket/"},I="https://openmarket.weniv.co.kr",B=document.getElementById("app"),F=async()=>{const s=window.location.href.split("#")[1];if(B.innerHTML="",!s)await D();else if(s==="login")ae();else if(s==="sign-up")re();else if(s==="logout")ce();else if(s.includes("details")){const e=s.split("/")[0],r=s.split("/")[1];await D(e,r)}};window.addEventListener("hashchange",F);window.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded"),F()});
