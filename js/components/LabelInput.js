const LabelInput = (id, labelText, type = "text",inputClass="", labelClass = "", required = true) => {
    return `
      <label for="${id}" class="${labelClass} relative">
          <span>${labelText}</span>
          <input class="${inputClass}" type="${type}" id="${id}" ${required ? "required":""} />
      </label>
    `;
  };

  export default LabelInput;