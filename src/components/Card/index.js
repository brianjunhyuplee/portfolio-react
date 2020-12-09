import React from "react";

function Card(props) {
    return(
        <div className="container">
        <div className="card">
            <div className="card-header">{props.name}</div>
            <div className="card-body">
               <a href={props.link}><img style={{ width: "500px" }} src={props.image} alt={props.name}></img></a>
            </div>
        </div>
        <br></br>
        </div>
    )
}

export default Card;