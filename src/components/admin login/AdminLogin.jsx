import React, { useState } from "react";
import "./Login.css";
import Lottie from "react-lottie";
import login from "./login.json";
import loading from "./loading.json";
import axios from "axios";
import { BASE_URL } from "../../constants/baseurl";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const admin = {
      email,
      password,
    };

    axios
      .post(BASE_URL + `/admin/login`, admin)
      .then((response) => {
        if (response.data.admin === true) {
          setIsLoading(false);
          window.location.href = "/admin/authorized";
        } else {
          setErrorMessage("You are not authorized!");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          "Something went wrong, please try again or contact with Abdulboriy Malikov"
        );
        setIsLoading(false);
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="row">
      <center>
        <Lottie options={defaultOptions} height={300} width={300} />
      </center>
      <h4 className="text-center my-1">This page is only for Admin!</h4>
      <br />
      <br />
      {isLoading && (
        <center>
          <Lottie options={defaultOptions1} height={100} width={100} />
        </center>
      )}
      {errorMessage.length > 0 && (
        <center>
          <div class="alert alert-dismissible d-inline-block  alert-danger">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <strong>Oh snap!</strong> {errorMessage}
          </div>
        </center>
      )}
      <div className="login-page">
        <div className="form">
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
