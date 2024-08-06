import { url } from "./main";

const fetchData = async (page = "") => {
  try {
    const res = await fetch(`${url}/products/${page && `?page=${page}`}`);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.error(error);
  }
};

const template = async (page = "") => {
  const data = await fetchData(page);
  console.log(data);
  const list = `<h2 class="tag__hidden">상품 리스트</h2>
                  <ul class="grid grid-cols-3 gap-[70px]">
                      ${data.results
                        .map(
                          (el) => `
                            <li class="">
                              <a href="#details/${
                                        el.product_id
                                      }" class="grid gap-[10px]">
                                  <div class="relative mb-[6px] items-center justify-center h-[0] pb-[100%] overflow-hidden border border-[#c4c4c4] rounded-[10px]">
                                      <img src="${el.image}" alt="${
                                      el.product_name
                                      }" class="absolute w-full h-full left-[0] top-[0]" />
                                  </div>
                                  <p class="text-[#767676] leading-[1]">
                                    ${el.store_name}
                                  </p>
                                  <h3 class="text-[1.125rem] leading-[1.375rem]">
                                      ${el.product_name}
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
  console.log(prev, "prev");
  console.log(next, "next");

  return { template: cartListWrap, prev: prev, next: next };
};

const CartList = async () => {
  const temp = await template();
  const inner = document.createElement("div");
  inner.classList.add("inner");
  inner.insertAdjacentHTML("beforeend", temp.template);

  const pagination = {
    prev: temp.prev ? temp.prev : "",
    next: temp.next ? temp.next : 1,
  };

  const paginationHandler = async (page) => {
    const newData = await template(page);
    console.log(newData);

    inner.innerHTML = "";
    inner.insertAdjacentHTML("beforeend", newData.template);

    pagination.prev = newData.prev;
    pagination.next = newData.next;

    document.documentElement.scrollTop = 0;
  };

  inner.addEventListener("click", async (e) => {
    if (e.target.classList.contains("prev__btn")) {
      e.preventDefault();
      paginationHandler(pagination.prev);
    }
    if (e.target.classList.contains("next__btn")) {
      e.preventDefault();
      paginationHandler(pagination.next);
    }
  });
  return inner;
};

export default CartList;
