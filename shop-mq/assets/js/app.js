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
}
// running active modal login
btnHeaderAccounts.forEach(element => {
    element.addEventListener('click', () => {
        activeModal(modalLogin, modalWrapperLogin, `modal--active`);
        // clear text input
        allInputLogin.forEach(e=>{
            e.value="";
        })
        // clear error
        allErrLogin.forEach(e=>{
            e.classList.remove(`input__check--error`);
        })
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

const allInputLogin=document.querySelectorAll('#form-login input');
const allInputRegister=document.querySelectorAll('#form-register input');
const allInputForgotPassword=document.querySelector('#form-forgot-password input');

const allErrLogin=document.querySelectorAll('#form-login small');
const allErrRegister=document.querySelectorAll('#form-register small');
const allErrForgotPassword=document.querySelector('#form-forgot-password small');

btnLinkRegister.addEventListener('click', () => {
    modalLogin.classList.remove(`modal--active`);
    activeModal(modalSignIn, modalWrapperSignIn, `modal--active`);
    allInputRegister.forEach(e=>{
        e.value="";
    })
    allErrRegister.forEach(e=>{
        e.classList.remove(`input__check--error`)
    })
});
btnLinkForgotPassword.addEventListener('click', () => {
    modalLogin.classList.remove(`modal--active`);
    activeModal(modalForgotPassword, modalWrapperForgotPassword, `modal--active`);
    allInputForgotPassword.value="";
    allErrForgotPassword.classList.remove(`input__check--error`);
})
for (let i = 0; i < btnLinkLogin.length; i++) {
    if (i == 0) {
        btnLinkLogin[i].addEventListener('click', () => {
            modalSignIn.classList.remove(`modal--active`);
            activeModal(modalLogin, modalWrapperLogin, `modal--active`);
            // clear text input
            allInputLogin.forEach(e=>{
                e.value="";
            })
            // clear error
            allErrLogin.forEach(e=>{
                e.classList.remove(`input__check--error`);
            })
        })
    }
    else {
        btnLinkLogin[i].addEventListener('click', () => {
            modalForgotPassword.classList.remove(`modal--active`);
            activeModal(modalLogin, modalWrapperLogin, `modal--active`);
            allInputLogin.forEach(e=>{
                e.value="";
            })
            // clear error
            allErrLogin.forEach(e=>{
                e.classList.remove(`input__check--error`);
            })
        })
    }
}

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


// click đổi ảnh
$('.product-images__slider-img img').click(function () {
    let image = $(this).attr('src');
    $('.product-images__main img').attr('src', image);
})
// hover zoom 
// $("#zoom").imagezoomsl({

//     // loading spinner
//     loadinggif: 'loading.gif',

//     // opacity
//     loadopacity: 0.1,

//     // background color
//     loadbackground: '#878787'

// });