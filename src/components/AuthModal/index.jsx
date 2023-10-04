import React from "react";
import { MODAL_TYPE } from "../../constants/general";
import { useAuthContext } from "../../context/AuthContext";
import LoginForm from "./loginForm";
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
        {/* <div className="modal__wrapper-content mdlogin">
          <div className="form__bottom">
            <p>Bạn chưa có tài khoản?</p>
            <div className="color--primary btnmodal" data-modal="mdregister">
              <strong>Đăng ký</strong>
            </div>
          </div>
          <div className="social">
            <a className="btn btn--google" href="#">
              <i>
                <img src="/img/icon-google.svg" alt="Google CFD" />
              </i>
              <span>Đăng nhập bằng Google</span>
            </a>
            <a className="btn btn--facebook" href="#">
              <i>
                <img src="/img/icon-facebook-v2.svg" alt="Google CFD" />
              </i>
              <span>Đăng nhập bằng Google</span>
            </a>
          </div>
          <span className="line">Hoặc</span>
          <form action="#" className="form">
            <div className="form-group">
              <input
                defaultValue
                type="email"
                className="form__input formerror"
                placeholder="Email"
              />
              <p className="error">Email không được để trống</p>
            </div>
            <div className="form-group">
              <input
                defaultValue
                type="password"
                className="form__input"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="form__bottom">
              <a className="color--primary" href="#">
                Quên mật khẩu?
              </a>
            </div>
            <button
              className="btn btn--primary form__btn-register"
              type="submit"
            >
              Đăng nhập
            </button>
          </form>
        </div> */}
        {/* <LoginForm /> */}
        {/* <div className="modal__wrapper-content mdregister">
          <div className="form__bottom">
            <p>Bạn đã có tài khoản?</p>
            <div className="color--primary btnmodal" data-modal="mdlogin">
              <strong>Đăng nhập</strong>
            </div>
          </div>
          <div className="social">
            <a className="btn btn--google" href="#">
              <i>
                <img src="/img/icon-google.svg" alt="Google CFD" />
              </i>
              <span>Đăng ký bằng Google</span>
            </a>
            <a className="btn btn--facebook" href="#">
              <i>
                <img src="/img/icon-facebook-v2.svg" alt="Google CFD" />
              </i>
              <span>Đăng ký bằng Google</span>
            </a>
          </div>
          <span className="line">Hoặc</span>
          <form action="#" className="form">
            <div className="form-group">
              <input
                defaultValue
                type="text"
                className="form__input formerror"
                placeholder="Họ và tên"
              />
              <p className="error">Họ và tên không được để trống</p>
            </div>
            <div className="form-group">
              <input
                defaultValue
                type="email"
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                defaultValue
                type="password"
                className="form__input"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="form-group">
              <input
                defaultValue
                type="password"
                className="form__input"
                placeholder="Xác nhận mật khẩu"
              />
            </div>
            <p className="form__argee">
              Với việc đăng ký, bạn đã đồng ý
              <a className="color--primary" href="#">
                Chính Sách Điều Khoản
              </a>{" "}
              của CFD
            </p>
            <button
              className="btn btn--primary form__btn-register"
              type="submit"
            >
              Đăng ký tài khoản
            </button>
          </form>
        </div> */}
        {/* <RegisterForm /> */}
      </div>
      <div className="modal__overlay" onClick={handleCloseModal} />
    </div>
  );
};

export default AuthModal;
