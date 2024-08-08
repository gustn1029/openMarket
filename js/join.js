import "../css/sign.css";
import "../css/join.css";
import LabelInput from "./components/LabelInput";
import ErrorMessage from "./components/ErrorMessage";
import { url } from "./main";

/**
 *
 * @param {*} id input id, label for
 * @param {*} labelText label text
 * @param {*} type input type 기본 = text
 * @param {*} labelClassName label class 추가
 * @returns
 */

const template = () => {
  const phoneCode = ["010", "011", "016", "017", "018", "019"];

  const join = `
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
                        ${LabelInput("userId", "아이디", "text", "flex-1")}
                    <button class="btn__green id__check__btn" type="submit">중복 확인</button>
                    </div>
                    ${LabelInput("userPassword", "비밀번호", "password")}
                    ${LabelInput(
                      "userPassword-check",
                      "비밀번호 재확인",
                      "password"
                    )}
                    ${LabelInput("userName", "이름")}
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
        `;

  return join;
};

/**
 * "__"이 붙은 class 명, "__"이 붙은 class와 관련된 style은
 * css 파일로 관리 됨
 */
export const Join = () => {
  const root = document.getElementById("app");
  root.innerHTML = template();

  const user = JSON.parse(localStorage.getItem("user"));
  let joinUser = "BUYER";
  const customerBtn = document.querySelector("button.customer");
  const sellerBtn = document.querySelector("button.seller");
  const userId = document.getElementById("userId");
  const userIdCheckBtn = document.querySelector(".id__check__btn");
  const userPassword = document.getElementById("userPassword");
  const userPasswordCheck = document.getElementById("userPassword-check");
  const userName = document.getElementById("userName");
  const phoneCode = document.querySelector(".selected__code");
  const codeList = document.querySelector(".select__list");
  const phoneNumberMiddle = document.getElementById("userPhoneNumber-middle");
  const phoneNumberLast = document.getElementById("userPhoneNumber-last");
  const userStoreName = document.getElementById("userStoreName");
  const joinCheckbox = document.getElementById("join__checkbox");
  const joinBtn = document.querySelector(".join__btn");
  const section = document.querySelector(".user__section");
  // 에러가 발생했을 때 에러 메시지를 관리하는 변수
  let errorMessage = null;
  // 판매회원 회원가입 탭을 눌렀을 때 관리되는 변수
  let sellerJoinForm = null;
  // 중복 확인, 인증 유무 체크하는 변수
  let userIdCheck,
    userBusinessNumberCheck = false;
  // 중복 확인, 인증 버튼을 눌렀을 때의 값을 저장하는 변수
  let checkId,
    checkBusinessNumber = "";

  const userBtnClickHandler = (clickUserInfo, unclickUserInfo, infoText) => {
    unclickUserInfo.classList.remove("active");
    !clickUserInfo.classList.contains("active") &&
      clickUserInfo.classList.add("active");
    section.classList.remove(joinUser.toLowerCase());
    section.classList.add(infoText.toLowerCase());
    joinUser = infoText;
    userId.value = "";
    userPassword.value = "";
    errorMessage !== null && errorMessage.remove();
    errorMessage = null;
  };

  const sellerTabBtnClickHandler = (
    clickUserInfo,
    unclickUserInfo,
    infoText
  ) => {
    userBtnClickHandler(clickUserInfo, unclickUserInfo, infoText);
    let sellerFormAddDiv = document.createElement("div");
    let sellerFormAdd = `
      <div class="seller__form__wrap flex items-end gap-[12px] mb-[12px]">
        ${LabelInput(
          "userBusinessNumber",
          "사업자 등록번호",
          "number",
          "flex-1"
        )}
        <button class="btn__green  busness__number__check__btn" type="submit">인증</button>
      </div>
      ${LabelInput("userStoreName", "스토어 이름")}
    `;
    sellerFormAddDiv.classList.add("user__seller__form__add__wrap");
    sellerFormAddDiv.insertAdjacentHTML("beforeend", sellerFormAdd);
    section.appendChild(sellerFormAddDiv);
    sellerJoinForm = document.querySelector(".user__seller__form__add__wrap");
  };

  const userIdCheckBtnClickHandler = () => {
    let message = {};
    errorMessage !== null && errorMessage.remove();

    const res = fetch(`${url}/accounts/signup/valid/username/`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: userId.value,
      }),
    });

    res
      .then(async (res) => {
        const json = await res.json();
        if (res.ok) {
          message = {
            error: false,
            text: json.Success,
          };
          userId.classList.contains("error") &&
            userId.classList.remove("error");
          checkId = userId.value;
          userIdCheck = true;
        } else {
          message = {
            error: true,
            text: json.FAIL_Message,
          };

          userId.value = "";
          userId.focus();
          !userId.classList.contains("error") && userId.classList.add("error");

          userIdCheck = false;
        }
        return message;
      })
      .then((message) => {
        const userIdVal = userId.value;
        const regex = /^[a-zA-Z0-9]{0,20}$/;

        if (!regex.test(userIdVal)) {
          !userId.classList.contains("error") && userId.classList.add("error");
          userIdCheckBtn.parentNode.insertAdjacentHTML(
            "afterend",
            ErrorMessage(
              "ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다."
            )
          );
          errorMessage = document.querySelector(".error__message");
        } else {
          userId.classList.contains("error") &&
            userId.classList.remove("error");
          userIdCheckBtn.parentNode.insertAdjacentHTML(
            "afterend",
            ErrorMessage(message.text, message.error)
          );
        }

        errorMessage = document.querySelector(".error__message");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const passwordChangeHandler = () => {
    const password = userPassword.value;
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]?)[a-zA-Z\d\W_]{8,}$/;
    console.log(!regex.test(password));

    errorMessage !== null && errorMessage.remove();

    if (!regex.test(password)) {
      // if (password.length < 8) {
      //   userPassword.parentNode.insertAdjacentHTML(
      //     "afterend",
      //     ErrorMessage("비밀번호는 8자 이상이어야 합니다.")
      //   );
      // } else if (!/[a-z]/.test(password)) {
      //   userPassword.parentNode.insertAdjacentHTML(
      //     "afterend",
      //     ErrorMessage(
      //       "비밀번호는 한 개 이상의 영소문자가 필수적으로 들어가야 합니다."
      //     )
      //   );
      // } else if (!/\d/.test(password)) {
      //   userPassword.parentNode.insertAdjacentHTML(
      //     "afterend",
      //     ErrorMessage(
      //       "비밀번호는 한 개 이상의 숫자가 필수적으로 들어가야 합니다."
      //     )
      //   );
      // }
      userPassword.parentNode.insertAdjacentHTML(
            "afterend",
            ErrorMessage(
              "8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요."
            )
          );
      !userPassword.classList.contains("error") &&
        userPassword.classList.add("error");
      userPassword.classList.contains("check") &&
        userPassword.classList.remove("chcek");
      errorMessage = document.querySelector(".error__message");
      userPassword.focus();
    } else {
      userPassword.classList.contains("error") &&
        userPassword.classList.remove("error");
      !userPassword.classList.contains("check") &&
        userPassword.classList.add("check");
    }
  };

  const passwordCheckHandler = () => {
    const password = userPassword.value;
    const passwordCheck = userPasswordCheck.value;

    errorMessage !== null && errorMessage.remove();
    if (password !== passwordCheck) {
      !userPasswordCheck.classList.contains("error") &&
        userPasswordCheck.classList.add("error");
      userPasswordCheck.classList.contains("check") &&
        userPasswordCheck.classList.remove("check");
      userPasswordCheck.insertAdjacentHTML(
        "afterend",
        ErrorMessage("비밀번호가 일치하지 않습니다.")
      );
      userPasswordCheck.focus();
      errorMessage = document.querySelector(".error__message");
    } else {
      userPasswordCheck.classList.contains("error") &&
        userPasswordCheck.classList.remove("error");
      !userPasswordCheck.classList.contains("check") &&
        userPasswordCheck.classList.add("check");
    }
  };

  const phoneCodeChangeHandler = (node) => {
    const value = node.getAttribute("data-value");
    if (value) {
      phoneCode.textContent = value;
      codeList.parentNode.classList.remove("view");
    }
  };

  const businessNumberCheckHandler = () => {
    errorMessage !== null && errorMessage.remove();
    let message = {};
    const businessNumberPatton = /[0-9]{10}/;
    const userBusinessNumber = section.querySelector("#userBusinessNumber");
    const businessNumber = userBusinessNumber.value;
    if (!businessNumberPatton.test(businessNumber)) {
      userBusinessNumber.parentNode.parentNode.insertAdjacentHTML(
        "afterend",
        ErrorMessage("사업자등록번호는 숫자 10자리를 입력해야 됩니다.")
      );
      errorMessage = document.querySelector(".error__message");
      return;
    }

    const res = fetch(
      `${url}/accounts/signup/valid/company_registration_number/`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          company_registration_number: userBusinessNumber.value,
        }),
      }
    );

    res
      .then(async (res) => {
        const json = await res.json();
        if (res.ok) {
          message = {
            error: false,
            text: json.Success,
          };
          userBusinessNumber.classList.contains("error") &&
            userBusinessNumber.classList.remove("error");
          checkBusinessNumber = userBusinessNumber.value;
          userBusinessNumberCheck = true;
        } else {
          message = {
            error: true,
            text: json.FAIL_Message,
          };

          userBusinessNumber.value = "";
          userBusinessNumber.focus();
          !userBusinessNumber.classList.contains("error") &&
            userBusinessNumber.classList.add("error");

          userBusinessNumberCheck = false;
        }
        return message;
      })
      .then((message) => {
        userBusinessNumber.classList.contains("error") &&
          userBusinessNumber.classList.remove("error");
        userBusinessNumber.parentNode.parentNode.insertAdjacentHTML(
          "afterend",
          ErrorMessage(message.text, message.error)
        );

        errorMessage = document.querySelector(".error__message");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitHandler = async (userType) => {
    let data = {};

    const username = userId.value;
    const password = userPassword.value;
    const password2 = userPasswordCheck.value;
    const name = userName.value;
    const phoneNumber = `${phoneCode.textContent}${phoneNumberMiddle.value}${phoneNumberLast.value}`;
    const phoneNumberPattern = /^1[0-9]{8,9}$/;

    errorMessage !== null && errorMessage.remove();

    if (!userIdCheck) {
      userIdCheckBtn.parentNode.insertAdjacentHTML(
        "afterend",
        ErrorMessage("아이디 중복 확인이 필요합니다.")
      );

      !userId.classList.contains("error") && userId.classList.add("error");
      errorMessage = document.querySelector(".error__message");
      return;
    }

    if (checkId !== userId.value) {
      userIdCheckBtn.parentNode.insertAdjacentHTML(
        "afterend",
        ErrorMessage(
          "중복 확인 후 아이디가 변경 되어 아이디 중복 확인이 필요합니다."
        )
      );

      !userId.classList.contains("error") && userId.classList.add("error");
      errorMessage = document.querySelector(".error__message");
      userIdCheck = false;
      return;
    }

    if (!phoneNumberPattern.test(parseInt(phoneNumber))) {
      phoneNumberLast.parentNode.insertAdjacentHTML(
        "afterend",
        ErrorMessage(
          "핸드폰 번호는 01*로 시작해야 하고, 10~11자리 숫자여야 합니다."
        )
      );
      errorMessage = document.querySelector(".error__message");
      return;
    }

    if (!joinCheckbox.checked) {
      joinCheckbox.parentNode.insertAdjacentHTML(
        "afterend",
        ErrorMessage("약관에 동의해야 회원 가입이 가능합니다.")
      );
      errorMessage = document.querySelector(".error__message");
      return;
    }

    if (userType === "BUYER") {
      data = {
        username: username,
        password: password,
        password2: password2,
        phone_number: phoneNumber,
        name: name,
      };
    } else {
      const businessNumber = section.querySelector("#userBusinessNumber").value;
      const storeName = section.querySelector("#userStoreName").value;

      if (!userBusinessNumberCheck) {
        userBusinessNumber.parentNode.parentNode.insertAdjacentHTML(
          "afterend",
          ErrorMessage("사업자등록번호 인증이 필요합니다.")
        );
        return;
      }
      if (businessNumber !== checkBusinessNumber) {
        businessNumber.parentNode.parentNode.insertAdjacentHTML(
          "afterend",
          ErrorMessage(
            "인증 후 사업자등록번호가 변경 되어 사업자등록번호 인증이 필요합니다."
          )
        );

        !businessNumber.classList.contains("error") &&
          businessNumber.classList.add("error");
        errorMessage = document.querySelector(".error__message");
        userBusinessNumberCheck = false;
        return;
      }

      data = {
        username: username,
        password: password,
        password2: password2,
        phone_number: phoneNumber,
        name: name,
        company_registration_number: businessNumber,
        store_name: storeName,
      };
    }

    console.log(data);

    const res = await fetch(
      `${url}${/accounts/}/${
        joinUser === "BUYER" ? "signup/" : "signup_seller/"
      }`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      alert("회원가입이 정상적으로 처리됐습니다.");
      window.location.href = "/openMarket/#login";
    } else {
      const json = await res.json();
      if (json?.phone_number !== undefined) {
        phoneNumberLast.parentNode.insertAdjacentHTML(
          "afterend",
          ErrorMessage(json.phone_number.join(""))
        );
        errorMessage = document.querySelector(".error__message");
      } else if (json?.store_name !== undefined) {
        section
          .querySelector("#userStoreName")
          .parentNode.insertAdjacentHTML(
            "afterend",
            ErrorMessage(json.store_name.join(""))
          );
        errorMessage = document.querySelector(".error__message");
      }
    }
  };

  // eventListener
  customerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sellerJoinForm !== null && sellerJoinForm.remove();
    userBtnClickHandler(customerBtn, sellerBtn, "BUYER");
  });

  sellerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sellerTabBtnClickHandler(sellerBtn, customerBtn, "SELLER");
  });

  userIdCheckBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userIdCheckBtnClickHandler();
  });

  userPassword.addEventListener("change", passwordChangeHandler);
  userPasswordCheck.addEventListener("change", passwordCheckHandler);

  phoneCode.addEventListener("click", () =>
    phoneCode.parentNode.classList.toggle("view")
  );

  codeList.addEventListener("click", (e) => {
    phoneCodeChangeHandler(e.target);
  });

  section.addEventListener("click", async (e) => {
    e.preventDefault();
    if (e.target.classList.contains("busness__number__check__btn")) {
      await businessNumberCheckHandler();
    }
  });

  joinBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await submitHandler(joinUser);
  });
};
