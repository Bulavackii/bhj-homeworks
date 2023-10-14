document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = modal.querySelector(".modal__close");
    
    // Проверяем, есть ли cookie с информацией о закрытии окна
    const isModalClosed = document.cookie.includes("modalClosed=true");
    
    // Если окно не закрыто, показываем его
    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }
    
    // Слушатель для кнопки закрытия окна
    closeButton.addEventListener("click", function () {
        modal.classList.remove("modal_active");
        // Устанавливаем cookie, чтобы помнить, что окно было закрыто
        document.cookie = "modalClosed=true; max-age=31536000"; // Cookie будет храниться 1 год (в секундах)
    });
});
