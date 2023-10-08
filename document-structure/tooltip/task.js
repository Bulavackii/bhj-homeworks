document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll(".has-tooltip");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("click", function (event) {
      event.preventDefault(); 

      const title = this.getAttribute("title");

      // Находим существующую видимую подсказку и скрываем её
      const existingTooltip = document.querySelector(".tooltip_active");
      if (existingTooltip) {
        existingTooltip.classList.remove("tooltip_active");
        // Если кликнули по элементу, который уже имел активную подсказку, просто закрываем её
        if (existingTooltip === this.nextElementSibling) {
          return;
        }
      }

      // Создаем новый элемент 'div' для подсказки
      const tooltipDiv = document.createElement("div");
      tooltipDiv.classList.add("tooltip", "tooltip_active");
      tooltipDiv.innerText = title; // Устанавливаем текст подсказки

      // Размещаем подсказку под элементом, на который был сделан клик
      const tooltipPosition = this.getBoundingClientRect();
      tooltipDiv.style.top = tooltipPosition.bottom + "px";
      tooltipDiv.style.left = tooltipPosition.left + "px";

      // Вставляем подсказку после элемента с подсказкой
      this.insertAdjacentElement("afterend", tooltipDiv);
    });
  });
});
