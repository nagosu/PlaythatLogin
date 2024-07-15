// 휴대폰 번호 입력 양식 검증
document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    const phoneNumber = document.getElementById("phone-number").value;
    const phonePattern = /^010-\d{4}-\d{4}$/;

    if (!phoneNumber || !phonePattern.test(phoneNumber)) {
      event.preventDefault();
      document.getElementById("modal").style.display = "flex";
    }
  });

// 엔터키 입력 시 버튼 클릭 이벤트 발생
document
  .getElementById("phone-number")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      document.getElementById("login-button").click();
    }
  });

// 모달 닫기 버튼 이벤트
document
  .getElementById("modal-close-button")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });

// 입력 칸에 1글자라도 입력되지 않으면 버튼을 비활성화
document.getElementById("phone-number").addEventListener("input", function () {
  const phoneNumber = document.getElementById("phone-number").value;
  const loginButton = document
    .getElementById("login-button")
    .querySelector("button");

  if (phoneNumber.length > 0) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
});

// 초기 상태에서 버튼 비활성화
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document
    .getElementById("login-button")
    .querySelector("button");
  loginButton.disabled = true;
});

// 입력창에 숫자와 "-"만 입력 가능하게 필터링
document
  .getElementById("phone-number")
  .addEventListener("input", function (event) {
    const input = event.target;
    const filteredValue = input.value.replace(/[^0-9-]/g, ""); // 숫자와 "-"를 제외한 문자 제거
    input.value = filteredValue;
  });
