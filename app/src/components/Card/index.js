import React from "react";

function Card(props) {
    return(
        <div className="card">
            <div className="card-header">{props.name}</div>
            <div className="card-body">
               <img src={props.image} alt={props.name} href={props.link}></img>
            </div>
            
        </div>
    )
}

export default Card;