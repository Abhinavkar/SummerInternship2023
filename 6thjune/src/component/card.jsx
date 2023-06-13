// import {AiFillHeart} from 'react-icons/ai';
// import {BiCommentDetail} from 'react-icons/bi';
// import {FiSend} from 'react-icons/fi';
//  function Card({username,image}) {
//   return (
//     <div>
//         <h1>{username}</h1>
//         <img src={image} alt="image"  />
//         <div>
//             <AiFillHeart/>
//             <BiCommentDetail/>
//             <FiSend/>
//         </div>

//     </div>
//   )
// }
// export default Card;

// *****************************************USE STATE******************************************************
import { useState } from "react";

// function Card(){
// // const [change,setChange]=useState(false)
// const [change,setChange]=useState([{}])
// const handleClick=()=>{
//     setChange({
//         name:"sakshi",
//         age:20,
//         city:"delhi"
//     })

// }
// function       ()
// console.log(change)

// return(
//   <div>
//     {change?<h1>hello</h1>:<h1>bye</h1>}
//     <button onClick={handleClick}>click</button>

//   </div>
// )
// }

function Card(props) {
  return <h1>{props.name}</h1>;
}
export default Card;
//default export
