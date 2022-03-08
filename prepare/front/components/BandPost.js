import React from 'react';
// components
import BandPostCard from './BandPostCard';

const BandPost = ({ children }) => {
  return (
    <div>
      {children ? (
        children
      ) : (
        <>
          <div>
            <BandPostCard />
          </div>
        </>
      )}
    </div>
  );
};

export default BandPost;
