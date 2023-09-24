import React from "react";

const InfoItem = ({classNameItem, labelItem, titleItem, isWhite }) => {
  const labelClass = isWhite ? "label --white" : "label --blue";
  const titleClass = isWhite ? "title --t3 --white" : "title --t3";
  return (
    <div className={classNameItem}>
      <label className={labelClass}>{labelItem}</label>
      <p className={titleClass}>{titleItem}</p>
    </div>
  );
};

export default InfoItem;
