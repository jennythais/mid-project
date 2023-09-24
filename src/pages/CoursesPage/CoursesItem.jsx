import React from "react";

const CoursesItem = ({
  imageSrc,
  coursesTitle,
  coursesLink,
  label,
  teacherName,
  teacherImg,
  price,
}) => {
  return (
    <div className="courses__list-item">
      <div className="img">
        <a href={coursesLink}>
          <img
            src={imageSrc}
            alt="Khóa học CFD"
            className="course__thumbnail"
          />
          <span className="course__img-badge badge">Offline | Online</span>
        </a>
      </div>
      <div className="content">
        <p className="label">{label}</p>
        <h3 className="title --t3">
          <a href={coursesLink}>{coursesTitle}</a>
        </h3>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src={teacherImg} alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacherName}</p>
          </div>
          <div className="price">
            <strong>{price}</strong>
          </div>
        </div>
        <div className="content__action">
          <a href="course-order.html" className="btn btn--primary">
            Đăng ký ngay
          </a>
          <a href={coursesLink} className="btn btn--default">
            <img src="img/icon-paper.svg" alt="icon paper" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;
