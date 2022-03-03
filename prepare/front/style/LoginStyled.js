import styled from 'styled-components';

export const LoginWrapper = styled.div`
  // loginForm
  .loginFormWrapper {
    a {
      color: black;
      padding: 2.1% 2% 2.1% 2%;
      margin: 0;
    }
    a:hover {
      background-color: #d3d3d3;
    }
    a:active {
      background-color: #ededed;
    }
    span {
      border-left: 1px solid #b1abab;
    }
  }

  // userProfile
  .myProfileWrapper {
    a {
      color: black;
      padding: 2.1% 2% 2.1% 2%;
      margin: 0;
    }
    a:hover {
      background-color: #d3d3d3;
    }
    a:active {
      background-color: #ededed;
    }
    ul {
      list-style: none;
      display: none;
    }
    li {
      // todo
    }

    // 프로필 리스트 햄버거 버튼
    .myProfileListBtnWrapper {
      // 메세지 버튼
      span {
        margin: 0px 3px 0px 3px;
        font-size: 20px;
      }
    }
  }
`;
