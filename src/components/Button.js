import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours';
import { moveInBottom } from '../animations/Animations';
import { NavLink } from 'react-router-dom';

export const MainButton = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all .2s;
  position: relative;
  font-size: 1.6rem;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    cursor: pointer;
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
  }
  ${props => props.white && props.animate && css`
    background-color: ${colour.white};
    color: ${colour.gray};
    ::after {
      background-color: ${colour.white};
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
  }
`

export const NavButton = styled(MainButton)`
  margin: 1rem;
  ${props => props.right && css`
    float: right;
  `}
`

export const PackagesButton = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all .2s;
  position: relative;
  font-size: 1.6rem;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    cursor: pointer;
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
  }
  ${props => props.blue && props.animate && css`
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

export const NavigationButton = styled.a`
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

export const NavigationLink = styled(NavLink)`
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
  box-shadow: 0 1rem 3rem rgba(${colour.black}, .4);

  :hover,
  :active {
    cursor: pointer;
    background-position: 100%;
    color: ${colour.primaryDarker};
    transform: translateX(1rem);
  }
`