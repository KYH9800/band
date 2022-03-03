import styled from 'styled-components';

export const Nav = styled.nav`
  h2 {
    margin: 0% 1% 0% 1%;
  }
  // category list var
  .news-category-menu {
    text-align: center;
    ul {
      /* border: 1px solid black; */
      /* border-radius: 5px; */
      padding: 0;
      margin: 0;
      list-style: none;
      display: inline-flex;
    }
    a {
      color: black;
      user-select: none;
      padding: 5px 10px 5px 10px;
      font-size: 16px;
    }
    a:hover {
      color: gray;
    }
    a:active {
      color: black;
    }
  }
`;
