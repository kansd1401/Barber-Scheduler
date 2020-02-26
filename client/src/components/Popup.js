import React from 'react';  
import './Popup.scss';  

export default function Popup (props) {  

  return (  
    <div className='popup'>  
      <div className='popup\_inner'>  
        <h1>Yooooooo</h1>  
        <button onClick={props.onClose}>close me</button>  
      </div>  
    </div>  
  );  
}