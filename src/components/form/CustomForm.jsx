import React, { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import { regions } from "../../constants/regions";
import form_animation from "./form_animation.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiImageAdd } from "react-icons/bi";
import { app_colors } from "../../utils/colors";
import CustomInput from "./CustomInput";
import CustomRadioButton from "./CustomRadioButton";
import { useLocation, useParams } from "react-router";
import IeltsForm from "./IeltsForm";
import { storage } from "../../utils/firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FaRegTrashAlt } from "react-icons/fa";
import Error from "../error/Error";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { BASE_URL } from "../../constants/baseurl";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: form_animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function CustomForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [availableDate, setAvailableDate] = useState([]);
  const [choosenDate, setChoosenDate] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);
  const [error, setError] = useState(false);
  const [isSpinning, setIsSpinning] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { exam } = useParams();
  const exam_name = useLocation().state;
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (termsAndConditions && image !== "") {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        passport_number: passport,
        date_of_birth: dateOfBirth,
        phone: phone,
        region: region,
        image: image,
        gender: gender,
        exam_type: exam_name,
        exam_date: choosenDate,
        exam_time: time,
        is_paid: false,
      };

      // console.log(data);
      await axios
        .post(BASE_URL + "/api/user", data)
        .then((response) => {
          console.log(response);
          console.log({ response });
          if (response.status === 200 || response.statusText === "OK") {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              window.location.href = "/payment/howto";
            }, 2000);
          }
        })
        .catch((error) => {
          setError(true);
          console.log({ error });
          setErrorMessage(
            error.response.data.error._message +
              ". Please try again with filling in all the fields!"
          );
        });
    } else {
      alert("Please read and accept Terms & Conditions");
    }

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };

  const getExamData = (ex) => {
    setIsLoading(true);
    axios
      .post(BASE_URL + "/api/exam/get_date", { exam_type: ex })
      .then((response) => {
        setAvailableDate([...availableDate, ...response.data]);
        setPrice(response.data[0]["price"]);
        setTime(response.data[0]["exam_time"]);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const uploadImage = async (e) => {
    setIsSpinning(true);
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          console.log(downloadURL);
          setIsSpinning(false);
        });
      }
    );
  };
  useEffect(() => {
    getExamData(exam_name);
  }, []);
  return (
    <>
      {exam !== "6429185c431cb13d26f39109" ? (
        <div style={{}} className="container-fluid p-5 gradient-bg">
          <div className="container-fluid bg-white custom-shadow ">
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
                    Register for {exam_name}
                  </h2>
                  {success && <SuccessMessage examName={" " + exam_name} />}

                  <h4>
                    Price:{" "}
                    {isLoading ? (
                      <Skeleton count={1} width={100} />
                    ) : (
                      <span>{price} UZS</span>
                    )}
                  </h4>
                  <h4>
                    Exam Time:{" "}
                    {isLoading ? (
                      <Skeleton count={1} width={100} />
                    ) : (
                      <span>{time}</span>
                    )}
                  </h4>
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
                  <CustomRadioButton
                    label={"Gender"}
                    handlechange={(e) => {
                      console.log(gender);
                      setGender(e.target.value);
                    }}
                  />

                  <CustomInput
                    type={"text"}
                    label={"Passport or ID Number (e.g. AA1234567)"}
                    value={passport}
                    htmlfor={"exampleInputEmail1"}
                    aria_describedly={"emailHelp"}
                    labelClass={"form-label mt-2"}
                    className={"form-control"}
                    id={"exampleInputEmail1"}
                    handlechange={(e) => {
                      console.log(passport);
                      setPassport(e.target.value);
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

                  <CustomInput
                    type={"date"}
                    label={"Date of birth"}
                    value={dateOfBirth}
                    htmlfor={"exampleInputEmail1"}
                    aria_describedly={"emailHelp"}
                    labelClass={"form-label mt-2"}
                    className={"form-control"}
                    id={"exampleInputEmail1"}
                    handlechange={(e) => {
                      console.log(dateOfBirth);
                      setDateOfBirth(e.target.value);
                    }}
                  />

                  <div className="form-group">
                    <label
                      htmlFor="exampleSelect1"
                      className="form-label mt-2 "
                    >
                      Select Region
                    </label>
                    <select
                      className="form-select"
                      id="exampleSelect1"
                      onChange={(e) => {
                        setRegion(e.target.value);
                      }}
                    >
                      {regions.map((region, i) => (
                        <option key={i} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleSelect1"
                      className="form-label mt-2 "
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      className="form-control"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                    />
                  </div>
                  <CustomInput
                    type={"email"}
                    label={"Email"}
                    value={email}
                    htmlfor={"exampleInputEmail1"}
                    aria_describedly={"emailHelp"}
                    labelClass={"form-label mt-2"}
                    className={"form-control"}
                    id={"exampleInputEmail1"}
                    handlechange={(e) => {
                      console.log(email);
                      setEmail(e.target.value);
                    }}
                  />
                  <div
                    style={{ borderRadius: "10px" }}
                    class="alert alert-info"
                    role="alert"
                  >
                    Please choose your passport image, and click on the upload
                    button below and wait for it to appear Register button
                  </div>

                  <form onSubmit={uploadImage} className="">
                    <div className="">
                      <div className="d-flex">
                        <div className="mx-2 d-flex justify-content-center align-items-center">
                          <label htmlFor="upload">
                            <BiImageAdd size={80} color={app_colors.violet} />
                          </label>
                        </div>
                        <div className="">
                          <img
                            src={image}
                            style={{ width: "150px", borderRadius: "7px" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <input
                        id="upload"
                        className="visually-hidden"
                        type="file"
                      />
                      <div className="">
                        <button
                          type="submit"
                          style={{
                            backgroundColor: app_colors.violet,
                            borderRadius: "10px",
                          }}
                          onClick={() => {
                            setIsSpinning(true);
                          }}
                          className="badge p-2 my-2 fs-6"
                        >
                          Upload image{" "}
                          {isSpinning && (
                            <div
                              className="spinner-border text-white mx-2"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          )}
                        </button>{" "}
                        <span
                          onClick={() => {
                            setImage("");
                            setProgresspercent(0);
                          }}
                          style={{
                            // backgroundColor: app_colors.violet,
                            borderRadius: "10px",
                          }}
                          className="badge mx-2 p-2 my-2 text-bg-danger fs-6"
                        >
                          <FaRegTrashAlt />
                        </span>
                      </div>
                    </div>
                  </form>
                  {/* {image && setIsSpinning(false)} */}
                  {!image ? (
                    <h6 className=" m-2">
                      Please choose image of your passport or ID, and wait until
                      process finishes
                    </h6>
                  ) : (
                    <div className="container w-50 my-4 ">
                      <div
                        className="progress bg-light"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${progresspercent}%`,
                            backgroundColor: app_colors.violet,
                            borderRadius: "10px",
                            // height: "5px",
                          }}
                          aria-valuenow={progresspercent + "%"}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${progresspercent}%` }}
                            aria-valuenow={progresspercent + "%"}
                          ></div>
                        </div>
                      </div>
                      <center>{progresspercent + "%"}</center>
                    </div>
                  )}

                  <div className="container">
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
                          <a
                            target={"_blank"}
                            href={"/agree/termsAndConditions"}
                            rel="noreferrer"
                          >
                            I have read and agreed on <b>Term and Contions</b>
                          </a>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  {error && <Error error_message={errorMessage} />}
                  <div className=" d-flex justify-content-start mt-2">
                    {image && (
                      <>
                        <button
                          type="button"
                          className="custom-btn d-flex justify-content-center align-items-center text-white my-2 "
                          style={{
                            backgroundColor: app_colors.violet,
                            borderRadius: "10px",
                          }}
                          onClick={handleSubmit}
                        >
                          Register
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <IeltsForm />
      )}
    </>
  );
}

export default CustomForm;
