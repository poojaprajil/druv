import React, { useEffect, useState } from 'react';



function Flights() {

    const [name,setName]=useState([])
    useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/rockets`)
          .then((response) => response.json())
          .then((Data) => setName(Data));
          console.log(name)
          
      }, []);

      return (
        
        <div>
          
            
              <ul>{
                 name.map((item) =>
                  <li>
                  {item.rocket_name}
                </li>)
                 }
                 
                  
               
              </ul>
            
          
       
        </div>
      )
    }
export default Flights