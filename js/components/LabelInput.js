const LabelInput = (id, labelText, type = "text", labelClassName = "") => {
    return `
      <label for="${id}" class="${labelClassName} relative">
          <span>${labelText}</span>
          <input class="join__input" type="${type}" id="${id}" required />
      </label>
    `;
  };

  export default LabelInput;