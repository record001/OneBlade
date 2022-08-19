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

let select_btn_array = document.querySelectorAll(".selections__img-box")

select_btn_array.forEach(btn => {
    btn.addEventListener("click", e=> {
        e.target.classList.toggle("border")
    })
})


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

let resors = document.querySelector(".resors")

for (let i = 0; i < 3; i++) {

  resors.innerHTML +=`
    
        <li class="product">
       
              <img
                class="product__img"
                src="./images/home/white-resor.png"
                alt="white-resor"
              />

              <div class="selections">
                <div class="selections__img-box">
                    <img 
                    src="./images/home/selected-color-brown.svg"
                    alt="selected-color-brown"
                  />
                </div>
                <div class="selections__img-box">
                    <img
                    src="./images/home/selected-color-x.svg"
                    alt="selected-color-x"
                  />
                </div>
                <div class="selections__img-box">
                    <img
                    src="./images/home/selected-color-black.svg"
                    alt="selected-color-black"
                  />
                </div>
               
             
               
              </div>

              <h2 class="product__title">Product title</h2>
              <p class="product__subtitle">From $99.00 <span>$150.00</span></p>

            </li>
           

        `
    
}

let skincare = document.querySelector(".skincare")

for (let i = 0; i < 3; i++) {

    skincare.innerHTML +=`
   

        <li class="product">
              <img
                class="product__img"
                src="./images/home/white-resor.png"
                alt="white-resor"
              />

              <div class="selections">
                <div class="selections__img-box">
                    <img 
                    src="./images/home/selected-color-brown.svg"
                    alt="selected-color-brown"
                  />
                </div>
                <div class="selections__img-box">
                    <img
                    src="./images/home/selected-color-x.svg"
                    alt="selected-color-x"
                  />
                </div>
                <div class="selections__img-box">
                    <img
                    src="./images/home/selected-color-black.svg"
                    alt="selected-color-black"
                  />
                </div>
               
             
               
              </div>

              <h2 class="product__title">Product title</h2>
              <p class="product__subtitle">From $99.00 <span>$150.00</span></p>

            </li>
          

        `
    
}
let accessories = document.querySelector(".accessories")

for (let i = 0; i < 6; i++) {

    accessories.innerHTML +=`
   

        <li class="product">
              <img
                class="product__img"
                src="./images/home/white-resor.png"
                alt="white-resor"
              />

              <div class="selections">
                <div class="selections__img-box">
                    <img 
                    src="./images/home/selected-color-brown.svg"
                    alt="selected-color-brown"
                  />
                </div>
                <div class="selections__img-box">
                    <img
                    src="./images/home/selected-color-x.svg"
                    alt="selected-color-x"
                  />
                </div>
                <div class="selections__img-box">
                    <img
                    src="./images/home/selected-color-black.svg"
                    alt="selected-color-black"
                  />
                </div>
               
             
               
              </div>

              <h2 class="product__title">Product title</h2>
              <p class="product__subtitle">From $99.00 <span>$150.00</span></p>

            </li>
        

        `
    
}





