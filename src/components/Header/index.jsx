import { useLocation } from "react-router-dom";
import PATHS from "../../constants/paths";
import HeaderAuthen from "./HeaderAuthen";
import HeaderHamburger from "./HeaderHamburger";
import HeaderLogo from "./HeaderLogo";
import { useEffect } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const isTransparent = [PATHS.MAIN, PATHS.ABOUT].includes(pathname);
  useEffect(() => {
    function setBgHeader(scrollY) {
      let header = $("header");
      if (scrollY > header.height()) {
        header.addClass("--bgwhite");
      } else {
        console.log("isTransparent", isTransparent);
        if (isTransparent) {
          header.removeClass("--bgwhite");
        }
      }
    }
    function scrollBgHeader() {
      let scrollY = $(window).scrollTop();
      if ($(".header").hasClass("--transparent")) {
        setBgHeader(scrollY);
      }
    }

    window.addEventListener("scroll", scrollBgHeader);

    return () => {
      window.removeEventListener("scroll", scrollBgHeader);
    };
  }, [isTransparent]);
  return (
    <header
      id="header"
      className={`header --transparent ${!isTransparent ? "--bgwhite" : ""}`}
    >
      <div className="container-fluid">
        <HeaderHamburger />
        <HeaderLogo />
        <HeaderAuthen />
      </div>
    </header>
  );
};

export default Header;
