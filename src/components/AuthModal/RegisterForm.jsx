import React from "react";
import { Link } from "react-router-dom";
import { MODAL_TYPE } from "../../constants/general";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";
import Input from "../Input";
import PATHS from "../../constants/paths";
import Button from "../Button";
import { useState } from "react";
import ComponentLoading from "../ComponentLoading/index";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleShowModal, handleCloseModal, handleRegister } = useAuthContext();
  const { form, register, validate } = useForm(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    {
      name: [requireRule("Please enter name")],
      email: [
        requireRule("Please enter email "),
        regrexRule("email", "Vui lòng nhập đúng định dạng email"),
      ],
      password: [
        requireRule("Please enter password "),
        {
          lengthPassword: true,
          message: "Password must be at least 6 characters",
        },
      ],
      confirmPassword: [
        requireRule("Please confirm your password"),
        (value, values) => {
          if (values.password && value !== values.password) {
            return "Password incorrect, confirm again";
          }
          return false;
        },
      ],
    }
  );
  const _onSubmit = (e) => {
    e.preventDefault();
    const errorObject = validate();
    if (Object.keys(errorObject).length === 0) {
      console.log("Submit success");

      if (typeof handleRegister === "function") {
        setLoading(true);
        handleRegister(form, () => {
          // setTimeout(() => {
          //   setLoading(false);
          // }, 500);
          setLoading(false)
        });
      }
    } else {
      console.log("Submit error: ", errorObject);
    }
  };
  return (
    <div
      className="modal__wrapper-content mdregister active"
      style={{ position: "relative" }}
    >
      {loading && <ComponentLoading />}
      <div className="form__bottom">
        <p>Bạn đã có tài khoản?</p>
        <div
          className="color--primary btnmodal"
          data-modal="mdlogin"
          onClick={() => handleShowModal(MODAL_TYPE.login)}
        >
          <strong>Đăng nhập</strong>
        </div>
      </div>
      <form onSubmit={_onSubmit} className="form">
        <Input
          label="Full name"
          placeholder="Full name"
          required
          {...register("name")}
        />
        <Input
          label="Email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <Input
          label="Password"
          placeholder="Password"
          required
          type="password"
          {...register("password")}
        />
        <Input
          label="Confirm password"
          placeholder="Confirm password"
          required
          type="password"
          {...register("confirmPassword")}
        />
        <p className="form__argee">
          Với việc đăng ký, bạn đã đồng ý
          <Link
            className="color--primary"
            to={PATHS.PRIVACY}
            onClick={handleCloseModal}
          >
            Chính Sách Điều Khoản
          </Link>{" "}
          của CFD
        </p>
        <Button className="form__btn-register" type="submit">
          Đăng ký tài khoản
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
