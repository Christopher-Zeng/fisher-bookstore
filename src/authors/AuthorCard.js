import React from "react";
import { Card, Button, Accordion } from "react-bootstrap";
export function AuthorCard(props) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey={props.author.id}>
                    {props.author.name}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.author.id}>
                <Card.Body>
                    <Card.Text>{props.author.books}</Card.Text>
                    <Button variant="warning">Explore</Button>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}