import React from "react";
import { Accordion } from "react-bootstrap";
import { AuthorCard } from "./AuthorCard";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
            <Accordion>
                {props.authors.map(a => (
                    <AuthorCard author={a} key={a.id} />
                ))}
            </Accordion>
        </div>
    );
}