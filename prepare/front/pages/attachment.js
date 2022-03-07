import React from 'react';
// components
import Band from './band/[id]';

// 첨부
const Attachment = ({ location }) => {
  console.log('#############', location);
  return (
    <Band>
      <div>attachment</div>
    </Band>
  );
};

export default Attachment;
