import { url } from "../../main";
import { checkToken } from "../../utils/token";
import Loading from "../loading/Loading";
import Modal from "../modal/Modal";

const fetchData = async (page = "") => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    const res = await fetch(`${url}/seller/${page && `?page=${page}`}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
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

const tbodyTemplate = async (page) => {
  const data = await fetchData(page);
  console.log(data);
  const tdStyle = `py-[16px] px-[30px] bg-white text-center`;
  const tbodyTemp = `
    <tbody>
    ${data.results
      .map((el) => {
        return `<tr class="border-t border-b border-t-[#c4c4c4] border-b-[#c4c4c4]">
              <td class="${tdStyle}">
                <a href="#details/${
                  el.product_id
                }" class="flex items-center gap-[30px]">
                  <img class="block w-[70px] h-[70px] rounded-full" src="${
                    el.image
                  }" alt="${el.name}" />
                <div class="text-left">
                  <h4 class="text-[1.125rem] mb-[10px] leading-[22px]">${
                    el.name
                  }</h4>
                  <data class="text-[#767676] leading-[20px]" value="${
                    el.stock
                  }">재고: ${el.stock}</data>
                </div>
                </a>
              </td>
              <td class="${tdStyle}">
                ${el.price.toLocaleString()}원
              </td>
              <td class="${tdStyle}">
                <button type="button" class="rounded-[5px] w-[80px] leading-[20px] py-[10px] text-center text-white bg-[#21BF48]">수정</button>
              </td>
              <td class="${tdStyle}">
                <button type="button" class="delete__btn rounded-[5px] w-[80px] leading-[20px] py-[10px] text-center text-[#767676] border border-[#c4c4c4] hover:text-black hover:border-[#767676]" data-ProductId="${el.product_id}">삭제</button>
              </td>
          </tr>`;
      })
      .join("")}
    </tbody>
  `;

  return { template: tbodyTemp, next: data.next, previous: data.previous };
};

const thData = ["상품 정보", "판매 가격", "수정", "삭제"];

const template = async (page) => {
  const data = await tbodyTemplate(page);
  const productList = `
    <h3 class="tag__hidden">상품 리스트</h3>
    <table class="w-full border-collapse">
      <colgroup>
        <col class="w-[50%]" />
        <col class="w-[calc(50%-280px)]" />
        <col class="w-[140px]" />
        <col class="w-[140px]" />
      </colgroup>
      <thead class="border-b border-b-[#c4c4c4]">
        <tr>
          ${thData
            .map(
              (el) =>
                `<th class="py-[20px] leading-[20px] text-[1.125rem] bg-white">상품 정보</th>`
            )
            .join("")}
        </tr>
      </thead>
      ${data.template}
    </table>
    <div class="text-center my-[30px]">
      <button class="${
        data.previous ? "prev__btn" : "text-[#c4c4c4]"
      } mr-[20px]" type="button">prev</button>
      <button class="${
        data.next ? "next__btn" : "text-[#c4c4c4]"
      }" type="button">next</button>
    </div>
  `;

  const prev = data.previous ? data.previous.split("page=")[1] : "";
  const next = data.next ? data.next.split("page=")[1] : "";

  return { template: productList, prev: prev, next: next };
};

const SellerProductList = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const sessionPageData = sessionStorage.getItem("page");
  const section = document.createElement("section");
  section.classList.add("min-h-[884px]");
  section.classList.add("bg-[#F2F2F2]");
  section.classList.add("border");
  section.classList.add("border-[#c4c4c4]");
  section.classList.add("rounded-[5px]");
  section.classList.add("overflow-hidden");
  let temp;
  let currentPage = sessionPageData ? sessionPageData : "";
  let modal = null;
  let isModal = false;
  let deleteId = null;

  if (sessionPageData === "" || sessionPageData === null) {
    temp = await template();
  } else {
    temp = await template(sessionPageData);
  }

  section.insertAdjacentHTML("beforeend", temp.template);

  // 페이지네이션 관련 데이터 정의
  const pagination = {
    prev: temp.prev ? temp.prev : "",
    next: temp.next ? temp.next : 1,
  };

  // 페이지네이션 핸들러 함수
  const paginationHandler = async (page) => {
    currentPage = page;
    const newData = await template(page);

    section.innerHTML = "";
    section.insertAdjacentHTML("beforeend", newData.template);

    pagination.prev = newData.prev;
    pagination.next = newData.next;

    document.documentElement.scrollTop = 0;
  };

  const setPageSession = () => {
    sessionStorage.setItem("page", currentPage === 0 ? "" : currentPage);
  };

  // 상품 삭제 모달 이벤트
  const modalDeleteEventHandler = () => {
    const loading = Loading();
    section.appendChild(loading);
    const res = fetch(`${url}/products/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    res
      .then(async (res) => {
        if (res.ok) {
          ModalCloseHandler();
          alert("해당 상품이 삭제되었습니다.");
          const newData = await template(currentPage);
          section.innerHTML = "";
          section.insertAdjacentHTML("beforeend", newData.template);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        loading.remove();
      });
  };

  // 모달 닫는 함수
  const ModalCloseHandler = () => {
    modal !== null && modal.remove();
    isModal = false;
  };

  section.addEventListener("click", async (e) => {
    if (e.target.classList.contains("prev__btn")) {
      e.preventDefault();
      paginationHandler(pagination.prev);
      setPageSession();
    }
    if (e.target.classList.contains("next__btn")) {
      e.preventDefault();
      paginationHandler(pagination.next);
      setPageSession();
    }

    if (e.target.classList.contains("delete__btn")) {
      deleteId = e.target.getAttribute("data-ProductId");
      if (!isModal) {
        modal = Modal(
          "상품을 삭제하시겠습니까?",
          modalDeleteEventHandler,
          ModalCloseHandler
        );
        isModal = true;
        section.appendChild(modal);
      }
    }
  });
  return section;
};

export default SellerProductList;
