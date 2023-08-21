import React from "react";
import Links from "./Links"

function About(props) {
  function checkingString() {
    if (props.bio === undefined || props.bio === "") {
      return null;
    } else {
      return (
        <p>{props.bio}</p>
      )
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {checkingString()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;

