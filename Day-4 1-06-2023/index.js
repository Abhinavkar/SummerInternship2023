fetch("http://localhost:8080/myData",{
    method:"GET",
})
.then((res)=>res.json())
.then((data)=>renderData(data));

function renderData(data){
    console.log(data);
    }
     