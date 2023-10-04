import React from "react";
import Input from "../../components/Input";
import { Select } from "../../components/Select";
import TextArea from "../../components/TextArea";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";

const rules = {
  name: [requireRule("Vui lòng nhập tên")],
  email: [
    requireRule("Vui lòng nhập email"),
    regrexRule("email", "Vui lòng nhập đúng định dạng email"),
  ],
  phone: [
    requireRule("Vui lòng nhập phone"),
    regrexRule("phone", "Vui lòng nhập đúng định dạng phone"),
  ],
  topic: [requireRule("Vui lòng nhập topic")],
  content: [requireRule("Vui lòng nhập content")],
};

const ContactForm = ({ handleSubmitForm }) => {
  const { form, error, register, validate } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      topic: "",
      content: "",
    },
    rules
  );
  const _onSubmit = () => {
    const errorObject = validate();
    if (Object.keys(errorObject).length === 0) {
      console.log("Submit success");
      handleSubmitForm?.(form);
    } else {
      console.log("Submit error: ", errorObject);
    }
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
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
