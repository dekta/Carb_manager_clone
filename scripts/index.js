let nav = document.querySelector("#navbar");
window.addEventListener('scroll',() => {

    if(window.scrollY >= 50){
        nav.classList.add("active_navbar")
        nav.classList.add("active_navbar a")
    }
    else{
        nav.classList.remove("active_navbar")
    }
})



