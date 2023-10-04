import Input from "../Input";
import Button from "../Button";
import React from "react";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";
import { useAuthContext } from "../../context/AuthContext";
import { MODAL_TYPE } from "../../constants/general";
import { useState } from "react";
import ComponentLoading from "../ComponentLoading";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleShowModal, handleLogin } = useAuthContext();
  const { form, register, validate } = useForm(
    {
      email: "",
      password: "",
    },
    {
      email: [
        requireRule("Please enter the email "),
        regrexRule("email", "Vui lòng nhập đúng định dạng email"),
      ],
      password: [requireRule("Please enter the password ")],
    }
  );
  const _onSubmit = (e) => {
    e.preventDefault();
    const errorObject = validate();
    if (Object.keys(errorObject).length === 0) {
      setLoading(true);
      console.log("Submit success");
      handleLogin?.(form, () => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    } else {
      console.log("Submit error: ", errorObject);
    }
  };
  return (
    <div
      className="modal__wrapper-content mdlogin active"
      style={{ position: "relative" }}
    >
      {loading && <ComponentLoading />}
      <div className="form__bottom">
        <p>Bạn chưa có tài khoản?</p>
        <div
          className="color--primary btnmodal"
          data-modal="mdregister"
          onClick={() => handleShowModal(MODAL_TYPE.register)}
        >
          <strong>Đăng ký</strong>
        </div>
      </div>
      <form onSubmit={_onSubmit} className="form">
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
        <Button className=" form__btn-register" type="submit">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
