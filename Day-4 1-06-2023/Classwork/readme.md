so here we have install json-server  package to run our json file as a server 
and we have to run this command to run our json file as a server
json-server --watch db.json --port 3004
and we have to run this command to run our json file as a server
npm init 
npm install json-server

Here we are Fetching the data from the json file using fetch api
uska response ko json mai convert karne ke liye humne .json() use kiya hai
and then we are printing the data in the console
CODE : 
fetch("http://localhost:8080/myData",{
    method:"GET",
})
.then((res)=>res.json())
.then((data)=>console.log(data));
