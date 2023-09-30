
const fontControls = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

// Обработчик клика на элементах управления размером шрифта
fontControls.forEach(function(control) {
  control.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Удаляем класс font-size_active со всех элементов управления
    fontControls.forEach(function(control) {
      control.classList.remove('font-size_active');
    });
    
    // Устанавливаем класс font-size_active только на текущем элементе
    control.classList.add('font-size_active');
    
    // Получаем значение атрибута data-size для текущего элемента
    const size = control.getAttribute('data-size');
    
    book.classList.remove('book_fs-big', 'book_fs-small');
    
    // В зависимости от значения size, устанавливаем соответствующий класс на элемент книги
    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});
