const button1 = document.getElementById("showable");
const button2 = document.getElementById("hide");
button1.addEventListener("click",()=>{
const textarea = document.querySelector("textarea");

textarea.innerText = "It is a day 2 assignment. We need to implement navbar, use dom!!!!!";
});
button2.addEventListener("click",()=>{
const textarea = document.querySelector("textarea");
textarea.innerText = "";
});
const button3 = document.getElementById("showImage");

const button4 = document.getElementById("hideImage");
button3.addEventListener("click",()=>{
const div = document.getElementById("image");
const images = document.createElement("img");

images.src = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";
div.append(images);
});
button4.addEventListener("click",()=>{
const div = document.getElementById("image");
div.innerHTML="";
});