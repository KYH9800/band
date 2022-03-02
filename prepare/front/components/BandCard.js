import React from 'react';
// CSS
import { BandCardSt } from '../style/HomeStyled';

const BandCard = () => (
  <>
    <BandCardSt
      cover={
        <img className="img" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      }
    >
      <BandCardSt.Meta title="2022 경제공부" description="멤버수: 10" />
    </BandCardSt>
  </>
);

export default BandCard;
