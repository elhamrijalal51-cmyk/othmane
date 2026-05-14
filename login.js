const login = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);

    if (username === "admin" && password === "admin") {
        window.location.href = "./home.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe invalide");
    }
}
