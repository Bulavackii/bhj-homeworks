// Функция для скрытия анимации загрузки
function hideLoader() {
    const loader = document.getElementById("loader");
    loader.classList.remove("loader_active"); 
}

// Функция для загрузки курса валют с использованием XMLHttpRequest
function loadCurrencyExchange() {
    const itemsContainer = document.getElementById("items"); 

    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true); // Настраиваем GET-запрос к указанному URL
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText); // Преобразуем ответ в JSON-формат

                const valuteData = data.response.Valute; // Извлекаем данные о валютах из полученного JSON

                // Создаем элементы для каждой валюты и добавляем их в контейнер
                for (const valuteKey in valuteData) {
                    const valute = valuteData[valuteKey];

                    const item = document.createElement("div"); 
                    item.className = "item"; 
                    item.innerHTML = `
                        <div class="item__code">${valute.CharCode}</div>
                        <div class="item__value">${valute.Value}</div>
                        <div class="item__currency">руб.</div>
                    `; // Заполняем элемент данными о валюте

                    itemsContainer.appendChild(item); 
                }
                hideLoader();
            } else {
                console.error("Произошла ошибка при загрузке данных. Статус:", xhr.status);
                hideLoader();
            }
        }
    };
    xhr.send(); 
}

loadCurrencyExchange();