import React, { Component } from "react";

class AboutUs extends Component {


  render() {

    return (
      <div className="container mt-5" >
        <h1 className="mb-4" >
          About News Bus
        </h1>
        <p >
          Welcome to News Bus, your one-stop destination for a diverse range of
          news sources, conveniently brought together on a single platform.
          Inspired by the idea of a bus carrying different passengers to their
          destinations, News Bus aims to transport you to the latest happenings
          across various domains.
        </p>

        <div className="mt-4" >
          <h2 >Our Journey</h2>
          <p >
            News Bus started as a college project, driven by the vision to
            simplify the way people access news. In this digital era, where
            information is scattered across different websites, we wanted to
            create a unified space for news enthusiasts. Whether you're
            interested in current affairs, entertainment, general knowledge,
            health, science, or technology, News Bus has you covered.
          </p>
        </div>

        <div className="mt-4" >
          <h2>Features</h2>
          <ul className="list-group" >
            <li className="list-group-item" >
              <strong>Top Headlines:</strong> Stay informed with the latest and
              most relevant news at a glance.
            </li>
            <li className="list-group-item" > 
              <strong>Entertainment:</strong> Explore the world of
              entertainment, from movies to celebrity updates.
            </li>
            <li className="list-group-item" >
              <strong>General Knowledge:</strong> Dive into a wealth of general
              knowledge and interesting facts.
            </li>
            <li className="list-group-item" >
              <strong>Health:</strong> Stay healthy and informed with updates
              from the health sector.
            </li>
            <li className="list-group-item" >
              <strong>Science:</strong> Uncover the latest discoveries and
              advancements in the world of science.
            </li>
            <li className="list-group-item" >
              <strong>Technology:</strong> Stay ahead in the fast-paced world of
              technology with our tech updates.
            </li>
            <li className="list-group-item" >
              <strong>Extra:</strong> Discover unique and intriguing stories
              that go beyond the ordinary.
            </li>
          </ul>
        </div>

        <div className="mt-4" >
          <h2>Our Mission</h2>
          <p>
            At News Bus, our mission is to provide a seamless and enjoyable
            news-reading experience. We believe in the power of information to
            inspire, educate, and connect people. By offering a variety of
            perspectives and topics, we hope to cater to the diverse interests
            of our readers.
          </p>
        </div>

        <div className="mt-4" >
          <h2>Contact Us</h2>
          <p>
            We value your feedback! If you have any suggestions, questions, or
            just want to say hello, feel free to reach out to us at <a target="_blank" href="https://forms.gle/VFeZkx7B9nWk4jsy7">Click me</a>.
          </p>
        </div>

        <p className="mt-4" >
          Thank you for riding along with News Bus – your window to the world's
          news in one place.
        </p>
      </div>
    );
  }
}

export default AboutUs;
