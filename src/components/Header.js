import React from 'react';
import styled from 'styled-components';
import { MainButton } from './Button';
import { moveInLeft, moveInRight } from '../animations/Animations';
import image from '../resources/images/love.jpg';
import logo from '../resources/images/EELogo.png';
import colour from '../resources/styles/colours';

const HeaderContainer = styled.div`
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgb(113, 201, 206, 0.8), rgb(166, 227, 233, 0.8)), url(${image});
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  .heading-primary {
    color: ${colour.white};
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;
    .heading-primary-main {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 3rem;
      animation-name: ${moveInLeft};
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }
    .heading-primary-sub {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 4.5rem;
      animation-name: ${moveInRight};
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`;

const Logo = styled.image`
  height: 3.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoBox>
        {/* <Logo src={logo} alt="logo" /> */}
        <img src={logo} alt="logo" style={{height: '5.5rem'}}/>
      </LogoBox>
      <TextBox>
        <h1 className="heading-primary">
          <span className="heading-primary-main">Engaging Event</span>
          <span className="heading-primary-sub">Photo Booth Hire</span>
        </h1>
        <MainButton animate="true" white="true">Check Out Out Our Packages</MainButton>
      </TextBox>
    </HeaderContainer>
  );
}

export default Header;