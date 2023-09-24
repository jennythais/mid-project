import React from "react";
import InfoItem from "./InfoItem";

const HeroContent = ({ category, title }) => {
  return (
    <div className="hero__content">
      <div className="container">
        <h3 className="category label --white">{category}</h3>
        <h2 className="title --white">{title}</h2>
        <div className="infor">
          <InfoItem
            classNameItem="infor__item"
            isWhite
            labelItem="Khai giảng"
            titleItem="04/05/2023"
          />
          <InfoItem
            classNameItem="infor__item"
            isWhite
            labelItem="Thời lượng"
            titleItem="45 buổi"
          />
          <InfoItem
            classNameItem="infor__item"
            isWhite
            labelItem="Hình thức"
            titleItem="Offline | Online"
          />
        </div>
        {/* Chưa đăng ký */}
        <a href="course-order.html" className="btn btn--primary btn-regcourse">
          Đăng ký
        </a>
        {/* Đã đăng ký */}
        {/* <div class="btn btn--primary btn-regcourse --disable">Đã đăng ký</div> */}
      </div>
    </div>
  );
};

export default HeroContent;
