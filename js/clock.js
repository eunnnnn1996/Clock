const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours  = date.getHours();
    const seconds = date.getSeconds();
    // `` <-백틱 사용하면 "a"+"a" 이런식으로 이어 붙히기 안해도 된다
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000); // 새로고침 함수, setTime함수를 1초마다 새로고침

}

init();