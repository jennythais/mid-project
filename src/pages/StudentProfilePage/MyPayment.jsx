import { Empty } from "antd";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import CoursePayment from "../../components/CoursePayment/index";

const MyPayment = () => {
  const { paymentInfo } = useAuthContext();
  // console.log("paymentInfo", paymentInfo);
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {!!!paymentInfo.length && (
        <Empty description="Not found data" style={{ margin: "0 auto" }} />
      )}
      {!!paymentInfo.length && 
        paymentInfo.map((item, index) => (
          <CoursePayment
            key={item.id || new Date().getTime() + index}
            {...item}
          />
        ))}
    </div>
  );
};

export default MyPayment;
