const button = document.getElementById("mybutton");


button.addEventListener('click', () => {
    // if(document.getElementById("email").value=="" && document.getElementById("password").value=="" 
    // && document.getElementById("number").value=="" && document.getElementById("name").value=="")
    // {
    //     alert("Please fill all the fields");
    // }
    // else{
    const email=document.getElementById("email");
    const password=document.getElementById("password"); 
    const name=document.getElementById("name");
    const number=document.getElementById("number");
    const emaiid=email.value;
    const pass=password.value;
    const num=number.value;
    const nam=name.value;
    // console.log(email.value);
    // console.log(password.value);

    fetch(' http://localhost:8080/data', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email: emaiid,
            password: pass,
            number:num,
            name:nam,
            
        })
    }).then((res) => res.json())
    .then((data) => console.log(data))
        // .then((res)=>console.log(res.json()))
        // .then((data) => console.log(data))
        // .catch((error) => {
        //     // Handle the error
        //     console.error(error);
// }
        });
