const tabsTitle = document.querySelectorAll('.menu__menu-tab');
const tabsContent = document.querySelectorAll('.menu__menu-item');
const tabs = document.querySelector('.menu__menu-tabs');
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
               tabsTitle[i].classList.add('active');
               tabsContent[i].classList.add('tabs-par-show');
            } else {
                tabsTitle[i].classList.remove('active');
                tabsContent[i].classList.remove('tabs-par-show');
            }
}});

// menu.addEventListener("click", toggleMenu);



// const obj = {
//     cards: ['gold', 'medium'],
// }


// document.querySelector('.menu-link').addEventListener('click', (e) => {
//          e.target.textContent
//         for( let [key, value] of Object.entries(obj)) {
//             if(key === e.target.id) {
//                 value forEach map
//             }
//         }
//         })
// })