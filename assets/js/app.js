"use strict"

//HEADER DROPDOWN MENU
const shopMenu = document.querySelector('.header__dropdown-block')
const dropdownMenu = document.querySelector('.header__dropdown-menu')

if(dropdownMenu){
    shopMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active')
    })
}

//SLIDER SECTION

//SLIDER BUTTONS
const bannerIMG = document.querySelector('.banner__img'),
      prevBtn = document.getElementById('prev'),
      nextBtn = document.getElementById('next'),
      spans = document.querySelectorAll('.clicker');



spans.forEach((span, index) => {
    span.addEventListener("click", () => {
        bannerIMG.style.background = `url(assets/img/${index + 1}.png)`
    })
})

let count = 1;

//EVENT LISTENER FOR 'NEXT' BUTTON
nextBtn.addEventListener('click', () => {
    count++
    if(count > spans.length){
        count = spans.length
    }

    update(count)
})

// EVENT LISTENER FOR 'PREVIOUS' BUTTON
prevBtn.addEventListener('click', () => {
    count--
    if(count < 1){
        count = 1
    }

    update(count)
})

//FUNCTION THAT UPDATES BACKGROUND
function update(count){
    bannerIMG.style.background = `url(assets/img/${count}.png)`
}

let imageIndex = 0
let images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']

function changeBackground(){
    bannerIMG.style.background = `url(assets/img/${images[imageIndex]})`
    imageIndex++
    if(imageIndex === images.length){
        imageIndex = 0
    }
}

setInterval(changeBackground, 6000)


