let nav = document.querySelector("#navbar");
window.addEventListener('scroll',() => {

    if(window.scrollY >= 100){
        nav.classList.add("active_navbar")
        nav.classList.add("active_navbar a")
    }
    else{
        nav.classList.remove("active_navbar")
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}