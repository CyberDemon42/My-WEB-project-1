const admin = {
    login: 'admin',
    password: 'bossofgym',
};


const allgames = {
    Minecraft: 'game1',
    RatchetClang: 'game2',
    StarWars: 'game3'
};


const game1 = {
    name: 'Minecraft',
    pathToPicture: 'img/game 9.jpeg',
    html: 'game1.html',
    comments: [{nick: 'Nurboll', comment: 'The best game ever!'},
               {nick: 'Nursultan', comment: 'Not bad.'},
               {nick: 'Askar', comment: 'Wow, cool!'},
               {nick: 'Nurboll', comment: 'Insane, good.'},
              ]
};

const game2 = {
    name: 'Ratchet Clang',
    pathToPicture: 'img/game 3.jpeg',
    html: 'game2.html',
    comments: [{nick: 'Temir', comment: 'Interesting game'},
               {nick: 'Boss', comment: 'Hard to learn, easy to fight'},
               {nick: 'Askar', comment: 'Good'},
              ]
};

const game3 = {
    name: 'Star Wars',
    pathToPicture: 'img/game 4.jpeg',
    html: 'game3.html',
    comments: [{nick: 'Sam', comment: 'May the force be with you.'},
               {nick: 'Dick', comment: 'This is the way.'},
              ]
};



localStorage.setItem('game1', JSON.stringify(game1));
localStorage.setItem('game2', JSON.stringify(game2));
localStorage.setItem('game3', JSON.stringify(game3));
localStorage.setItem('allgames', JSON.stringify(allgames));
localStorage.setItem('admin', JSON.stringify(admin));
localStorage.setItem('users', JSON.stringify(users));