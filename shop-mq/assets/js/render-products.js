// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'sneaker-future-releases.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
// 	}
// };

// fetch('https://sneaker-future-releases.p.rapidapi.com/releases/all_releases', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// const productsApi = "http://localhost:3000/products";

// function star(min, max, ele) {
//     getProducts((products) => {
//         renderProducts(products, min, max, ele);
//     });
// }
// function getProducts(callback) {
//     fetch(productsApi)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(callback)
// }
// function renderProducts(products, min, max, ele) {
//     let htmls = [];
//     for (let i = min; i < max; i++) {
//         let element = `
//             <div class="product__card col-6 col-lg-3">
//         <div class="product__card__img">
//           <a href="#">
//             <img
//               src="${products[i].image1Color1}"
//               alt=""
//               class="img-fluid img--front"
//             />
//             <img
//               src="${products[i].image4Color1}"
//               alt=""
//               class="img-fluid img--back"
//             />
//           </a>
//           <div class="product__btn">
//             <button class="btn product__btn__buy">
//               <p>MUA NGAY</p>
//             </button>
//             <button class="btn product__btn__add-cart">
//               <img
//                 src="assets/icon/cart-plus-white.svg"
//                 alt=""
//                 class="icon--front"
//               />
//               <img
//                 src="assets/icon/cart-plus-black.svg"
//                 alt=""
//                 class="icon--back"
//               />
//             </button>
//           </div>
//         </div>
//         <div class="product__card__title">
//           <a href=""
//             ><span> ${products[i].title} </span></a
//           >
//         </div>
//         <div class="product__card__price">
//           <span class="price-amount"
//             >${products[i].price}&nbsp;
//             <span class="price-currency-symbol">₫</span></span
//           >
//         </div>
//         <ul class="product__colors">
//           <li>
//             <label
//               for=""
//               class="product-color__item"
//               style="background-color: ${products[i].color2}"
//             >
//               <input
//                 type="radio"
//                 name="product-color-filter"
//                 data-color="0"
//               />
//             </label>
//           </li>
//           <li>
//             <label
//               for=""
//               class="product-color__item product-color__item--active"
//               style="background-color: ${products[i].color1}"
//             >
//               <input
//                 type="radio"
//                 name="product-color-filter"
//                 data-color="2"
//                 checked
//               />
//             </label>
//           </li>
//         </ul>
//       </div>
//             `
//         htmls.push(element);
//     }
//     ele.innerHTML = htmls.join('');
//     // console.log(htmls);
// }
// const sellingProducts = document.querySelector('#selling-products .products');
// sellingProducts.innerHTML = '';

// star(0, 3, sellingProducts);


// // active color
// const productCard = document.querySelectorAll('.product__card');

// productCard.forEach(e => {
//     e.querySelectorAll('.product-color__item').forEach(color => {
//         color.addEventListener('click', () => {
//             // xóa class active tất cả color
//             color.parentNode.querySelectorAll('.product-color__item').forEach(e => {
//                 e.classList.remove('product-color__item--active')
//             })
//             // active color click
//             color.classList.add('product-color__item--active');
//             // color.style.
//         })
//     })
// })


