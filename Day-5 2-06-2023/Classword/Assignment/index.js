

const button=document.getElementById("mybutton");
button.addEventListener("click",()=>{
    
    const useritem = document.getElementById("title").value;
    const userimagesrc= document.getElementById("image").value;
    const userdes= document.getElementById("desc").value;
    const userprice= document.getElementById("price").value;
    if (useritem.trim() === "" || userimagesrc.trim() === "" || userdes.trim() === "" || userprice.trim() === "" ) {
        alert("Pleaseall details");
        return;
    }
    console.log(useritem,userimagesrc,userdes,userprice);
    fetch("http://localhost:8080/recipe", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            item:useritem,
            description:userdes,
            image:userimagesrc,
            price:userprice
            
        })
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
             window.location.href = './index.html';
        });
});
