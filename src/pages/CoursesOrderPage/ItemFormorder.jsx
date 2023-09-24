import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import { Select } from "../../components/Select";

const ItemFormorder = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    method: "Học Offline",
  });
  const register = (registerField) => {
    return {
      value: form[registerField] || "",
      onChange: (ev) => setForm({ ...form, [registerField]: ev.target.value }),
    };
  };
  return (
    <div className="itemorder formorder">
      <h3 className="title --t3">Thông tin cá nhân</h3>
      <div className="boxorder">
        <form action="#" className="form">
          <div className="form-container">
            <Input
              label="Họ và tên"
              defaultValue="Nghĩa Trần"
              required
              {...register("name")}
            />
            <Input
              label="Email"
              defaultValue="nghiatran@2018@gmail.com"
              type="email"
              required
              disabled
              {...register("email")}
            />
          </div>
          <div className="form-container">
            <Input
              label="Số điện thoại"
              defaultValue
              required
              {...register("phone")}
            />
            <Input
              label="Hình thức học"
              required
              renderInput={(inputProps) => (
                <Select
                  value={form.method} // Use 'form.method' instead of 'form.type'
                  options={[
                    { label: "Học Offline", value: "offline" },
                    { label: "Học Online", value: "online" },
                  ]}
                  {...inputProps}
                />
              )}
              {...register("method")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemFormorder;
