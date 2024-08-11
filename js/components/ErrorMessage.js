/**
 * 
 * @param message 에러 출력 메시지 
 * @param error 에러일 때 true(빨간색), 아닐 때 false(녹색)
 * @param errorClass 에러메시지에 클래스 추가
 * @returns 
 */
const ErrorMessage = (message, error = true, errorClass="") => {
    return `<p class="error__message ${errorClass} ${error ? "text-[#eb5757]" : "text-[#21BF48]"}">${message}</p>`;
}

export default ErrorMessage;