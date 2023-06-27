import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import form_animation from "./form_animation.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { app_colors } from "../../utils/colors";
import CustomInput from "./CustomInput";
import axios from "axios";
import Error from "../error/Error";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { BASE_URL } from "../../constants/baseurl";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: form_animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function IeltsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [availableDate, setAvailableDate] = useState([]);
  const [choosenDate, setChoosenDate] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getExamData = (ex) => {
    axios
      .post(BASE_URL + "/api/exam/get_date", { exam_type: "IELTS Mock" })
      .then((response) => {
        setAvailableDate([...availableDate, ...response.data]);
        console.log(response.data);
        setPrice(response.data[0]["price"]);
        setTime(response.data[0]["exam_time"]);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const create_ielts_user = async () => {
    if (termsAndConditions) {
      await axios
        .post(BASE_URL + "/api/ielts_user", {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          exam_date: choosenDate,
          exam_time: time,
        })
        .then((response) => {
          if (response.status === 200) {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              window.location.href = "/payment/howto";
            }, 1000);
          }
        })
        .catch((error) => {
          setError(true);
          console.log(error);
          setErrorMessage(
            error.response.data.error._message +
              ". Please try again with filling in all the fields!"
          );
        });
    } else {
      alert("Please read and accept Terms & Conditions");
    }
  };

  useEffect(() => {
    getExamData();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#F9F8FB",
          minHeight: "100vh",
        }}
        className="container-fluid p-5 d-inline-flex justify-content-center align-items-center"
      >
        <div
          className="container bg-white custom-shadow d-inline-flex justify-content-center align-items-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div className="container p-3">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                <Lottie options={defaultOptions} height={350} width={350} />
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <h2
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Register for IELTS Mock
                </h2>
                {success && (
                  <SuccessMessage examName={" Register for IELTS Mock"} />
                )}
                <h4>
                  Price:{" "}
                  {isLoading ? (
                    <Skeleton count={1} width={100} />
                  ) : (
                    <span>{price} UZS</span>
                  )}
                </h4>
                <h4>Exam Time: 11:00</h4>
                <CustomInput
                  type={"text"}
                  label={"First Name (per PASSPORT)"}
                  value={firstName}
                  htmlfor={"exampleInputEmail1"}
                  aria_describedly={"emailHelp"}
                  labelClass={"form-label mt-2"}
                  className={"form-control"}
                  id={"exampleInputEmail1"}
                  handlechange={(e) => {
                    console.log(firstName);
                    setFirstName(e.target.value);
                  }}
                />
                <CustomInput
                  type={"text"}
                  label={"Last Name (per PASSPORT)"}
                  value={lastName}
                  htmlfor={"exampleInputEmail1"}
                  aria_describedly={"emailHelp"}
                  labelClass={"form-label mt-2"}
                  className={"form-control"}
                  id={"exampleInputEmail1"}
                  handlechange={(e) => {
                    console.log(lastName);
                    setLastName(e.target.value);
                  }}
                />
                <select
                  required
                  className="form-select my-3"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setChoosenDate(e.target.value);
                    console.log(choosenDate);
                  }}
                >
                  <option>Available dates</option>
                  {availableDate.map((e, k) => {
                    return (
                      <option key={k} value={e.exam_date}>
                        {e.exam_date}
                      </option>
                    );
                  })}
                </select>
                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label mt-2 ">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="form-control"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
                <div className="container my-3">
                  <fieldset className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => {
                          setTermsAndConditions(e.target.checked);
                          console.log(termsAndConditions);
                        }}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        <a target={"_blank"} href={"/agree/termsAndConditions"}>
                          I have read and agreed on <b>Term and Contions</b>
                        </a>
                      </label>
                    </div>
                  </fieldset>
                </div>
                {error && <Error error_message={errorMessage} />}
                <div className=" d-flex justify-content-start mt-2">
                  <button
                    type="button"
                    className="custom-btn text-white my-2 "
                    style={{
                      backgroundColor: app_colors.violet,
                      borderRadius: "10px",
                    }}
                    onClick={create_ielts_user}
                  >
                    Register
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

export default IeltsForm;
