import React from "react";
import { HiShieldExclamation } from "react-icons/hi";
const Error = ({ error_message }) => {
  return (
    <div
      className="alert py-2 my-2 border-radius  px-2 alert-danger d-flex align-items-center"
      role="alert"
    >
      <HiShieldExclamation
        size={15}
        style={{
          marginRight: "10px",
        }}
      />
      <div>{error_message}</div>
    </div>
  );
};

export default Error;
