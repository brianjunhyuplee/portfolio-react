import React from "react";

function Card(props) {
    return(
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
               <p>{props.body}</p> 
            </div>
            
        </div>
    )
}

export default Card;