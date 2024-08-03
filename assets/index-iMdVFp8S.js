(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const x=()=>{const r=JSON.parse(localStorage.getItem("user"));let n=[];const i={href:r?"#my-page":"#login",text:r?"마이페이지":"로그인",imageUrl:"/images/icon-user.svg"},a=[{href:"#cart",text:"장바구니",imageUrl:"/images/icon-shopping-cart.svg"}],e=[{href:"#seller-center",text:"판매자 센터",imageUrl:"/images/icon-shopping-bag.svg"}];return a.push(i),e.unshift(i),r&&r.user_type==="SELLER"?n=e:n=a,`
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
                ${n.map(s=>{let o="";return s.text==="판매자 센터"?o=`<a href="${s.href}" class="block text-left py-[18px] pl-[60px] ml-[30px] w-[168px] leading-[1.125rem] text-[1.125rem] text-white rounded-[5px]" style="background: url('/openMarket${s.imageUrl}') no-repeat 20px center; background-color: #21BF48;">${s.text}</a>`:o=`<a href="${s.href}" class="block w-[64px] text-center leading-[0.875rem] text-[0.75rem] text-[#767676] pt-[36px]" style="background: url('/openMarket${s.imageUrl}') no-repeat center top">${s.text}</a>`,`
                              <li class="">
                                ${o}
                              </li>`}).join("")}
                </ul>
            </nav>
        </section>
    </header>
    `},b=()=>`
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
                  <input type="text" placeholder="아이디" id="userId" required />
                  <label for="userPassword" class="hidden">비밀번호 입력</label>
                  <input type="password" placeholder="비밀번호" id="userPassword" required />
                  <button type="submit">로그인</button>
              </form>
              <div class="sign__up">
                <a href="#sign-up">회원가입</a>
                <a href="#login">비밀번호 찾기</a>
              </div>
          </section>
      `,y=()=>{document.body.innerHTML=b();const r="https://openmarket.weniv.co.kr";let n="BUYER";const i=document.querySelector(".customer"),a=document.querySelector(".seller"),e=document.querySelector(".login-wrap form"),t=document.getElementById("userId"),s=document.getElementById("userPassword");let o=null;const d=(l,c,u)=>{c.classList.remove("active"),!l.classList.contains("active")&&l.classList.add("active"),e.classList.contains("seller")&&(e.classList.remove("seller"),e.classList.add("customer")),n=u,t.value="",s="",o!==null&&o.remove(),o=null},f=async()=>{o!==null&&o.remove();const l=t.value,c=s.value,u={username:l,password:c,login_type:n},p=await fetch(`${r}/accounts/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),g=await p.json();if(p.ok){const h={user_type:g.user_type,token:g.token};localStorage.setItem("user",JSON.stringify(h)),window.location.href="/openMarket"}else s.insertAdjacentHTML("afterend",'<p class="error__message">아이디 또는 비밀번호가 일치하지 않습니다.</p>'),o=document.querySelector(".error__message")};i.addEventListener("click",l=>{l.preventDefault(),d(i,a,"BUYER")}),a.addEventListener("click",l=>{l.preventDefault(),d(a,i,"SELLER")}),e.addEventListener("submit",l=>{l.preventDefault(),f()})},m=()=>{const r=window.location.href.split("#")[1];r?r==="login"&&y():document.querySelector("#app").innerHTML=`
    ${x()}
  `};window.addEventListener("hashchange",m);window.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded"),m()});
