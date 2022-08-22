let announcement__close = document.querySelector(".announcement__close")
let header__hero = document.querySelector(".header__hero")


announcement__close.addEventListener("click", (e) => {
    e.target.parentElement.style = "display:none"
    header__hero.style = " height: calc(100vh - 48px)"
})

let burger = document.querySelector(".burger")
let modal = document.querySelector(".modal")
let close_modal = document.querySelector(".close-modal")

burger.addEventListener("click" , ()=> {
    modal.classList.add("db")
})
close_modal.addEventListener("click" , ()=> {
    modal.classList.remove("db")
})


// select options

// let select_btn_array = document.querySelectorAll(".selections__img-box")

// select_btn_array.forEach(btn => {
//     btn.addEventListener("click", e=> {
//         e.target.classList.toggle("border")
//     })
// })


// toggle cart page by clicking bag img

let bag = document.querySelector(".bag") 
let cart = document.querySelector(".cart") 
let cart_close = document.querySelector(".close-cart") 
let body = document.querySelector("body")
bag.addEventListener("click", e=> {
    cart.classList.add("on")
   body.classList.add("body-hover")
})

cart_close.addEventListener("click", e=> {
    cart.classList.remove("on")
   body.classList.remove("body-hover")

})





