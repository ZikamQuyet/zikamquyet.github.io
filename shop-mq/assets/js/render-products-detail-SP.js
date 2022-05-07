
let idDetailProduct = getDataFromLocalStorage("idProduct");
const productWrapper = document.querySelector("#product .product-wrapper");
const breadcrumbProductDetail = document.querySelector(".breadcrumb-detail-product")
breadcrumbProductDetail.innerHTML = renderNavBreadcrumbProductDetail(products, idDetailProduct);
productWrapper.innerHTML = "";
productWrapper.innerHTML = renderUIDetailProduct(products, idDetailProduct);
function renderNavBreadcrumbProductDetail(data, id) {
  let html;
  data.forEach(e => {
    if (e.id = id) {
      html = `
      <li class="breadcrumb__item"><a href="#">Trang chủ</a></li>
      <li class="breadcrumb__item"><a href="#">Sản phẩm</a></li>
      <li class="breadcrumb__item breadcrumb__item--active">${e.title}</li>
      `
    }
  })
  return html;
}
function renderUIDetailProduct(data, id) {
  let html;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      html = `
          <div
          class="col-12 col-lg-6 row justify-content-center product-images"
          >
            ${renderImageDetailProduct(data[i], 0)}
          </div>
          <div class="col-12 col-lg-6 product-content">
            <div class="product-content__header">
              <h1 class="product-content__title">
                ${data[i].title}
              </h1>
              <div
                class="product-reviews-star"
                data-score="5"
                data-number="5"
                title="Tuyệt vời"
                style="color: rgb(233, 229, 0)"
              >
                <i data-alt="1" class="fa-solid fa-star" title="Rất tệ"></i>
                <i
                  data-alt="2"
                  class="fa-solid fa-star"
                  title="Không hài lòng"
                ></i>
                <i
                  data-alt="3"
                  class="fa-solid fa-star"
                  title="Bình thường"
                ></i>
                <i data-alt="4" class="fa-solid fa-star" title="Hài lòng"></i>
                <i data-alt="5" class="fa-solid fa-star" title="Tuyệt vời"></i>
                <input name="score" type="hidden" id="rating" value="5" />
              </div>
            </div>

            <div class="product-content__main">
              <form action="" class="form-product-content">
                <div class="product-content__main-item product-content__price">
                  <span class="product-content-item__title">Giá:</span>
                  <span class="discount-price-amount">
                    ${renderPrice(data[i].discountPrice)}
                </span>
                <span class="price-amount ${data[i].discountPrice == data[i].price ? `price-amount--hide` : `price-amount--discount`}" >
                    ${renderPrice(data[i].price)}
                </span>
                </div>

                <div class="product-content__main-item product-content__color">
                  <span class="product-content-item__title">Màu:</span>
                  <div class="filter-box" id="filter-color">
                    <ul>
                      ${renderColorDetailProduct(data[i], i)}
                    </ul>
                  </div>
                </div>

                <div class="product-content__main-item product-content__size">
                  <span class="product-content-item__title">Kích thước:</span>
                  <div class="filter-box" id="filter-size">
                    <ul>
                    ${renderSizeDetailProduct(data[i])}
                    </ul>
                  </div>
                </div>

                <div
                  class="product-content__main-item product-content__quantity"
                >
                  <span class="product-content-item__title">Số lượng:</span>
                  <div class="product-quantity">
                    <!-- <button class="btn--down">-</button> -->
                    <input type="button" value="-" class="btn--down" onclick="changeQuantityDetailProduct(0)" />
                    <input
                      type="number"
                      id="number-product"
                      class="input-text-number-product"
                      step="1"
                      min="0"
                      max="9999"
                      value="1"
                      title="SL"
                      size="4"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      disabled
                    />
                    <input type="button" value="+" class="btn--up" onclick="changeQuantityDetailProduct(1)" />
                  </div>
                </div>
                <div class="product-content__main-item product-content__btn">
                  <a href="#" class="btn btn--lg btn-buy" onclick="addCart2(event,${idDetailProduct})">Mua ngay</a>
                  <button class="btn btn--lg btn-add-cart" onclick="addCart2(event,${idDetailProduct})">
                    Thêm giỏ hàng
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      `
      // console.log(element);
    }
  };
  return html;
}
function renderImageDetailProduct(data, index) {
  html = `
      <div class="col-3 text-center product-images__slider">
      <div class="product-images__slider-img">
        <img
          src="${data.images[index][1]}"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="product-images__slider-img my-3">
        <img
          src="${data.images[index][2]}"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="product-images__slider-img">
        <img
          src="${data.images[index][3]}"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
    <div class="col-7 text-center product-images__main">
      <img
        src="${data.images[index][0]}"
        alt=""
        class="img-fluid"
      />
    </div>
  `;
  return html;
}
function renderColorDetailProduct(data, index) {
  let htmls = [];
  for (let i = 0; i < data.colors.length; i++) {
    let html;
    if (i === 0) {
      html = `
        <li style="background: ${data.colors[i]}" class="filter-color  filter-color--active"  onclick="changeColorDetailProduct(event);changeImageDetailProduct(${i},${index})">
          <input
            type="radio"
            name="product-content-color"
            value="${data.colors[i]}"
          />
        </li>
      `;
    }
    else {
      html = `
        <li style="background: ${data.colors[i]}" class="filter-color" onclick="changeColorDetailProduct(event);changeImageDetailProduct(${i},${index})">
          <input
            type="radio"
            name="product-content-color"
            value="${data.colors[i]}"
          />
        </li>
      `;
    }
    htmls.push(html);
  }
  return htmls.join("");
}
function renderSizeDetailProduct(data) {
  let htmls = [];
  for (let i = 0; i < data.size.length; i++) {
    let html;
    if (i === 0) {
      html = `
                <li class="filter-size filter-size--active" onclick="changeSizeDetailProduct(event)">
                ${data.size[i]}
                <input
                    type="checkbox"
                    name="product-content-size"
                    value="${data.size[i]}"
                />
                </li>
            `;
    }
    else {
      html = `
                <li class="filter-size" onclick="changeSizeDetailProduct(event)">
                    ${data.size[i]}
                    <input
                    type="checkbox"
                    name="product-content-size"
                    value="${data.size[i]}"
                    />
                </li>
            `;
    }
    htmls.push(html);
  }
  return htmls.join("");
}
colorDetailActive();
function colorDetailActive() {
  const activeColorDetail = document.querySelector('#filter-color .filter-color--active');
  let style = getComputedStyle(activeColorDetail);
  let colorBg = style.backgroundColor;
  activeColorDetail.style.setProperty("--border-color", colorBg);
}
// thay đổi khi click đổi màu sản phẩm
function changeColorDetailProduct(e) {
  const parentNodeColor = e.target.parentNode;
  const eleColors = parentNodeColor.querySelectorAll(".filter-color");
  eleColors.forEach(element => {
    element.classList.remove("filter-color--active");
  });
  e.target.classList.add("filter-color--active");
  colorDetailActive();
}
function changeImageDetailProduct(i, index) {
  const imageWrapper = document.querySelector(".product-images");
  imageWrapper.innerHTML = "";
  imageWrapper.innerHTML = `
            <div class="col-3 text-center product-images__slider">
            <div class="product-images__slider-img">
            <img
                src="${products[index].images[i][1]}"
                alt=""
                class="img-fluid"
            />
            </div>
            <div class="product-images__slider-img my-3">
            <img
                src="${products[index].images[i][2]}"
                alt=""
                class="img-fluid"
            />
            </div>
            <div class="product-images__slider-img">
            <img
                src="${products[index].images[i][3]}"
                alt=""
                class="img-fluid"
            />
            </div>
        </div>
        <div class="col-7 text-center product-images__main">
            <img
            src="${products[index].images[i][0]}"
            alt=""
            class="img-fluid"
            />
        </div>
    `
}
// thay ddooir size
function changeSizeDetailProduct(e) {
  const parentNodeSize = e.target.parentNode;
  const eleSizes = parentNodeSize.querySelectorAll(".filter-size");
  eleSizes.forEach(element => {
    element.classList.remove("filter-size--active");
  });
  e.target.classList.add("filter-size--active");
}
// thay ddooi so luoong
let count = 1;
function changeQuantityDetailProduct(index) {
  const numberProduct = document.querySelector("#number-product");
  if (index == 1) {
    count += 1;
  }
  else {
    if (count > 1) {
      count -= 1;
    }
    else {
      count = 1;
    }
  }
  numberProduct.value = count;
}   
