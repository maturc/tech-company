import React from 'react';
import banner from '../../assets/banner.jpg'

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" className="banner__image" />
    </div>
  );
}

export default Banner;
