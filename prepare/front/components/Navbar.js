// library
import React from 'react';
// CSS
import { Header } from '../style/NavbarStyled';
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
    <Header>
      <div>
        <h1>BAND</h1>
        <form onSubmit={onSearch}>
          <div>
            <label>검색</label>
            <input type="text" role="search" placeholder="밴드, 페이지, 게시글 검색" />
            <button type="submit">검색</button>
          </div>
        </form>
        {true ? <Login /> : <UserProfile />}
      </div>
    </Header>
  );
};

export default Navbar;
