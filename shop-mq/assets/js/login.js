// hiển thị password
const btnShowHidePassword = document.querySelectorAll('.password-wrapper i');

btnShowHidePassword.forEach(e => {
    e.addEventListener('click', () => {
        showOrHidePassword(e);
    })
})

function showOrHidePassword(ele) {
    let eleType = ele.previousElementSibling.type;
    if (eleType === `text`) {
        ele.previousElementSibling.type = `password`;
        ele.classList.toggle(`fa-eye-slash`);
        ele.classList.toggle(`fa-eye`);
    }
    else {
        ele.previousElementSibling.type = `text`;
        ele.classList.toggle(`fa-eye-slash`);
        ele.classList.toggle(`fa-eye`);
    }
}




// thông báo đăng nhập
const notifyLogin = document.querySelector('.notify-login');

function notifySuccess(text) {
    notifyLogin.classList.add("notify-login--active");
    notifyLogin.querySelector("span").innerText = text;
    setTimeout(() => {
        notifyLogin.classList.remove("notify-login--active");
    }, 3000)
}
// check login
let users = [];

const btnLogin = document.querySelector('#btn-login');

const txtLoginEmail = document.querySelector('#login-email');
const txtLoginPassword = document.querySelector('#login-password');

const errLoginEmail = document.querySelector('#input__check-login-email');
const errLoginPassword = document.querySelector('#input__check-login-password');
// lấy dữ liệu từ local gắn vào biến users
users = 
getDataFromLocalStorage("users");
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let check = 0;
    let txtLoginEmailValue = txtLoginEmail.value.trim();
    let txtLoginPasswordValue = txtLoginPassword.value.trim();
    if (txtLoginEmailValue === "") {
        setError(errLoginEmail, "Không được bỏ trống");
    }
    else if (!isEmail(txtLoginEmailValue)) {
        setError(errLoginEmail, "Sai định dạng email");
    }
    else {
        users.forEach(e => {
            if (e.email === txtLoginEmailValue) {
                setSuccess(errLoginEmail);
                check++;
            }
            else {
                setError(errLoginEmail, "Email không đúng");
            }
        })
    }

    if (txtLoginPasswordValue === "") {
        setError(errLoginPassword, "Không được bỏ trống");
    }
    else if (!isPassword(txtLoginPasswordValue)) {
        setError(errLoginPassword, "Có ít nhất 8 ký tự, có ký tự hoa, số");
    }
    else {
        users.forEach(e => {
            if (e.password === txtLoginPasswordValue) {
                setSuccess(errLoginPassword);
                check++;
            }
            else {
                setError(errLoginPassword, "Mật khẩu không đúng");
            }
        })
    }
    if (check === 2) {
        notifySuccess("Đăng nhập thành công");
        console.log(`Dang nhap thanh cong`);
        modalLogin.classList.remove(`modal--active`);
    }
})
const btnRegister = document.querySelector('#btn-register');

const txtRegisterName = document.querySelector('#name');
const txtRegisterEmail = document.querySelector('#register-email');
const txtRegisterPhone = document.querySelector('#phone');
const txtRegisterPassword = document.querySelector('#register-password');
const txtRegisterRetypePassword = document.querySelector('#retype-password');

const errRegisterName = document.querySelector('#input__check-register-user');
const errRegisterEmail = document.querySelector('#input__check-register-email');
const errRegisterPhone = document.querySelector('#input__check-register-phone');
const errRegisterPassword = document.querySelector('#input__check-register-password');
const errRegisterRetypePassword = document.querySelector('#input__check-register-retype-password');

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    let check = 0;
    let txtRegisterNameValue = txtRegisterName.value.trim();
    let txtRegisterEmailValue = txtRegisterEmail.value.trim();
    let txtRegisterPhoneValue = txtRegisterPhone.value.trim();
    let txtRegisterPasswordValue = txtRegisterPassword.value.trim();
    let txtRegisterRetypePasswordValue = txtRegisterRetypePassword.value.trim();
    // check name
    if (txtRegisterNameValue === "") {
        setError(errRegisterName, "Không được bỏ trống");
    }
    else if (txtRegisterNameValue.length < 5) {
        setError(errRegisterName, "Phải có ít nhất 5 ký tự");
    }
    else {
        setSuccess(errRegisterName);
        check++;
    }
    // check email
    if (txtRegisterEmailValue === "") {
        setError(errRegisterEmail, "Không được bỏ trống");
    }
    else if (!isEmail(txtRegisterEmailValue)) {
        setError(errRegisterEmail, "Sai định dạng email");
    }
    else {
        setSuccess(errRegisterEmail);
        check++;
    }
    // check phone
    if (txtRegisterPhoneValue === "") {
        setError(errRegisterPhone, "Không được bỏ trống");
    }
    else if (!isPhoneVN(txtRegisterPhoneValue)) {
        setError(errRegisterPhone, "Sai định dạng SĐT");
    }
    else {
        setSuccess(errRegisterPhone);
        check++;
    }
    // check password
    if (txtRegisterPasswordValue === "") {
        setError(errRegisterPassword, "Không được bỏ trống");
    }
    else if (!isPassword(txtRegisterPasswordValue)) {
        setError(errRegisterPassword, "Có ít nhất 8 ký tự, có ký tự hoa, số");
    }
    else {
        setSuccess(errRegisterPassword);
        check++;
    }
    // check nhập lại password
    if (txtRegisterRetypePasswordValue === "") {
        setError(errRegisterRetypePassword, "Không được bỏ trống");
    }
    else if (txtRegisterRetypePasswordValue !== txtRegisterPasswordValue) {
        setError(errRegisterRetypePassword, "Mật khẩu không trùng khớp");
    }
    else {
        setSuccess(errRegisterRetypePassword);
        check++;
    }
    if (check === 5) {
        let newUser = {
            id: randomId(),
            name: txtRegisterNameValue,
            email: txtRegisterEmailValue,
            phone: txtRegisterPhoneValue,
            password: txtRegisterPasswordValue
        }
        users.push(newUser);
        setDataFromLocalStorage(users, "users");
        notifySuccess("Đăng ký thành công");
        console.log(`Dang nhap thanh cong`);
        modalSignIn.classList.remove(`modal--active`);
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
})


const btnSend = document.querySelector('#btn-send');

function setError(showErr, err) {
    showErr.classList.add(`input__check--error`);
    showErr.innerHTML = `<p>${err}</p>`;
}
function setSuccess(showErr) {
    showErr.classList.remove(`input__check--error`);
    // showErr.innerHTML = "";
}
function isEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
function isPassword(password) {
    return password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    );
}
function isPhoneVN(phone) {
    return String(phone)
        .match(
            /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
        );
}
// random id
function randomId() {
    return Math.floor(Math.random() * 10000);
}
// lấy dữ liệu từ local storage
function getDataFromLocalStorage(name) {
    let data;
    let dataLocal = localStorage.getItem(name);
    if (dataLocal) {
        data = JSON.parse(dataLocal);
        // console.log(`q`)
    } else {
        data = [];
        // console.log(`qa`)
    }
    return data;
}
// lưu dữ liệu vào local storage
function setDataFromLocalStorage(data, name) {
    localStorage.setItem(name, JSON.stringify(data));
}