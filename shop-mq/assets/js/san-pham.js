const filterCategory = document.querySelector('#filter-category');
const filterVendor = document.querySelector('#filter-vendor');
const filterPrice = document.querySelector('#filter-price');
const filterColor = document.querySelector('#filter-color');
const filterSize = document.querySelector('#filter-size');



filterCategory.previousElementSibling.addEventListener('click', () => {
    hideMenu2($("#filter-category"), filterCategory, `fa-minus`, `fa-plus`);
})
filterVendor.previousElementSibling.addEventListener('click', () => {
    hideMenu2($("#filter-vendor"), filterVendor, `fa-minus`, `fa-plus`);

})
filterPrice.previousElementSibling.addEventListener('click', () => {
    hideMenu2($("#filter-price"), filterPrice, `fa-minus`, `fa-plus`);
})
filterColor.previousElementSibling.addEventListener('click', () => {
    hideMenu2($("#filter-color"), filterColor, `fa-minus`, `fa-plus`);
})
filterSize.previousElementSibling.addEventListener('click', () => {
    hideMenu2($("#filter-size"), filterSize, `fa-minus`, `fa-plus`);
})

const filter = document.querySelector('.filter');
let x = window.matchMedia("(max-width: 992px)")
function myFunction(x) {
    if (x.matches) { // If media query matches
        filter.classList.add('offcanvas', 'offcanvas-start');
        filter.style.visibility = 'hidden';
    } else {
        filter.classList.remove('offcanvas', 'offcanvas-start');
        filter.style.visibility = 'visible';
    }
}
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes