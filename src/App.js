import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './sections/Projects';
// import Contact from './sections/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const SectionContainer = styled.div`
  padding: 80px 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <SectionContainer id="home">
          <Home />
        </SectionContainer>
        <SectionContainer id="about">
          <About />
        </SectionContainer>
        {/* <SectionContainer id="projects">
          <Projects />
        </SectionContainer>
        <SectionContainer id="contact">
          <Contact />
        </SectionContainer> */}
      </AppContainer>
    </Router>
  );
};

export default App;
