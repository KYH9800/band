// library
import React from 'react';
import Link from 'next/link';
// CSS
import { HomeWrapper, BandCardSt } from '../style/HomeStyled';
import { PlusCircleOutlined } from '@ant-design/icons';
// components
import BandCard from '../components/BandCard';
import HomePageNews from '../components/HomePageNews';

const Home = () => {
  // todo main page
  // 1. 각 카테고리 별 뉴스 정보를 가져온다.
  // 2. 동일한 크기의 카드 몰록으로 방 만들기, 가입한 밴드의 데이터를 가져온다.
  // 3. 랜덤으로 추천 밴드의 정보를 가져온다.

  return (
    <HomeWrapper>
      <div className="newsWrapper">
        <HomePageNews />
      </div>

      <div className="bandListWrapper">
        <h1>내 목록</h1>
        <Link href="/band-create">
          <a className="makeBand">
            <BandCardSt cover={<PlusCircleOutlined />}>
              <BandCardSt.Meta title="밴드 만들기" />
            </BandCardSt>
          </a>
        </Link>
        <Link href="/band/1223525325">
          <a>
            <BandCard />
          </a>
        </Link>
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
        <BandCard />
      </div>

      <div className="recommendBandWrapper">추천밴드 / 이런 모임은 어떤가요?</div>
    </HomeWrapper>
  );
};

export default Home;
