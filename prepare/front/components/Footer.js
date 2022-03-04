import React from 'react';
// CSS
import { FooterWrapper } from '../style/FooterStyled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <span>"제가 배운 모든 것을 이 프로젝트에 다 녹였습니다."</span>
      </div>
      <span>
        <a>010-9800-5226</a>
      </span>
      <span>
        <a>sksgur3217@gmail.com</a>
      </span>
      <span>
        <a href="https://github.com/ko7452">https://github.com/ko7452</a>
      </span>
      <span>
        <a href="https://github.com/ko7452/band">https://github.com/ko7452/band</a>
      </span>
    </FooterWrapper>
  );
};

export default Footer;
