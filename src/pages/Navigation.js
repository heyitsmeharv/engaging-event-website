import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';
import { NavigationLink } from '../components/Button';


const NavContainer = styled.div`

`

const NavCheckBox = styled.input`
  display: none;
`

const NavLabel = styled.label`

`

const NavBackground = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(rgb(166, 227, 233, 0.8), rgb(113, 201, 206, 0.8));

  transform: scale(80);
`

const Nav = styled.nav`
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
`

const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`

const NavItem = styled.li`
  margin: 1rem;
`

const NavLink = styled.a`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: ${colour.white};
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${colour.white} 50%);
  background-size: 230%;
  transition: all .4s;

  :hover,
  :active {
    cursor: pointer;
    background-position: 100%;
    color: ${colour.primaryDarker};
    transform: translateX(1rem);
  }
`

const NavSpan = styled.span`
  margin-right: 1.5rem;
  display: inline-block;
`


const Navigation = () => {
  return (
    <NavContainer>
      <NavCheckBox />
      <NavBackground />
      <Nav>
        <NavList>
          <NavItem><NavigationLink exact to="/home"><NavSpan>01</NavSpan>Home</NavigationLink></NavItem>
          <NavItem><NavigationLink exact to="/hire"><NavSpan>02</NavSpan>Hire</NavigationLink></NavItem>
          <NavItem><NavigationLink exact to="/faq"><NavSpan>03</NavSpan>FAQ</NavigationLink></NavItem>
          <NavItem><NavigationLink exact to="/contactus"><NavSpan>04</NavSpan>Contact Us</NavigationLink></NavItem>
        </NavList>
      </Nav>
    </NavContainer>
  )
}

export default Navigation;