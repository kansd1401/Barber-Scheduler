import React from 'react';  
import './Popup.scss';  

export default function Popup (props) {  
    
  return (  
    <div className='popup'>  
      <div className='popup\_inner'>  
        <h1>{props.text}</h1>  
        <button onClick={props.closePopup}>close me</button>  
      </div>  
    </div>  
  );  
}  

