// function randomData(data) {
//     for (let i = 0; i < 8; i++) {
//         data.push(products[Math.floor(Math.random() * 12)])
//     }
//     return data;
// }
// randomData(dataNewProduct, 8);
// randomData(dataSellingProducts, 8);
// let dataDiscountProducts=[products[1],products[11],products[3],products[8],products[10],products[4],products[9],products[2]]
// console.log(dataDiscountProducts);
// console.log(products);
// setDataFromLocalStorage(dataDiscountProducts, "discountProducts");
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
