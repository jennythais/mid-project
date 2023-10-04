import { Empty, Skeleton } from "antd";
import React from "react";
import CourseItem from "../../components/CourseItem";
import useDebounce from "../../hooks/useDebounce";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseService";

const CoursesPage = () => {
  const { data: courseData, loading: courseLoading } = useQuery(
    courseService.getCourse
  );
  const courses = courseData?.courses || [];
  const loading = useDebounce(courseLoading, 2000);
  
  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <div className="courses__list">
          {!loading && courses?.length === 0 && (
            <Empty
              description="Not found courses"
              style={{ margin: "0 auto" }}
            />
          )}
          {loading &&
            Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="courses__list-item"
                  style={{ height: "50vh" }}
                >
                  <Skeleton active />
                  <br />
                  <Skeleton active />
                </div>
              ))}
          {courses?.length > 0 &&
            !loading &&
            courses.map((courses, index) => {
              return <CourseItem key={courses?.id || index} {...courses} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
