import React from 'react';
import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours';
import { moveInBottom } from '../animations/Animations';
import { NavigationButton, NavigationLink } from '../components/Button';
import { FiAlignJustify } from "react-icons/fi";
import NavigationAnimation from '../animations/NavigationAnimation';


const NavContainer = styled.div`

`

const NavCheckBox = styled.input`
  display: none;
  :checked ~ div {
    transform: scale(80);
  }
  :checked ~ nav {
    opacity: 1;
    width: 100%;
  }
`

const NavBackground = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(rgb(166, 227, 233, 1), rgb(113, 201, 206, 1));
  z-index: 1000;
  transition: transform .8s;
`

const NavLabel = styled.label`
  font-size: 2.5rem;
  height: 7rem;
  width: 7rem;
  background: ${colour.white};
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  right: 6rem;
  background-image: radial-gradient(rgb(166, 227, 233, 0.8), rgb(113, 201, 206, 0.8));
  z-index: 2000;
  svg {
    padding: 22px;
    color: ${colour.white};
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    cursor: pointer;
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
  }
  ${props => props.animate && css`
    background-color: ${colour.primaryDarker};
    color: ${colour.white};
    ::after {
      background-color: ${colour.primaryDarker};
    }
    animation-name: ${moveInBottom};
    animation-duration: .5s;
    animation-timing-function: ease-out .75s;
    animation-fill-mode: backwards;
  `}
  ::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
  :hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
    cursor: pointer;
  }
`

const Nav = styled.nav`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transition: opacity .8;
  z-index: 1500;

  opacity: 0;
  width: 0;
`

const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`

const NavItem = styled.li`
  margin: 1rem;
`

const NavSpan = styled.span`
  margin-right: 1.5rem;
  display: inline-block;
`


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleActive: false,
    }
  }
  render() {
    const { toggleActive } = this.state;
    return (
      // <NavigationAnimation>
      <NavContainer>
        <NavCheckBox type="checkbox" id="navi-toggle" />
        <NavLabel htmlFor="navi-toggle" animate="true">
          <FiAlignJustify/>
        </NavLabel>
        <NavBackground className="__background" />
        <Nav>
          <NavList>
            <NavItem><NavigationLink exact to="/home"><NavSpan>01</NavSpan>Home</NavigationLink></NavItem>
            <NavItem><NavigationLink exact to="/hire"><NavSpan>02</NavSpan>Hire</NavigationLink></NavItem>
            <NavItem><NavigationLink exact to="/faq"><NavSpan>03</NavSpan>FAQ</NavigationLink></NavItem>
            <NavItem><NavigationLink exact to="/contact"><NavSpan>04</NavSpan>Contact Us</NavigationLink></NavItem>
          </NavList>
        </Nav>
      </NavContainer>
      // </NavigationAnimation>
    )
  }
}

export default Navigation;