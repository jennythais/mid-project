import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { COURSE_ITEM_TYPE } from "../../constants/general";
import PATHS from "../../constants/paths";
import { ROLE } from "../../constants/role";
import { formatCurrency, formatDate } from "../../utils/format";
import Button from "../Button";

const CourseItem = ({
  type = COURSE_ITEM_TYPE.normal,
  slug,
  image,
  name,
  teams,
  startDate,
  tags,
  price
}) => {
  // 
  const detailPath = PATHS.COURSE.INDEX + `/${slug}`;
  const orderPath = `/course-order` + `/${slug}`;
  const teacherInfo = teams?.find((item) => item.tags.includes(ROLE.teacher));

  if (type === COURSE_ITEM_TYPE.normal) {
    return (
      <div className="courses__list-item">
        <div className="img">
          <Link to={detailPath}>
            <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
            {tags?.length > 0 && (
              <span className="course__img-badge badge">
                {tags.join(" | ")}
              </span>
            )}
          </Link>
        </div>
        <div className="content">
          <p className="label">Front-End</p>
          <h3 className="title --t3">
            <Link to={detailPath}>{name || ""}</Link>
          </h3>
          <div className="content__info">
            {teacherInfo && (
              <div className="user">
                <div className="user__img">
                  <img src={teacherInfo.image} alt="Avatar teacher" />
                </div>
                <p className="user__name">{teacherInfo.name}</p>
              </div>
            )}
            <div className="price">
              <strong>{formatCurrency(price)}đ</strong>
            </div>
          </div>
          {/* <div className="content__action">
            <Link to={orderPath}>Đăng ký ngay</Link>
            <Link to={detailPath} className="btn btn--default">
              <img src="/img/icon-paper.svg" alt="icon paper" />
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
  return (
    <div className="coursecoming__item">
      <div className="coursecoming__item-img">
        <Link to={detailPath}>
          <img src={image} alt="Khóa học sắp ra mắt CFD" />
        </Link>
      </div>
      <div className="coursecoming__item-content">
        <p className="category label">Front-end</p>
        <h2 className="title --t2">
          <Link to={detailPath}>{name || ""}</Link>
        </h2>
        {teacherInfo?.id && (
          <div className="user">
            <div className="user__img">
              <img src={teacherInfo.image} alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacherInfo.name}</p>
          </div>
        )}

        {startDate && (
          <div className="info">
            <div className="labeltext">
              <span className="label --blue">Ngày khai giảng</span>
              <p className="title --t2">{formatDate(startDate)}</p>
            </div>
            {tags?.length > 0 && (
              <div className="labeltext">
                <span className="label --blue">Hình thức học</span>
                <p className="title --t2">{tags.join(" | ")}</p>
              </div>
            )}
          </div>
        )}

        <div className="btnwrap">
          <Button link={orderPath}>Đăng Ký Học</Button>
          <Button link={detailPath} variant="border">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
