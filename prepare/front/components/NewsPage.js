import React, { useEffect } from 'react';
//CSS
//components

const NewsPage = ({ category }) => {
  // uesEffect 활용, 매 클릭 시 넘겨받는 카테고리의 기사를 요청한다.
  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <>
      <div>{category}</div>
    </>
  );
};

export default NewsPage;
