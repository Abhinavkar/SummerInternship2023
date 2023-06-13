// /* eslint-disable react/jsx-key */
// import Navbar from "./component/navbar";
// import "./App.css";
// import Card from "./component/card";
// import { useState, useEffect } from "react";
// function Loader(){
// }
// // function App() {
// // const [arr ,setArr]=useState([]);
// // const getData=async()=>{
// //   await fetch('http://localhost:8080/mydata',{
// //     method:'GET',
// //   })
// //   .then((response)=>response.json())
// //   .then((data)=>{
// //     setArr(data);
// //     console.log(data);
// // });
// // };
// // const handlePost=async()=>{
// //   const postData={
// //     email: "hi@gmail.com",
// //         profile: "https://th.bing.com/th/id/OIP.0cDZUhorE7w8eF1MYjSAawHaKV?w=149&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //         name: "hi",
// //         address: "ITER",
// //         id: 3

// //   }
// //     await fetch('http://localhost:8080/mydata',{
// //       method:'POST',
// //       headers:{
// //         'Content-Type':'application/json'
// //       },
// //       body:JSON.stringify(postData)
// //     }).then((response)=>response.json())
// //     .then((res)=>{
// //       if(res.ok)
// //     })
// //   }
// // // }
// // useEffect(()=>{ getData();} ,[]);
// //   return (
// //     <div className='App'>

// //     <button onClick={handlePost}>post</button>
// //     {
// //       arr.map((item)=>{
// //         return(
// //           <Card username={item.name} image={item.profile} address={item.address} />);
// //       }
// //       )}
// //     </div>
// //   );

// // function App (){
// //   const [arr ,setArr]=useState([]);
// //   const [search ,setSearch]=useState('');
// //   const [pageArr,setPageArr]=useState([1,2,3,4,5,6,7,8,9,10]);
// //   const [page,setPage]=useState(1);

// //   const handleChange=(e)=>{
// //     setSearch(e.target.value);
// //   }
// // console.log(search);

// //   const getData=async()=>{
// //     await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`,{
// //       method:'GET',
// //     })
// //     .then((response)=>response.json())
// //     .then((datas)=>{
// //       setArr(datas.data);
// //       console.log(data.data);
// //   });
// //   };
// // // Fetching data from api

// //   const handlePage= (el)=>{
// //     setPage(el);
// //   };
// //   console.log(page);

// //   useEffect(()=>{
// //     getData();
// //   },[page]);

// //   return(
// //     <div className='App'>

// // {
// //   arr.length > 0 ? (

// //       {
// //         arr.map((item)=>{
// //           return(
// //           <Card
// //             passenger={item.name}
// //             image={item.airline[0].logo}
// //             title={item.name}
// //             country={item.airline[0].country}
// //             address={item.airline.country}
// //           />

// //           );
// //         })
// //       }

// // ):(<h1> No Data found </h1>)}
// // {pageArr.map((el)=>{
// // return(
// // <button onClick={()=>handlePage(el)}>{el}</button>
// // );
// // })}

// //     </div>
// // );
// // }
// function App() {
//   const [arr, setArr] = useState([]);
//   const [but, setBut] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   const [page, setPage] = useState(1);
//   useEffect(() => {
//     getData();
//   }, [page]);
//   const getData = async () => {
//     await fetch(
//       `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`,
//       {
//         method: "GET",
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setArr(data.data);
//       });
//   };
//   const handleChange = (item) => {
//     setPage(item);
//     console.log(page);
//   };

//   return (
//     <div>
//       {arr.length > 0 ? (
//         arr.map((item) => {

//           return <Card name={item.name} />;
//         })
//       ) : (
//         <h1>NO DATA</h1>
//       )}
//       {but.map((ele) => {
//         return <button onClick={() => handleChange(ele)}>{ele}</button>;
//       })}
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import Card from "./component/card";

function Landing() {
  const [searchbr, setSearchbr] = useState("");
  const [arr, setArr] = useState([]);
  const [whole, setWhole] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setshow] = useState([]);

  useEffect(() => {
    getData();
  }, [page]);
  useEffect(() => {
    handleSearch();
  }, [searchbr]);

  const pageArr = [];
  let i = 1;
  while (i <= Math.ceil(whole.length / 10)) {
    pageArr.push(i);
    i++;
  }

  const getData = async () => {
    await fetch("  http://localhost:8080/profile", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWhole(data);
        const end = page * 10;
        const start = page - 1;
        const newData = data.slice(start * 10, end);
        console.log(newData);
        setArr(newData);
        console.log(arr);
      });
  };

  const handleChange = (item) => {
    setPage(item);
    console.log(page);
  };

  const handle = (e) => {
    setSearchbr(e.target.value);
  };

  const handleSearch = () => {
    if (searchbr === "") {
      setshow([]);
    } else {
      const new_arr = whole.filter((data) => data.title.includes(searchbr));
      setshow(new_arr);
    }
  };

  return (
    <div className="landing">
      <div className="search_bar">
        <input
          type="text"
          id="search"
          placeholder="Enter movie name to search"
          value={searchbr}
          onChange={(e) => handle(e)}
        />
      </div>
      <div className="test">
        {searchbr && searchbr.length > 0 ? (
          <div>
            {show.length > 0 ? (
              show.map((item) => {
                return (
                  <Card
                    id={item.id}
                    title={item.title}
                    poster={item.poster}
                    content={item.content}
                  />
                );
              })
            ) : (
              <h1>No data found</h1>
            )}
          </div>
        ) : (
          <div>
            {arr.length > 0 ? (
              arr.map((item) => {
                return (
                  <Card
                    id={item.id}
                    title={item.title}
                    poster={item.poster}
                    content={item.content}
                  />
                );
              })
            ) : (
              <h1>NO DATA</h1>
            )}
            {pageArr.map((ele) => {
              return <button onClick={() => handleChange(ele)}>{ele}</button>;
            })}
          </div>
        )}
      </div>
      <div className="cards"></div>
    </div>
  );
}

export default Landing;
