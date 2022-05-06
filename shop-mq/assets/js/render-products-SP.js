const allProducts = document.querySelector("#collection .products");
let dataNewProducts = getDataFromLocalStorage("newProducts");
let dataSellingProducts = getDataFromLocalStorage("sellingProducts");
let dataDiscountProducts = getDataFromLocalStorage("discountProducts");
allProducts.innerHTML = renderUI(products, 6, "col-6", "col-lg-4", "products");
changeColorActive();


// filter product
// filter menu-collection
const menuCollections = document.querySelectorAll(".menu-collection li");
let dataProducts = products;
menuCollections.forEach(element => {
    element.addEventListener("click", () => {
        menuCollections.forEach(e => {
            e.classList.remove("menu-collection--active");
        });
        element.classList.add("menu-collection--active");
        let title = element.title;
        if (title === "all-products") {
            allProducts.innerHTML = renderUI(products, 6, "col-6", "col-lg-4", "products");
            changeColorActive();
            dataProducts = products;
        }
        else if (title === "new-products") {
            allProducts.innerHTML = renderUI(dataNewProducts, 6, "col-6", "col-lg-4", "dataNewProducts");
            changeColorActive();
            dataProducts = dataNewProducts;
        }
        else if (title === "discount-products") {
            allProducts.innerHTML = renderUI(dataDiscountProducts, 6, "col-6", "col-lg-4", "dataDiscountProducts");
            changeColorActive();
            dataProducts = dataDiscountProducts;
        }
        else {
            dataProducts = dataSellingProducts;
            allProducts.innerHTML = renderUI(dataProducts, 6, "col-6", "col-lg-4", "dataProducts");
            changeColorActive();
        }
    })
})
// filter group-collection
// const filterVendors = document.querySelectorAll("#filter-vendor li input");
// filterVendors.forEach(e => {
//     e.addEventListener("click", () => {
//         let value = e.value;
//         let newArr = [];
//         if (e.checked) {
//             products.forEach(e => {
//                 if (e.category == value) {
//                     newArr.push(e);
//                 }
//             })
//         }
//         else {
//             newArr = dataProducts;
//         }
//         console.log(newArr);
//         allProducts.innerHTML = renderUI(newArr, 6, "col-6", "col-lg-4", "newArr");
//     })
// })

// filter color
const filterColors = document.querySelectorAll("#filter-color li");
filterColors.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("filter-color--active");
        colorFilterActive();
    })
})
colorFilterActive();
function colorFilterActive() {
    const activeColorDetail = document.querySelector('#filter-color .filter-color--active');
    let style = getComputedStyle(activeColorDetail);
    let colorBg = style.backgroundColor;
    activeColorDetail.style.setProperty("--border-color", colorBg);
}
