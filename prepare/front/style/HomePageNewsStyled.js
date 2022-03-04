import styled from 'styled-components';

export const Nav = styled.nav`
  h2 {
    margin: 0% 1% 0% 1%;
  }
  // category list var
  .news-category-menu {
    text-align: center;
    margin-bottom: 3%;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: inline-flex;
    }
    a {
      color: black;
      user-select: none;
      padding: 5px 10px 5px 10px;
      font-size: 16px;
      font-weight: 600;
    }
    a:hover {
      color: gray;
      text-decoration: underline;
    }
    a:active {
      color: black;
    }
    @media (max-width: 767px) {
      margin-bottom: 2%;
      ul a {
        font-size: 14px;
      }
    }
  }

  // 더보기 버튼
  .moreBtnWrapper {
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
    h2 {
      font-size: 17px;
      margin: 6% 1% 3% 1%;
    }
    // category list var
    .news-category-menu {
      a {
        font-size: 15px;
      }
    }
  }
`;

// NewsPage
export const NewsInfo = styled.div`
  display: inline-flex;
  margin-bottom: 2%;
  .neswInfo {
    margin-left: 1%;
    a {
      color: black;
      font-size: 17px;
    }
    a:hover {
      text-decoration: underline;
    }
    p {
      font-size: 12px;
      color: #777;
    }
  }
  // 기사 날짜
  .dateInfo {
    font-size: 12px;
    color: #777;
    text-align: center;
    padding: 0% 0% 0% 0%;
    margin: 2% 0% 2% 3%;
    width: 17%;
    border-left: 1px solid #cdcdcd;
  }

  // mobile
  @media (max-width: 767px) {
    display: block;
    margin-top: 2%;
    margin-bottom: 3%;
    .neswInfo {
      a {
        font-size: 13px;
      }
      p {
        font-size: 10px;
      }
    }
    // 기사 날짜
    .dateInfo {
      border-left: none;
      text-align: left;
      width: 100%;
      margin-left: 1%;
      font-size: 10px;
    }
  }
`;
