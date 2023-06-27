import React, { useEffect, useState } from "react";
import ExamCard from "../../components/exam box/ExamCard";
import { ExamNames } from "../../constants/exams";
import { border_colors } from "../../constants/border_colors";
import { image_links } from "../../constants/imageLinks";
import innovative from "./white.png";
import CustomFooter from "../../components/footer/Footer";
import axios from "axios";
import { BASE_URL } from "../../constants/baseurl";
import loading from "./loading.json";

import Lottie from "react-lottie";

const Landing = () => {
  const [staticExams, setStaticExams] = useState("");
  const fetchStaticExams = async () => {
    axios
      .get(BASE_URL + "/arrangement")
      .then((response) => setStaticExams(response.data))
      .catch((err) => console.log(err));
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    fetchStaticExams();
  }, []);
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
        }}
        className="container-fluid gradient-bg"
      >
        <div className="container d-flex justify-content-center">
          <img
            className="innovative-logo py-4"
            width={300}
            src={innovative}
            alt=""
          />
        </div>

        <div className="container py-4">
          <div className="row">
            {staticExams.length > 0 ? (
              staticExams.map((e, i) => {
                var color =
                  border_colors[
                    Math.floor(Math.random() * border_colors.length)
                  ];
                var randomImage =
                  image_links[Math.floor(Math.random() * image_links.length)];

                return (
                  e.isVisible && (
                    <div key={i} className="col-sm-12 col-md-4 col-lg-4">
                      <ExamCard
                        title={e.name}
                        image={randomImage}
                        link={e.id}
                        info={e.info}
                        id={e._id}
                        description={"description..."}
                        borderColor={color}
                      />
                    </div>
                  )
                );
              })
            ) : (
              <div className="col-sm-12 col">
                <Lottie options={defaultOptions} height={250} width={250} />
              </div>
            )}
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default Landing;
