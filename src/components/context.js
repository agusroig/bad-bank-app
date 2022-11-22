import React, { createContext } from "react";
export const UserContext = createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
     
      <div className={classes()} >
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          <div className="balance">
          {props.title && (<h6 className="card-title">{props.title}</h6>)}
          {props.title2 && (<h3 className="card-title2">{props.title2}</h3>)}
          {props.subtitle && (<h4 className="card-text">{props.subtitle}</h4>)}

          </div>
          <div className="transaction">
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
          </div>
        </div>
        
      </div>      
     
    );    
  }

export default Card;