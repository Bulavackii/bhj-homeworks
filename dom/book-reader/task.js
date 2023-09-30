// Получите элементы управления размером шрифта
const fontControls = document.querySelectorAll('.font-size');

// Получите элемент читалки (книги)
const book = document.querySelector('.book');

// Обработчик клика на элементах управления размером шрифта
fontControls.forEach(function(control) {
  control.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Удалите класс font-size_active со всех элементов управления
    fontControls.forEach(function(control) {
      control.classList.remove('font-size_active');
    });
    
    // Установите класс font-size_active только на текущем элементе
    control.classList.add('font-size_active');
    
    // Получите значение атрибута data-size для текущего элемента
    const size = control.getAttribute('data-size');
    
    // Удалите все классы book_fs-*
    book.classList.remove('book_fs-big', 'book_fs-small');
    
    // В зависимости от значения size, установите соответствующий класс на элемент книги
    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});
