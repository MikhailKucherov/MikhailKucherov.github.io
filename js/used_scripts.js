document.getElementsByClassName('button--device')[0].onclick = function() {
    if(!this.classList.contains('button--device-active')){
        this.classList.add('button--device-active'),
        document.getElementsByClassName('button__burger')[0].classList.add('button__burger--active'),
        document.getElementsByClassName('header__menu--device')[0].classList.add('header__menu--device-active');
    }
    else{
        this.classList.remove('button--device-active'),
        document.getElementsByClassName('button__burger')[0].classList.remove('button__burger--active'),
        document.getElementsByClassName('header__menu--device')[0].classList.remove('header__menu--device-active');
    }
};
//TODO:сделать слайдер