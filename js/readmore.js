
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

let a = 0;

function show_hide1() {
    if (a == 1) {
        document.getElementById("paragraph1").style.display = 'block';
        one.textContent = "...Kamroq";
        return a = 0;
    }
    else {
        document.getElementById("paragraph1").style.display = 'none';
        one.textContent = "Ko'proq...";
        return a = 1;
    }
}
function show_hide2() {
    if (a == 1) {
        document.getElementById("paragraph2").style.display = 'block';
        two.textContent = "...Kamroq";
        return a = 0;
    }
    else {
        document.getElementById("paragraph2").style.display = 'none';
        two.textContent = "Ko'proq...";
        return a = 1;
    }
}
function show_hide3() {
    if (a == 1) {
        document.getElementById("paragraph3").style.display = 'block';
        three.textContent = "...Kamroq";
        return a = 0;
    }
    else {
        document.getElementById("paragraph3").style.display = 'none';
        three.textContent = "Ko'proq...";
        return a = 1;
    }
}