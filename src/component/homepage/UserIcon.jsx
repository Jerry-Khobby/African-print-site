import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";



const UserIcon = () => {
    return ( 
        <div
         style={{
            display :"flex",
            justifyContent: "flex-end"
        }}
        >
            <div
            style={{
                height:'35px',
                width:'35px',
                backgroundColor:'',
                alignItems:'center',
                display:'flex',
                justifyContent:'center',
                borderRadius:'50%',
                cursor:'pointer',
            }}
            >
            <FaRegUserCircle  size={30} color='gray'/>
            </div>

  </div>
     );
}
 
export default UserIcon;