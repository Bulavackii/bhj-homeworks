// Функция для загрузки опроса
function loadPoll() {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);

    // Устанавливаем обработчик события для изменения состояния запроса
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { 
            if (xhr.status === 200) { 
               
                const data = JSON.parse(xhr.responseText);

                const question = data.data.title;
                const answers = data.data.answers;

                pollTitle.textContent = question; // Отображаем вопрос на странице

                // Создаем кнопки с ответами и добавляем их на страницу
                answers.forEach((answer) => {
                    const answerButton = document.createElement("button");
                    answerButton.className = "poll__answer"; 
                    answerButton.textContent = answer; 

                    answerButton.addEventListener("click", () => {
                        alert("Спасибо, ваш голос засчитан!");
                    });

                    pollAnswers.appendChild(answerButton);
                });
            } else {
                console.error("Произошла ошибка при загрузке опроса. Статус:", xhr.status);
            }
        }
    };

    xhr.send();
}

loadPoll();