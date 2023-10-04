import { Empty } from "antd";
import React from "react";
import { useState } from "react";

const Accordion = ({ label = "", data = [] }) => {
  const [activeIndex, setActiveIndex] = useState("");
  const _onTileClick = (e, id) => {
    e.stopPropagation();
    setActiveIndex(id !== activeIndex ? id : "");
  };
  return (
    <div className="accordion">
      {!!label && <h3 className="accordion__title label">{label}</h3>}
      {data?.length > 0 ? (
        data.map((item, index) => {
          const { id, title, content } = item || {};
          return (
            <div
              key={id || index}
              className={`accordion__content ${
                activeIndex === id ? "active" : ""
              }`}
            >
              <div
                className="accordion__content-title"
                onClick={(e) => _onTileClick(e, id)}
              >
                <h4>
                  <strong>{title || ""}</strong>
                </h4>
              </div>
              <div
                className="accordion__content-text"
                style={{ display: activeIndex === id ? "block" : "none" }}
              >
                {content || ""}
              </div>
            </div>
          );
        })
      ) : (
        <Empty description="Not found data" style={{ margin: " 0 auto" }} />
      )}
    </div>
  );
};

export default Accordion;
