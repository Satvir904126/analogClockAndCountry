setInterval(setTime, 1000);

function setTime() {
    var date = new Date;
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hr = document.querySelector(".hour");
    const min = document.querySelector(".minute");
    const sec = document.querySelector(".second");

    setKeys(hr, hour);
    setKeys(min, minute);
    setKeys(sec, second);
}

function setKeys(element, date) {

    element.style.setProperty("--rotation", date);

}
setTime();