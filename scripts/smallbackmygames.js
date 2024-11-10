const user = JSON.parse(localStorage.getItem('user'));
const games = user.games;

console.log(games);

const imageContainer = document.getElementById('imagegallery111');

games.forEach(game => {
    const imgElement = document.createElement('img');
    gamecard = JSON.parse(localStorage.getItem(game));
    imgElement.src = gamecard.pathToPicture;
    imgElement.alt = 'Added Image';
    imgElement.id = game;
    imageContainer.appendChild(imgElement);

    document.getElementById(game).addEventListener('click', function() {
        window.open(gamecard.html);
    });
    
});
