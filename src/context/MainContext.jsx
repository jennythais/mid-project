import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});
const MainContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  useEffect(() => {
    setIsShowNavbar(false);
    const myTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", 
      });
    }, 100);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [pathname]);

  const handleShowNavbar = (isShow) => {
    setIsShowNavbar(isShow);
  };

  return (
    <MainContext.Provider value={{ isShowNavbar, handleShowNavbar }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => useContext(MainContext);
