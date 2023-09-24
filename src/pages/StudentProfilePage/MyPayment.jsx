import React from "react";

const MyPayment = () => {
  return (
    <div classname="tab__content-item" style={{ display: "block" }}>
      <div classname="itemhistory">
        <div classname="name">Frontend Newbie</div>
        <div classname="payment">Chuyển khoản</div>
        <div classname="date">05/01/2022</div>
        <div classname="money">4.500.000 VND</div>
      </div>
      <div classname="itemhistory">
        <div classname="name">Web Responsive</div>
        <div classname="payment">Tiền mặt</div>
        <div classname="date">14/07/2022</div>
        <div classname="money">4.900.000 VND</div>
      </div>
    </div>
  );
};

export default MyPayment;
