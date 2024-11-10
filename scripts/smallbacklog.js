document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    const login = document.querySelector('input[name="login"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const user = JSON.parse(localStorage.getItem('user'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    if(login === String(user.login) && password === String(user.password) || login === String(admin.login) && password === String(admin.password))
    {
        alert("Login successfull");
    }
    else
    {
        alert("Login or password not passed");
        return;
    }
    
    const currentUser = {
        login: login
    }

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    console.log(localStorage);

    if (login === String(admin.login) && password === String(admin.password)){
        window.open('adminPanel.html');
        window.open('myadminpanel.html');
    }
    else{
        window.open('main.html');
    }
}
)