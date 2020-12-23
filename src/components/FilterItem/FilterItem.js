import React from "react";
import "./filterItem.styles.css";

function FilterItem({ icon, onChange, valuePrepend, name, className }) {
  return (
    <div className={`image-filter ${className}`}>
      <img src={icon} alt="" />
      <input
        type="range"
        min="0"
        max="100"
        // value="50"
        name={name}
        className="range-slider"
      />
      <p>50</p>
    </div>
  );
}

export default FilterItem;
