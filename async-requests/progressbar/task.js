document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form"); 
    const progressBar = document.getElementById("progress"); 

    // Добавляем обработчик события отправки формы
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const formData = new FormData(form);

        // Создаем объект XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // Настраиваем обработчик события изменения состояния запроса
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { 
                if (xhr.status === 200) { 
                    alert("Файл успешно загружен!");
                } else {
                    alert("Произошла ошибка при загрузке файла. Попробуйте еще раз.");
                }
            }
        };

        // Настраиваем обработчик события изменения прогресса загрузки
        xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
                // Вычисляем и устанавливаем значение прогресса в процентах
                const progress = (event.loaded / event.total) * 100;
                progressBar.value = progress;
            }
        });

        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(formData);
    });
});
