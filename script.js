document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var aside = document.querySelector('aside');
    var isMenuOpen = false;

    menuButton.addEventListener('click', function () {
        if (!isMenuOpen) {
            aside.style.width = '200px';
            isMenuOpen = true;
        } else {
            aside.style.width = '0';
            isMenuOpen = false;
        }
    });
});
