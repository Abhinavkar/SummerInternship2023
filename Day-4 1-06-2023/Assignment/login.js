const { url } = require("inspector");

const button = document.getElementById("mybutton");
button.addEventListener(("click"),()=>{
    const useremail=document.getElementById("email").value;
    const userPassword= document.getElementById("password").value;
    console.log(userPassword,useremail);
    fetch(" http://localhost:8080/userInfo",{
        method:"POST",
        headers:""
    })
});