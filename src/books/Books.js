import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Drive Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Dark Towers: Deutsche Bank, Donald Trump, and an Epic Trail of Destruction",
                    author: "David Enrich",
                    isbn: "978-0062878816"
                },
                {
                    id: 4,
                    title: "Where the Crawdads Sing ",
                    author: "Delia Owens",
                    isbn: " 978-0735219090"
                },
                {
                    id: 5,
                    title: "Harry Potter and the Sorcerer's Stone: The Illustrated Edition (Harry Potter, Book 1)",
                    author: "J.K. Rowling",
                    isbn: "978-0545790352"
                },
                {
                    id: 6,
                    title: "If Animals Kissed Good Night",
                    author: "Ann Whitford Paul",
                    isbn: "978-0374300210"
                },
                {
                    id: 7,
                    title: "Open Book",
                    author: "Jessica Simpson",
                    isbn: "978-0062899965"
                },
                {
                    id: 8,
                    title: "The 5 Love Languages: The Secret to Love that Lasts",
                    author: "Gary Chapman",
                    isbn: "978-0802412706"
                }
            ]
        };
    }

    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books}/>
                </div>
            </div>
        )
    }

}

