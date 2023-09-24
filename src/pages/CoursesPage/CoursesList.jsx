import React from "react";
import CoursesItem from "./CoursesItem";

const CoursesList = () => {
  return (
    <div className="courses__list">
      <CoursesItem
        imageSrc="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
        coursesTitle="Frontend Newbie"
        coursesLink="course-detail.html"
        label="Front-End"
        teacherName="Trần Nghĩa"
        teacherImage="/public/img/avatar_nghia.jpg"
        price="4.500.000đ"
      />
      <CoursesItem
        imageSrc="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
        courseTitle="Web Responsive"
        courseLink="course-detail.html"
        label="Front-End"
        teacherName="Trần Nghĩa"
        teacherImage="/public/img/avatar_nghia.jpg"
        price="4.900.000đ"
      />
      <CoursesItem
        imageSrc="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
        courseTitle="Frontend Master"
        courseLink="course-detail.html"
        label="Front-End"
        teacherName="Trần Nghĩa"
        teacherImage="/public/img/avatar_nghia.jpg"
        price="14.700.000đ"
      />
      <CoursesItem
        imageSrc="https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg"
        courseTitle="ReactJS Master"
        courseLink="course-detail.html"
        label="Front-End"
        teacherName="Trần Nghĩa"
        teacherImage="/public/img/avatar_nghia.jpg"
        price="6.000.000đ"
      />
    </div>
  );
};

export default CoursesList;
