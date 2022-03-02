import React from 'react';
// CSS
import { HomeWrapper } from '../style/HomeStyled';

const Home = () => {
  // todo main page
  // 1. 각 카테고리 별 뉴스 정보를 가져온다.
  // 2. 동일한 크기의 카드 몰록으로 방 만들기, 가입한 밴드의 데이터를 가져온다.
  // 3. 랜덤으로 추천 밴드의 정보를 가져온다.

  return (
    <HomeWrapper>
      <div className="newsWrapper">뉴스 정보/category</div>
      <div className="bandListWrapper">BAND Card List</div>
      <div className="recommendBandWrapper">추천밴드 / 이런 모임은 어떤가요?</div>
    </HomeWrapper>
  );
};

export default Home;
