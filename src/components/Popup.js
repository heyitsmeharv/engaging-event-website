import React from 'react';
import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours'

export const Popup = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colour.black};
  z-index: 9999;
`;

export const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 50rem;
  background-color: ${colour.white};
  box-shadow: 0 2rem 4rem rgba(${colour.black}, .2);
  border-radius: 3px;
`

export const PopupLeft = styled.div`

`

export const PopupRight = styled.div`

`