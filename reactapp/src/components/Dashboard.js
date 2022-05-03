import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
  // const [username,setUsername]=useState("")
  // const [password,setPassword]=useState("")
  // const [name,setName]=useState([])
  // useEffect(()=>{
  //   const uname=localStorage.getItem("Username")
  //   setUsername(uname)
  //   const pass=localStorage.getItem("Password")
  //   setPassword(pass)
  // })

  // useEffect(() => {
  //   const data=fetch(`https://api.spacexdata.com/v3/rockets`)
  //     .then((response) => response.json())
  //     .then((Data) => console.log(Data));
  //     setName(data.json())
  // }, []);
  return (
    
    <div>
         <ul>
  <li><Link to="/flights">Flights</Link></li>
  
</ul>
        
          {/* <ul>{
             name.map((item) =>
              <li>
              {item.company}
            </li>)
             }
             
              
           
          </ul> */}
        
      
   
    </div>
  )
}

export default Dashboard