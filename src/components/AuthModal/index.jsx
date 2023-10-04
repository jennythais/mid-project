import React from "react";
import { MODAL_TYPE } from "../../constants/general";
import { useAuthContext } from "../../context/AuthContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = () => {
  const { showedModal, handleCloseModal } = useAuthContext();
  return (
    <div className={`modal modallogin ${!!showedModal ? "open" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-close" onClick={handleCloseModal}>
          <img src="/img/close_icon.svg" alt="CFD Register" />
        </div>
        {showedModal === MODAL_TYPE.login && <LoginForm />}
        {showedModal === MODAL_TYPE.register && <RegisterForm />}
      </div>
      <div className="modal__overlay" onClick={handleCloseModal} />
    </div>
  );
};

export default AuthModal;
