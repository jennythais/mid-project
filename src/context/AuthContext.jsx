import { createContext } from "react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { authService } from "../services/authService";
import { message } from "antd";
import tokenMethod, { localToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import PATHS from "../constants/paths";
import { useEffect } from "react";
import { orderService } from "../services/orderService";
const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const navigate = useNavigate();
  const [showedModal, setShowedModal] = useState("");
  const [courseInfo, setCourseInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);
  useEffect(() => {
    const accessToken = !!tokenMethod.get()?.accessToken;
    if (accessToken) {
      handleGetProfile();
      handleGetProfileCourse();
      handleGetProfilePayment();
    }
  }, []);

  const handleShowModal = (modelType) => {
    setShowedModal(modelType || "");
  };
  const handleCloseModal = (e) => {
    e?.stopPropagation();
    setShowedModal(false);
  };

  const handleLogin = async (loginData, callback) => {
    const payload = { ...loginData };
    try {
      const res = await authService.login(payload);
      if (res?.data?.data) {
        const { token: accessToken, refreshToken } = res.data.data || {};
        //Save
        tokenMethod.set({ accessToken, refreshToken });

        //Get profile
        handleGetProfile();
        handleCloseModal();
        message.success("Login success");
      } else {
        message.error("Login fail");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      callback?.();
    }
  };

  const handleRegister = async (registerData, callback) => {
    const { name, email, password } = registerData || {};
    const payload = {
      firstName: name,
      lastName: "",
      email: email,
      password: password,
    };

    try {
      const res = await authService.register(payload);
      if (res?.data?.data?.id) {
        handleLogin({
          email: email,
          password: password,
        });

        message.success("Register success");
      } else {
        message.error("Register fail");
      }
    } catch (error) {
      console.log("error", error);
      message.error("Register fail");
    } finally {
      callback?.();
    }
  };

  const handleLogout = () => {
    tokenMethod.remove();
    navigate(PATHS.MAIN);
    message.success("Account is logged out ");
    setProfile(null);
    setCourseInfo([]);
    setPaymentInfo([]);
  };
  const handleGetProfile = async () => {
    try {
      const res = await authService.getProfile();
      if (res?.data?.data) {
        setProfile(res.data.data);
      }
    } catch (error) {
      console.log("error", error);
      handleLogout();
    }
  };
  const handleGetProfileCourse = async () => {
    try {
      const res = await orderService.getCourseHistories();
      const orderedCourses = res?.data?.data.orders || [];
      setCourseInfo(orderedCourses);
    } catch (error) {
      console.log("getCourseHistories error", error);
    }
  };
  const handleGetProfilePayment = async () => {
    try {
      const res = await orderService.getPaymentHistories();
      const payments = res?.data?.data.orders || [];
      setPaymentInfo(payments);

    } catch (error) {
      console.log("getPaymentHistories error", error);
    }
  };
  const handleUpdateProfile = async (profileData) => {
    try {
      const {
        firstName,
        email,
        password,
        facebookURL,
        introduce,
        phone,
        website,
      } = profileData;
      const payload = {
        firstName: firstName,
        lastName: "",
        email,
        password,
        facebookURL,
        website,
        introduce,
        phone,
      };
      const res = await authService.updateProfile(payload);
      if (res?.data?.data?.id) {
        message.success("Cập nhật thông tin thành công");
        handleGetProfile();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        profile,
        courseInfo,
        paymentInfo,
        showedModal,
        handleShowModal,
        handleCloseModal,
        handleLogin,
        handleRegister,
        handleLogout,
        handleGetProfileCourse,
        handleGetProfilePayment,
        handleUpdateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
