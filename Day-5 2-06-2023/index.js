const show = document.getElementById('show');

    fetch(' http://localhost:8080/recipe',{
    method: 'GET',}).then((res)=>res.json()).then((data)=>getData(data)).catch((err)=>console.log(err))
    function getData(data){
        data.map((el)=>{
            const div = document.createElement('div')
            const img = document.createElement('img');
            img.src = el.image;

            const h1 = document.createElement('h1');
            h1.innerText = el.item;

            const updateButton = document.createElement('button');
            updateButton.innerText = 'Update';

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';

            updateButton.addEventListener('click',()=>{
                const updateItem = prompt('Enter the item to update');
            
                
                fetch(`http://localhost:8080/recipe/${el.id}`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        item: updateItem,
                        image: el.image


                    })
                })
                .then((res)=>{console.log(res);alert('Updated Successfully')})
                .then((data)=>console.log(data))
                .catch((err)=>console.log(err))
            })
            deleteButton.addEventListener('click',()=>{

                fetch(`http://localhost:8080/recipe/${el.id}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        item: el.item,
                        image: el.image
            })
            }).then((res)=>{console.log(res);alert('Deleted Successfully')}).then((data)=>console.log(data))})

             const showdetails = document.createElement('button');
            showdetails.innerText = 'Show Details';
            showdetails.addEventListener('click',()=>{
                localStorage.setItem('id',JSON.stringify(el.id));
                window.location.href = './details.html';
            })
            div.append(img,h1,updateButton,deleteButton ,showdetails);
            show.append(div);


        });
    }
