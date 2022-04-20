const filterCategory = document.querySelector('#filter-category');
const filterVendor = document.querySelector('#filter-vendor');
const filterPrice = document.querySelector('#filter-price');
const filterColor = document.querySelector('#filter-color');
const filterSize = document.querySelector('#filter-size');

function hideFilter(filter, classHide) {
    filter.classList.toggle(classHide);
    filter.previousElementSibling.querySelector('i').classList.toggle(`fa-minus`);
    filter.previousElementSibling.querySelector('i').classList.toggle(`fa-plus`);
}
filterCategory.previousElementSibling.addEventListener('click', () => {
    hideFilter(filterCategory, `filter-box--active`);
})
filterVendor.previousElementSibling.addEventListener('click', () => {
    hideFilter(filterVendor, `filter-box--active`);
})
filterPrice.previousElementSibling.addEventListener('click', () => {
    hideFilter(filterPrice, `filter-box--active`);
})
filterColor.previousElementSibling.addEventListener('click', () => {
    hideFilter(filterColor, `filter-box--active`);
})
filterSize.previousElementSibling.addEventListener('click', () => {
    hideFilter(filterSize, `filter-box--active`);
})

// active modal filter mobile
const filter = document.querySelector('.filter');
const wrapFilter = document.querySelector('.wrap-filter');
const btnFilter = document.querySelector('.btn-filter');
btnFilter.addEventListener('click', () => activeModal(filter, wrapFilter, `filter--active`));