import React from "react";

const BoxorderCol = ({ label, price }) => {
  return (
    <div className="boxorder__col">
      <label className="label">{label}</label>
      <p>{label === "thành tiền" ? <strong>{price}</strong> : price}</p>
    </div>
  );
};

export default BoxorderCol;
