const tabsTitle = document.querySelectorAll('.menu__tab-link');
const tabsContent = document.querySelectorAll('.menu__item');
const tabs = document.querySelector('.menu__tabs');
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".burger-menu__button")
const burgerMenu = document.querySelector(".burger-menu")
const closeButton = document.querySelector(".square-btn")



function toggleMenu(e){
    e.preventDefault()
    menu.classList.toggle("menu--active")
    burgerMenu.classList.toggle("active")
}

menuButton.addEventListener('click', (e) => toggleMenu(e))
closeButton.addEventListener('click', (e) => toggleMenu(e))

tabs.addEventListener('click', function (event) {
    let target = event.target;
        for (let i = 0; i < tabsTitle.length; i++) {
           if (target === tabsTitle[i]) {
               tabsTitle[i].classList.add('menu__tab-link--active');
               tabsContent[i].classList.add('menu__item--active');
            } else {
                tabsTitle[i].classList.remove('menu__tab-link--active');
                tabsContent[i].classList.remove('menu__item--active');
            }
}});

// menu.addEventListener("click", toggleMenu);


