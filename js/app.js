// var controller = document.querySelector(".custom-banner-img").children;
var controller = document.getElementsByClassName("custom-banner-imgbox");

function index1show(){
    controller[0].classList.add("active");
    controller[1].classList.remove("active");
    controller[2].classList.remove("active");
}
function index2show(){
    controller[0].classList.remove("active");
    controller[1].classList.add("active");
    controller[2].classList.remove("active");
}
function index3show(){
    controller[0].classList.remove("active");
    controller[1].classList.remove("active");
    controller[2].classList.add("active");
}


