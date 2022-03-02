import styled from 'styled-components';
import { Card } from 'antd';

export const HomeWrapper = styled.div`
  // 뉴스 정보
  .newsWrapper {
    border-bottom: 1px solid #ededed;
    padding: 10px 0 15px 0;
  }

  // 가입한 밴드 정보
  .bandListWrapper {
    border-bottom: 1px solid #ededed;
    padding: 10px 0 15px 0;
  }

  // 밴드 만들기
  .makeBand {
    /* text-align: end; */
    /* display: inline; */
    height: auto;
    .ant-card-meta-title {
      text-align: center;
    }
    .anticon svg {
      margin-top: 32%;
      width: 30px;
      height: 30px;
    }
    .ant-card-meta-title {
      user-select: none;
      margin-bottom: 31%;
    }
    .lkoNeZ {
      width: 18%;
    }
    .lkoNeZ:hover {
      background-color: #6060605c;
    }
  }

  // 추천 밴드 목록
  .recommendBandWrapper {
    padding: 35px 0 60px 0;
  }
`;

// 카드 리스트
export const CardWrapper = styled.div`
  .img {
    width: 100%;
    height: 140px;
  }
`;
export const BandCardSt = styled(Card)`
  display: inline-block;
  margin: 1%;
  width: 18%;
  // 카드 설명란 className
  .ant-card-meta-title {
    font-size: 16px;
  }
  .ant-card-body {
    padding: 10px;
    font-size: 13px;
  }
`;
