// Các chức năng có trong ứng dụng todolist
// 1. Thêm công việc (v)
// 2. Lọc công việc theo trạng thái
// 3. Thay đổi trạng thái cv (v)
// 4. Sửa tên cv
// 5. Xóa công việc (v)
// 6. Hiển thị danh sách công việc ban đầu (v)

// Mỗi cv bao gồm các thuộc tính gì
// 1. Tên công việc - title
// 2. Trạng thái công việc - status - (true/false)
// 3. Id (duy nhất - không trùng nhau)

// Random id
function randomId() {
    return Math.floor(Math.random() * 1000)
}

// Mockup data mẫu
let todos = [
    {
        id: randomId(),
        title: "Làm bài tập",
        status: false
    },
    {
        id: randomId(),
        title: "Đi đá bóng",
        status: true
    },
    {
        id: randomId(),
        title: "Chơi game với bạn",
        status: false
    }
]

// Truy cập vào các thành phần
const todolistEl = document.querySelector(".todo-list");
const todoInputEl = document.getElementById("todo-input"); // truy cập vào ô input
const btnAdd = document.getElementById("btn-add"); // truy cập vào nút "Thêm"
const btnUpdate = document.querySelector('#btn-update');

const optionAll = document.getElementById("all");
const optionUnactive = document.getElementById("unactive");
const optionActive = document.getElementById("active");
const optionItems = document.querySelectorAll('.todo-option-item input');

let idUpdate;

// 6. Hiển thị danh sách công việc ban đầu
function renderTodo(arr) {
    // Xóa hết dữ liệu hiện có để chuẩn bị render dữ liệu mới
    todolistEl.innerHTML = ""

    // Danh sách công việc trống
    if (arr.length == 0) {
        todolistEl.innerHTML = "Không có công việc nào trong danh sách"
        return
    }

    // Hiển thị danh sách công việc ra ngoài giao diện
    let content = ""
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i]; // t đại diện cho 1 object todo
        content += `
            <div class="todo-item ${t.status == true ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input 
                        type="checkbox" 
                        ${t.status == true ? "checked" : ""}
                        onclick="toggleStatus(${t.id})"
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    }

    // Chèn dữ liệu mới để hiển thị
    todolistEl.innerHTML = content
}

renderTodo(todos)

// 1. Thêm công việc
btnAdd.addEventListener("click", function () {
    // B1 : Lấy dữ liệu trong ô input
    let title = todoInputEl.value

    // B2 : Kiểm tra dữ liệu có trống hay không
    if (title == "") {
        alert("Tên công việc không được để trống")
        return
    }

    // B3 : Tạo object todo mới
    let newTodo = {
        id: randomId(),
        title: title,
        status: false
    }

    // B4 : Thêm object todo mới vào trong mảng todos ban đầu
    todos.push(newTodo)

    // B5 : Hiển thị cv mới ra ngoài giao diện
    renderTodo(todos)
    todoInputEl.value = "" // clear dữ liệu trong ô input để nhập cv khác
})

// 5. Xóa công việc
function deleteTodo(id) {
    // Duyệt mảng todos để tìm todo có id = id truyền vào
    // Nếu tìm thấy thì loại bỏ object todo đó ra khỏi mảng todos
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // Sử dụng splice để xóa
            todos.splice(i, 1)
        }
    }


    // Sau khi xóa xong thì gọi function renderTodo để hiển thị lại trên giao diện
    renderTodo(todos)
}

// 3. Thay đổi trạng thái cv
function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // Kiểm tra nếu công việc có status = true -> gán lại = false
            // Và ngược lại
            if (todos[i].status == true) {
                todos[i].status = false
            } else {
                todos[i].status = true
            }
        }
    }

    // Sau khi thay đổi trạng thái cv xong thì gọi function renderTodo để hiển thị lại trên giao diện
    renderTodo(todos)
}

// 2. Lọc công việc theo trạng thái
for (let i = 0; i < optionItems.length; i++) {
    optionItems[i].addEventListener('click', function () {
        let newArr = [];
        if (optionItems[i].value == 'all') {
            renderTodo(todos);
        }
        else if (optionItems[i].value == 'unactive') {
            newArr = todos.filter(function (todo) {
                return todo.status == false;
            })
            renderTodo(newArr);
        }
        else {
            newArr = todos.filter(function (todo) {
                return todo.status == true;
            })
            renderTodo(newArr);
        }
    })
}

// click btn sửa tên cv
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todoInputEl.value = todos[i].title
            idUpdate = todos[i].id;
        }
    }
    btnUpdate.style.display = 'inline-block';
    todoInputEl.focus();
}
// click btn update công việc
btnUpdate.addEventListener('click', function () {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == idUpdate) {
            todos[i].title = todoInputEl.value;
        }
    }
    btnUpdate.style.display = 'none';
    todoInputEl.value = "";
    idUpdate = '';
    renderTodo(todos);
})