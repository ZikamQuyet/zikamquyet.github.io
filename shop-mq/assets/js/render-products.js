// data mẫu
// let products = [
//     {
//         id: randomId(),
//         title: "Canvas Platform Chuck Taylor All Star",
//         category: "chuck 70",
//         price: 1800000,
//         discountPrice: 1800000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-70/Chuck 70 Crafted Canvas-1.jpg", "assets/image/chuck-70/Chuck 70 Crafted Canvas-1-a.jpg", "assets/image/chuck-70/Chuck 70 Crafted Canvas-1-b.jpg", "assets/image/chuck-70/Chuck 70 Crafted Canvas-1-c.jpg"],
//             ["assets/image/chuck-70/Chuck 70 Crafted Canvas-2.jpg", "assets/image/chuck-70/Chuck 70 Crafted Canvas-2-a.jpg", "assets/image/chuck-70/Chuck 70 Crafted Canvas-2-b.jpg", "assets/image/chuck-70/Chuck 70 Crafted Canvas-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck Taylor All Star Seasonal Color High",
//         category: "chuck classic",
//         price: 1900000,
//         discountPrice: 1700000,
//         colors: ["#67a34b", "#ddad9f", "#62546b"],
//         images: [
//             ["assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-1.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-1-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-1-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-1-c.jpg"], ["assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-2.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-2-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-2-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-2-c.jpg"], ["assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-3.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-3-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-3-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-3-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck 70 Sunny Floral",
//         category: "chuck 70",
//         price: 2800000,
//         discountPrice: 2600000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-70/Chuck 70 Sunny Floral-1.jpg", "assets/image/chuck-70/Chuck 70 Sunny Floral-1-a.jpg", "assets/image/chuck-70/Chuck 70 Sunny Floral-1-b.jpg", "assets/image/chuck-70/Chuck 70 Sunny Floral-1-c.jpg"],
//             ["assets/image/chuck-70/Chuck 70 Sunny Floral-2.jpg", "assets/image/chuck-70/Chuck 70 Sunny Floral-2-a.jpg", "assets/image/chuck-70/Chuck 70 Sunny Floral-2-b.jpg", "assets/image/chuck-70/Chuck 70 Sunny Floral-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck Taylor All Star Seasonal Color Low",
//         category: "chuck classic",
//         price: 1900000,
//         discountPrice: 1700000,
//         colors: ["#a2382b", "#67a34b", "#acad8b"],
//         images: [
//             ["assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-4.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-4-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-4-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-4-c.jpg"], ["assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-5.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-5-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-5-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-5-c.jpg"], ["assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-6.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-6-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-6-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star Seasonal Color-6-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck 70 Vintage Canvas High",
//         category: "chuck 70",
//         price: 1700000,
//         discountPrice: 1500000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-70/Chuck 70 Vintage Canvas-1.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-1-a.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-1-b.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-1-c.jpg"],
//             ["assets/image/chuck-70/Chuck 70 Vintage Canvas-2.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-2-a.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-2-b.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck Taylor All Star High",
//         category: "chuck classic",
//         price: 1800000,
//         discountPrice: 1800000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-classic/Chuck Taylor All Star-1.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-1-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-1-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-1-c.jpg"],
//             ["assets/image/chuck-classic/Chuck Taylor All Star-2.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-2-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-2-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck 70 Vintage Canvas Low",
//         category: "chuck 70",
//         price: 1700000,
//         discountPrice: 1700000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-70/Chuck 70 Vintage Canvas-3.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-3-a.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-3-b.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-3-c.jpg"],
//             ["assets/image/chuck-70/Chuck 70 Vintage Canvas-4.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-4-a.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-4-b.jpg", "assets/image/chuck-70/Chuck 70 Vintage Canvas-4-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck Taylor All Star Low",
//         category: "chuck classic",
//         price: 1800000,
//         discountPrice: 1800000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-classic/Chuck Taylor All Star-4.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-4-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-4-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-4-c.jpg"],
//             ["assets/image/chuck-classic/Chuck Taylor All Star-3.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-3-a.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-3-b.jpg", "assets/image/chuck-classic/Chuck Taylor All Star-3-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Converse Chuck Taylor All Star Pro Suede",
//         category: "skateboarding",
//         price: 2800000,
//         discountPrice: 2600000,
//         colors: ["#000", "#bc9c83"],
//         images: [
//             ["assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-1.jpg", "assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-1-a.jpg", "assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-1-b.jpg", "assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-1-c.jpg"],
//             ["assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-2.jpg", "assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-2-a.jpg", "assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-2-b.jpg", "assets/image/skateboarding-shoes/CONS Chuck Taylor All Star Pro Suede-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Run Star Hike Platform",
//         category: "chuck classic",
//         price: 2800000,
//         discountPrice: 2600000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-classic/Run Star Hike Platform-1.jpg", "assets/image/chuck-classic/Run Star Hike Platform-1-a.jpg", "assets/image/chuck-classic/Run Star Hike Platform-1-b.jpg", "assets/image/chuck-classic/Run Star Hike Platform-1-c.jpg"],
//             ["assets/image/chuck-classic/Run Star Hike Platform-2.jpg", "assets/image/chuck-classic/Run Star Hike Platform-2-a.jpg", "assets/image/chuck-classic/Run Star Hike Platform-2-b.jpg", "assets/image/chuck-classic/Run Star Hike Platform-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Converse Classic Suede One Star Pro",
//         category: "skateboarding",
//         price: 1800000,
//         discountPrice: 1600000,
//         colors: ["#b4712b", "#a2382b"],
//         images: [
//             ["assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-1.jpg", "assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-1-a.jpg", "assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-1-b.jpg", "assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-1-c.jpg"],
//             ["assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-2.jpg", "assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-2-a.jpg", "assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-2-b.jpg", "assets/image/skateboarding-shoes/CONS Classic Suede One Star Pro-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
//     {
//         id: randomId(),
//         title: "Chuck 70 Crafted Patchwork",
//         category: "skateboarding",
//         price: 2200000,
//         discountPrice: 2100000,
//         colors: ["#000", "#fff"],
//         images: [
//             ["assets/image/chuck-70/Chuck 70 Crafted Patchwork-1.jpg", "assets/image/chuck-70/Chuck 70 Crafted Patchwork-1-a.jpg", "assets/image/chuck-70/Chuck 70 Crafted Patchwork-1-b.jpg", "assets/image/chuck-70/Chuck 70 Crafted Patchwork-1-c.jpg"],
//             ["assets/image/chuck-70/Chuck 70 Crafted Patchwork-2.jpg", "assets/image/chuck-70/Chuck 70 Crafted Patchwork-2-a.jpg", "assets/image/chuck-70/Chuck 70 Crafted Patchwork-2-b.jpg", "assets/image/chuck-70/Chuck 70 Crafted Patchwork-2-c.jpg"]
//         ],
//         size: [36, 37, 38, 39, 40, 41, 42, 43, 44],
//         quantity: 1000,
//     },
// ]
// set data cho local storage
// setDataFromLocalStorage(products, "products");
let products = getDataFromLocalStorage("products");
// const sellingProducts = document.querySelector('#selling-products .products');
// ele, data, quantity, col, colLg
// test
// sellingProducts.innerHTML = renderUI(products, 8, "col-6", "col-lg-3", "products");
// renderUI(products, 2, "col-6", "col-lg-3");
function renderUI(data, quantity, col, colLg, dataName) {
  let htmls = [];
  for (let i = 0; i < quantity; i++) {
    let html = `
        <div class="product__card ${col} ${colLg}">
            <div class="product__card__img">
              <a href="chi-tiet-san-pham.html" onclick=getIdProduct(${data[i].id})>
                ${renderImage(data[i].images, 0)}
              </a>
              <div class="product__btn" >
                <a href="gio-hang.html" class="btn product__btn__buy" onclick=getIdProduct(${data[i].id})>
                  <p>MUA NGAY</p>
                </a>
                <button class="btn product__btn__add-cart" onclick=getIdProduct(${data[i].id})>
                  <img
                    src="assets/icon/cart-plus-white.svg"
                    alt=""
                    class="icon--front"
                  />
                  <img
                    src="assets/icon/cart-plus-black.svg"
                    alt=""
                    class="icon--back"
                  />
                </button>
              </div>
            </div>
            <div class="product__card__title">
              <a href="chi-tiet-san-pham.html" onclick=getIdProduct(${data[i].id})
                ><span> ${data[i].title} </span></a
              >
            </div>
            <div class="product__card__price">
                <span class="discount-price-amount">
                    ${renderPrice(data[i].discountPrice)}
                </span>
                <span class="price-amount ${data[i].discountPrice == data[i].price ? `price-amount--hide` : `price-amount--discount`}" >
                    ${renderPrice(data[i].price)}
                </span>
            </div>
            <ul class="product__colors">
              ${renderColor(data[i].colors, i, dataName)}
            </ul>
          </div>
        `;
    htmls.push(html);
  };
  return htmls.join("");
}
// render color vieenf active 

// render các màu của sản phẩm
function renderColor(dataColor, index, dataName) {
  let htmls = [];
  for (let i = 0; i < dataColor.length; i++) {
    let html;
    if (i === 0) {
      html = `
            <li
            class="product-color__item product-color__item--active "
            style="background-color: ${dataColor[i]}" 
            onclick="changeColorProduct(event);changeImgProduct(event,${index},${i},${dataName})"
            ></li>
            `
    }
    else {
      html = `
            <li
            class="product-color__item"
            style="background-color: ${dataColor[i]}"
            onclick="changeColorProduct(event);changeImgProduct(event,${index},${i},${dataName})"

            ></li>
            `
    }
    htmls.push(html);
  };
  return htmls.join("");
}
// hàm render color vieenf active 
function changeColorActive() {
  const activeColor = document.querySelectorAll('.product-color__item.product-color__item--active');
  activeColor.forEach(element => {
    let style = getComputedStyle(element);
    let colorBg = style.backgroundColor;
    element.style.setProperty("--border-color", colorBg);
  });
}
// thay đổi khi click đổi màu sản phẩm
function changeColorProduct(e) {
  const parentNodeColor = e.target.parentNode;
  const eleColors = parentNodeColor.querySelectorAll(".product-color__item");
  eleColors.forEach(element => {
    element.classList.remove("product-color__item--active");
  });
  e.target.classList.add("product-color__item--active");
  changeColorActive();
}
// render hình ảnh của sản phẩm
function renderImage(data, index) {
  let html = `
        <img
            src="${data[index][0]}"
            alt=""
            class="img-fluid img--front"
        />
        <img
            src="${data[index][3]}"
            alt=""
            class="img-fluid img--back"
        />
        `;
  return html;
}
// thay đổi khi click đổi màu sản phẩm vào đối tượng hình ảnh
function changeImgProduct(e, index, i, data) {
  const parentNodeColor = e.target.parentNode;
  const parentNodeProductCard = parentNodeColor.parentNode;
  const productImg = parentNodeProductCard.querySelector(".product__card__img a");
  productImg.innerHTML = "";
  productImg.innerHTML = `
        <img
            src="${data[index].images[i][0]}"
            alt=""
            class="img-fluid img--front"
        />
        <img
            src="${data[index].images[i][3]}"
            alt=""
            class="img-fluid img--back"
        />
    `
}
// render giá sản phẩm
function renderPrice(data) {
  data = data.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  return data;
}
// laays id sản phẩm khi click vào sản phẩm

function getIdProduct(data) {
  setDataFromLocalStorage(data, "idProduct");
}
