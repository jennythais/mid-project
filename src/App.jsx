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

// App.jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/course" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CoursesDetailPage />} />
          <Route path="/course-order" element={<CoursesOrderPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />

          <Route path="/profile" element={<StudentProfilePage />}>
            <Route index element={<MyInfo />} />
            <Route path="/profile/my-course" element={<MyCourse />} />
            <Route path="/profile/my-payment" element={<MyPayment />} />
          </Route>

          <Route path="/payment-method" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
