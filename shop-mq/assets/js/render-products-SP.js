const allProducts=document.querySelector("#collection .products");
allProducts.innerHTML=renderUI(products, 6, "col-6", "col-lg-4", "products");
changeColorActive();