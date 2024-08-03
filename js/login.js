import "../css/login.css";

const template = () => {
  const login = `
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
      `;

  return login;
};

/**
 * 제목2 로그인 폼 하위 태그 css 는 login.css로 처리
 */
export const Login = () => {
  document.body.innerHTML = template();

  const url = "https://openmarket.weniv.co.kr";
  let loginUser = "BUYER";
  const customerBtn = document.querySelector(".customer");
  const sellerBtn = document.querySelector(".seller");
  const form = document.querySelector(".login-wrap form");
  const userId = document.getElementById("userId");
  const userPassword = document.getElementById("userPassword");
  let errorMessage = null;

  const userBtnClickHandler = (clickUserInfo, unclickUserInfo, infoText) => {
    unclickUserInfo.classList.remove("active");
    !clickUserInfo.classList.contains("active") &&
      clickUserInfo.classList.add("active");
    if (form.classList.contains("seller")) {
      form.classList.remove("seller");
      form.classList.add("customer");
    }
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
