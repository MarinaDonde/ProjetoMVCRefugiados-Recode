
const br = document.querySelector('.br');
const en = document.querySelector('.en');
const es = document.querySelector('.es');
let portugues, espanol, english = false;



br.addEventListener("click", function () {
    portugues = true;
});

en.addEventListener("click", function () {
    english = true;
});

es.addEventListener("click", function () {
    espanol = true;
});


