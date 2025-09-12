import React from 'react';

function HeroGradient() {
  return (
    <div aria-hidden="true">
      <div className="absolute top-0 right-[400px] -z-10 animate-pulse shadow-cyanMediumShadow" />
      <div className="absolute top-0 right-0 -z-10 animate-pulse shadow-orangeMediumShadow" />
      <div className="absolute top-[300px] left-0 -z-10 opacity-50 shadow-cyanMediumShadow" />
      <div className="absolute top-[500px] left-0 -z-10 opacity-50 shadow-orangeMediumShadow" />
    </div>
  );
}

export default HeroGradient;
