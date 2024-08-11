/**
 * 
 * @param id input 아이디 
 * @param labelText 라벨 텍스트
 * @param type 인풋 타입
 * @param inputClass 인풋 클래스
 * @param labelClass 라벨 클래스
 * @param required required 여부
 * @returns 
 */
const LabelInput = (id, labelText, type = "text",inputClass="", labelClass = "", required = true) => {
    return `
      <label for="${id}" class="${labelClass} relative">
          <span>${labelText}</span>
          <input class="${inputClass}" type="${type}" id="${id}" ${required ? "required":""} />
      </label>
    `;
  };

  export default LabelInput;