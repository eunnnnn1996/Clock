const form = document.querySelector(".js-form"),
      input = form.querySelector("input");
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text); //localStorage를 이용해서 입력한 텍스트를 웹페이지에 저장함 . 확인 방법: F12-애플리케이션 클릭 - 로컬스토리지 확인
}    

function handleSubmit(event){ // '함수(event)'는 클릭이나 엔터 같은 이벤트에 대한 정해진 값
    event.preventDefault(); // event가 발생하여 다른 페이지로 넘어가면 아무 문제 없는데 다른 페이지로 넘기지 않는 기능을 만들때에는 오류 방지를 위헤서 이 코드를 사용
    const currentValue = input.value; // input에 있는 Value를 그대로 가져옴. Value는 input에 있는 값
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);
}    

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();