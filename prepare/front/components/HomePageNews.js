// HomePageNews, pages/index.js
import React from 'react';
// CSS
import { Nav } from '../style/HomePageNewsStyled';
// components

// category: 정치, 경제, 사회, 문화, IT, 과학, 세계
const HomePageNews = () => {
  return (
    <Nav>
      <h2>뉴스</h2>
      <div className="news-category-menu">
        <ul>
          <a>정치</a>
          <a>경제</a>
          <a>사회</a>
          <a>문화</a>
          <a>IT</a>
          <a>과학</a>
          <a>세계</a>
          <a>스포츠</a>
        </ul>
      </div>
    </Nav>
  );
};

export default HomePageNews;
