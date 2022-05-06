let newProductsLocal =[products[2],products[6],products[10],products[3],products[1],products[8],products[4],products[11]];
let sellingProductsLocal =[products[10],products[1],products[7],products[8],products[10],products[3],products[9],products[2]];
let discountProductsLocal=[products[1],products[11],products[3],products[8],products[10],products[4],products[9],products[2]];
setDataFromLocalStorage(newProductsLocal, "newProducts");
setDataFromLocalStorage(sellingProductsLocal, "sellingProducts");
setDataFromLocalStorage(discountProductsLocal, "discountProducts");
let dataNewProducts = getDataFromLocalStorage("newProducts");
let dataSellingProducts = getDataFromLocalStorage("sellingProducts");
let dataDiscountProducts = getDataFromLocalStorage("discountProducts");
// console.log(dataDiscountProducts)
const newProducts = document.querySelector('#new-products .products');
const sellingProducts = document.querySelector('#selling-products .products');
const discountProducts = document.querySelector('#discount-products .products');

newProducts.innerHTML = renderUI(dataNewProducts, 8, "", "", "dataNewProducts");
sellingProducts.innerHTML = renderUI(dataSellingProducts, 8, "col-6", "col-lg-3", "dataSellingProducts");
discountProducts.innerHTML = renderUI(dataDiscountProducts, 8, "", "", "dataDiscountProducts");
changeColorActive();
