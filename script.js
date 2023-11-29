document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var languageButton = document.getElementById('languageButton');
    var backToFirstAsideButton = document.querySelector('.second-aside .language');
    var aside = document.querySelector('aside');
    var secondAside = document.querySelector('.second-aside');
    var isMenuOpen = false;
    var isSecondAsideOpen = false;

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!isMenuOpen) {
            aside.style.width = '200px';
            isMenuOpen = true;

            closeSecondAside();
        } else {
            aside.style.width = '0';
            isMenuOpen = false;
        }
    });

    languageButton.addEventListener('click', function (event) {
        event.preventDefault();

        var languageMenu = document.querySelector('.language');
        languageMenu.classList.toggle('show-languages');

        isSecondAsideOpen = !isSecondAsideOpen;
        secondAside.classList.toggle('show-second-aside', isSecondAsideOpen);
    });

    backToFirstAsideButton.addEventListener('click', function (event) {
        event.preventDefault();

        closeSecondAside();
    });

    function closeSecondAside() {
        isSecondAsideOpen = false;
        secondAside.classList.remove('show-second-aside');
    }
});
