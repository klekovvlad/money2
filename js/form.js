const icon = document.querySelector('.header__menu-dotted');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu > ul > li > a');
icon.addEventListener('click', () => {
    icon.classList.toggle('icon-open');
    menu.classList.toggle('menu-show');
});
menuLink.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        menu.classList.remove('menu-show'); 
        icon.classList.remove('icon-open');
    })
});

const contactBtn = document.querySelector('.header__buttons-item');
const contactMenu = document.querySelector('.header__buttons-menu');
contactBtn.addEventListener('click', () => {
    contactMenu.classList.toggle('header__menu-show');
});
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 17 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 17)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  
  });
    const moneyInput = document.querySelector('#money');
    moneyInput.addEventListener('keydown', () => {
        moneyInput.value = moneyInput.value.replace(/[^\d]/g,'');
    })
});
