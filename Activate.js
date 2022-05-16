import React from 'react';
import { useParams } from "react-router-dom";

function Activate() {
    
  
       const { token,at  } = useParams();
       console.log(token,at);
       if(token.length===5){
          return(<div>
              
              <h1>Account Activated</h1>
              
              </div>)
       }
       else{
          
        return (
            <div>
                <h1>Somting went wrong</h1>
                 
            </div>)
       }

}

export default Activate