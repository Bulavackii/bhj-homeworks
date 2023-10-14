document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById('signin__form');
    const signinButton = document.getElementById('signin__btn');
    const signoutButton = document.getElementById('signout__btn');
    const welcomeBlock = document.getElementById('welcome');
    const signinBlock = document.getElementById('signin');
    const userIdSpan = document.getElementById('user_id');

    // Проверяем, есть ли сохраненный user_id в локальном хранилище
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
        welcomeBlock.classList.add('welcome_active');
        signinBlock.classList.remove('signin_active');
        userIdSpan.textContent = storedUserId;
    } else {
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
    }

    // Обработчик для кнопки Вход
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(signinForm);

        // Отправка данных на сервер
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                signinForm.reset();
                signinBlock.classList.remove('signin_active');
                welcomeBlock.classList.add('welcome_active');
                userIdSpan.textContent = response.user_id;
            } else {
                alert("Неверный логин/пароль");
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
    });

    // Обработчик для кнопки Выход
    signoutButton.addEventListener('click', function () {
        localStorage.removeItem('user_id');
        welcomeBlock.classList.remove('welcome_active');
        signinBlock.classList.add('signin_active');
    });
});