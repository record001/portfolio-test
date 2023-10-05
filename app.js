let header  =document.querySelector(".header")

window.addEventListener("scroll", (e)=> {

  if(window.scrollY > 20) {
    header.classList.add("purple")
  }else {
    header.classList.remove("purple")

  }
})