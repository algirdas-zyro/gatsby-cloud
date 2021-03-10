import React from "react";
import { Link } from "gatsby"
import "./About.css";

function About() {
    return (
        <div className="about">
            <h1>
                About page. <Link to="/">Go back</Link>!
            </h1>
        </div>
    );
}

export default About;
