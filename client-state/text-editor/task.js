document.addEventListener("DOMContentLoaded", function () {

    const editor = document.getElementById("editor");
    const clearButton = document.getElementById("clearButton");

    // Слушатель для сохранения текста в локальное хранилище при изменениях в текстовом поле
    editor.addEventListener("input", function () {
        const text = editor.value;
        localStorage.setItem("editorText", text);
    });

    // Слушатель для кнопки "Очистить содержимое"
    clearButton.addEventListener("click", function () {
        editor.value = "";
        localStorage.removeItem("editorText");
    });
});
