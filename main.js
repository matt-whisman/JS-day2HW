let todosEl = document.getElementById("todos");

let formEl = document.getElementById("todoForm");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let itemInput = document.getElementById("todoItem");
  if (itemInput.value !== "") {
    let todoHTML = `
        <div class="card" id="card-1">
            <div class="card-body">
                <h4 class="card-title">${itemInput.value}</h4>
            </div>
        </div>
    `;
    todosEl.innerHTML += todoHTML;
    itemInput.value = "";
  }
});

let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", (event) => {
  todosEl.innerHTML = "";
});
