import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    /* justify-content: center; */
    background-color: #f7f8f9;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  header {
    z-index: 1;
    background-color: #fff; // #fff;
    border-bottom: 1px solid #d6d3d3;
    // 메뉴바 상단 고정
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  main {
    /* height : 100%; */
    height : auto; // footer 하단 고정
    max-width: 1034px; // 가로 길이
    margin: 0 auto; // 사이드 여백
    min-height: 100%; // footer 하단 고정
    margin-top: 4%;
  }

  footer {
    background-color: #fff;
    height: 70px;
    position: relative; // footer 하단 고정
    /* transform : translateY(0%); // footer 하단 고정 */
    display: block;
    z-index: 1000;
    width: 100%;
    margin-top: 0;
    border-top: 1px solid #d6d3d3;
    // mobile
    @media (max-width: 767px) {
      display: none;
    }
  }
  `;

// children의 각 페이지에 모두 적용하는 CSS
// export const PageWrapper = styled.div``;
