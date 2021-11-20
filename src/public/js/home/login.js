
const id = document.querySelector("#id"),
      pw = document.querySelector("#pw"),
      loginBtn = document.querySelector("#button")

// 로그인 버튼 눌러 click 이벤트 발생하면 login 함수 실행
loginBtn.addEventListener("click",login);


function login() {
    const req = {
        id : id.value, // html에서 입력한 id 값 가져오기
        pw:  pw.value,
    }
    fetch('/login', {
        method: 'POST', // 전달 방식 post
        headers: {
            "Content-Type" : "application/json",  // 내가 전달하는 데이터가 json 인지 알려주는 것
        },
        body: JSON.stringify(req),  //json 형식으로 전달
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.success) {  
        location.href ='/';
        return alert(`${id.value}님 환영합니다.`);
      }else {
          alert(res.msg);
      }
    })
    .catch ((err) => {
        console.error(("login 에러 발생"));
    });
}