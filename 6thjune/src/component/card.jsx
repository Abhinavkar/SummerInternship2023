
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
const [change,setChange]=useState(false)
function handleClick=()=>{
    setChange(!change)

}
return(
  <div>
    {change?<h1>hello</h1>:<h1>bye</h1>}
    <button onClick={handleClick}>click</button>

  </div>
)