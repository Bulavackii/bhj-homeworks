/*------------ Task 1 -------------*/

const timerElement = document.getElementById("timer");

let timerValue = parseInt(timerElement.textContent);

function updateTimer() {
    timerValue -= 1;

    // Обновляем текст в элементе с таймером
    timerElement.textContent = timerValue;

    if (timerValue === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
    }
}

const interval = setInterval(updateTimer, 1000);
