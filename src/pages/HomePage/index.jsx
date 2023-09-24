import React from 'react'
import CallRegisterSection from './CallRegisterSection';
import CourseComingSection from './CourseComingSection';
import CoursesSection from './CoursesSection';
import FaqSection from './FaqSection';
import FeaturedSection from './FeaturedSection';
import GallerySection from './GallerySection';
import HeroSection from './HeroSection';
import TeacherSection from './TeacherSection';
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  
  return (
    <main className="mainwrapper">
      <HeroSection />
      <CourseComingSection />
      <CoursesSection />
      <TeacherSection />
      <FeaturedSection />
      <TestimonialSection />
      <FaqSection />
      <GallerySection />
      <CallRegisterSection />
    </main>
  );
};

export default HomePage

