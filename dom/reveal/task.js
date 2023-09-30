// Функция, которая проверяет, виден ли элемент в области видимости окна
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки страницы
function handleScroll() {
    var revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', handleScroll);

handleScroll();
