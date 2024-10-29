import { url } from "../main";

export const updateToken = async () => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/accounts/token/refresh/`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    }
  );

  if (res.ok) {
    const newToken = await res.json();
    localStorage.setItem(
      "user",
      JSON.stringify({ ...token, token: newToken.access })
    );
  } else {
    alert("새로운 토큰을 발급하는 데에 실패했습니다.");
  }
};

export const checkToken = (code) => {
    const valid = "token_not_valid"
    if(code === valid) {
        localStorage.removeItem("user");
        alert("토큰이 만료되어 다시 로그인 합니다.");
        window.location.href = "/#login";
    }

    return;
};
