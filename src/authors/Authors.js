import React, { Component } from "react"
import "./Authors.css"
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component{

    constructor(props){
        super(props);
        this.state = {
            authors : [
                {
                    id: 1,
                    name: "William Shakespeare",
                    description: "Plays and poetry"
                },
                {
                    id: 2,
                    name: "Agatha Christie",
                    description: "Whodunits including the Miss Marple and Hercule Poirot series"
                },
                {
                    id: 3,
                    name: "Barbara Cartland",
                    description: "Romance"
                },
                {
                    id: 4,
                    name: "Danielle Steel",
                    description: "Romance"
                },
                {
                    id: 5,
                    name: "Harold Robbins",
                    description: "Adventure"
                },
                {
                    id: 6,
                    name: "Georges Simenon",
                    description: "Detectives, Maigret, romans dur"
                },
                {
                    id: 7,
                    name: "Enid Blyton",
                    description: "Children's literature, Noddy, The Famous Five, The Secret Seven"
                },
                {
                    id: 8,
                    name: "Sidney Sheldon",
                    description: "Suspense"
                }
            ]
        };
    }

    render(){
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        )
    }
}