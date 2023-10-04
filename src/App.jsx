import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CoursesPage from "./pages/CoursesPage";
import CoursesDetailPage from "./pages/CoursesDetailPage";
import HomePage from "./pages/HomePage";
import CoursesOrderPage from "./pages/CoursesOrderPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import PaymentPage from "./pages/PaymentPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import Page404 from "./pages/Page404";
import MyInfo from "./pages/StudentProfilePage/MyInfo";
import MyCourse from "./pages/StudentProfilePage/MyCourse";
import MyPayment from "./pages/StudentProfilePage/MyPayment";
import PATHS from "./constants/paths";
import PrivateRoute from "./components/PrivateRoute";

// App.jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.MAIN} element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path={PATHS.COURSE.INDEX} element={<CoursesPage />} />
          <Route path={PATHS.COURSE.DETAIL} element={<CoursesDetailPage />} />
          <Route path={PATHS.COURSE.ORDER} element={<CoursesOrderPage />} />

          {/* Private route */}
          <Route element={<PrivateRoute redirectPath={PATHS.MAIN} />}>
            <Route path={PATHS.COURSE.ORDER} element={<CoursesOrderPage />} />
            <Route path={PATHS.PROFILE.INDEX} element={<StudentProfilePage />}>
              <Route index element={<MyInfo />} />
              <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
              <Route path={PATHS.PROFILE.MY_PAYMENT} element={<MyPayment />} />
            </Route>
          </Route>

          <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
          <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailPage />} />

          <Route path={PATHS.PAYMENT} element={<PaymentPage />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
