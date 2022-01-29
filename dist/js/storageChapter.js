const storageProject = document.getElementById('storageProject');
const storageProjectBtn = document.getElementById('storageProjectBtn');

let storageBtnShowOpen = false;

function storageShow() {
    storageProjectBtn.addEventListener('click', () => {
        if (!storageBtnShowOpen) {
            storageProject.classList.add('showProject');
            storageProjectBtn.style.backgroundColor = "var(--bgSecondary)";
            storageProjectBtn.style.color = "var(--white)";
            storageProjectBtn.style.boxShadow = ('0px 0px 3px var(--white');
            storageBtnShowOpen = true;
        } else {
            storageProject.classList.remove('showProject');
            storageProjectBtn.style.backgroundColor = "";
            storageProjectBtn.style.color = "var(--bgSecondary)";
            storageBtnShowOpen = false
        }
    })
}

storageShow()


const todoList1 = document.getElementById('toDoList1');
const todoList1Btn = document.getElementById('toDoList1Btn');

let todoList1BtnShowOpen = false;

function todoList1Show() {
    todoList1Btn.addEventListener('click', () => {
        if (!todoList1BtnShowOpen) {
            todoList1.classList.add('showProject');
            todoList1Btn.style.backgroundColor = "var(--bgSecondary)";
            todoList1Btn.style.color = "var(--white)";
            todoList1Btn.style.boxShadow = ('0px 0px 3px var(--white');
            todoList1BtnShowOpen = true;
        } else {
            todoList1.classList.remove('showProject');
            todoList1Btn.style.backgroundColor = "";
            todoList1Btn.style.color = "var(--bgSecondary)";
            todoList1BtnShowOpen = false
        }
    })
}

todoList1Show()