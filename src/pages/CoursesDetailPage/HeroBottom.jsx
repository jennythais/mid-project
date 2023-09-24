import React from "react";

const HeroBottom = ({avtTeacher, nameTeacher, price}) => {
  return (
    <div className="hero__bottom">
      <div className="container-fluid">
        <a href className="user">
          <div className="user__img">
            <img src={avtTeacher} alt="Avatar teacher" />
          </div>
          <p className="user__name --white">{nameTeacher}</p>
        </a>
        <div className="pricebox">
          <p className="title --t3 --white">{price}</p>
        </div>
        <a
          href="https://www.facebook.com/sharer/sharer.php?sdk=joey&u=https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-master-30&display=popup&ref=plugin&src=share_button"
          onclick="return !window.open(this.href, 'Facebook', 'width=640,height=580')"
          className="sharebox s--white"
        >
          Chia sẻ
          <i>
            <img
              src="https://cfdcircle.vn/img/iconshare.svg"
              alt="CFD Circle"
            />
          </i>
        </a>
      </div>
    </div>
  );
};

export default HeroBottom;
