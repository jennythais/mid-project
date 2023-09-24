import React from "react";

const BoxorderPay = ({ imageSrc , description , methodpay }) => {
  return (
    <div className="boxorder__pay">
      <label className="radiocontainer">
        <img src={imageSrc} alt />
        {methodpay}
        <input type="radio" name="radio" />
        <span className="checkmark" />
      </label>
      <div className="boxorder__pay-tooltip">{description}</div>
    </div>
  );
};

export default BoxorderPay;
