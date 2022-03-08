import React from 'react';
// components

const BandPost = ({ children }) => {
  return (
    <>
      {/* <div>BandPost</div> */}
      {children ? (
        children
      ) : (
        <>
          <div>BandPost</div>
        </>
      )}
    </>
  );
};

export default BandPost;
