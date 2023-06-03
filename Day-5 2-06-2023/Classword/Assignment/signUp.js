const button = document.getElementById("mybutton");
button.addEventListener("click", () => {
    const useremail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
    if (useremail.trim() === "" || userPassword.trim() === "") {
        alert("Please enter both email and password");
        return;
    }
    console.log(userPassword, useremail);
    fetch("http://localhost:8080/mydata", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: useremail,
            password: userPassword
        })
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.location.href = './login.html';
        });
});
