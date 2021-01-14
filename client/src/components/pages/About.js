import React from "react";

const About = () => {
  return (
    <div>
      <h1>About this App.</h1>
      <p className="my-1">
        This is a MERN Stack app for keeping contact notes written by Thomas Leon Highbaugh. If you want to check out some more of the projects that TLH is working on, check out his GitHub <a href="https://github.com/Thomashighbaugh">here</a> {" "}
      </p>
      <p className="my-1">It was based on, and features the credentials for MongoDB of, <a href="https://github.com/bradtraversy">Brad Traversy's</a> MERN Udemy course. </p>
      <strong className="bg-dark p">
        <strong>Version:</strong>0.0.1
      </strong>
    </div>
  );
};

export default About;
