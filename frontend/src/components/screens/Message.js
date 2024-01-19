import React from 'react'
import Alert from 'react-bootstrap/Alert';
export default function Message({variant, message}) {


    console.log("msg", message)
  return (
    <div>

     <Alert variant={variant} style={{opacity : '1', marginBottom : '20px !important'}}> 

      {message}

     </Alert>    
      
    </div>  
  )
}
