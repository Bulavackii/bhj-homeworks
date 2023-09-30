document.addEventListener('DOMContentLoaded', function () {
    const tabsContainers = document.querySelectorAll('.tabs');
  
    tabsContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab');
      const tabContents = container.querySelectorAll('.tab__content');
  
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Убираем активный класс у всех вкладок и содержимого
          tabs.forEach(tab => tab.classList.remove('tab_active'));
          tabContents.forEach(content => content.classList.remove('tab__content_active'));
  
          // Добавляем активный класс выбранной вкладке и соответствующему содержимому
          tab.classList.add('tab_active');
          tabContents[index].classList.add('tab__content_active');
        });
      });
    });
  });
  