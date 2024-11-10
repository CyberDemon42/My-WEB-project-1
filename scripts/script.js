const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
// scripts/script.js
// scripts/script.js
document.addEventListener("DOMContentLoaded", function() {
    const searchInputWrapper = document.querySelector('.wrapper');
    const searchInput = document.getElementById('searchInput');
    const blurBackground = document.getElementById('blurBackground');

    // Изначально скрыты элементы
    searchInputWrapper.style.display = 'none';
    blurBackground.style.display = 'none';

    // Определяем горячую клавишу (например, Ctrl + K)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'm') {
            event.preventDefault(); // Предотвратить действие по умолчанию (например, поиск в браузере)
            // Переключаем видимость поискового поля и фона
            if (searchInputWrapper.style.display === 'none') {
                searchInputWrapper.style.display = 'block'; // Показываем поисковую строку
                blurBackground.style.display = 'block'; // Показываем размытие фона
                searchInput.focus(); // Фокус на поле ввода
            } else {
                searchInputWrapper.style.display = 'none'; // Скрываем поисковую строку
                blurBackground.style.display = 'none'; // Скрываем размытие фона
                searchInput.value = ''; // Очищаем ввод при скрытии
            }
        }
    });
});

