import React from 'react';
// CSS
import { LoginWrapper } from '../style/LoginStyled';

const UserProfile = () => {
  return (
    <LoginWrapper>
      <div className="myProfileWrapper">
        <div className="myProfileListBtnWrapper">
          <img src="" alt="프로필 이미지" />
          <a>내정보</a>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>프로필</li>
          </ul>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default UserProfile;
