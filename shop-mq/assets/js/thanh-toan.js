const btnPaymentLogin = document.querySelector(".payment-info__login-register .login");
const btnPaymentRegister = document.querySelector(".payment-info__login-register .register");

btnPaymentLogin.addEventListener('click', () => {
    activeModal(modalLogin, modalWrapperLogin, `modal--active`);
    // clear text input
    allInputLogin.forEach(e => {
        e.value = "";
    })
    // clear error
    allErrLogin.forEach(e => {
        e.classList.remove(`input__check--error`);
    })
}
)
btnPaymentRegister.addEventListener('click', () => {
    activeModal(modalSignIn, modalWrapperSignIn, `modal--active`);
    allInputRegister.forEach(e => {
        e.value = "";
    })
    allErrRegister.forEach(e => {
        e.classList.remove(`input__check--error`)
    })
});

// render
const orderInfo = document.querySelector(".order-info");
orderInfo.innerHTML = renderCartPayment(cart);
function renderCartPayment(data) {
    let html = `
        
        <div class="order-info__title">ĐƠN HÀNG</div>
        <div class="order-info__item order-info__products">
            <p>Sản phẩm</p>
            ${renderOderInfoProduct(data)}
        </div>

        <div class="order-info__item order-info__total-price">
        <p>Tổng tiền hàng</p>
        <span class="price-amount">${renderTotalPriceCart(data)}</span>
        </div>

        <div class="order-info__item order-info__total-transport-fee">
        <p>Phí vận chuyển</p>
        <p>Miễn phí</p>
        </div>

        <div class="order-info__item order-info__discount">
        <p>Giảm giá</p>
        <span class="price-amount">0 VND</span>
        </div>

        <div class="order-info__item order-info__total-price-amount">
        <p>Tổng tiền thanh toán</p>
        <span class="price-amount"> ${renderTotalPriceCart(data)}</span>
        </div>

        <div class="btn-order">
        <button class="btn btn--s" onclick="order(event)">Đặt hàng</button>
        </div>
    
    `;
    return html;
}

function renderOderInfoProduct(data) {
    let htmls = [];
    for (let i = 0; i < data.length; i++) {
        let html = `
            <div class="order-product">
            <div class="order-product__desc">
            <div class="order-product__image">
                <img src="${data[i].images[0]}" alt="">
            </div>
            <div class="order-product__name-quantity">
                <p class="order-product__name">
                ${data[i].title}
                </p>
                <p class="order-product__quantity">x <span>${data[i].quantity}</span></p>
            </div>
            </div>

            <div class="order-product__price">
            <span class="price-amount">
                ${renderPrice(data[i].price)}
            </span>
            </div>
        </div>
        `;
        htmls.push(html);
    }
    return htmls.join("");
}
// check val
const txtPaymentName = document.querySelector("#payment-name");
const txtPaymentAddress = document.querySelector("#payment-address");
const txtPaymentPhone = document.querySelector("#payment-phone");
const txtPaymentEmail = document.querySelector("#payment-email");
const txtPaymentNotes = document.querySelector("#payment-notes");
const methodPaymentMoney = document.querySelector("#money")
const methodPaymentBanking = document.querySelector("#banking")

const errPaymentName = document.querySelector('#input__check-payment-name');
const errPaymentAddress = document.querySelector('#input__check-payment-address');
const errPaymentPhone = document.querySelector('#input__check-payment-phone');
const errPaymentEmail = document.querySelector('#input__check-payment-email');
const errMethodPayment = document.querySelector('#input__check-method-payment');


function order(e) {
    e.preventDefault();
    let check = 0;
    let txtPaymentNameValue = txtPaymentName.value.trim();
    let txtPaymentAddressValue = txtPaymentAddress.value.trim();
    let txtPaymentPhoneValue = txtPaymentPhone.value.trim();
    let txtPaymentEmailValue = txtPaymentEmail.value.trim();

    if (txtPaymentNameValue === "") {
        setError(errPaymentName, "Không được bỏ trống");
    }
    else if (txtPaymentNameValue.length < 5) {
        setError(errPaymentName, "Phải có ít nhất 5 ký tự");
    }
    else {
        setSuccess(errPaymentName);
        check++;
    }

    if (txtPaymentAddressValue === "") {
        setError(errPaymentAddress, "Không được bỏ trống");
    }
    else if (txtPaymentAddressValue.length < 5) {
        setError(errPaymentAddress, "Phải có ít nhất 5 ký tự");
    }
    else {
        setSuccess(errPaymentAddress);
        check++;
    }
    // check phone
    if (txtPaymentPhoneValue === "") {
        setError(errPaymentPhone, "Không được bỏ trống");
    }
    else if (!isPhoneVN(txtPaymentPhoneValue)) {
        setError(errPaymentPhone, "Sai định dạng SĐT");
    }
    else {
        setSuccess(errPaymentPhone);
        check++;
    }
    // check email
    if (txtPaymentEmailValue === "") {
        setError(errPaymentEmail, "Không được bỏ trống");
    }
    else if (!isEmail(txtPaymentEmailValue)) {
        setError(errPaymentEmail, "Sai định dạng email");
    }
    else {
        setSuccess(errPaymentEmail);
        check++;
    }
    // check method payment
    if (methodPaymentMoney.checked === false && methodPaymentBanking) {
        setError(errMethodPayment, "Hãy chọn phương thức thanh toán");
    }
    else {
        setSuccess(errMethodPayment);
        check++;
    }
    if (check == 5) {
        successPayment(cart);
    }
}
function successPayment(data) {
    data = [];
    setDataFromLocalStorage(data, "cart");
    orderInfo.innerHTML = renderCartPayment(data);
    headerCart.innerHTML = renderUICartMini(data);
    txtPaymentName.value = "";
    txtPaymentAddress.value = "";
    txtPaymentPhone.value = "";
    txtPaymentEmail.value = "";
    txtPaymentNotes.value = "";
}