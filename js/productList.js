import { url } from "./main";
import { checkToken, updateToken } from "./utils/token";

const fetchData = async (page = "") => {
  try {
    updateToken();
    const res = await fetch(`${url}/products/${page && `?page=${page}`}`);
    if (res.ok) {
      const json = await res.json();
      if (json.code) {
        checkToken(json.code);
      };
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const template = async (page = "") => {
  const data = await fetchData(page);
  const list = `<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${data.results
                        .map(
                          (el) => `
                            <li class="">
                              <a href="#details/${
                                el?.id
                              }" class="grid gap-[10px] product__anchor">
                                  <div class="product__img relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${el.image}" alt="${
                            el?.name
                          }" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${el?.seller?.store_name?.replace(
                                      /\x08/g,
                                      ""
                                    )}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${el?.name?.replace(/\x08/g, "")}
                                  </h3>
                                  <strong class="text-[1.5rem] leading-[1]">${el.price.toLocaleString()}<span class="ml-[2px] font-normal text-[1rem]">원</span></strong>
                                </a>
                              </li>
                        `
                        )
                        .join("")}
                  </ul>
              `;
  const cartListWrap = `
              <section class="grid gap-[50px]">
                ${list}
                <div class="text-center">
                    <button class="${
                      data.previous ? "prev__btn" : "text-[#c4c4c4]"
                    } mr-[20px]" type="button">prev</button>
                    <button class="${
                      data.next ? "next__btn" : "text-[#c4c4c4]"
                    }" type="button">next</button>
                </div>
              </section>
              `;

  const prev = data.previous ? data.previous.split("page=")[1] : "";
  const next = data.next ? data.next.split("page=")[1] : "";

  return { template: cartListWrap, prev: prev, next: next };
};

const ProductList = async () => {
  const sessionPageData = sessionStorage.getItem("page");
  let temp;

  // 세션 스토리지에 페이지 데이터가 없거나 빈 문자열인 경우 템플릿을 새로 가져옴
  if (sessionPageData === "" || sessionPageData === null) {
    temp = await template();
  } else {
    temp = await template(sessionPageData);
  }
  const inner = document.createElement("div");
  let currentPage = 0;
  inner.classList.add("inner");
  inner.insertAdjacentHTML("beforeend", temp.template);

  // 페이지네이션 관련 데이터 정의
  const pagination = {
    prev: temp.prev ? temp.prev : "",
    next: temp.next ? temp.next : 1,
  };

  // 페이지네이션 핸들러 함수
  const paginationHandler = async (page) => {
    currentPage = page;
    const newData = await template(page);

    inner.innerHTML = "";
    inner.insertAdjacentHTML("beforeend", newData.template);

    pagination.prev = newData.prev;
    pagination.next = newData.next;

    document.documentElement.scrollTop = 0;
  };

  // 클릭 이벤트 리스너 등록
  inner.addEventListener("click", async (e) => {
    if (e.target.classList.contains("prev__btn")) {
      e.preventDefault();
      paginationHandler(pagination.prev);
    }
    if (e.target.classList.contains("next__btn")) {
      e.preventDefault();
      paginationHandler(pagination.next);
    }

    if (
      e.target.parentNode.classList.contains("product__anchor") ||
      e.target.parentNode.classList.contains("product__img")
    ) {
      sessionStorage.setItem("page", currentPage === 0 ? "" : currentPage);
    }
  });

  return inner;
};

export default ProductList;
