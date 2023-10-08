document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task__input"); // Поле ввода для задачи
  const taskList = document.getElementById("tasks__list"); // Список задач
  const addButton = document.getElementById("tasks__add"); // Кнопка "Добавить"

  // Функция для удаления задачи
  function removeTask(event) {
    event.preventDefault();
    event.target.closest(".task").remove(); // Удаляем родительский элемент задачи
  }

  // Функция для добавления задачи
  function addTask() {
    const taskText = taskInput.value.trim(); // Получаем текст из поля ввода и удаляем лишние пробелы
    if (taskText !== "") {
      const task = document.createElement("div"); // Создаем новый элемент задачи
      task.className = "task";
      task.innerHTML = `
        <div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">&times;</a>
      `;

      taskList.appendChild(task); // Добавляем задачу в список

      // Добавляем обработчик для удаления задачи
      const removeButton = task.querySelector(".task__remove");
      removeButton.addEventListener("click", removeTask);

      // Очищаем поле ввода после добавления задачи
      taskInput.value = "";
    }
  }

  // Добавляем обработчик для кнопки "Добавить"
  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем обновление страницы
    addTask();
  });
});