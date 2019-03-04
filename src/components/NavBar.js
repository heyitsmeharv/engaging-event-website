import React from 'react';
import styled from 'styled-components';
import { NavButton } from './Button';
import colour from '../resources/styles/colours';

const NavBarStyle = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem 4rem;
  border-radius: 10rem;
  /* background-color: ${colour.primaryDarker} */
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavButton animate="true" white="true" to="/" exact>Home</NavButton>
      <NavButton animate="true" white="true" to="/" exact>Photo Booths</NavButton>
      <NavButton animate="true" white="true" to="/" exact>Book</NavButton>
      <NavButton animate="true" white="true" to="/" exact>Contact</NavButton>
      <NavButton animate="true" white="true" right="true" to="/login" exact>Login</NavButton>
      <NavButton animate="true" white="true" right="true" to="/signup" exact>Signup</NavButton>
    </NavBarStyle>
  );
}

export default NavBar;
