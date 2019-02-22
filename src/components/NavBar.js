import React from 'react';
import styled from 'styled-components';
import { MainButton, AdminButton } from './Button';
import colour from '../resources/styles/colours';

const NavBarStyle = styled.section`
  margin-bottom: 2rem;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <MainButton animate="true" white="true" to="/" exact>Home</MainButton>
      <MainButton animate="true" white="true" to="/" exact>Photo Booths</MainButton>
      <MainButton animate="true" white="true" to="/" exact>Book</MainButton>
      <MainButton animate="true" white="true" to="/" exact>Contact</MainButton>
      <AdminButton animate="true" white="true" right="true" to="/login" exact>Login</AdminButton>
      <AdminButton animate="true" white="true" right="true" to="/signup" exact>Signup</AdminButton>
    </NavBarStyle>
  );
}

export default NavBar;
