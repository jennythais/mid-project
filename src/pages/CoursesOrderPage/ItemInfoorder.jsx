import React from "react";
import BoxorderCol from "./BoxorderCol";

const ItemInfoorder = () => {
  return (
    <div className="itemorder infoorder">
      <h3 className="title --t3">Thông tin đơn hàng</h3>
      <div className="boxorder">
        <div className="boxorder__col">
          <label className="label">Tên khoá học</label>
          <div className="boxorder__col-course">
            <div className="img">
              <img
                src="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
                alt
              />
            </div>
            <div className="info">
              <p className="name">
                <strong>Frontend Master</strong>
              </p>
              <p>Trần Nghĩa</p>
            </div>
          </div>
        </div>
        <BoxorderCol label="Tạm tính" price="14,700,000đ" />
        <BoxorderCol label="Giảm giá" price="0đ" />
        <BoxorderCol label="thành tiền" price="14,700,000đ" />
      </div>
    </div>
  );
};

export default ItemInfoorder;
