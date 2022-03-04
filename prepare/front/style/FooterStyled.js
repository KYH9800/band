import styled from 'styled-components';

export const FooterWrapper = styled.div`
  max-width: 1034px;
  margin: 0 auto;
  padding: 1% 0% 1.5% 1%;
  text-align: center;
  color: #432;
  div {
    text-align: left;
    padding: 0% 11%;
  }
  span a {
    color: #666;
    padding: 0% 3%;
    user-select: none;
    :hover {
      color: black;
      text-decoration: underline;
    }
    :active {
      color: #666;
    }
  }
`;
