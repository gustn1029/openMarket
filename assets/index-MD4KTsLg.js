(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const _=()=>{const r=JSON.parse(localStorage.getItem("user"));let l=[];const o={href:r?"#my-page":"#login",text:r?"마이페이지":"로그인",imageUrl:"/images/icon-user.svg"},a=[{href:"#cart",text:"장바구니",imageUrl:"/images/icon-shopping-cart.svg"}],t=[{href:"#seller-center",text:"판매자 센터",imageUrl:"/images/icon-shopping-bag.svg"}];return a.push(o),t.unshift(o),r&&r.user_type==="SELLER"?l=t:l=a,`
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
            <ul class="flex items-center">
                ${l.map(n=>{let c="";return n.text==="판매자 센터"?c=`<a href="${n.href}" class="block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px]" style="background: url('/openMarket${n.imageUrl}') no-repeat 20px center; background-color: #21BF48;">${n.text}</a>`:c=`<a href="${n.href}" class="block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]" style="background: url('/openMarket${n.imageUrl}') no-repeat center top">${n.text}</a>`,`
                              <li class="">
                                ${c}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    </header>
    `},x=()=>`
            <header class="pt-[100px] text-center mb-[70px]">
                <a href="/openMarket" class="inline-block">
                    <h1 class="w-[238px] h-[74px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-contain">호두 오픈마켓</h1>
                </a>
            </header>
            <form class="user__form max-w-[550px] w-full m-auto pb-[100px]">
                <h2 class="hidden">회원가입 폼</h2>
                <ul class="user__btn__list">
                  <li>
                      <button type="button" class="customer active">구매회원 로그인</button>
                  </li>
                  <li>
                      <button type="button" class="seller">판매회원 로그인</button>
                  </li>
                </ul>
                <section class="user__section customer grid gap-[12px] mb-[14px]">
                    <div class="flex items-end gap-[12px]">
                        <label for="userId" class="flex-1">
                            <span class="">아이디</span>
                            <input class="join__input" type="text" id="userId" required />
                        </label>
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    <label for="userPassword">
                        <span>비밀번호</span>
                        <input class="join__input" type="password" id="userPassword" required />
                    </label>
                    <label for="userPassword-check">
                        <span>비밀번호 재확인</span>
                        <input class="join__input" type="password" id="userPassword-check" required />
                    </label>
                    <label for="userName" class="mt-[50px]">
                        <span>이름</span>
                        <input class="join__input" type="text" id="userName" required />
                    </label>
                    <div class="grid grid-cols-3 gap-x-[12px]">
                        <strong class="col-span-3">휴대폰 번호</strong>
                        <div class="select__wrap">
                            <p class="selected__code"></p>
                            <ul class="select__list">${["010","011","016","017","018","019"].map(o=>`<li class="select__option" data-value="${o}">${o}</li>`).join("")}</ul>
                        </div>
                        <label class="hidden">휴대폰 가운데 3~4자리 번호 입력</label>
                        <input class="join__input" type="number" id="userPhoneNumber-middle" required />
                        <label class="hidden">휴대폰 마지막 4자리 번호 입력</label>
                        <input class="join__input" type="number" id="userPhoneNumber-last" required />
                    </div>
                </section>
                <div class="sign__up px-[35px] grid place-items-center gap-[34px]">
                    <label class="join__checkbox">
                        <input type="checkbox" />
                        <p>호두샵의 <em>이용약관</em> 및 <em>개인정보처리방침</em>에 대한 내용을 확인하였고 동의합니다.</p>
                    </label>
                    <button class="btn join__btn" type="submit">가입하기</button>
                </div>
            </form>
        `,y=()=>{document.body.innerHTML=x();const r="https://openmarket.weniv.co.kr";let l="BUYER";const o=document.querySelector("button.customer"),a=document.querySelector("button.seller"),t=document.querySelector(".user__form"),s=document.querySelector(".user__section"),n=document.getElementById("userId"),c=document.getElementById("userPassword");let i=null;const p=(e,u,d)=>{u.classList.remove("active"),!e.classList.contains("active")&&e.classList.add("active"),s.classList.remove(u.classList),s.classList.add(e.classList),l=d,n.value="",c="",i!==null&&i.remove(),i=null},b=async()=>{i!==null&&i.remove();const e=n.value,u=c.value,d={username:e,password:u,login_type:l},m=await fetch(`${r}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),g=await m.json();if(m.ok){const h={user_type:g.user_type,token:g.token};localStorage.setItem("user",JSON.stringify(h)),window.location.href="/openMarket"}else c.insertAdjacentHTML("afterend",'<p class="error__message">아이디 또는 비밀번호가 일치하지 않습니다.</p>'),i=document.querySelector(".error__message")};o.addEventListener("click",e=>{e.preventDefault(),p(o,a,"BUYER")}),a.addEventListener("click",e=>{e.preventDefault(),p(a,o,"SELLER")}),t.addEventListener("submit",e=>{e.preventDefault(),b()})},v=()=>`
          <header class="pt-[100px] text-center mb-[70px]">
              <a href="/openMarket" class="inline-block">
                  <h1 class="w-[238px] h-[74px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-contain">호두 오픈마켓</h1>
              </a>
          </header>
          <form class="user__form max-w-[550px] w-full m-auto ">
              <h2 class="hidden">로그인 폼</h2>
              <ul class="user__btn__list">
                <li>
                    <button type="button" class="customer active">구매회원 로그인</button>
                </li>
                <li>
                    <button type="button" class="seller">판매회원 로그인</button>
                </li>
              </ul>
              <section class="user__section customer mb-[30px]">
                  <label for="userId" class="hidden">아이디 입력</label>
                  <input type="text" class="login__input" placeholder="아이디" id="userId" required />
                  <label for="userPassword" class="hidden">비밀번호 입력</label>
                  <input type="password" class="login__input"  placeholder="비밀번호" id="userPassword" required />
                  <button class="btn btn__green mt-[18px]" type="submit">로그인</button>
              </section>
            </form>
            <div class="sign__up">
              <a href="#sign-up">회원가입</a>
              <a href="#login">비밀번호 찾기</a>
            </div>
      `,w=()=>{document.body.innerHTML=v();const r="https://openmarket.weniv.co.kr";let l="BUYER";const o=document.querySelector("button.customer"),a=document.querySelector("button.seller"),t=document.querySelector(".user__form"),s=document.querySelector(".user__section"),n=document.getElementById("userId"),c=document.getElementById("userPassword");let i=null;const p=(e,u,d)=>{u.classList.remove("active"),!e.classList.contains("active")&&e.classList.add("active"),s.classList.remove(u.classList),s.classList.add(e.classList),l=d,n.value="",c="",i!==null&&i.remove(),i=null},b=async()=>{i!==null&&i.remove();const e=n.value,u=c.value,d={username:e,password:u,login_type:l},m=await fetch(`${r}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),g=await m.json();if(m.ok){const h={user_type:g.user_type,token:g.token};localStorage.setItem("user",JSON.stringify(h)),window.location.href="/openMarket"}else c.insertAdjacentHTML("afterend",'<p class="error__message">아이디 또는 비밀번호가 일치하지 않습니다.</p>'),i=document.querySelector(".error__message")};o.addEventListener("click",e=>{e.preventDefault(),p(o,a,"BUYER")}),a.addEventListener("click",e=>{e.preventDefault(),p(a,o,"SELLER")}),t.addEventListener("submit",e=>{e.preventDefault(),b()})},f=()=>{const r=window.location.href.split("#")[1];r?r==="login"?w():r==="sign-up"&&y():document.querySelector("#app").innerHTML=`
    ${_()}
  `};window.addEventListener("hashchange",f);window.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded"),f()});window.addEventListener("unload",()=>{localStorage.removeItem("user")});
