import React,{useState} from 'react'; 
import axios from 'axios';
import './Popup.scss'; 
import './Form.scss';
import Form from "./Form"
import Status from "./Status";
import Error from "./Error";

export default function Popup (props) {  
  


  return (  
    <div className='popup'> 
      <div className='popup_inner'>  
          <Form 
          onClose={props.onClose}
          barber={props.barber}
          slot={props.slot}
          times={props.times}
          date={props.date}
          services={props.services}/>
      </div>  
    </div>  
  );  
}