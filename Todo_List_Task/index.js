const formAdd = document.querySelector(".form-tasks");
const tasks = document.querySelector(".tasks");
const messagerSpan = document.querySelector(".messager span");
const clearAll = document.querySelector(".clear");
const searchForm = document.querySelector(".search");

//------------< cập nhật số task >----------------------
function updateMessager() {
  const textLength = tasks.children.length;
  messagerSpan.textContent = `You have ${textLength} pending task`;
}
updateMessager();

//--------------< thêm task >-----------------------------------
formAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = formAdd.task.value.trim();
  if (value.length) {
    tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`;
  }
  formAdd.reset();
  updateMessager();
});

//-------------< xóa task >------------------------------------
tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
  updateMessager();
});

//-------------< xoa tat ca task >--------------------------
clearAll.addEventListener("click", (event) => {
  const taskItems = tasks.querySelectorAll("li");
  taskItems.forEach((item) => {
    item.remove();
  });
  updateMessager();
});

//-------------< tim kiem task >---------------------
function filterTask(key) {
  Array.from(tasks.children)
    .filter((task) => {
      return !task.textContent.toLocaleLowerCase().includes(key);
    })
    .forEach((task) => {
      task.classList.add("hide");
    });

  Array.from(tasks.children)
    .filter((task) => {
      return task.textContent.toLocaleLowerCase().includes(key);
    })
    .forEach((task) => {
      task.classList.remove("hide");
    });
}

//-----------< xoa tim kiem >------------
searchForm.addEventListener("click", (event) => {
  if (event.target.classList.contains("reset")) {
    searchForm.reset();
    const searchKey = searchForm.searchTask.value.trim().toLocaleLowerCase();
    filterTask(searchKey);
  }
});

//--------------< go tim kiem task >--------------------------
searchForm.addEventListener("keyup", (event) => {
  const searchKey = searchForm.searchTask.value.trim().toLocaleLowerCase();
  filterTask(searchKey);
});

