document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var closeMenuButton = document.getElementById('MenuButtons');
    var aside = document.querySelector('aside');

    menuButton.addEventListener('click', function() {
        aside.style.width = '200px';
    });

    closeMenuButton.addEventListener('click', function() {
        aside.style.width = '0';
    });
});
