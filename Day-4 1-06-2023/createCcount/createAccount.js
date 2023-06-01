const button = document.getElementById('mybutton');
const email=document.getElementById('email');
const password=document.getElementById('password'); 

button.addEventListener('click', () => {
    email.innerText =  email.value;
    password.innerText = password.value;
    // console.log(email.value);
    // console.log(password.value);

    fetch('http://127.0.0.1:5500/Day-4%201-06-2023/createCcount/index.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res)=>res.json())
});