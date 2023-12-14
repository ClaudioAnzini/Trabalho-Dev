const MenuBtn = document.getElementById('header-menu-button');
const NavBar = document.getElementById('header-nav');
const MenuBtnSert1 = document.getElementById('menu-btn-sert-1');
const MenuBtnSert2 = document.getElementById('menu-btn-sert-2');
const Header = document.getElementById('header');

window.addEventListener("scroll", function() {
    Header.classList.toggle('rolou', window.scrollY > 0);
});

MenuBtn.addEventListener('click', function () {
    if (NavBar.classList.contains('aberta')) {
        NavBar.classList.remove('aberta')
        MenuBtnSert1.classList.remove('menu-btn1-aberta');
        MenuBtnSert2.classList.remove('menu-btn2-aberta');
    } else {
        NavBar.classList.add('aberta')
        MenuBtnSert1.classList.add('menu-btn1-aberta');
        MenuBtnSert2.classList.add('menu-btn2-aberta');
    }
})