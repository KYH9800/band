// band/1
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// CSS
import { GlobalStyle, BandWrapper, InfoCard } from '../../style/BandIdStyled';
// components

const BandPost = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(`3060/band/${id}`);

  return (
    <BandWrapper>
      <GlobalStyle />
      <div className="bandPostmenuVar">
        <nav>
          <div className="menuList">
            <a>게시판</a>
            <Link href={`/band/${id}/album`}>
              <a>사진첩</a>
            </Link>
            <a>일정</a>
            <a>첨부</a>
            <a>멤버</a>
          </div>
        </nav>

        <div className="mainWrapper">
          <div className="introCard">
            <InfoCard
              style={{ width: 220 }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            >
              <InfoCard.Meta title="2022 경제 스터디 모임" description="멤버: 30" />
            </InfoCard>
          </div>

          <div className="postwrapper">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </BandWrapper>
  );
};

export default BandPost;
