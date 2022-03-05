import styled, { createGlobalStyle } from 'styled-components';
import { Card } from 'antd';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  header {
    display: block;
    z-index: 1;
    background-color: #ffb92a;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  footer {
    display: none;
  }
`;

export const BandWrapper = styled.div`
  .bandPostmenuVar {
    min-height: calc(100% - 104px);
    margin-top: 79px;
    padding-top: 0;
  }
  nav {
    /* min-width: 1034px; */
    z-index: 2;
    position: fixed;
    width: 100%;
    top: 45px;
    background: #fff;
    text-align: center;
  }
  .menuList {
    z-index: 1;
    border-top: 1px solid #fdb00d;
    text-align: center;
    display: block;
    background-color: #fdb00d !important;
    position: fixed;
    left: 0;
    right: 0;
    padding: 4px 0px 4px 0px;
    a {
      user-select: none;
      color: white;
      padding: 0% 1% 0% 1%;
      font-size: 15px;
    }
    a:hover {
      color: #8d8d8d;
    }
    a:active {
      color: white;
    }
  }

  // band/1, main tag
  .mainWrapper {
    display: flex;
    .introCard {
      position: fixed;
    }
    .postwrapper {
      margin: auto;
    }
  }

  // mobile
  @media (max-width: 767px) {
    .mainWrapper {
      display: block;
      .introCard {
        position: inherit;
      }
      .postwrapper {
        margin-left: 0%;
      }
    }
  }
`;

// band/[id], Card info
export const InfoCard = styled(Card)`
  border: 1px solid #eeeeee;
  margin-top: 3%;
  img {
    border: 1px solid #eeeeee;
  }
`;
