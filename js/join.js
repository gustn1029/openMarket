import "../css/sign.css";
import "../css/join.css";

const template = () => {
  const phoneCode = ["010", "011", "016", "017", "018", "019"];

  const join = `
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
                            <ul class="select__list">${phoneCode
                              .map(
                                (el) =>
                                  `<li class="select__option" data-value="${el}">${el}</li>`
                              )
                              .join("")}</ul>
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
        `;

  return join;
};

/**
 * __이 붙은 class 명, __이 붙은 class와 관련된 style은
 * css 파일로 관리 됨
 */
export const Join = () => {
  document.body.innerHTML = template();

  const url = "https://openmarket.weniv.co.kr";
  let loginUser = "BUYER";
  const customerBtn = document.querySelector("button.customer");
  const sellerBtn = document.querySelector("button.seller");
  const form = document.querySelector(".user__form");
  const section = document.querySelector(".user__section");
  const userId = document.getElementById("userId");
  const userPassword = document.getElementById("userPassword");
  let errorMessage = null;

  const userBtnClickHandler = (clickUserInfo, unclickUserInfo, infoText) => {
    unclickUserInfo.classList.remove("active");
    !clickUserInfo.classList.contains("active") &&
      clickUserInfo.classList.add("active");
    section.classList.remove(unclickUserInfo.classList);
    section.classList.add(clickUserInfo.classList);
    loginUser = infoText;
    userId.value = "";
    userPassword = "";
    errorMessage !== null && errorMessage.remove();
    errorMessage = null;
  };

  const submitHandler = async () => {
    errorMessage !== null && errorMessage.remove();

    const idVal = userId.value;
    const passwordVal = userPassword.value;

    const loginData = {
      username: idVal,
      password: passwordVal,
      login_type: loginUser,
    };

    const res = await fetch(`${url}/accounts/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const json = await res.json();

    if (res.ok) {
      const user = {
        user_type: json.user_type,
        token: json.token,
      };

      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/openMarket";
    } else {
      userPassword.insertAdjacentHTML(
        "afterend",
        `<p class="error__message">아이디 또는 비밀번호가 일치하지 않습니다.</p>`
      );

      errorMessage = document.querySelector(".error__message");
    }
  };

  customerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userBtnClickHandler(customerBtn, sellerBtn, "BUYER");
  });

  sellerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userBtnClickHandler(sellerBtn, customerBtn, "SELLER");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandler();
  });
};
