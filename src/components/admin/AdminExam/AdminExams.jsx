import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../constants/baseurl";
import AdminExamsTable from "./AdminExamsTable";

const AdminExams = () => {
  const [exams, setExams] = useState([]);

  const fetchUsers = async () => {
    axios.get(BASE_URL + "/api/allExams").then((res) => {
      setExams(res.data.exams);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <AdminExamsTable
        head={["No", "Exam type", "Exam Date", "Exam Time", "Price", "Delete"]}
        body={exams}
      />
    </div>
  );
};

export default AdminExams;
