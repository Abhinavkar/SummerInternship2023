const id =JSON.parse(localStorage.getItem('id'));
const show = document.getElementById('show');
console.log(id);
fetch(`http://localhost:8080/recipe/${id}`,{
    method: 'GET',
}) //fetching the data from the server
.then((res)=>res.json()) //converting the data into json format
.then((data)=>appendData(data)) //passing the data to the getData function
.catch((err)=>console.log(err)) //catching the error if any
function appendData(data){
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.image;
    const h1 = document.createElement('h1');
    h1.innerText = data.item;
    div.append(img,h1);
    show.append(div);
}