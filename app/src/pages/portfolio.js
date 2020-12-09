import React, { Component } from "react";
import Card from "../components/Card";
import db from "../repos.json";

class Portfolio extends Component {
    state={
        db
    };

render() {
    return(
        <div className="container">
            <h1>Portfolio</h1>
            {this.state.db.map(repo => (
                <Card 
                id = {repo.id}
                name = {repo.name}
                image = {repo.image}
                link = {repo.link}
                />
                
            ))}
            <a href="https://docs.google.com/document/d/1as8tFm7Y_KxGWlGcf6judwu9-DtdXOo64ZqrkU-qHsM/edit?usp=sharing">My Resume</a>
        </div>
    );
}
}

export default Portfolio;