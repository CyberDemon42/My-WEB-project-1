 // JavaScript для обработки поиска
 document.getElementById('search-input').addEventListener('input', function() {
    const searchText = this.value;
    const allgames = JSON.parse(localStorage.getItem('allgames'));
    const raw = JSON.parse(localStorage.getItem(allgames[searchText]));
    window.open(raw.html);
});

// Также активируем поиск при клике на кнопку
document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    searchInput.focus();
    searchInput.dispatchEvent(new Event('input'));
});
