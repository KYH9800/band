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
    @media (max-width: 767px) {
      span {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 17.5px;
      }
    }
  }

  // userProfile
  .myProfileWrapper {
    ul {
      list-style: none;
      display: none;
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

/*
.ant-dropdown-menu {
  text-align: left;
  padding: 5px 0px;
  width: 110px;
  margin-left: 7px;
}
*/
