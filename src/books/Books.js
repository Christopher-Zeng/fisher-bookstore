import React, { useState, useEffect } from "react";
import { BookDisplay } from "./BookDisplay";
import "./Books.css";

export default function Books(props) {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/books/")
            .then(response => response.json())
            .then(data => setdata(data));
    }, []);

    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={data} />
            </div>
        </div>
    );
}

