const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события для каждого элемента "dropdown"
dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    // Обработчик клика на кнопке
    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    // Обработчик клика на элемент списка
    listElement.addEventListener('click', (e) => {
        e.preventDefault(); // Запрещаем переход по ссылке
        const selectedValue = e.target.textContent;
        valueElement.textContent = selectedValue;
        listElement.classList.remove('dropdown__list_active');
    });
});
