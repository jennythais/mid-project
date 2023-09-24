import React from "react";
import ContentDetail from "./ContentDetail";
import Course from "./Course";
import Faq from "./Faq";
import Featured from "./Featured";
import HeroDetail from "./HeroDetail";

const CoursesDetailPage = () => {
  return (
    <main className="mainwrapper coursedetailpage">
      <HeroDetail/>
      <ContentDetail/>
      <Featured/>
      <Faq/>
      <Course/>
    </main>
  );
};

export default CoursesDetailPage;
