import "../css/login.css";

const template = () => {

  const login = `
          <header class="pt-[100px] text-center mb-[70px]">
              <a href="/" class="inline-block">
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
      `;

  return login;
};

/**
 * 제목2 로그인 폼 하위 태그 css 는 login.css로 처리
 */
export const Login = () => {
  document.body.innerHTML = template();

  let loginUser = "customer";
  const customerBtn = document.querySelector(".customer");
  const sellerBtn = document.querySelector(".seller");
  const form = document.querySelector(".login-wrap form");
  console.log(form);

  customerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sellerBtn.classList.remove("active");
    !customerBtn.classList.contains("active") &&
      customerBtn.classList.add("active");
    if (form.classList.contains("seller")) {
      form.classList.remove("seller");
      form.classList.add("customer");
    }
  });
  sellerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    customerBtn.classList.remove("active");
    !sellerBtn.classList.contains("active") &&
      sellerBtn.classList.add("active");
    if (form.classList.contains("customer")) {
      form.classList.remove("customer");
      form.classList.add("seller");
    }

    loginUser = "seller";
  });
};
