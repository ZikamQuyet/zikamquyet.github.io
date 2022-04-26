// slick slider banner
$(document).ready(function () {
    $('#slider-banner .slider__main').slick({
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
});
// slick slider products
$(document).ready(function () {
    $('.products.slider__main').slick({
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

});

// active modal login
const btnHeaderAccounts = document.querySelectorAll('.header__account');
const modalLogin = document.querySelector('.modal-login');
const modalWrapperLogin = document.querySelector('.modal-login .modal__wrapper')

// function active modal
function activeModal(modal, modalWrapper, classActive) {
    // btn.addEventListener('click', () => {
    modal.classList.add(classActive);
    // });
    modal.addEventListener('click', () => {
        modal.classList.remove(classActive);
    })
    modalWrapper.addEventListener('click', (e) => e.stopPropagation());
    console.log('ai');
}
// running active modal login
btnHeaderAccounts.forEach(element => {
    // activeModal(element, modalLogin, modalWrapperLogin, `modal--active`);
    element.addEventListener('click', () => {
        activeModal(modalLogin, modalWrapperLogin, `modal--active`);
        navMobileMain.classList.remove(`nav-mobile-main--active`);
    }
    )
});

// chuyển giữ các modal đăng nhập, đky, quên mk
const modalSignIn = document.querySelector('.modal-sign-in');
const modalForgotPassword = document.querySelector('.modal-forgot-password');

const modalWrapperSignIn = document.querySelector('.modal-sign-in .modal__wrapper')
const modalWrapperForgotPassword = document.querySelector('.modal-forgot-password .modal__wrapper')

const btnLinkForgotPassword = document.querySelector('.forgot-password p');
const btnLinkRegister = document.querySelector('.register span');
const btnLinkLogin = document.querySelectorAll('.login span');

btnLinkRegister.addEventListener('click', () => {
    modalLogin.classList.remove(`modal--active`);
    activeModal(modalSignIn, modalWrapperSignIn, `modal--active`);
});
btnLinkForgotPassword.addEventListener('click', () => {
    modalLogin.classList.remove(`modal--active`);
    activeModal(modalForgotPassword, modalWrapperForgotPassword, `modal--active`);
})
for (let i = 0; i < btnLinkLogin.length; i++) {
    if (i == 0) {
        btnLinkLogin[i].addEventListener('click', () => {
            modalSignIn.classList.remove(`modal--active`);
            activeModal(modalLogin, modalWrapperLogin, `modal--active`);
        })
    }
    else {
        btnLinkLogin[i].addEventListener('click', () => {
            modalForgotPassword.classList.remove(`modal--active`);
            activeModal(modalLogin, modalWrapperLogin, `modal--active`);
        })
    }
}
// active modal menu mobile
// const btnNavMobileIcon = document.querySelector('.nav-mobile__icon');
// const navMobileMain = document.querySelector('.nav-mobile-main');
// const navMobileMainWrapper = document.querySelector('.nav-mobile-main__wrapper');

// btnNavMobileIcon.addEventListener('click', () => activeModal(navMobileMain, navMobileMainWrapper, `nav-mobile-main--active`));

// active modal search mobile
const btnHeaderSearchMobile = document.querySelector('.header__search i');
const headerSearchContainer = document.querySelector('.header__search-container');
const headerSearchInput = document.querySelector('.header__search-container .header__search-input');


btnHeaderSearchMobile.addEventListener('click', () => {
    // k focus dc :(((
    headerSearchInput.querySelector('input').focus();
    activeModal(headerSearchContainer, headerSearchInput, `header__search--active`);
    // console.log('a');
});
// show menu cấp 2
function hideMenu2(menu2, icon, classIcon1, classIcon2) {
    menu2.slideToggle();
    icon.previousElementSibling.querySelector('i').classList.toggle(classIcon1);
    icon.previousElementSibling.querySelector('i').classList.toggle(classIcon2);
}

const navChildBoy = document.querySelector('.nav-child__boy');
const navChildGirl = document.querySelector('.nav-child__girl');

navChildBoy.previousElementSibling.addEventListener('click', () => {

    hideMenu2($(".nav-child__boy"), navChildBoy, `fa-angle-down`, `fa-angle-up`);
})
navChildGirl.previousElementSibling.addEventListener('click', () => {

    hideMenu2($(".nav-child__girl"), navChildGirl, `fa-angle-down`, `fa-angle-up`);
})