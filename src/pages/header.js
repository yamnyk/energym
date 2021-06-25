let tabsTitle = document.querySelectorAll('.menu__menu-tab');
let tabsContent = document.querySelectorAll('.menu__menu-item');
let tabs = document.querySelector('.menu__menu-tabs');
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
