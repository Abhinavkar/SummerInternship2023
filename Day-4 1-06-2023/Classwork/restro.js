// const data=[{
//     title:"Pizza",
//     photo:"https://th.bing.com/th/id/OIP.zNsLu3Hwfbi3vsU4SaWBpQHaHa?pid=ImgDet&rs=1",
//     description:" Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients which is then baked at a high temperature, traditionally in a wood-fired oven.",
//     Rating : 4.5, 
//     price:100,

// },
// {
//     title:"Burger",
//     photo:"https://th.bing.com/th/id/OIP.rfjUaFvCTwDB2CE-um2eHAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     description:"A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
//     Rating : 4.5,
//     price:100,

// },
// {
//     title:"Momos",
//     photo:"https://th.bing.com/th/id/OIP.zNsLu3Hwfbi3vsU4SaWBpQHaHa?pid=ImgDet&rs=1",
//     description:"momons are the best food in the world.",
//     Rating : 4.5,
//     price:100,

// },
// {
//     title:"Pizza",
//     photo:"https://th.bing.com/th/id/OIP._tgM80_g7K1ymkC1gpvxZAHaE8?w=285&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     description:"Pizzza are the best food in the world.",
//     Rating : 4.5,
//     price:100,

// },
// {
//     title:"Samosa",
//     photo:"https://th.bing.com/th/id/OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     description:"Samosa are the best food in the world.",
//     Rating : 4.5,
//     price:100,

// },{
//     title:"Pizza",
//     photo:"https://th.bing.com/th/id/OIP.zNsLu3Hwfbi3vsU4SaWBpQHaHa?pid=ImgDet&rs=1",
//     description:"Pizza are the best food in the world.",
//     Rating : 4.5,
//     price:100,

// },
// {
//     title:"Pizza",
//     photo:"https://th.bing.com/th/id/OIP.zNsLu3Hwfbi3vsU4SaWBpQHaHa?pid=ImgDet&rs=1",
//     description:"Pizza are the best food in the world.",
//     Rating : 4.5,
//     price:100,

// }
// ];
fetch("http://localhost:8080/data",{
    method:"GET",
})
.then((res)=>res.json())
.then((data)=>renderData(data));

function renderData(data){
    console.log(data);
    
data.map((data) => {
    const restro = document.getElementById("Restro");
  
    const div = document.createElement("div");
    div.setAttribute("class", "container");
  
    const image = document.createElement("img");
    image.src = data.photo;
  
    const title = document.createElement("h2");
    title.innerHTML = data.title;
  
    const rating = document.createElement("h3");
    rating.innerHTML = data.Rating;
  
    const price = document.createElement("h3");
    price.innerHTML = data.price;
  
    const button = document.createElement("button");
    button.innerHTML = "Order Now";
  
    const button1 = document.createElement("button");
    button1.innerHTML = "Read More";
  
    const description = document.createElement("p");
  
    button1.addEventListener("click", () => {
      if (button1.innerHTML === "Read More") {
        description.innerHTML = data.description;
        div.insertBefore(button, description );
        button1.innerHTML = "Read Less";
        div.insertAfter(description, button1);
      } else {
        description.innerText="";
        button1.innerHTML = "Read More";
        div.insertAfter(description, button1);
        
      }
    });
  
    div.append(image, title, rating, price,description, button, button1);
    restro.append(div);
  });
}
  