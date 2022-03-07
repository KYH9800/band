import React from 'react';
import Link from 'next/link';

const BandNav = ({ id, children }) => {
  return (
    <>
      <div className="menuList">
        <Link href="/bandPost" as={`/band/${id}`}>
          <a>게시판</a>
        </Link>
        <Link href="/album" as={`/band/${id}/album`}>
          <a>사진첩</a>
        </Link>
        <Link href="/calendar" as={`/band/${id}/calendar`}>
          <a>일정</a>
        </Link>
        <Link href="/attachment" as={`/band/${id}/attachment`}>
          <a>첨부</a>
        </Link>
        <Link href="/member" as={`/band/${id}/member`}>
          <a>멤버</a>
        </Link>
      </div>
      {/* <div>{children}</div> */}
    </>
  );
};

export default BandNav;
