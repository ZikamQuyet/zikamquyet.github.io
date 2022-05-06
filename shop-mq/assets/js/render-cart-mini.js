// let cart = [];
let cart = [];
cart = getDataFromLocalStorage("cart");
const headerCart = document.querySelector(".header__cart");
// console.log(cart);
function addCart1(e, data) {
    const parentNodeBtn = e.target.parentNode;
    const productBtn = parentNodeBtn.parentNode;
    const productCardImg = productBtn.parentNode;
    const productCard = productCardImg.parentNode;
    const allColors = productCard.querySelectorAll(".product-color__item");
    setDataCart(allColors, data, "product-color__item--active")
}
function setDataCart(ele, data, className) {
    let indexColor;
    let newObj;
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].classList.contains(className)) {
            indexColor = i;
        }
    }
    products.forEach(element => {
        if (element.id === data) {
            newObj = {
                id: element.id,
                title: element.title,
                price: element.discountPrice,
                quantity: 1,
                color: element.colors[indexColor],
                images: element.images[indexColor],
                size: 41
            }
            if (cart.length === 0) {
                cart.push(newObj);
            }
            else {
                for (i = 0; i < cart.length; i++) {
                    if ((newObj.id === cart[i].id && newObj.color === cart[i].color) && newObj.size == cart[i].size) {
                        cart[i].quantity += 1;
                        return;
                    }
                }
                cart.push(newObj);
            }

        }
    });
    setDataFromLocalStorage(cart, "cart");
    // render khi click them san pham
    headerCart.innerHTML = renderUICartMini(cart);
}
function addCart2(e, id) {
    e.preventDefault();
    const productContentBtn = e.target.parentNode;
    const formProductContent = productContentBtn.parentNode;
    const productContentColors = formProductContent.querySelectorAll("#filter-color li");
    const productContentSizes = formProductContent.querySelectorAll("#filter-size li");
    const productContentQuantity = formProductContent.querySelector(".product-quantity #number-product");
    let newObj;
    let color;
    let indexColor;
    let size;
    let quantity;
    for (let i = 0; i < productContentColors.length; i++) {
        if (productContentColors[i].classList.contains("filter-color--active")) {
            color = productContentColors[i].querySelector("input").value;
            indexColor = i;
        }
    }
    productContentSizes.forEach(e => {
        if (e.classList.contains("filter-size--active")) {
            size = e.querySelector("input").value
        }
    })
    quantity = parseInt(productContentQuantity.value);
    products.forEach(element => {
        if (element.id === id) {
            newObj = {
                id: element.id,
                title: element.title,
                price: element.discountPrice,
                quantity: quantity,
                color: color,
                images: element.images[indexColor],
                size: size
            }
            if (cart.length === 0) {
                cart.push(newObj);
            }
            else {
                for (i = 0; i < cart.length; i++) {
                    if ((newObj.id === cart[i].id && newObj.color === cart[i].color) && newObj.size == cart[i].size) {
                        cart[i].quantity += 1;
                        return;
                    }
                }
                cart.push(newObj);
            }
        }
    });
    setDataFromLocalStorage(cart, "cart");
    // render khi click them san pham
    headerCart.innerHTML = renderUICartMini(cart);
}
// render khi loading trang
headerCart.innerHTML = renderUICartMini(cart);
function renderUICartMini(data) {
    let html = `
            <span class="cart-quantity-product">${renderCartMiniQuantity(data)}</span>
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="cart-info">
            <div class="cart-info__wrapper">
                <div class="cart-info__content text-center">
                    ${renderProductCartMini(data)}
                </div>

                <div class="cart-total-price">
                <p>
                    Tổng:
                    <span class="price-amount">
                        ${renderTotalPriceCart(data)}
                    </span>
                </p>
                </div>

                <div class="cart-btn">
                <a href="gio-hang.html" class="btn btn--s"
                    >Xem giỏ hàng</a
                >
                <a href="thanh-toan.html" class="btn btn--s"
                    >Thanh toán</a
                >
                </div>
            </div>
            </div>
    `
    return html;
}
function renderCartMiniQuantity(data) {
    let quantity = 0;
    data.forEach(element => {
        quantity += element.quantity;
    });
    return quantity;
}
function renderProductCartMini(data) {
    let htmls = [];
    for (let i = 0; i < data.length; i++) {
        let html = `
                <div class="cart-info__item">
                <div class="cart__product-img">
                    <a href="chi-tiet-san-pham.html" onclick="getIdProduct(${data[i].id})">
                        <img
                            src="${data[i].images[0]}"
                            alt="sp1"
                        />
                    </a>
                </div>
                <div class="cart__product-desc">
                    <a
                        href="chi-tiet-san-pham.html"
                        class="cart__product-name"
                        onclick="getIdProduct(${data[i].id})"
                    >
                        ${data[i].title}
                    </a>
                    <p class="cart__product-price">
                        <span class="price-amount">
                            <span class="price--count">${data[i].quantity} x </span>
                            ${renderPrice(data[i].price)}
                        </span>
                    </p>
                </div>
                <div class="cart__product-delete" onclick="deleteProductCartMini(${i})">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        `;
        htmls.push(html);
    }
    return htmls.join("")
}

function renderTotalPriceCart(data) {
    let total = 0;
    data.forEach(element => {
        total += element.price * element.quantity;
    });
    return renderPrice(total);
}

function deleteProductCartMini(index) {
    for (let i = 0; i < cart.length; i++) {
        if (i === index) {
            cart.splice(i, 1);
        }
    }
    console.log(index);
    setDataFromLocalStorage(cart, "cart");
    // render khi click xoa  san pham
    headerCart.innerHTML = renderUICartMini(cart);
}