import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { regrexRule, requireRule } from "../../utils/validate";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
const rules = {
  firstName: [requireRule("Please input your name")],
  email: [
    requireRule("Please input your email"),
    regrexRule("email", "Please input correct format"),
  ],
  phone: [
    requireRule("Please input your phone"),
    regrexRule(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Please input correct format"),
  ],
  password: [requireRule("Please input your password")],
  facebookURL: [requireRule("Please input your facebook url")],
  website: [requireRule("Please input your website")],
};

const MyInfo = () => {
  const { profile, handleUpdateProfile } = useAuthContext();
  const { form, setForm, register, validate } = useForm(
    {
      firstName: "",
      email: "",
      phone: "",
      password: "********",
      facebookURL: "",
      website: "",
      introduce: "",
    },
    rules
  );
  const _onSubmit = (e) => {
    e.preventDefault();
    const errorObject = validate();
    if (Object.keys(errorObject).length > 0) {
      console.log("Submit error: ", errorObject);
    } else {
      handleUpdateProfile?.(form);
    }
  };
  useEffect(() => {
    if (profile) {
      setForm({ ...form, ...profile });
    }
  }, [profile]);

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <form action="#" className="form">
        <div className="form-container">
          <Input
            label="Họ và tên"
            required
            placeholder="Họ và tên"
            {...register("firstName")}
          />
          <Input
            label="Số điện thoại"
            required
            placeholder="Số điện thoại"
            {...register("phone")}
          />
        </div>
        <div className="form-container">
          <Input
            label="Email"
            required
            disabled
            placeholder="Email"
            {...register("email")}
          />
          <Input
            label="Mật khẩu"
            required
            disabled
            placeholder="Mật khẩu"
            {...register("password")}
          />
        </div>
        <Input
          label="Facebook URL"
          required
          placeholder="Facebook URL"
          {...register("facebookURL")}
        />
        <Input
          label="Website"
          required
          placeholder="Website"
          {...register("website")}
        />
        <Input
          label="Giới thiệu bản thân"
          renderInput={(inputProps) => {
            return <TextArea {...inputProps} />;
          }}
          {...register("introduce")}
        />
        <Button style={{ width: "100%" }} variant="primary" onClick={_onSubmit}>
          Gửi
        </Button>
        {/* <p className="noti">Cập nhận thông tin thành công</p>
        <div className="form-group">
          <div className="btnsubmit">
            <button className="btn btn--primary">Lưu lại</button>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default MyInfo;
