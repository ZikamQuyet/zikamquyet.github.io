// let cart = [];
let cart = [];
cart = getDataFromLocalStorage("cart");
const headerCart = document.querySelector(".header__cart");
console.log(cart);
function addCart(e, data) {
    const parentNodeBtn = e.target.parentNode;
    const productBtn = parentNodeBtn.parentNode;
    const productCardImg = productBtn.parentNode;
    const productCard = productCardImg.parentNode;
    const allColors = productCard.querySelectorAll(".product-color__item");
    let indexColor;
    let newObj;
    for (let i = 0; i < allColors.length; i++) {
        if (allColors[i].classList.contains("product-color__item--active")) {
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
                    if (newObj.id === cart[i].id && newObj.color === cart[i].color) {
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
                        ${renderTotalPriceCartMini(data)}
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
                    <a href="chi-tiet-san-pham.html">
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

function renderTotalPriceCartMini(data) {
    let total = 0;
    data.forEach(element => {
        total += element.price * element.quantity;
    });
    return renderPrice(total);
}

function deleteProductCartMini(index) {
    for (let i = 0; i < cart.length; i++) {
        if (i===index) {
            cart.splice(i, 1);
        }
    }
    console.log(index);
    setDataFromLocalStorage(cart, "cart");
    // render khi click xoa  san pham
    headerCart.innerHTML = renderUICartMini(cart);
}