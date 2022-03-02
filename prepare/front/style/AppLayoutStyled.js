import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    /* justify-content: center; */
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #ededed; // #fff;    
  }

  main {
    margin: 0% 15%; 
    height : auto; // footer 하단 고정
    min-height: 100%; // footer 하단 고정
  }

  footer {
    background-color: #ededed;
    height: 80px;
    position : relative; // footer 하단 고정
    transform : translateY(100%); // footer 하단 고정
  }
  `;
