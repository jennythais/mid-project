import React from "react";
import CoursesList from "./CoursesList";

const CoursesPage = () => {
  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <CoursesList />
      </div>
    </main>
  );
};

export default CoursesPage;
