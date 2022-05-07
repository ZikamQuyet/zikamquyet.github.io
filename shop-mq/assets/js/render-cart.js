const cartContent = document.querySelector(".cart-table tbody");
const infoCart = document.querySelector(".cart-total-table tbody");
cartContent.innerHTML = renderCartContent(cart);
infoCart.innerHTML = renderInfoCart(cart);
function renderCartContent(data) {
    let html;
    if(data.length!=0){
        html = `
        ${renderProductsCartContent(data)}
        <tr>
            <td colspan="6" class="actions clear">
                <div class="continue-shopping">
                    <a
                    class="button-continue-shopping btn btn--s"
                    href="san-pham.html"
                    >
                        ← Tiếp tục xem sản phẩm
                    </a>
                </div>

                <button
                type="submit"
                class="btn-update-cart btn btn--s"
                name="update_cart"
                value="Cập nhật giỏ hàng"
                onclick="updateProductCart(event)"
                >
                    Cập nhật giỏ hàng
                </button>
            </td>
        </tr>
        `;
    }
    else{
        html = `
        <span style="font-style: italic; color:#b71811;">Chưa có sản phẩm nào</span>
        <tr>
            <td colspan="6" class="actions clear">
                <div class="continue-shopping">
                    <a
                    class="button-continue-shopping btn btn--s"
                    href="san-pham.html"
                    >
                        ← Tiếp tục xem sản phẩm
                    </a>
                </div>

                <button
                type="submit"
                class="btn-update-cart btn btn--s"
                name="update_cart"
                value="Cập nhật giỏ hàng"
                onclick="updateProductCart(event)"
                >
                    Cập nhật giỏ hàng
                </button>
            </td>
        </tr>
        `;
    }
    return html;
}
function renderProductsCartContent(data) {
    let htmls = [];
    for (let i = 0; i < data.length; i++) {
        let html = `
            <tr class="cart-form__cart-item">
            <td class="product-remove" onclick="deleteProductCart(${i})">
            <i class="fa-solid fa-xmark"></i>
            </td>

            <td class="product-thumbnail">
            <a href="chi-tiet-san-pham.html" onclick="getIdProduct(${data[i].id})"
                ><img
                src="${data[i].images[0]}"
                alt=""
                class="img-fluid"
            /></a>
            </td>

            <td class="product-name" data-title="Sản phẩm">
            <a href="chi-tiet-san-pham.html" onclick="getIdProduct(${data[i].id})">${data[i].title}</a>
            <div class="product-price">
                <span class="price-amount">
                    ${renderPrice(data[i].price)}
                </span>
                
            </div>
            </td>
            <td class="product-size-item" data-title="size">
            <select class="sizes">
                <option value="36" ${data[i].size == 36 ? "selected" : ""} >36</option>
                <option value = "37" ${data[i].size == 37 ? "selected" : ""}>37</option>
                <option value = "38" ${data[i].size == 38 ? "selected" : ""}>38</option>
                <option value = "39" ${data[i].size == 39 ? "selected" : ""}>39</option>
                <option value = "40" ${data[i].size == 40 ? "selected" : ""}>40</option>
                <option value = "41" ${data[i].size == 41 ? "selected" : ""}>41</option>
                <option value = "42" ${data[i].size == 42 ? "selected" : ""}>42</option>
                <option value = "43" ${data[i].size == 43 ? "selected" : ""}>43</option>
                <option value = "44" ${data[i].size == 44 ? "selected" : ""} >44</option>
            </select >
            </td >

            <td class="product-quantity" data-title="Số lượng">
            <div class="quantity">
                <!-- <button class="btn--down">-</button> -->
                <input type="button" value="-" class="btn--down" onclick="changeQuantityProductCart(event,0)"/>
                <input
                type="number"
                class="number-product"
                class="input-text-number-product"
                step="1"
                min="0"
                max="9999"
                value="${data[i].quantity}"
                title="SL"
                size="4"
                pattern="[0-9]*"
                inputmode="numeric"
                disabled
                />
                <input type="button" value="+" class="btn--up" onclick="changeQuantityProductCart(event,1)"/>
            </div>
            </td>

            <td class="product-subtotal" data-title="Tổng">
            <span class="price-amount">
            ${renderPrice(data[i].price * data[i].quantity)}
            </span>
            
            </td>
        </tr >`;
        htmls.push(html);
    }
    return htmls.join("");
}
function changeQuantityProductCart(e, index) {
    const quantity = e.target.parentNode;
    const numberProduct = quantity.querySelector(".number-product");
    let countCart = parseInt(numberProduct.value);
    if (index == 1) {
        countCart += 1;
    }
    else {
        if (countCart > 1) {
            countCart -= 1;
        }
        else {
            countCart = 1;
        }
    }
    numberProduct.value = countCart;
}
function deleteProductCart(index) {
    for (let i = 0; i < cart.length; i++) {
        if (i === index) {
            cart.splice(i, 1);
        }
    }
    console.log(index);
    setDataFromLocalStorage(cart, "cart");
    // render khi click xoa  san pham
    cartContent.innerHTML = renderCartContent(cart);
}
function renderInfoCart(data) {
    let html = `
            <tr class="cart-total__item total-price-amount">
            <td>Tổng tiền hàng</td>
            <td class="text-end">
            <span class="price-amount">
                ${renderTotalPriceCart(data)}
            </span>
            </td>
        </tr>

        <tr class="cart-total__item total-transport-fee">
            <td>Phí vận chuyển</td>
            <td class="text-end">Miễn phí</td>
        </tr>

        <tr class="cart-total__item total-discount-code">
            <td>Mã giảm giá</td>
            <td class="text-end">
            <input
                type="text"
                placeholder="Nhập mã giảm giá"
                class="text-end"
            />
            </td>
        </tr>

        <tr class="cart-total__item total-discount">
            <td>Giảm giá</td>
            <td class="text-end">
            <span class="price-amount"
                >0&nbsp;<span class="price-currency-symbol"
                >VND</span
                ></span
            >
            </td>
        </tr>

        <tr class="cart-total__item all-total-price-amount">
            <td>Tổng tiền thanh toán</td>
            <td class="text-end">
            <span class="price-amount">
                ${renderTotalPriceCart(data)}
            </span>
            
            </td>
        </tr>

        <tr class="btn-payment">
            <td colspan="2" class="text-center">
            <a href="thanh-toan.html" class="btn btn--s"
                >Thanh toán</a
            >
            </td>
        </tr>
    `;
    return html;
}

function updateProductCart(e) {
    e.preventDefault();
    const td = e.target.parentNode;
    const tr = td.parentNode;
    const tbody = tr.parentNode;
    const elementSizes = tbody.querySelectorAll(".product-size-item .sizes");
    const elementQuantity = tbody.querySelectorAll(".product-quantity .number-product");

    for (let i = 0; i < cart.length; i++) {
        cart[i].size = elementSizes[i].options[elementSizes[i].selectedIndex].value;
        cart[i].quantity = parseInt(elementQuantity[i].value);
    }
    setDataFromLocalStorage(cart, "cart");
    // render khi click xoa  san pham
    cartContent.innerHTML = renderCartContent(cart);
    infoCart.innerHTML = renderInfoCart(cart);
}