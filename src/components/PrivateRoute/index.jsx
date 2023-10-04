import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MODAL_TYPE } from "../../constants/general";
import PATHS from "../../constants/paths";
import { useAuthContext } from "../../context/AuthContext";
import tokenMethod from "../../utils/token";

const PrivateRoute = (redirectPath) => {
  const { handleShowModal } = useAuthContext();
  if (!!!tokenMethod.get()) {
    handleShowModal(MODAL_TYPE.login);
    return <Navigate to={PATHS.MAIN} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
