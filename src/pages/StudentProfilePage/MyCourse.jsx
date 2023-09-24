import React from "react";

const MyCourse = () => {
  return (
    <div classname="tab__content-item" style={{ display: "block" }}>
      <div classname="courses__list">
        <div classname="courses__list-item">
          <div classname="img">
            <a href="course-detail.html">
              <img
                src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                alt="Khóa học CFD"
                classname="course__thumbnail"
              />
              <span classname="course__img-badge badge">Offline | Online</span>
            </a>
          </div>
          <div classname="content">
            <p classname="label">Front-End</p>
            <h3 classname="title --t3">
              <a href="course-detail.html">Frontend Newbie</a>
            </h3>
            <div classname="content__info">
              <div classname="user">
                <div classname="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p classname="user__name">Trần Nghĩa</p>
              </div>
              <div classname="price">
                <strong>4.500.000đ</strong>
              </div>
            </div>
            <div classname="content__action">
              <a href="course-order.html" classname="btn btn--primary">
                Đăng ký ngay
              </a>
              <a href="course-detail.html" classname="btn btn--default">
                <img src="img/icon-paper.svg" alt="icon paper" />
              </a>
            </div>
          </div>
        </div>
        <div classname="courses__list-item">
          <div classname="img">
            <a href="course-detail.html">
              <img
                src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
                alt="Khóa học CFD"
                classname="course__thumbnail"
              />
              <span classname="course__img-badge badge">Offline | Online</span>
            </a>
          </div>
          <div classname="content">
            <p classname="label">Front-End</p>
            <h3 classname="title --t3">
              <a href="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg">
                Web Responsive
              </a>
            </h3>
            <div classname="content__info">
              <div classname="user">
                <div classname="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p classname="user__name">Trần Nghĩa</p>
              </div>
              <div classname="price">
                <strong>4.900.000đ</strong>
              </div>
            </div>
            <div classname="content__action">
              <a href="course-order.html" classname="btn btn--primary">
                Đăng ký ngay
              </a>
              <a href="course-detail.html" classname="btn btn--default">
                <img src="img/icon-paper.svg" alt="icon paper" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
