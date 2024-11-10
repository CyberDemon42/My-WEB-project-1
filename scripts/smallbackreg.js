document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    const login = document.querySelector('input[name="login"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confPassword = document.querySelector('input[name="confpassword"]').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter valid email adreess");
        return;
    }
    if(password !== confPassword){
        alert("Passwords do not match");
        return;
    }
    alert("Registration success");
    this.submit;

    const user = {
        login: login,
        email: email,
        password: password,
        games: [],
    }

    localStorage.setItem('user', JSON.stringify(user));
    console.log(localStorage);
}
)