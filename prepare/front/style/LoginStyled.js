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
    span {
      border-left: 1px solid #b1abab;
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
      // 프로필 이미지 설정하기
      img {
        border: 1px solid #d3d3d3;
        width: 35px;
        height: 35px;
      }
    }
  }
`;
