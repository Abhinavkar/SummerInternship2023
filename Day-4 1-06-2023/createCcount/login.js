const button=document.getElementById("mybutton");
button.addEventListener('click',()=>{
    const email1=document.getElementById("email").value;
const password1=document.getElementById("password").value;
    console.log(email1,password1);
    fetch(('http://localhost:8080/data'),{
        method:'GET',
    }).then((res)=>res.json()).then((data)=>{
        console.log(data);
        const user1= data.find((user)=>user.email===email1 && user.password===password1);
        console.log(user1);
        if(user1){
            alert("Login successful");  
            console.log("Login successful");
        }
        else{
            alert("Login failed");
            window.location.href="./index.html";
        }
    })
});