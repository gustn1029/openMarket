const ErrorMessage = (message, error = true) => {
    return `<p class="error__message ${error ? "text-[#eb5757]" : "text-[#21BF48]"}">${message}</p>`;
}

export default ErrorMessage;