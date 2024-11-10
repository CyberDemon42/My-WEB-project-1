document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    const login = document.querySelector('input[name="login"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if(login === '' || password === '')
    {
        alert("Login or password not passed");
        return;
    }
    alert("Login successfull");
}
)