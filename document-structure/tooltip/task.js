document.addEventListener("DOMContentLoaded", function () {
    const tooltips = document.querySelectorAll(".has-tooltip");
  
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("click", function (event) {
        event.preventDefault(); // Отменяем стандартное действие по клику
  
        // Получаем текст подсказки из атрибута 'title' элемента
        const title = this.getAttribute("title");
  
        // Находим существующую видимую подсказку и скрываем её
        const existingTooltip = document.querySelector(".tooltip_active");
        if (existingTooltip) {
          existingTooltip.classList.remove("tooltip_active");
        }
  
        // Создаем новый элемент 'div' для подсказки
        const tooltipDiv = document.createElement("div");
        tooltipDiv.classList.add("tooltip", "tooltip_active"); 
        tooltipDiv.innerText = title; // Устанавливаем текст подсказки
  
        // Размещаем подсказку под элементом, на который был сделан клик
        const tooltipPosition = this.getBoundingClientRect();
        tooltipDiv.style.top = tooltipPosition.bottom + "px";
        tooltipDiv.style.left = tooltipPosition.left + "px";
  
        document.body.appendChild(tooltipDiv);
      });
    });
  
    // Устанавливаем обработчик события клика для всего документа
    document.addEventListener("click", function (event) {
      // Если кликнули не по элементу с классом 'has-tooltip', скрываем видимую подсказку (если она есть)
      if (!event.target.classList.contains("has-tooltip")) {
        const existingTooltip = document.querySelector(".tooltip_active");
        if (existingTooltip) {
          existingTooltip.remove();
        }
      }
    });
  });
  