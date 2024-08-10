const ErrorMessage = (message, error = true, errorClass="") => {
    return `<p class="error__message ${errorClass} ${error ? "text-[#eb5757]" : "text-[#21BF48]"}">${message}</p>`;
}

export default ErrorMessage;