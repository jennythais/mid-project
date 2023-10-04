import React from "react";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseService";
import CallRegisterSection from "./CallRegisterSection";
import CourseComingSection from "./CourseComingSection";
import CoursesSection from "./CoursesSection";
import FaqSection from "./FaqSection";
import FeaturedSection from "./FeaturedSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import TeacherSection from "./TeacherSection";
import TestimonialSection from "./TestimonialSection";
import { teamService } from "../../services/teamService";
import { questionService } from "../../services/questionService";
import { galleryService } from "../../services/galleryService";

const HomePage = () => {
  const { data: coursesData, loading: courseLoading } = useQuery(
    courseService.getCourse
  );

  const courses = coursesData?.courses || [];
  const comingCourses =
    coursesData?.courses?.filter(
      (course) => course.startDate && new Date(course.startDate) > new Date()
    ) || [];
  const { data: teamData, loading: teamLoading } = useQuery(
    teamService.getTeam
  );
  const teams = teamData?.teams || [];

  const { data: questionData, loading: questionLoading } = useQuery(
    questionService.getQuestion
  );
  const questions = questionData?.questions || [];
  const { data: galleryData, loading: galleryLoading } = useQuery(
    galleryService.getGallery
  );
  const galleries = galleryData?.galleries?.[0]?.images || [];
  return (
    <main className="mainwrapper">
      <HeroSection />
      <CourseComingSection courses={comingCourses} loading={courseLoading} />
      <CoursesSection courses={courses} loading={courseLoading} />
      <TeacherSection teachers={teams} loading={teamLoading} />
      <FeaturedSection />
      <TestimonialSection />
      <FaqSection questions={questions} loading={questionLoading} />
      <GallerySection galleries={galleries} loading={galleryLoading} />
      <CallRegisterSection />
    </main>
  );
};

export default HomePage;
