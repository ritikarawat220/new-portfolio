import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
/* import Particle from "../Particle"; */
import flappybird from '../../Assets/flappy-bird.png';
import bookstore from '../../Assets/bookstore.png';
import space from '../../Assets/space.png';
import conference from '../../Assets/conference.png';
import maths from '../../Assets/maths.png';
import mealdb from '../../Assets/meal ss.png';
import world from '../../Assets/world-1.png';
import todo from '../../Assets/to-do.png';
import book from '../../Assets/awsome-book.png';

function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent
          {' '}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conference}
              isBlog={false}
              title="Conference"
              description="This is an educational project to make a website for a web conference event with home page and about page."
              ghLink="https://github.com/ritikarawat220/Capstone-project---Conference-page"
              demoLink="https://ritikarawat220.github.io/Capstone-project---Conference-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-do List"
              description="📝 This is a simple to do list app that lets you add your daily tasks into a list. You can add or remove or modify your task, and you can mark the tasks as complete and delete completed tasks."
              ghLink="https://github.com/ritikarawat220/To-Do-List"
              demoLink="https://ritikarawat220.github.io/To-Do-List/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space-Traveler's Hub "
              description="Space-Travelers-Hub is a Microverse group project to build a web app using React/Redux that works with live data from the SpaceX API."
              ghLink="https://github.com/ritikarawat220/Space-Travelers-Hub"
              demoLink="https://space-travelers-hub-mst6.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappybird}
              isBlog={false}
              title="Flappy-Bird"
              description="Basic flappy bird game 🐤"
              ghLink="https://github.com/ritikarawat220/Flappy-Bird-Game"
              demoLink="https://ritikarawat220.github.io/Flappy-Bird-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maths}
              isBlog={false}
              title="Math-Magicians"
              description="Math magicians is a website for all fans of mathematics! 👩🏻‍🔬"
              ghLink="https://github.com/ritikarawat220/Math-Magicians"
              demoLink="https://math-magicians-vk6q.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore"
              description="A simple React with Redux book store web app, where you can add and remove books, update reading progress and list by categories."
              ghLink="https://github.com/ritikarawat220/Bookstore"
              demoLink="https://book-store-mpf2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealdb}
              isBlog={false}
              title="MealDB"
              description="The MealDB is a web application that has a list of foods. The web application was built based on two APi's, which are the Meals DB and the Involvement API. The web app makes APi call to render a list of meals and also make another API call when a user likes or comment."
              ghLink="https://github.com/ritikarawat220/JavaScriptCapstone"
              demoLink="https://ritikarawat220.github.io/JavaScriptCapstone/dist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={world}
              isBlog={false}
              title="World Metrics"
              description="World Metrics is a single page web application that allows users to check world continents/countries information, e.g: Population, Flags, Currencies, Languages, capital, borders, area, etc."
              ghLink="https://github.com/ritikarawat220/ReactCapstone-project---Metrics-webapp"
              demoLink="https://metrics-webapp-xo2x.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Awesome-books"
              description="📚 A book list project. The user can add books by providing a book title and an author, and delete a certain book from the list by clicking the remove button. Clicking the 'List' link will show all the books."
              ghLink="https://github.com/ritikarawat220/Awesome-books-ES6"
              demoLink="https://ritikarawat220.github.io/Awesome-books-ES6/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
