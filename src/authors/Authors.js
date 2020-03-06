import React, { useState, useEffect } from "react"
import "./Authors.css"
import { AuthorDisplay } from "./AuthorDisplay";

export default function Authors(props) {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/authors/")
        .then(response => response.json())
        .then(data => setdata(data));
    }, []);

    return (
        <div className="Authors">
            <div className="lander">
                <AuthorDisplay authors={data} />
            </div>
        </div>
    );
}