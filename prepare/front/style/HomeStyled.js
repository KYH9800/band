import styled from 'styled-components';
import { Card } from 'antd';

export const HomeWrapper = styled.div`
  // 뉴스 정보
  .newsWrapper {
    border-bottom: 1px solid #ededed;
    padding: 1% 0 3% 0;
    @media (max-width: 767px) {
      .moreBtnWrapper {
        .moreBtn {
          font-size: 12px;
        }
      }
    }
  }

  // 가입한 밴드 정보
  .bandListWrapper {
    border-bottom: 1px solid #ededed;
    padding: 10px 0 15px 0;
    h1 {
      font-size: 21px;
      margin: 0% 1% 3% 1%;
    }
    .moreBtnWrapper {
      margin-top: 3%;
      text-align: end;
      .moreBtn {
        color: #505050;
        padding-right: 2%;
      }
      .moreBtn:hover {
        text-decoration: underline;
      }
    }
    //* mobile
    @media (max-width: 767px) {
      .ant-card-meta-title {
        font-size: 10px;
      }
      h1 {
        font-size: 17px;
      }
      .moreBtnWrapper {
        margin-top: 3%;
        text-align: end;
        .moreBtn {
          font-size: 12px;
          color: #505050;
          padding-right: 2%;
        }
        .moreBtn:hover {
          text-decoration: underline;
        }
      }
    }
  }

  // 밴드 만들기
  .makeBand {
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
    //* mobile
    @media (max-width: 767px) {
      .ant-card-meta-title {
        font-size: 10px;
      }
    }
  }

  // 추천 밴드 목록
  .recommendBandWrapper {
    padding: 35px 0 60px 0;
    h1 {
      font-size: 21px;
      margin: 0% 1% 3% 1%;
    }
    .moreBtnWrapper {
      margin-top: 3%;
      text-align: end;
      .moreBtn {
        color: #505050;
        padding-right: 2%;
      }
      .moreBtn:hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 767px) {
      .ant-card-meta-title {
        font-size: 10px;
      }
      .moreBtn {
        font-size: 12px;
      }
      h1 {
        font-size: 17px;
      }
    }
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
  @media (max-width: 767px) {
    width: 23%;
    .ant-card-meta-description {
      font-size: 10px;
    }
  }
`;
