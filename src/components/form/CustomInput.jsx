import React from "react";

const CustomInput = ({
  label,
  type,
  value,
  handlechange,
  className,
  id,
  aria_describedly,
  htmlfor,
  labelClass,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={type === "file" ? id : null} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        className={className}
        id={type === "file" ? id : null}
        aria-describedby={aria_describedly}
        onChange={handlechange}
      />
    </div>
  );
};

export default CustomInput;
