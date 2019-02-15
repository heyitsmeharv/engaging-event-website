import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours';
import logo from '../resources/images/EELogo.png';

const FooterStyle = styled.footer`
  background-color: ${colour.darkGray};
  padding: 10rem 0;
  font-size: 1.4rem;
`

const FooterNavigation = styled.div`
  background-color: ${colour.darkGray};
  border-top: 1px solid ${colour.gray};
  padding-top: 2rem;
  display: inline-block;
`

const FooterList = styled.ul`
  list-style: none;
`

const FooterItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const FooterLink = styled.a`
  color: ${colour.white};
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  :hover {
    color: ${colour.primaryDarker};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .4);
  }
  :active {
    color: ${colour.primaryDarker};
    box-shadow: 0 1rem 2rem rgba(255, 255, 255, .4);
  }
`

const LogoBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`

const FooterText = styled.p`
  color: ${colour.gray};
  border-top: 1px solid ${colour.gray};
  padding-top: 2rem;
  display: inline-block;
  max-width: 51rem;
`

const Row = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 8rem;
  }

  ::after {
    content: "";
    display: table;
    clear: both;
  }

  //! select all the class attributes starting with 'col-'
  [class^="col-"] {
    float: left;

    &:not(:last-child) {
      margin-right: 6rem;
    }
  }

  .col-1-of-2 {
    width: calc((100% - 6rem) / 2);
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <LogoBox>
        <img src={logo} alt="logo" style={{width: "15rem", height: "auto"}} />
      </LogoBox>
      <Row>
        <div className="col-1-of-2">
          <FooterNavigation>
            <FooterList>
              <FooterItem><FooterLink>Facebook</FooterLink></FooterItem>
              <FooterItem><FooterLink>Instagram</FooterLink></FooterItem>
              <FooterItem><FooterLink>Contact Us</FooterLink></FooterItem>
              <FooterItem><FooterLink>Privacy Policy</FooterLink></FooterItem>
            </FooterList>
          </FooterNavigation>
        </div>
        <div className="col-1-of-2">
          <FooterText>
            This website and its owners take a proactive approach to user privacy and ensure the necessary
            steps are taken to protect the privacy of its users throughout their visiting experience.
            This website complies to all UK national laws and requirements for user privacy.
          </FooterText>
        </div>
      </Row>
    </FooterStyle>
  );
}

export default Footer;