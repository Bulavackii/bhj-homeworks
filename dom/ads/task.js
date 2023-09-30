const rotatorCases = document.querySelectorAll('.rotator__case');

// Функция для смены активного элемента
function rotateText() {
  // Текущий активный элемент
  const activeCase = document.querySelector('.rotator__case_active');

  // Скрываем текущий активный элемент
  activeCase.classList.remove('rotator__case_active');

  // Ищем следующий элемент для смены
  let nextCase = activeCase.nextElementSibling;

  // Если следующего элемента нет, выбрать первый
  if (!nextCase || !nextCase.classList.contains('rotator__case')) {
    nextCase = rotatorCases[0];
  }

  // Делаем следующий элемент активным
  nextCase.classList.add('rotator__case_active');

  // Получаем значения атрибутов data-сolor и data-speed
  const textColor = nextCase.getAttribute('data-color') || 'black';
  const transitionSpeed = parseInt(nextCase.getAttribute('data-speed')) || 1000;

  // Уставим цвет текста и скорость смены
  nextCase.style.color = textColor;

  // Установим таймер для вызова функции rotateText через скорость смены слайдов
  setTimeout(rotateText, transitionSpeed);
}

rotateText();
