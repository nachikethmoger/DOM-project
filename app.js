let score1 = 0;
let btn1 = document.querySelector("#ctr1");
let p1s = document.querySelector("#score1");

let score2 = 0;
let btn2 = document.querySelector("#ctr2");
let p2s = document.querySelector("#score2");

let reset = document.querySelector("#reset");

btn1.addEventListener("click", function() {
    score1++;
    p1s.textContent = score1;
});

btn2.addEventListener("click", function() {
    score2++;
    p2s.textContent = score2;
});

reset.addEventListener("click", function() {
    score1 = 0;
    score2 = 0;
    p1s.textContent = score1;
    p2s.textContent = score2;
});