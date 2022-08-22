
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
              <ul class="color-list">
              <li class="color__item">
                  <input class="color-input" type="radio" id="one" name="check_one">
                  <label class="color" id="onee"  for="one"></label>
              </li>
              <li class="color__item">
                  <input class="color-input" type="radio" id="two" name="check_one">
                  <label class="color" id="twoo"  for="two"></label>
              </li>
              <li class="color__item">
                  <input class="color-input" type="radio" id="three" name="check_one">
                  <label class="color" id="threee"  for="three"></label>
              </li>
           </ul>
               
             
               
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
              <ul class="color-list">
              <li class="color__item">
                  <input class="color-input" type="radio" id="one" name="check_one">
                  <label class="color" id="onee"  for="one"></label>
              </li>
              <li class="color__item">
                  <input class="color-input" type="radio" id="two" name="check_one">
                  <label class="color" id="twoo"  for="two"></label>
              </li>
              <li class="color__item">
                  <input class="color-input" type="radio" id="three" name="check_one">
                  <label class="color" id="threee"  for="three"></label>
              </li>
          </ul>
               
             
               
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
              <ul class="color-list">
              <li class="color__item">
                  <input class="color-input" type="radio" id="one" name="check_one">
                  <label class="color" id="onee"  for="one"></label>
              </li>
              <li class="color__item">
                  <input class="color-input" type="radio" id="two" name="check_one">
                  <label class="color" id="twoo"  for="two"></label>
              </li>
              <li class="color__item">
                  <input class="color-input" type="radio" id="three" name="check_one">
                  <label class="color" id="threee"  for="three"></label>
              </li>
          </ul>
               
             
               
              </div>

              <h2 class="product__title">Product title</h2>
              <p class="product__subtitle">From $99.00 <span>$150.00</span></p>

            </li>
        

        `
    
}
