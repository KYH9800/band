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
    top: 0;
    left: 0;
    right: 0;
  }

  main {
    margin-top: 3.1%;
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

// children의 각 페이지에 모두 적용하는 CSS
export const PageWrapper = styled.div`
  position: relative;
  max-width: 1034px;
  margin: 0 auto;
`;
