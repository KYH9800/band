// band/1
import React from 'react';
import { useRouter } from 'next/router';
// CSS
import { GlobalStyle, BandWrapper, InfoCard } from '../../style/BandIdStyled';
// components
import BandNav from '../../components/BandNav';
import BandPost from '../../components/BandPost';
import Link from 'next/link';

const Band = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(`3060/band/${id}`);

  return (
    <BandWrapper>
      <GlobalStyle />
      <div className="bandPostmenuVar">
        <nav>
          <BandNav id={id} />
        </nav>

        <div className="mainWrapper">
          <div className="introCard">
            <Link href={`/band/${id}`}>
              <a>
                <InfoCard
                  style={{ width: 220 }}
                  cover={
                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                  }
                >
                  <InfoCard.Meta title="2022 경제 스터디 모임" description="멤버: 30" />
                </InfoCard>
              </a>
            </Link>
          </div>

          <div className="postwrapper">
            <div>
              <BandPost children={children} />
            </div>
          </div>
        </div>
      </div>
    </BandWrapper>
  );
};

export default Band;
