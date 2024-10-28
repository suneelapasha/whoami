import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: #1f1f38;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ff00ff;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = (to) => {
    navigate(`#${to}`); // Update the URL
  };

  return (
    <HeaderContainer>
      <h1 style={{ color: '#fff' }}>Suneela</h1>
      <NavLinks>
        <StyledLink to="home" smooth={true} duration={500} onClick={() => handleScroll('home')}>Home</StyledLink>
        <StyledLink to="about" smooth={true} duration={500} onClick={() => handleScroll('about')}>About</StyledLink>
        <StyledLink to="projects" smooth={true} duration={500} onClick={() => handleScroll('projects')}>Projects</StyledLink>
        <StyledLink to="contact" smooth={true} duration={500} onClick={() => handleScroll('contact')}>Contact</StyledLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
