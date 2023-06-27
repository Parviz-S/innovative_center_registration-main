import React from "react";
import { Link } from "react-router-dom";
import { app_colors } from "../../utils/colors";
import cambridge from "./cam.png";
import lingua from "./lingua.png";
import delta from "./delta.png";
import ielts from "./ielts.png";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ExamCard = ({
  title,
  description,
  image,
  borderColor,
  link,
  id,
  info,
}) => {
  const imageSrc = (title) => {
    switch (title) {
      case "TKT":
        return delta;
      case "Delta Module One":
        return delta;
      case "Linguaskill":
        return lingua;
      default:
        return cambridge;
    }
  };

  return (
    <div
      style={{
        borderTop: "4px solid" + borderColor,
        borderRadius: "5px 5px 0 0",
        minHeight: "220px",
        paddingTop: "20px",
        paddingBottom: "10px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className="my-3 grow bg-white px-2 d-flex flex-column position-relative justify-content-between "
    >
      <div className="">
        <h2 style={{ color: borderColor }}>{title}</h2>
        <a
          href={info}
          target="_blank"
          type="button"
          style={{ borderRadius: "20px" }}
          className="btn d-inline-flex  justify-content-center align-items-center btn-outline-info"
          rel="noreferrer"
        >
          <AiOutlineFilePdf className="mx-2" color="red" /> {title} FAQs
        </a>
      </div>
      <Link to={`/${id}`} state={title}>
        <span
          style={{
            bottom: "18px",
            left: "10px",
          }}
          className="badge position-absolute rounded-pill px-4 py-2 bg-primary"
        >
          Register <BsFillArrowRightCircleFill />
        </span>
      </Link>
      <div className="m-0 container d-flex justify-content-end">
        <img
          style={{
            width: "100px",
          }}
          src={imageSrc(title)}
          alt=""
        />
      </div>
    </div>
  );
};

export default ExamCard;
