import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Hero';
import Nav from './components/NavBar';
import Projects from './components/Projects';

function App() {
  // Available Colours:
  // black,blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "purple";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
