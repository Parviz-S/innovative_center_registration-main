import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import CustomForm from "./components/form/CustomForm";
import IeltsForm from "./components/form/IeltsForm";
import Datatable from "./components/admin/AdminExam/Edit/Table";

import CreateExam from "./components/admin/AdminExam/CreateExam";
import TestForm from "./components/form/TestForm";
import Admin from "./components/admin/AdminCandidate/Admin";
import Navbar from "./components/navbar/Navbar";
import AdminTable from "./components/admin/AdminExam/Edit/Table";
import AdminExams from "./components/admin/AdminExam/AdminExams";
import ExamEdit from "./components/admin/AdminExam/Edit/ExamEdit";
import AdminLogin from "./components/admin login/AdminLogin";
import AdminCategoryRoutes from "./pages/admin/AdminCategoryRoutes";
import ExamsArrangement from "./utils/config/Exams arragement/ExamsArrangement";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import Payment from "./pages/Payment/Payment";
import Arrangement from "./pages/arrangement/Arrangement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/:exam",
    element: <CustomForm />,
  },
  {
    path: "/admin",
    element: (
      <>
        {/* <Navbar /> */}
        <AdminLogin />
      </>
    ),
  },
  {
    path: "/admin/candidates",
    element: (
      <>
        {/* <Navbar /> */}
        <Admin />
      </>
    ),
  },
  {
    path: "/admin/authorized",
    element: (
      <>
        <AdminCategoryRoutes />
      </>
    ),
  },
  {
    path: "/admin/create_exam",
    element: (
      <>
        {/* <Navbar /> */}
        <CreateExam />
      </>
    ),
  },
  {
    path: "/admin/exams",
    element: (
      <>
        <AdminExams />
      </>
    ),
  },
  {
    path: "/admin/arrange_exams",
    element: (
      <>
        <Arrangement />
      </>
    ),
  },
  {
    path: "/admin/exams/edit",
    element: (
      <>
        {/* <Navbar /> */}
        <ExamEdit />
      </>
    ),
  },
  {
    path: "/agree/termsAndConditions",
    element: (
      <>
        <TermsAndConditions />
      </>
    ),
  },
  {
    path: "/payment/howto",
    element: (
      <>
        <Payment />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
