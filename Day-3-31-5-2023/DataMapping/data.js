const movie= [{
    id: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    image:"https://th.bing.com/th?id=ODL.5afbf0d162221db1c9a9b57d4a9de28b&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1"
},
{
    id: 2,
    name: "One PIece",
    year: 1994,
    image:"https://th.bing.com/th/id/OIP.A4EI2kNUo6A3rE2Rrrg2_gHaNF?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},
{
    id: 3,
    name: "Harry Potter",
    year: 1994,
    image:"https://th.bing.com/th/id/OIP.kwNmd5qX6BoL8KLmWTpOoAHaGm?w=202&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
},
{
    id: 4,
    name: "The Shawshank Redemption",
    year: 1994,
    image:"https://th.bing.com/th?id=ODL.5afbf0d162221db1c9a9b57d4a9de28b&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1"
}];
// const showmovies= document.getElementById("showmovies");
// for(let i=0;i<movie.length;i++){
//     const div= document.createElement("div");
//     const image= document.createElement("img");
//     image.src=movie[i].image;
//     const movieName=document.createElement("h2");
//     movieName.innerHTML=movie[i].name;
//     const movieYear=document.createElement("p");
//     movieYear.innerText=movie[i].year;
//     div.append(image,movieName,movieYear);
//     showmovies.append(div);
// }
// const showmovies=document.getElementById("showmovies");
// movie.forEach((movies)=>{
//     const div=document.createElement("div");
//     const image=document.createElement("img");
//     image.src=movies.image;
//     const movieName=document.createElement("h2");
//     movieName.innerHTML=movies.name;
//     const movieYear=document.createElement("p");
//     movieYear.innerText=movies.year;
//     div.append(image,movieName,movieYear);
//     showmovies.append(div);
//});
const showmovies=document.getElementById("showmovies");
movie.map((movies)=>{
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=movies.image;

    const movieName=document.createElement("h2");
    movieName.innerHTML=movies.name;

    const movieYear=document.createElement("p");
    movieYear.innerText=movies.year;

    const button=document.createElement("button");
    button.innerText="Click MOVIe";
    
    button.addEventListener("click",()=>{
        alert(`Hello You clicked on the ${movies.name}`); 
    });

    div.append(image,movieName,movieYear,button);
    showmovies.append(div);

});

