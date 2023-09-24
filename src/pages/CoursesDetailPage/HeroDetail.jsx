import React from 'react'
import HeroBackground from './HeroBackground';
import HeroBottom from './HeroBottom';
import HeroContent from './HeroContent';

const HeroDetail = () => {
  return (
    <section className="hero herodetail">
      <HeroContent category="frontend" title="Frontend Master" />
      <HeroBottom
        avtTeacher="https://cfdcircle.vn/files/avatars/480x480/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg"
        nameTeacher="Trần Nghĩa"
        price="14.700.000 VND"
      />
      <HeroBackground
        backgroundImage="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
        altImage="CFD Circle"
      />
    </section>
  );
}

export default HeroDetail