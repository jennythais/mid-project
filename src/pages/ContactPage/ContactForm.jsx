import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import { Select } from "../../components/Select";
import TextArea from "../../components/TextArea";
import validate from "../../utils/validate";

const ContactForm = ({ handleSubmitForm }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    content: "",
  });
  const [error, setError] = useState({});
  const _onSubmit = () => {
    const errorObj = validate(rule, form);
    setError(errorObj);
    if (Object.keys(errorObj)?.length === 0) {
      console.log("Validata sucess");
    }
  };

  const register = (registerField) => {
    return {
      error: error[registerField],
      value: form[registerField] || "",
      onChange: (ev) => setForm({ ...form, [registerField]: ev.target.value }),
    };
  };
  return (
    <div className="form">
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
      <Input
        label="Họ và tên"
        required
        placeholder="Họ và tên"
        {...register("name")}
      />
      <Input
        label="Email"
        required
        placeholder="Email"
        {...register("email")}
      />
      <Input
        label="Số điện thoại"
        required
        placeholder="(+84) 12 3456 789"
        {...register("phone")}
      />
      <Input
        label="Chủ đề cần hỗ trợ"
        placeholder="Chủ đề cần hỗ trợ"
        required
        renderInput={(inputProps) => (
          <Select
            options={[
              { value: "", label: "--" },
              { value: "responsive", label: "Web Responsive" },
              { value: "react", label: "React" },
            ]}
            {...inputProps}
          />
        )}
        {...register("topic")}
      />
      <Input
        label="Nội dung"
        placeholder="Nội dung"
        required
        renderInput={(inputProps) => <TextArea {...inputProps} />}
        {...register("content")}
      />
      <div className="btncontrol">
        <button className="btn btn--primary" onClick={_onSubmit}>
          Gửi{" "}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
