import React from "react";
import style from "./css.module.css";
import inno from "./logo.png";
import {Link} from "react-router-dom";
const AdminCategoryRoutes = () => {
  return (
    <div className={style.body}>
      <div className="container py-5">
        <div className="container">
          <center>
            <img src={inno} style={{ maxWidth: "250px" }} alt="" />
          </center>
        </div>
        <div className="row">

            <div className="col-sm-12 col-md-6 col-lg-4 my-3">
              <Link to={'/admin/create_exam'}>
              <div className={`container ${style.bg_gradient_1}`}>
                <h1 className="text-white text-center">Create exam</h1>
              </div>
              </Link>
            </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-3">
            <Link to={'/admin/exams'}>
              <div className={`container ${style.bg_gradient_2}`}>
                <h1 className="text-white text-center">Exams</h1>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-3">
            <Link to={'/admin/candidates'}>
              <div className={`container ${style.bg_gradient_3}`}>
                <h1 className="text-white text-center">Candidates</h1>
              </div>
            </Link>
          </div>
          <div className="col">
           <Link to={'/admin/arrange_exams'}>
             <div className={`container ${style.bg_gradient_4}`}>
               <h1 className="text-white text-center">Arrange Exams</h1>
             </div>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoryRoutes;
