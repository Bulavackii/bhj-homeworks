document.addEventListener("DOMContentLoaded", function () {
   
    const productAddButtons = document.querySelectorAll(".product__add");

    productAddButtons.forEach(function (button) {
        button.addEventListener("click", addToCart);
    });

    // Функция для добавления товара в корзину
    function addToCart(event) {
        const product = event.target.closest(".product");
        const productId = product.getAttribute("data-id");
        const productQuantityValue = product.querySelector(".product__quantity-value");
        let quantity = parseInt(productQuantityValue.textContent);

        if (quantity <= 0) {
            alert("Количество товаров должно быть больше 0.");
            return; // Выходим из функции, если количество меньше или равно 0
        }

        // Проверяем, есть ли уже такой товар в корзине
        const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            // Если товар уже есть в корзине, увеличиваем его количество
            const cartProductCount = cartProduct.querySelector(".cart__product-count");
            const currentQuantity = parseInt(cartProductCount.textContent);
            cartProductCount.textContent = currentQuantity + quantity;
        } else {
            // Создаем новый элемент в корзине, если товара там еще нет
            const productTitle = product.querySelector(".product__title").textContent;
            const productImageSrc = product.querySelector(".product__image").src;

            const cartProductElement = document.createElement("div");
            cartProductElement.classList.add("cart__product");
            cartProductElement.setAttribute("data-id", productId);

            const cartProductImage = document.createElement("img");
            cartProductImage.classList.add("cart__product-image");
            cartProductImage.src = productImageSrc;

            const cartProductCount = document.createElement("div");
            cartProductCount.classList.add("cart__product-count");
            cartProductCount.textContent = quantity;

            cartProductElement.appendChild(cartProductImage); // Добавляем изображение товара в корзину
            cartProductElement.appendChild(cartProductCount); // Добавляем счетчик количества товара в корзину

            const cartProducts = document.querySelector(".cart__products");
            cartProducts.appendChild(cartProductElement); // помещаем товар в корзину
        }
    }

    // Находим кнопки увеличения и уменьшения количества товара
    const quantityControlIncButtons = document.querySelectorAll(".product__quantity-control_inc");
    const quantityControlDecButtons = document.querySelectorAll(".product__quantity-control_dec");

    // Добавляем обработчики событий для кнопок увеличения
    quantityControlIncButtons.forEach(function (button) {
        button.addEventListener("click", increaseQuantity);
    });

    // Добавляем обработчики событий для кнопок уменьшения
    quantityControlDecButtons.forEach(function (button) {
        button.addEventListener("click", decreaseQuantity);
    });

    // Функция для увеличения количества товара
    function increaseQuantity(event) {
        const productQuantityValue = event.target.parentElement.querySelector(".product__quantity-value");
        let quantity = parseInt(productQuantityValue.textContent);
        quantity++;
        productQuantityValue.textContent = quantity;
    }

    // Функция для уменьшения количества товара
    function decreaseQuantity(event) {
        const productQuantityValue = event.target.parentElement.querySelector(".product__quantity-value");
        let quantity = parseInt(productQuantityValue.textContent);
        if (quantity > 1) {
            quantity--;
            productQuantityValue.textContent = quantity;
        }
    }
});