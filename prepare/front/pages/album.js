import React from 'react';
import { useRouter } from 'next/router';
// components
import Band from './band/[id]';

const BandPhotos = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <Band>
      <div>BandPhotos</div>
    </Band>
  );
};

export default BandPhotos;
