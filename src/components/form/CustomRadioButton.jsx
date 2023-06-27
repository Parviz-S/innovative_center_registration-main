import React from "react";

const CustomRadioButton = ({ label, handlechange, value }) => {
  return (
    <fieldset className="form-group d-flex flex-column align-items-start">
      <h5 className="mt-2 ">{label}</h5>
      <div className=" d-flex">
        <div className="form-check mx-2 ">
          <input
            className="form-check-input"
            type="radio"
            name="optionsRadios"
            id="optionsRadios1"
            value={"male"}
            onChange={handlechange}
          />
          <label className="form-check-label" htmlFor="optionsRadios1">
            male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="optionsRadios"
            id="optionsRadios2"
            value={"female"}
            onChange={handlechange}
          />
          <label className="form-check-label" htmlFor="optionsRadios2">
            female
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default CustomRadioButton;
