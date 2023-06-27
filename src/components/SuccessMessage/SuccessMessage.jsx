import React from "react";

const SuccessMessage = ({ examName }) => {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>
        Aww yeah, You have successfully completed registration for
        <b
          style={{
            fontSize: "18px",
          }}
        >
          {examName + "! "}
        </b>
        You will recieve a sms notification to your phone number. Thank you for
        your co-operation with us
      </p>
      <hr />
      <p className="mb-0">Good luck with your exam!</p>
    </div>
  );
};

export default SuccessMessage;
