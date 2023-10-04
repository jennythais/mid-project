import { Empty } from "antd";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import CourseItem from "../../components/CourseItem/index";
import { COURSE_ITEM_TYPE } from "../../constants/general";

const MyCourse = () => {
  const { courseInfo } = useAuthContext();
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {!!!courseInfo.length && (
          <Empty description="Not found data" style={{ margin: "0 auto" }} />
        )}
        {!!courseInfo.length &&
          courseInfo.map((item, index) => (
            <CourseItem
              key={item.id || new Date().getTime() + index}
              type={COURSE_ITEM_TYPE.normal}
              {...item?.course}
            
            />
          ))}

      </div>
    </div>
  );
};

export default MyCourse;
