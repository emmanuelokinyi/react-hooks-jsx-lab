import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hello,there. I am Emmanuel Okinyi,a dedicated software developer equipped with up to date skills and ready to solve your tech problems.
    </p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
