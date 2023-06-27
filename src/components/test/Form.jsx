import React, { useState } from "react";
import Lottie from "react-lottie";
import { regions } from "../../constants/regions";
import form_animation from "./form_animation.json";
import image_upload from "./image_upload.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiImageAdd } from "react-icons/bi";
import { app_colors } from "../../utils/colors";
import Input from "./CustomInput";
import CustomInput from "./CustomInput";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: form_animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function CustomForm() {
  const [value, setValue] = useState();
  return (
    <>
      <div
        style={{
          backgroundColor: "#F9F8FB",
        }}
        className="container-fluid p-5"
      >
        <div className="container bg-white custom-shadow  ">
          <div className="container p-3">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                <Lottie options={defaultOptions} height={350} width={350} />
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <h2
                  style={{
                    fontWeight: "bolder",
                    // textAlign: "right",
                  }}
                >
                  Register with us
                </h2>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2 "
                  >
                    First Name (per PASSPORT)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2 "
                  >
                    Last Name (per PASSPORT)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <fieldset className="form-group d-flex flex-column align-items-start">
                  <h5 className="mt-2 ">Gender</h5>
                  <div className=" d-flex">
                    <div className="form-check mx-2 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="optionsRadios"
                        id="optionsRadios1"
                        value="option1"
                        checked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="optionsRadios1"
                      >
                        male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="optionsRadios"
                        id="optionsRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="optionsRadios2"
                      >
                        female
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2 "
                  >
                    Passport or ID Number (e.g. AA1234567)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2 "
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label mt-2 ">
                    Select Region
                  </label>
                  <select className="form-select" id="exampleSelect1">
                    <option></option>

                    {regions.map((region, i) => (
                      <option key={i} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label mt-2 ">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="form-control"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <h6 className="mt-2 ">Attach passport</h6>
                  <label htmlFor="image_uplo ad">
                    <BiImageAdd size={80} color={app_colors.violet} />
                  </label>
                  <input
                    type="file"
                    className="visually-hidden"
                    id="image_upload"
                  />
                </div>
                <div className="container">
                  <fieldset className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I have read and agreed on <b>Term and Contions</b>
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div className=" d-flex justify-content-start mt-2">
                  <button
                    type="button"
                    className="custom-btn text-white "
                    style={{
                      backgroundColor: app_colors.violet,
                      borderRadius: "10px",
                    }}
                  >
                    Primary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomForm;
