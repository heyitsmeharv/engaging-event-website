import React from 'react';
import styled from 'styled-components';
import { NavigationButton } from './Button';
import { FiAlignJustify } from "react-icons/fi";
import colour from '../resources/styles/colours';

const NavSection = styled.section`
`;

const Nav = () => {
  return (
    <NavSection>
      <NavigationButton exact to="/navigation"><FiAlignJustify/></NavigationButton>
    </NavSection>
  );
}

export default Nav;
