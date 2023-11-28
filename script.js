document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var languageButton = document.getElementById('languageButton');
    var backToFirstAsideButton = document.querySelector('.second-aside .language'); // Back button
    var aside = document.querySelector('aside');
    var secondAside = document.querySelector('.second-aside');
    var isMenuOpen = false;
    var isSecondAsideOpen = false;

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!isMenuOpen) {
            aside.style.width = '200px';
            isMenuOpen = true;

            // Close the second aside menu if open
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

        // Toggle the visibility of the second aside menu
        isSecondAsideOpen = !isSecondAsideOpen;
        secondAside.classList.toggle('show-second-aside', isSecondAsideOpen);
    });

    // Event listener for the "Back" button
    backToFirstAsideButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Close only the second aside menu
        closeSecondAside();
    });

    function closeSecondAside() {
        isSecondAsideOpen = false;
        secondAside.classList.remove('show-second-aside');
    }
});
