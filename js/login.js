import "../css/sign.css";

const template = () => {
  const login = `
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
      `;

  return login;
};

/**
 * 제목2 로그인 폼 하위 태그 css 는 대부분 sign.css로 처리
 * class에 보여지는 tailwind 외에는 모두 css 파일로 관리됨
 */
export const Login = () => {
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
      login_type: loginUser
    };

    const res = await fetch(`${url}/accounts/login/`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });
    const json = await res.json();

    if(res.ok) {
      const user = {
        user_type: json.user_type,
        token: json.token
      }

      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/openMarket";
    } else {
      userPassword.insertAdjacentHTML("afterend",`<p class="error__message">아이디 또는 비밀번호가 일치하지 않습니다.</p>`);

      errorMessage = document.querySelector(".error__message");
    };
  }

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
  })
};
