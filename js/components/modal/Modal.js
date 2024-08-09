import "./modal.css";

// createElement는 modal.css로 스타일링
const Modal = (value, event, closeEvent, cont="text") => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const template = `
        <button type="button" class="close__btn absolute right-[18px] top-[18px] rotate-45 w-[22px] h-[22px] indent-[-9999px] bg-[url('/openMarket/images/icon-plus-line.svg')] bg-no-repeat bg-center">닫기</button>
        ${
            cont==="text" 
            ? `<p class="text-center mb-[30px]">${value}</p>`
            : `<div class="text-center mb-[30px]">${value}</div>` 
        }
        <div class="grid grid-cols-2 gap-[10px]">
            <button type="button" class="close__btn__second leading-[20px]py-[10px] border border-[#c4c4c4] text-[#767676] rounded-[5px]">${cont==="text" ? "아니오": "취소"}</button>
            <button type="button" class="event__btn leading-[20px] py-[10px] bg-[#21BF48] text-white rounded-[5px]">${cont==="text" ? "예": "수정"}</button>
        </div>
    `
    modal.insertAdjacentHTML("beforeend", template);

    const closeBtn = modal.querySelector(".close__btn");
    const closeBtnSecond = modal.querySelector(".close__btn__second");
    const eventBtn = modal.querySelector(".event__btn");

    closeBtn.addEventListener("click", closeEvent);
    closeBtnSecond.addEventListener("click", closeEvent);
    eventBtn.addEventListener("click", event);


    return modal;
}

export default Modal;