import React from 'react';
// CSS
import { Avatar, Image } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import { LoginWrapper } from '../style/LoginStyled';

const UserProfile = () => {
  return (
    <LoginWrapper>
      <div className="myProfileWrapper">
        <div className="myProfileListBtnWrapper">
          <Avatar size={35} icon={<MessageOutlined className="msgIcon" />} />
          <Avatar
            size={35}
            icon={
              true ? (
                <Image
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    width: 32,
                  }}
                />
              ) : (
                <UserOutlined />
              )
            }
          />
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
