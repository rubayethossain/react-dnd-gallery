import React, { useEffect, useState } from "react";
import "./filterItem.styles.css";

function FilterItem({ icon, onChange, unit, name, className, range }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(range || 0);
  }, [range]);

  const changeHandler = (e) => {
    const val = e.target.value;
    setValue(val);
    if (onChange) onChange(val);
  };

  return (
    <div className={`image-filter ${className}`}>
      <img src={icon} alt="" />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        name={name}
        className="range-slider"
        onChange={changeHandler}
      />
      <p>{`${value}${unit}`}</p>
    </div>
  );
}

export default FilterItem;
