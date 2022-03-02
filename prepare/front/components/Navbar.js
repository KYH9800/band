// library
import React from 'react';
import Link from 'next/link';
// CSS
import { SearchOutlined } from '@ant-design/icons';
import { Nav } from '../style/NavbarStyled';
// components
import Login from './Login';
import UserProfile from './UserProfile';
// redux
// import {} from '../'

// 검색, onSubmit
const Navbar = () => {
  const onSearch = (e) => {
    e.preventDefault();
    console.log('onSearch');
  };

  return (
    <Nav>
      <div className="wrapper">
        <div className="menuWrapper">
          <Link href="/">
            <a className="homeBtn">BAND</a>
          </Link>
          <form onSubmit={onSearch}>
            <div className="inputWrapper">
              <input type="text" role="search" placeholder="밴드, 페이지, 게시글 검색" />
              <button type="submit">
                <SearchOutlined />
              </button>
            </div>
          </form>
          <div className="loginWrapper">{false ? <Login /> : <UserProfile />}</div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
