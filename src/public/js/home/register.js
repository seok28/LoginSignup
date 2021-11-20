
const id = document.querySelector("#id"),
name = document.querySelector("#name"),
pw = document.querySelector("#pw"),
confirmPw = document.querySelector("#confirm-pw"),
registerBtn = document.querySelector("#button")

// 로그인 버튼 눌러 click 이벤트 발생하면 register 함수 실행
registerBtn.addEventListener("click",register);


function register() {
  if (!id.value) return alert('아이디를 입력해주세요'); 
  if(pw.value !== confirmPw.value) {
      return alert('비밀번호가 일치하지 않습니다.');
      
   }
const req = {
  id : id.value, // html에서 입력한 id 값 가져오기
  name :name.value,
  pw:  pw.value,
  confirmPw : confirmPw.value,
}

fetch('/register', {
  method: 'POST', // 전달 방식 post
  headers: {
      "Content-Type" : "application/json",  // 내가 전달하는 데이터가 json 인지 알려주는 것
  },
  body: JSON.stringify(req),  //json 형식으로 전달
})
.then((res) => res.json())
.then((res) => {
if(res.success) {
    location.href ='/register';
    return alert('회원가입에 성공하셨습니다.');
}else {
    alert(res.msg);
    }
    })
.catch ((err) => {
  console.error(("회원가입 중 에러 발생"));
});
}