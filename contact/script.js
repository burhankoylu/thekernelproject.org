document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var languageButton = document.getElementById('languageButton');
    var aside = document.querySelector('aside');
    var isMenuOpen = false;

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!isMenuOpen) {
            aside.style.width = '200px';
            isMenuOpen = true;
        } else {
            aside.style.width = '0';
            isMenuOpen = false;
        }
    });

    languageButton.addEventListener('click', function (event) {
        event.preventDefault();

        var languageMenu = document.querySelector('.language-menu');
        languageMenu.classList.toggle('show-languages');
    });
});
