const token=JSON.parse(localStorage.getItem("token"));
const login=document.getElementById("login");
if(token){
    login.innerText="Logout";
    login.addEventListener("click",()=>{
        localStorage.removeItem("token");
        window.location.href='./login.html';
    });
}else{
    login.addEventListener("click",()=>{
        window.location.href='./login.html';
    });
}
if(token){
    
}

fetch("http://localhost:8080/recipe",{
    method:"GET",
})
.then((res)=>res.json())
.then((data)=>renderData(data));

function renderData(data){
    console.log(data);
    
data.map((dataq) => {
    console.log(dataq)
    const restro = document.getElementById("menu-item");
  
    const div = document.createElement("div");
    div.setAttribute("class", "menu-item");
  
    const image = document.createElement("img");
    image.src = dataq.image;
  
    const title = document.createElement("h2");
    title.innerHTML = dataq.item;

    const description = document.createElement("p");
    description.innerHTML = dataq.description;
        
  
    const rating = document.createElement("span");
    rating.innerHTML = dataq.price;

    div.append(image, title,description,rating);
    restro.append(div);
  });
}
  