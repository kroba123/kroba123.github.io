let burger = document.getElementsByClassName('burger')
let menu = document.getElementsByClassName('menu')
burger[0].onclick = function() {
    if (document.getElementsByClassName('burger_active')[0]) {
        burger[0].classList.remove('burger_active')
        menu[0].classList.remove('menu_active')
        document.body.style.overflow = 'auto'
    } else {
        burger[0].classList.add('burger_active')
        menu[0].classList.add('menu_active')
        document.body.style.overflow = 'hidden'
    }
}