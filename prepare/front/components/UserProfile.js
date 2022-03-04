import React from 'react';
// CSS
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import { LoginWrapper } from '../style/LoginStyled';

const UserProfile = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>내 정보</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>내가 쓴 글</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">로그아웃</Menu.Item>
    </Menu>
  );

  return (
    <LoginWrapper>
      <div className="myProfileWrapper">
        <div className="myProfileListBtnWrapper">
          <a>
            <Avatar size={35} icon={<MessageOutlined className="msgIcon" />} />
          </a>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              <Avatar
                size={35}
                icon={true ? <img src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} /> : <UserOutlined />}
              />
            </a>
          </Dropdown>
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
