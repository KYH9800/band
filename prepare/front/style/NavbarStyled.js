import styled from 'styled-components';

export const Nav = styled.nav`
  /* 데스크탑 */
  height: 45px;
  align-items: center;
  -webkit-box-shadow: 0 1.4px 1.3px 0 rgb(62 73 89 / 7%);
  box-shadow: 0 1.4px 1.3px 0 rgb(62 73 89 / 7%);
  position: relative;
  max-width: 1034px;
  margin: 0 auto;
  .menuWrapper {
    display: inline-flex;
    margin-top: 5px;
    float: left;
    width: 100%;
    align-items: center;
    @media (max-width: 1023px) {
      padding: 0px 8px 0px 8px;
    }
  }
  .inputWrapper {
    margin-left: 7%;
    display: flex;
    width: 100%;
  }
  .loginWrapper {
    display: inline;
    text-align: end;
    width: 100%;
  }

  .homeBtn {
    color: black;
    user-select: none; // 드래그 방지
    border: 2px solid black;
    font-size: 20px;
    border-radius: 15px;
    font-weight: 600;
    padding: 0px 4px 0px 4px;
    margin: 0%;
  }

  input {
    height: 25px;
    border: 1px solid #bdbdbd;
    border-radius: 10px 0px 0px 10px;
    padding: 0px 0px 0px 12px;
    font-size: 13px;
  }

  button {
    width: 33px;
    height: 25px;
    border: 1px solid #bdbdbd;
    border-radius: 0px 10px 10px 1px;
    background-color: white;
  }
  button:hover {
    background-color: #d3d3d3;
  }
  button:active {
    background-color: white;
  }

  /* 타블렛 */
  @media (max-width: 1023px) {
  }

  /* 모바일 */
  @media (max-width: 767px) {
  }
`;
