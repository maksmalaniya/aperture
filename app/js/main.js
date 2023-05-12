(function() {
    const headerBurgerOpen = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__navigation');
    const headerBurgerCLose = document.querySelector('.header__nav-close');

    headerBurgerOpen.addEventListener('click', event => {
        headerNavigation.classList.add('active')
    });

    headerBurgerCLose.addEventListener('click', event => {
        headerNavigation.classList.remove('active')
    });
})();