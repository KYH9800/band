// library
import React from 'react';
// CSS
import { LoginWrapper } from '../style/LoginStyled';
// components

// redux

const Login = () => {
  return (
    <LoginWrapper>
      <div className="loginFormWrapper">
        <a>로그인</a>
        <span />
        <a>회원가입</a>
      </div>
    </LoginWrapper>
  );
};

export default Login;
