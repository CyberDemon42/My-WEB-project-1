document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector('.popup');
    const blurBackground = document.querySelector('.blur-background');

    // Функция для открытия всплывающего окна
    function openPopup() {
        popup.style.display = 'block';
        blurBackground.style.display = 'block';
    }

    // Функция для закрытия всплывающего окна
    function closePopup() {
        popup.style.display = 'none';
        blurBackground.style.display = 'none';
    }

    // Обработчик для горячей клавиши (Ctrl + M)
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'm') {
            event.preventDefault();
            if (popup.style.display === 'none' || popup.style.display === '') {
                openPopup();
            } else {
                closePopup();
            }
        }
    });

    // Закрытие всплывающего окна при нажатии на задний фон
    blurBackground.addEventListener('click', closePopup);
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector('.popup');
    const blurBackground = document.querySelector('.blur-background');
    const imageLink = document.querySelector('a.image-link'); // Добавьте класс 'image-link' для тега <a> с изображением
    const submitButton = document.querySelector('.popup .button input[type="submit"]');

    // Начальное значение z-index для popup
    let initialZIndex = -1;
    popup.style.zIndex = initialZIndex;

    // Функция для открытия всплывающего окна
    function openPopup() {
        popup.style.display = 'block';
        blurBackground.style.display = 'block';
    }

    // Функция для закрытия всплывающего окна
    function closePopup() {
        popup.style.display = 'none';
        blurBackground.style.display = 'none';
    }

    // Увеличиваем z-index при клике на изображение
    imageLink.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        popup.style.zIndex = initialZIndex + 1;
        openPopup();
    });

    // Понижаем z-index при клике на кнопку сабмита
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем отправку формы
        popup.style.zIndex = initialZIndex;
        closePopup();
    });

    // Закрытие всплывающего окна при нажатии на задний фон
    blurBackground.addEventListener('click', closePopup);
});
