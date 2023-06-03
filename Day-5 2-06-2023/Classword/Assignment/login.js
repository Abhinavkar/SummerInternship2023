const token=JSON.parse(localStorage.getItem("token"));
if(token){
    window.location.href='./index.html';
}                  
const button = document.getElementById("mybutton")
button.addEventListener("click",()=>{
    const inputemail=document.getElementById("email").value;
    const inputpassword=document.getElementById("password").value;
    fetch("http://localhost:8080/mydata",{
        method:"GET",
        
    }).then((res)=>res.json())
    .then((data)=>{console.log(data);
        const user=data.find((e)=>e.email===inputemail && e.password===inputpassword);
        console.log(user);
        if(user){
            alert("LOGIN SUCCESSFULL BABY");
            console.log("LOGIN Successful");
            localStorage.setItem("token",JSON.stringify(Date.now()));
            window.location.href='./index.html';
        }
        else{
            alert("EnteredUseridorPassword is wrong ");
            console.log("Login Unsuccessgul");
            
            window.location.href='./signup.html';
        }
    });
});