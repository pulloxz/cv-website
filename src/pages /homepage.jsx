import React, { useEffect , useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './homepage.css';

const HomePage = () => {
    const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const colors = [
        "#FF5733",
        "#FFC300",
        "#FFC300",
        "#33FF57",
        "#33FFB8",
        "#3367FF",
        "#B833FF",
        "#FF33A8",
        "#FF33A8",
        "#FF3333",
      ];
      

    const text = document.querySelector(".colorful-text");
    if (text) {
      const characters = text.innerText.split("");

      const updatedCharacters = characters.map((char, index) => {
        const color = colors[(colorIndex + index) % colors.length];
        return `<span style="color: ${color}">${char}</span>`;
      });

      text.innerHTML = updatedCharacters.join("");
    }

    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 200); 

    return () => {
      clearInterval(interval);
    };
  }, [colorIndex]);

  return (
    <div>
      <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
          <Container className="navbar-container">
            <i className="icon fas fa-square"></i>
            <Navbar.Brand href="#home" className="brand">Fatima Alaa</Navbar.Brand>
            <Navbar className="title">/programmer</Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="justify-content-end">
            <Nav.Link  herf="/">About me</Nav.Link>
            <Nav.Link  herf="/resume">Resume</Nav.Link>
            <Nav.Link  herf="/projects">Projects</Nav.Link>
            <Nav.Link  herf="/posts">Posts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="HomePage">
        <div className="main-content">
          <div className="right-section">
            <h2 className="colorful-text">Hello World!</h2>
            <p>
              Welcome to my website! My name is Fatima and I am a college student.
              <br></br> I am passionate about the work I do and strive to make a positive
              impact on the world around me<br></br>I have always been interested in learning new things and pushing myself to reach my full potential<br></br> Through my little experiences, I have developed a strong knowledge base <br></br>that I am eager to share with others.
            </p>
            <div>
                <div className="buttons">
            <button type="button" className="btn btn-outline-success">Resume</button>
            <button type="button" className="btn btn-outline-danger">Projects</button>
            </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/fatimaalaa1" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/pulloxz" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
      <footer class="footer">
  <div class="container">
    <p>&copy; 2023 Fatima Alaa.</p>
  </div>
</footer>
      </div>
    </div>
  );
}

export default HomePage;

