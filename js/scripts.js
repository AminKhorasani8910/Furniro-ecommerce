const btn = document.querySelector(".header-icon i");
const btnmenu = document.querySelector(".mobile-header");
const btnclose = document.querySelector(".header-icon-sec i")
btn.addEventListener("click",function() {
    if (btn.classList.contains("fa-bars")) {
        btnmenu.style.right= "0";
    }else{
        btnmenu.style.right= "-14rem";
    }
    btn.classList.toggle("fa-xmark");
    btn.classList.toggle("fa-bars");
})

btnclose.addEventListener("click",function() {
    btnmenu.style.right= "-14rem";
})
