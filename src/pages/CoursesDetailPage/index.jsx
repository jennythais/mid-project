import React from "react";
import ContentDetailSection from "./ContentDetailSection";
import CoursesSection from "./CoursesSection";
import FaqSection from "./FaqSection";
import FeaturedSection from "./FeaturedSection";
import HeaderTop from "./HeaderTop";
import HeroSection from "./HeroSection";
import useMutation from "../../hooks/useMutation";
import { courseService } from "../../services/courseService";
import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { useEffect } from "react";
import { questionService } from "../../services/questionService";
import { ROLE } from "../../constants/role";
import { formatCurrency, formatDate } from "../../utils/format";
import useDebounce from "../../hooks/useDebounce";
import PageLoading from "../../components/PageLoading/index";
import ComponentLoading from '../../components/ComponentLoading/index';

const CoursesDetailPage = () => {
  const { courseSlug } = useParams();

  const { data: questionData, loading: questionLoading } = useQuery(
    questionService.getQuestion
  );
  const { data: courseData, loading: courseLoading } = useQuery(
    courseService.getCourse
  );
  //`/${courseSlug}`
  const {
    data: courseDetailData,
    loading: courseDetailLoading,
    execute,
  } = useMutation(courseService.getCourseSlug);
  useEffect(() => {
    if (courseSlug) execute(courseSlug || "", {});
  }, [courseSlug]);

  //Modify
  const questions = questionData?.questions || [];
  const courses = courseData?.courses || [];
  const orderLink = `/course-order/` + courseSlug;

  const { teams, startDate, price } = courseDetailData || {};
  const modifiedProps = {
    ...courseDetailData,
    teacherInfo: teams?.find((item) => item.tags.includes(ROLE.teacher)),
    startDate: formatDate(startDate || ""),
    price: formatCurrency(price),
    orderLink,
  };
  const apiLoading = courseDetailLoading || questionLoading || courseLoading;
  const pageLoading = useDebounce(apiLoading, 500);
  if (pageLoading) {
    return <PageLoading/>;
  }
  return (
    <>
      <HeaderTop {...modifiedProps} />
      <main className="mainwrapper coursedetailpage">
        <HeroSection {...modifiedProps} />
        <ContentDetailSection {...modifiedProps} />
        <FeaturedSection {...modifiedProps} />
        <FaqSection questions={questions} loading={questionLoading} />
        <CoursesSection course={courses} loading={courseLoading} />
      </main>
    </>
  );
};

export default CoursesDetailPage;
