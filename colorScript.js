var timer = null;

function redBG() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    document.body.style.background = "red";
    timer = setTimeout(BackToOG, 1300);
}
function greenBG() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    document.body.style.background = "green";
    timer = setTimeout(BackToOG, 1300);
}
function blueBG() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    document.body.style.background = "blue";
    timer = setTimeout(BackToOG, 1300);
}
function BackToOG() {
    document.body.style.background = "#00fff2";
}