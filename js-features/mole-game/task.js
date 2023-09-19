/*----------------- Task 3 -------------------*/

let deadCount = 0; // счетчик убитых кротов
let lostCount = 0; // счетчик промахов
const targetCount = 10; // общее число кротов, которых нужно убить для победы
const maxLostCount = 5; // количество поражений для завершения игры

let getHole = index => document.getElementById(`hole${index}`);

function handleClick(index) {
    const hole = getHole(index);
    if (hole.classList.contains('hole_has-mole')) {
        // Крот убит
        deadCount++;
        hole.classList.remove('hole_has-mole'); // Убираем крота из лунки
    } else {
        // Промах
        lostCount++;
    }

    // Обновляем текст в элементах счетчиков
    document.getElementById("dead").textContent = deadCount;
    document.getElementById("lost").textContent = lostCount;

    // Проверяем условия победы и поражения
    if (deadCount === targetCount || lostCount === maxLostCount) {
        resetGame();
    }
}

function resetGame() {
    if (deadCount === targetCount) {
        alert("Вы победили!");
    } else if (lostCount === maxLostCount) {
        alert("Игра окончена. Вы проиграли.");
    }
    
    // Обнуляем статистику
    deadCount = 0;
    lostCount = 0;

    // Начинаем новую игру
    next();
}

// Добавляем обработчики клика к каждой лунке
for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => handleClick(i));
}

// Вспомогательная функция для запуска новой игры
function next() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole'); // Убираем кротов из всех лунок
    }
    activeHole = Math.floor(1 + Math.random() * 9);
    activateHole(activeHole);
}
