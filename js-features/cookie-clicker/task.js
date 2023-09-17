/*------------ Task 2 -------------*/

const clickerCounter = document.getElementById("clicker__counter");
const cookieImage = document.getElementById("cookie");

let clickCount = 0;

function updateClickCounter() {
    clickCount++;

    clickerCounter.textContent = clickCount;

    if (cookieImage.width === 200) {
        cookieImage.width = 150;
        cookieImage.height = 150;
    } else {
        cookieImage.width = 200;
        cookieImage.height = 200;
    }
}

// Добавляем обработчик клика на изображение печеньки
cookieImage.addEventListener("click", updateClickCounter);