// slider banner
const btnSliderPrev = document.querySelector('.slider__prev');
const btnSliderNext = document.querySelector('.slider__next');
const sliderMain = document.querySelector('.slider__main');

const sliderDotItems = document.querySelectorAll('.slider__dot__item');
const listSliderItem = document.querySelectorAll('.slider__item');


let index = 0;
let positionX = 0;
sliderDotItems.forEach((item) => {
    item.addEventListener('click', e => {
        let sliderItemWidth = listSliderItem[0].offsetWidth
        sliderDotItems.forEach(el => el.classList.remove('slider__dot__item--active'));
        e.target.classList.add('slider__dot__item--active');
        let indexDot = Number(e.target.dataset.index);
        index = indexDot;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
        hideBtnNextOrPrev(index, btnSliderNext, btnSliderPrev, listSliderItem.length);
    })
})
btnSliderNext.addEventListener(`click`, () => {
    let sliderItemWidth = listSliderItem[0].offsetWidth
    handleChangeSlider(1, sliderItemWidth);
    sliderDotItems.forEach(el => el.classList.remove('slider__dot__item--active'));
    sliderDotItems[index].classList.add('slider__dot__item--active');
});
btnSliderPrev.addEventListener("click", () => {
    let sliderItemWidth = listSliderItem[0].offsetWidth
    handleChangeSlider(-1, sliderItemWidth);
    sliderDotItems.forEach(el => el.classList.remove('slider__dot__item--active'));
    sliderDotItems[index].classList.add('slider__dot__item--active');
});

function hideBtnNextOrPrev(index, btnNext, btnPrev, lengthList) {
    if (index > 0) {
        btnPrev.classList.remove('slider__change--hide');
    }
    else {
        btnPrev.classList.add('slider__change--hide');
    }
    if (index < lengthList - 1) {
        btnNext.classList.remove('slider__change--hide');
    }
    else {
        btnNext.classList.add('slider__change--hide');
    }
}
function handleChangeSlider(direction, sliderItemWidth) {
    positionX = -1 * index * sliderItemWidth;
    if (direction === 1) {
        index++;
        hideBtnNextOrPrev(index, btnSliderNext, btnSliderPrev, listSliderItem.length);
        positionX -= sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
    }
    else if (direction === -1) {
        index--;
        hideBtnNextOrPrev(index, btnSliderNext, btnSliderPrev, listSliderItem.length);
        positionX += sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
    }
    sliderDotItems.forEach(el => el.classList.remove('slider__dot__item--active'));
    sliderDotItems[index].classList.add('slider__dot__item--active');
}
let interval;
function startSlider() {
    interval = setInterval(() => {
        let sliderItemWidth = listSliderItem[0].offsetWidth;
        if (index >= listSliderItem.length - 1) {
            index = -1;
        }
        handleChangeSlider(1, sliderItemWidth);
    }, 3000)
}
sliderMain.addEventListener('mouseenter', () => {
    clearInterval(interval);
})
sliderMain.addEventListener('mouseleave', startSlider);
startSlider();

// slider sản phẩm mới
const btnProductSliderPrev = document.querySelector('#new-products .products .slider__prev');
const btnProductSliderNext = document.querySelector('#new-products .products .slider__next');
const productMain = document.querySelector('#new-products .products__main');

const productCards = document.querySelectorAll('#new-products .product__card');
let indexProduct = 0;
let positionXProduct = 0;
let sliderItemWidth = productCards[0].offsetWidth
btnProductSliderNext.addEventListener('click', () => {
    handleChangeSliderProduct(1);
})
btnProductSliderPrev.addEventListener('click', () => {
    handleChangeSliderProduct(-1);
})

function handleChangeSliderProduct(dir) {
    positionX = -1 * indexProduct * sliderItemWidth;
    if (dir === 1) {
        indexProduct++;
        hideBtnNextOrPrev(indexProduct, btnProductSliderNext, btnProductSliderPrev, productCards.length - 3);
        positionX -= sliderItemWidth;
        productMain.style.transform = `translateX(${positionX}px)`;
    }
    else if (dir === -1) {
        indexProduct--;
        hideBtnNextOrPrev(indexProduct, btnProductSliderNext, btnProductSliderPrev, productCards.length - 3);
        positionX += sliderItemWidth;
        productMain.style.transform = `translateX(${positionX}px)`;
    }
}