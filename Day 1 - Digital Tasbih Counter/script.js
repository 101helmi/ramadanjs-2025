let count = 0;
let btnCount = document.getElementById("btnCount");
let btnReset = document.getElementById("btnReset");
let display = document.getElementById("display");

function onClick() {
    count++;
    document.getElementById("display").innerHTML = count;
}

function resetBtn() {
    let text = "Reset counter?";
    if (confirm(text) == true) {
        count = 0;
        document.getElementById("display").innerHTML = count;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}