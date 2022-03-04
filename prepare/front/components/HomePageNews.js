// HomePageNews, pages/index.js
import React, { useState } from 'react';
// CSS
import { Nav } from '../style/HomePageNewsStyled';
// components
import NewsPage from './NewsPage';

const HomePageNews = () => {
  // 카테고리 클릭 시, 카테고리를 props로 넘겨준다.
  // 위의 방법 말고 여기서 요청하고 데이터를 받아와 넘긴다.
  const [category, setCategory] = useState('');

  const onChangeCategory = (word) => () => {
    console.log(word);
    setCategory(word);
  };

  return (
    <Nav>
      <h2>뉴스</h2>
      <div className="news-category-menu">
        <ul>
          <a onClick={onChangeCategory('정치')}>정치</a>
          <a onClick={onChangeCategory('경제')}>경제</a>
          <a onClick={onChangeCategory('사회')}>사회</a>
          <a onClick={onChangeCategory('문화')}>문화</a>
          <a onClick={onChangeCategory('IT')}>IT</a>
          <a onClick={onChangeCategory('과학')}>과학</a>
          <a onClick={onChangeCategory('세계')}>세계</a>
          <a onClick={onChangeCategory('스포츠')}>스포츠</a>
        </ul>
      </div>
      <div>
        <NewsPage category={category} />
        <NewsPage category={category} />
        <NewsPage category={category} />
        <NewsPage category={category} />
        <NewsPage category={category} />
      </div>
      <div className="moreBtnWrapper">
        <a className="moreBtn">...더보기</a>
      </div>
    </Nav>
  );
};

export default HomePageNews;
