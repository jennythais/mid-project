import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingModal from "../../components/LoadingModal";
import Nav from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import PageLoading from "../../components/PageLoading";

const MainLayout = () => {
  return (
    <>
      <PageLoading />
      <Header />
      <Nav />
      <Overlay />
      {/* Main */}
      <Outlet/>

      <Footer />
      <LoadingModal />
    </>
  );
};

export default MainLayout;
