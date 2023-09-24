import React from 'react'

const HeroBackground = ({backgroundImage, altImage}) => {
  return (
    <div className="hero__background">
      <img
        className="hero__background-img"
        src={backgroundImage}
        alt={altImage}
      />
    </div>
  );
}

export default HeroBackground