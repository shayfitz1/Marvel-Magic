const cap = document.querySelector(".cap");
const thor = document.querySelector(".thor");
const ironman = document.querySelector(".ironman");

cap.addEventListener("click", function(){
    this.classList.toggle("open");
    setTimeout(function(){
        cap.classList.toggle("open-active");
        ironman.classList.toggle("darken");
        thor.classList.toggle("darken");
    },300);
});

thor.addEventListener("click", function(){
    this.classList.toggle("open");
    setTimeout(function(){
        thor.classList.toggle("open-active");
        cap.classList.toggle("darken");
        ironman.classList.toggle("darken");
    },300);
});

ironman.addEventListener("click", function(){
    this.classList.toggle("open");
    setTimeout(function(){
        ironman.classList.toggle("open-active");
        cap.classList.toggle("darken");
        thor.classList.toggle("darken");
    },300);
});