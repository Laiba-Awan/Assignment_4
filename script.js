const input = document.querySelector(".input");
const list = document.querySelector(".list");
const validator = document.querySelector(".validator");

// TO-DO ADD BUTTON Function-----
function addTodo() {
  if (input.value !== "") {
    console.log(input.value);
    const li = document.createElement("li");
    li.innerHTML = `<div  class = "w-100 col-12">
      <span>${input.value}</span>
      <button type="button" onclick="editTodo(this)" class="btn btn-primary mybtn ms-lg-5 ms-3 mb-lg-3 mb-2"><i class="fa-solid fa-pen fa-sm" style="color: #ffffff;"></i>
        Edit
      </button>
      <button type="button" onclick="removeTodo(this)" class="btn btn-primary mybtn mb-lg-3 mb-2"><i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
        Remove
      </button>
    </div>`;
    list.appendChild(li);
    input.value = "";
    validator.textContent = "";
  } else {
    validator.textContent = "Write Something!";
  }
}

// ENTER KEY PRESS FUNCTION---
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addTodo();
  }
});

// REMOVE BUTTON FUNCTION-----
function removeTodo(item) {
  console.log(item.parentNode.parentNode);
  item.parentNode.parentNode.remove();
}

// DELETE ALL BUTTON FUNCTION-----
function deleteAll() {
  if (list.childElementCount === 0) {
    validator.innerHTML = `List is Empty <i class="fa-solid fa-circle-exclamation"></i>`;
  } else {
    list.innerHTML = "";
  }
}

// EDIT BUTTON FUNCTION------
function editTodo(object) {
  if (object.textContent === "Save") {
    const todoName = object.previousElementSibling.value;
    let span = document.createElement("span");
    span.textContent = todoName;
    object.parentElement.replaceChild(span, object.previousElementSibling);
    object.innerHTML = `<i class="fa-solid fa-pen fa-sm" style="color: #ffffff;"></i> Edit`;
  } else {
    const todoName = object.previousElementSibling.textContent;
    object.textContent = "Save";
    let input = document.createElement("input");
    input.classList.add("js-input", "py-1", "px-4", "mb-2");
    input.type = "text";
    input.value = todoName;
    object.parentElement.replaceChild(input, object.previousElementSibling);
  }
}
