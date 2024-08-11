# openMarket

## 1. 목표와 기능

### 1.1 목표
- 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 해당 상품을 구매하는 서비스를 구현 합니다.

### 1.2 기능
- 판매자로 로그인 하여 상품을 등록, 수정 및 판매할 수 있습니다.
- 판매자는 상품 구매가 불가능합니다.
- 구매자가 오픈마켓에 등록되어 있는 상품의 세부사항을 확인할 수 있습니다.
- 구매자는 구매하고자 하는 상품을 장바구니에 담을 수 있습니다.
- 구매자는 장바구니에 담은 상품을 구매할 수 있습니다.

### 1.3 팀 구성
<table>
	<tr>
		<th>김현수</th>
	</tr>
</table>

## 2. 개발 환경 및 배포 URL

### 2.1 개발 환경
- 개발 환경
    - vite
- 배포 환경
    - GitHub pages

### 2.2 배포 URL
- https://gustn1029.github.io/openMarket/

### 2.3 URL 구조
|URL|페이지 설명|GET|POST|PUT|DELETE|로그인 권한|
|------|---|:---:|:---:|:---:|:---:|:---:|
|/|상품 목록|✔️|| | | |
|/login|로그인| |✔️| | | |
|/logout|로그아웃| |✔️| | | |
|/join|회원가입| |✔️| | | |
|/details|상품 상세<br>장바구니 담기<br>바로 구매|✔️<br><br><br>|<br>✔️<br>✔️|||<br>✔️<br>✔️|
|/cart|장바구니<br>상품 수량 변경<br>삭제<br>주문|✔️<br><br><br><br>|<br><br><br>✔️|<br>✔️<br><br><br>|<br><br>✔️<br><br>|✔️<br>✔️<br>✔️<br>✔️|
|/order|주문/결제||✔️|||✔️|


## 3. 요구사항 명세와 기능 명세
- 로그인
```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 로그인 요청
    B->>+A: 로그인 정보 요구
    A->>+C: id, pw 전달
    alt 로그인 정보가 있고 로그인 정보가 맞을 시
    C->>+B: access token, refresh token 전달
    B->>+A: 로그인 성공
    else 로그인 정보가 없거나 정보가 맞지 않을시
    C->>+B: False
    B->>+A: 로그인 실패
    end
```
- 로그아웃

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 로그아웃 요청
    B->>+C: 로그아웃 메시지 전달
    C->>+B: 로그아웃 성공
    B->>+A: 로그아웃 성공
```
- 회원가입

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 회원가입 요청
    B->>+A: 회원가입 정보 요구
    alt 구매자일 시
        A->>+C: username, password, password2, phone_number, name 전달
    else 판매자일 시
        A->>+C: username, password, password2, phone_number, name, company_registration_number, store_name 전달
    end
    alt 유효성 검사 통과 시
        C->>+B: 가입 된 정보 전달
        B->>+A: 회원가입 성공
    else 유효성 검사 통과 못할 시
        C->>+B: FAIL message 전달
        B->>+A: 회원가입 실패
    end
```
- 아이디 검증

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 아이디 검증 요청
    B->>+C: username 전달
    alt 중복아이디가 없을 경우
        C->>+B: Success 전달
        B->>+A: 아이디 검증 성공
    else 중복아이디가 있을 경우
        C->>+B: FAIL_Message 전달
        B->>+A: 아이디 검증 실패
    else 값을 입력하지 않았거나 비어있을 경우
        C->>+B: FAIL_Message 전달
        B->>+A: 아이디 검증 실패
    end
```
- 사업자등록번호 검증

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 사업자등록번호 검증 요청
    B->>+C: company_registration_number 전달
    alt 중복 사업자등록번호가 없을 경우
        C->>+B: Success 전달
        B->>+A: 사업자등록번호 검증 성공
    else 중복 사업자등록번호가 있을 경우
        C->>+B: FAIL_Message 전달
        B->>+A: 사업자등록번호 검증 실패
    else 값을 입력하지 않았거나 비어있을 경우
        C->>+B: FAIL_Message 전달
        B->>+A: 사업자등록번호 검증 실패
    end
```
- 상품 목록

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 상품 목록 데이터 요청
    B->>+C: 상품 목록 데이터 요청
    C->>+B: 상품 목록 전달
    B->>+A: 상품 목록 출력 성공
```
- 상품 상세

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 상품 상세 데이터 요청
    B->>+C: 상품 상세 데이터 요청
    C->>+B: 상품 상세 데이터 전달
    B->>+A: 상품 상세 출력 성공
```
- 장바구니 담기

```mermaid
    sequenceDiagram
     actor A as client
    participant B as Web
    participant C as server
    A->>+B: 장바구니 담기 요청
    B->>+A: 장바구니 담을 물건 정보 요구
    A->>+C: product_id, quantity 전달
    alt 해당 값이 모두 전달되었을 때
        C->>+B: my_cart, cart_item_id, product_id, quantity 전달
        B->>+A: 장바구니 담기 성공
    else 전달 값이 없을 경우
        C->>+B: FAIL
        B->>+A: 장바구니 담기 실패
    end
```
- 장바구니 물건 수량 수정

```mermaid
    sequenceDiagram
    participant B as Web
    participant C as server
    A->>+B: 장바구니 물건 수량 수정 요청
    B->>+A: 장바구니 물건 수량 정보 요구
    A->>+C: product_id, quantity, is_active 전달
    alt 해당 값이 모두 전달되었을 때
        C->>+B: my_cart, cart_item_id, product_id, quantity 전달
        B->>+A: 장바구니 수량 수정 성공
    else 전달 값이 없거나 타입이 다를 경우
        C->>+B: FAIL message 전달
        B->>+A: 장바구니 수량 수정 실패
    end
```
- 장바구니 물건 삭제

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 장바구니 물건 삭제 요청
    B->>+A: 장바구니 삭제할 물건의 장바구니 아이디 요구
    A->>+C: cart_item_id 전달
    alt 해당 값이 전달되었을 때
        C->>+B: SUCCESS message 전달
        B->>+A: 장바구니 물건 삭제 성공
    else 전달 장바구니 아이디의 값이 없을 경우
        C->>+B: FAIL
        B->>+A: 장바구니 물건 삭제 실패
    end
```
- 주문

```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as server
    A->>+B: 주문 요청
    B->>+A: 주문 정보 요구
    alt 주문 타입이 "cart_order"일 경우
        A->>+C: total_price, order_kind, receiver, receiver_phone_number, address, address_message, payment_method 전달
    else 주문 타입이 "cart_order"가 아닐 경우
        A->>+C: product_id, quantity, total_price, order_kind, receiver, receiver_phone_number, address, address_message, payment_method 전달
    end
    alt 해당 값이 모두 전달 되고, 타입이 일치할 때
        C->>+B: SUCCESS buyer, order_number, order_items, receiver, receiver_phone_number, address, address_message, payment_method, total_price, order_quantity, delivery_status 전달
        B->>+A: 주문 성공
    else 해당 값이 모두 전달 되지 않거나, 타입이 일치하지 않을 때
        C->>+B: FAIL
        B->>+A: 주문 실패
    end
```
## 4. 프로젝트 구조와 개발 일정
### 4.1 프로젝트 구조

📦openMarket  <br>
 ┣ 📂css<br>
 ┃  ┣📜cart.css<br>
 ┃  ┣📜details.css<br>
 ┃  ┣📜join.css<br>
 ┃  ┣📜order.css<br>
 ┃  ┣📜sign.css<br>
 ┃  ┣📜style.css<br>
 ┣ 📂js<br>
 ┃  ┃ ┣📂components <br>
 ┃  ┃ ┃ ┣📂loading <br>
 ┃  ┃ ┃ ┃ ┣📜Loading.js <br>
 ┃  ┃ ┃ ┃ ┣📜loading.css <br>
 ┃  ┃ ┃ ┣📂modal <br>
 ┃  ┃ ┃ ┃ ┣📜modal.js <br>
 ┃  ┃ ┃ ┃ ┣📜modal.css <br>
 ┃  ┃ ┃ ErrorMessage.js <br>
 ┃  ┃ ┃ Home.js <br>
 ┃  ┃ ┃ LabelInput.js <br>
 ┃  ┣📜cart.js<br>
 ┃  ┣📜details.js<br>
 ┃  ┣📜header.js<br>
 ┃  ┣📜join.js<br>
 ┃  ┣📜login.js<br>
 ┃  ┣📜logout.js<br>
 ┃  ┣📜main.js<br>
 ┃  ┣📜order.js<br>
 ┃  ┣📜productList.js<br>
 ┣ 📜index.html<br>
 ┣ 📜README.md  <br>

### 4.2 개발 일정(WBS)
* 아래 일정표는 머메이드로 작성했습니다.
```mermaid
gantt
    title hodushop openmarket
    dateFormat YY-MM-DD
    section FE
        header    :2024-08-02, 2d
        login    :2024-08-02, 2d
        join     :2024-08-04, 2d
        logout     :2024-08-06, 1d
        productList     :2024-08-06, 2d
        details     :2024-08-06, 2d
        cart     :2024-08-08, 2d
        order     :2024-08-09, 2d
        footer     :2024-08-10, 1d
        banner     :2024-08-11, 1d
```

## 5. 역할 분담

- 팀장 : 김현수
- FE : 김현수

## 6 화면 설계
 
<table>
    <tbody>
        <tr>
            <td>메인</td>
            <td><img src="./public/readme/main.png" alt="호두샵 메인페이지"></td>
        </tr>
        <tr>
            <td>로그인</td>
            <td><img src="./public/public/readme/login.png" alt="호두샵 로그인 페이지"></td>
        </tr>
        <tr>
            <td>회원가입</td>
            <td><img src="./public/readme/join.png" alt="호두샵 회원가입 페이지"></td>
        </tr>
        <tr>
            <td>상세</td>
            <td><img src="./public/readme/details.png" alt="호두샵 상세 페이지"></td>
        </tr>
        <tr>
            <td>장바구니</td>
            <td><img src="./public/readme/cart.png" alt="호두샵 장바구니 페이지"></td>
        </tr>
        <tr>
            <td>주문/결제</td>
            <td><img src="./public/readme/order.png" alt="호두샵 주문/결제 페이지"></td>
        </tr>
    </tbody>
</table>

## 7. 에러와 에러 해결
| **에러** | **에러 해결**| 
|----------|--------------|
| `로그아웃 시 일정 화면에서 빈화면으로 출력`| 로그아웃 시 루트 페이지로 이동하도록 함|
| `모달 클릭 시 계속 append 됨`| isModal 변수로 제어|
| `로그인 시 이전 페이지로 이동 안됨`| sessionStorage에 이전 페이지 해시 정보를 저장하여 이동|
| `헤더에 토큰 값 관련 401 에러`| 토큰 값 앞에 "JWT" 를 추가|

## 8. 개발하며 느낀점
vanillaJS로 SPA를 구현한 적이 강의를 들으면서 한번 따라한 뒤로 한번도 없었는데 구현 초기에 설계를 제대로 해야지만 개발하는 데에 문제가 없겠다 라는 것을 깨달을 수 있었습니다.<br>
짧은 기간에 구현한 프로젝트라 아쉬움이 많이 남지만 조금씩 고도화 해서 포트폴리오에 넣을 수 있도록 하겠습니다.
