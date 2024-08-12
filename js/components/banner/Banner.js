import "./banner.css";

const template = (data, isLink, sliderClass, idx = 0) => {
  const banner = `
        <h2 class="tag__hidden">호두샵 메인페이지 배너</h2>
        <div class="slider relative ${sliderClass}">
            ${data.map((el, i) => {
              return `
                    <div class="slide absolute lef-0 top-0 ${
                      i === idx ? "opacity-100" : "opacity-0"
                    } transition-all duration-300">
                        ${isLink ? `<a href="${el.link}">` : ""}
                            <img class="" src="${el.imageUrl}" alt="${
                el.text
              }" />
                        ${isLink ? `</a>` : ""}
                    </div>
                `;
            }).join("")}
            <button class="slider__prev__btn">이전</button>
            <button class="slider__next__btn">다음</button>
        </div>
    `;

  return banner;
};

/**
 *
 * @param data 배너에 사용할 이미지 데이터(배열)
 * data = {
 *      imageUrl: string,
 *      link: string,
 *      text: string
 * }
 * @param isLink 링크 이동 여부
 * @param sliderClass 슬라이더에 추가할 클래스
 */
const Banner = (data, isLink = true, sliderClass = "") => {
  let showIndex = 0;
  const temp = template(data, isLink, sliderClass, showIndex);
  const section = document.createElement("section");
  section.classList.add("banner");
  section.insertAdjacentHTML("beforeend", temp);


  const slides = section.querySelectorAll(".slide");

  const updateSlides = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("opacity-100", i === showIndex);
      slide.classList.toggle("z-[1]", i === showIndex);
      slide.classList.toggle("opacity-0", i !== showIndex);
      slide.classList.toggle("", i !== showIndex);
    });
  };

  const bannerBtnClickHandler = (btn) => {
    if(btn.textContent === "이전") {
        showIndex = showIndex > 0 ? showIndex - 1 : data.length - 1;
    } else {
        showIndex = showIndex >= data.length - 1 ? 0 : showIndex + 1;
    }
    updateSlides();
  };

  // Initial update
  updateSlides();

  section.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      bannerBtnClickHandler(e.target);
    }
  });

  return section;
};

export default Banner;
