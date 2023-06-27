import React from "react";
import style from "./css.module.css";
import doc from "./Payment.docx";
import logo from "./innovativ.webp";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Payment = () => {
  return (
    <div className={`${style.body}`}>
      <div className="container  ">
        <center>
          <img src={logo} className="img-fluid" width={250} alt="" />
        </center>
        <h4 className="text-danger">
          <b>Please take a screenshot of this page for future reference</b>
        </h4>
        <br />
        <h4>
          <a href={doc}>
            Download payment instruction
            <AiOutlineCloudDownload className="mx-3" size={30} />
          </a>
        </h4>
        <br />
        <h4>
          Dear Candidate,
          <br />
          <br /> Thank you for submitting your online application form. A place
          is being held for you at the test location shown below. A test place
          is only confirmed after your payment has been processed.
        </h4>
        <br />

        <h1 className="text-danger">HOW TO PAY</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={style.card + " p-3"}>
              <h4>
                <b>Option 1 - Bank Transfer</b>
              </h4>
              <br />
              <h5>Please make your payment to:</h5>
              <h5>
                {" "}
                <b>Account:</b> NTM “Innovatsion Maskan”
              </h5>
              <h5>
                {" "}
                <b>INN:</b> 207254630
              </h5>
              <h5>
                {" "}
                <b>Bank Name:</b> National Bank of Uzbekistan, Samarkand branch
              </h5>
              <h5>
                {" "}
                <b>Account Number:</b> 20212000900780241001
              </h5>
              <h5>
                {" "}
                <b>SWIFT Code:</b> NBFAUZ2X
              </h5>
              <h5>
                {" "}
                <b>MFO:</b> 00278
              </h5>
              <h5>
                {" "}
                <b>Payment Purpose:</b> <i>e.g. for C1 Advanced exam</i>
              </h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={style.card + " p-3"}>
              <h4>
                <b>Option 2 - Online Payment</b>
                <br />
              </h4>
              <h5>
                Please make your payment through the mobile apps <b>CLICK</b> or{" "}
                <b>Payme</b>: Search <b>“Innovative Centre”</b>
              </h5>
              <br />
              <br />
              <h5>
                <b>
                  <i>
                    *On the day of the exam, you must present your original and
                    valid passport or national identity card. We cannot accept
                    photocopies. You will not be able to take the exam without a
                    valid passport/national identity card.{" "}
                  </i>
                </b>
              </h5>
              <br />

              <h5>
                <i>
                  <b>*Our address: Samarkand city, Gagarin Street 95A</b>
                </i>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Payment;
