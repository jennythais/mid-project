import { Outlet } from "react-router-dom";
import AuthModal from "../../components/AuthModal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingModal from "../../components/LoadingModal";
import Nav from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import PageLoading from "../../components/PageLoading";
import AuthContextProvider from "../../context/AuthContext";
import MainContextProvider from "../../context/MainContext";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <PageLoading />
        <Header />
        <Nav />
        <Overlay />
        {/* Main */}
        <Outlet />

        <Footer />
        <AuthModal />
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
