const game = JSON.parse(localStorage.getItem(localStorage.getItem('currentGame')));
const user = JSON.parse(localStorage.getItem('currentUser'));


for (indexOfComment = 0; indexOfComment < game.comments.length; indexOfComment++){
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('list-group-item', 'bg-dark', 'text-white', 'comment');
    commentDiv.innerHTML = `<strong>${game.comments[indexOfComment].nick}:</strong> ${game.comments[indexOfComment].comment}`;
    document.getElementById('comments-list').appendChild(commentDiv);
}


document.getElementById('add-game').addEventListener('click', function() {
    const currentuser = JSON.parse(localStorage.getItem('currentUser'));
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(currentuser);

    user.games.push(localStorage.getItem('currentGame'));

    localStorage.setItem('user', JSON.stringify(user));
    console.log(localStorage);

})


document.getElementById('submit-comment').addEventListener('click', function(){
    const newComment = document.getElementById('new-comment').value;
    if (newComment.trim() === "") {
        alert("Comment cannot be empty.");
        return;
    }
    const game = JSON.parse(localStorage.getItem(localStorage.getItem('currentGame')));
    const user = JSON.parse(localStorage.getItem('currentUser'));

    game.comments.push({nick: user.login, comment: newComment});
    localStorage.setItem(localStorage.getItem('currentGame'), JSON.stringify(game));
    document.getElementById('new-comment').value = "";
})