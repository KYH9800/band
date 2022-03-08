import React, { useEffect } from 'react';
//CSS
import { NewsInfo } from '../style/HomePageNewsStyled';
//components

const NewsPage = ({ category }) => {
  // uesEffect 활용, 매 클릭 시 넘겨받는 카테고리의 기사를 요청한다.
  // map 활용 갯수는 5개...
  useEffect(() => {
    console.log('category', category);
  }, [category]);

  return (
    <>
      <NewsInfo>
        <div className="neswInfo">
          {/* <div>{category ? category : '전체'}</div> */}
          <a id="title">[{category}] &quot;당신은 기회를 잡을 준비가 되어 있는가?&quot; 김미경·김상균 교...</a>
          <p>
            속화시킨 혁명 속에서 무서운 속도로 변화 속도를 놀랍게 따라잡았다. 그리고 누구보다 먼저 새로운...
            로보틱스(학사), 산업공학(석사), 인지과학(박사), 교육공학(교환교수 시절)을 공부했다. 학부 3학년...
          </p>
        </div>
        <div className="dateInfo">2022.03.04 11:41</div>
      </NewsInfo>
    </>
  );
};

export default NewsPage;
