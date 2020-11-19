import React, { Component } from "react";
import Card from "../components/Card";
import db from "../repos.json";

class Portfolio extends Component {
    state={
        db
    };

render() {
    return(
        <div>
            <h1>Portfolio</h1>
            {this.state.db.map(repo => (
                <Card 
                id = {repo.id}
                name = {repo.name}
                image = {repo.image}
                link = {repo.link}
                />
            ))}
        </div>
    )
}
}