import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Enriqueta:400,700|PT+Mono');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    min-height: 100vh;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #___gatsby {
    width: 100%;
  }
`;

const Background = styled.div`
  background: lightblue;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 80px;
  right: 80px;
  bottom: 0;
`;

export default ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyle />
    <Background />
    {children}
  </div>
);
