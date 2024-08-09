const LabelInput = (id, labelText, type = "text",inputClass="", labelClass = "") => {
    return `
      <label for="${id}" class="${labelClass} relative">
          <span>${labelText}</span>
          <input class="${inputClass}" type="${type}" id="${id}" required />
      </label>
    `;
  };

  export default LabelInput;