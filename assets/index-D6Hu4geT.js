(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const c=()=>{const t=localStorage.getItem("user");return`
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
            <ul class="w-[128px] flex">
                ${[{href:"#cart",text:"장바구니",imageUrl:"/images/icon-shopping-cart.svg"},{href:t?"#my-page":"#login",text:t?"마이페이지":"로그인",imageUrl:"/images/icon-user.svg"}].map(o=>`<li class="w-1/2 text-center">
                        <a href="${o.href}" class="block leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]" style="background: url('/openMarket${o.imageUrl}') no-repeat center top">${o.text}</a>
                    </li>`).join("")}
                </ul>
            </nav>
        </section>
    </header>
    `},i=()=>`
          <header class="pt-[100px] text-center mb-[70px]">
              <a href="/openMarket" class="inline-block">
                  <h1 class="w-[238px] h-[74px] indent-[-9999px] bg-[url('/images/Logo-hodu.png')] bg-no-repeat bg-contain">호두 오픈마켓</h1>
              </a>
          </header>
          <section class="login-wrap max-w-[550px] w-full m-auto">
              <h2 class="hidden">로그인 폼</h2>
              <ul class="user__btn__list">
                <li>
                    <button type="button" class="customer active">구매회원 로그인</button>
                </li>
                <li>
                    <button type="button" class="seller">판매회원 로그인</button>
                </li>
              </ul>
              <form class="customer">
                  <label for="userId" class="hidden">아이디 입력</label>
                  <input type="text" placeholder="아이디" />
                  <label for="userId" class="hidden">비밀번호 입력</label>
                  <input type="password" placeholder="비밀번호" />
                  <button type="submit">로그인</button>
              </form>
              <div class="sign__up">
                <a href="#sign-up">회원가입</a>
                <a href="#login">비밀번호 찾기</a>
              </div>
          </section>
      `,u=()=>{document.body.innerHTML=i();const t=document.querySelector(".customer"),n=document.querySelector(".seller"),r=document.querySelector(".login-wrap form");console.log(r),t.addEventListener("click",o=>{o.preventDefault(),n.classList.remove("active"),!t.classList.contains("active")&&t.classList.add("active"),r.classList.contains("seller")&&(r.classList.remove("seller"),r.classList.add("customer"))}),n.addEventListener("click",o=>{o.preventDefault(),t.classList.remove("active"),!n.classList.contains("active")&&n.classList.add("active"),r.classList.contains("customer")&&(r.classList.remove("customer"),r.classList.add("seller"))})},a=()=>{const t=window.location.href.split("#")[1];t?t==="login"&&u():document.querySelector("#app").innerHTML=`
    ${c()}
  `};window.addEventListener("hashchange",a);window.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded"),a()});
