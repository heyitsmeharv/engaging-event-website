import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';
import { NavigationLink } from '../components/Button';
import NavigationAnimation from '../animations/NavigationAnimation';


const NavContainer = styled.div`
  /* position: relative;
  -webkit-transition: color 500ms;
  transition: color 500ms;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  :before {
    content: "";
    background: #2098d1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transition: 300ms ease-out;
    transition: 300ms ease-out;
  }
  :hover:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  } */
`

const NavCheckBox = styled.input`
  display: none;
`

const NavBackground = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(rgb(166, 227, 233, 0.8), rgb(113, 201, 206, 0.8));

  transition: transform .8s;
  /* transform: scale(60); */
`

const Nav = styled.nav`
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  transition: opacity .8;
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

const NavSpan = styled.span`
  margin-right: 1.5rem;
  display: inline-block;
`


const Navigation = () => {
  return (
    // <NavigationAnimation>
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
    // </NavigationAnimation>
  )
}

export default Navigation;