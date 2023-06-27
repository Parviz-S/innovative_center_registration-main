import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/baseurl";

const Arrangement = () => {
  const [staticExams, setStaticExams] = useState("");
  const fetchStaticExams = async () => {
    axios
      .get(BASE_URL + "/arrangement")
      .then((response) => setStaticExams(response.data))
      .catch((err) => console.log(err));
  };
  const changeVisibilityOn = (event) => {
    axios
      .post(BASE_URL + "/arrangement/changeVisibilityOn", { id: event })
      .then((response) => {
        if (response.status === 200 || response.statusText === "OK") {
          window.location.reload();
        }
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const changeVisibilityOff = (event) => {
    axios
      .post(BASE_URL + "/arrangement/changeVisibilityOff", { id: event })
      .then((response) => {
        if (response.status === 200 || response.statusText === "OK") {
          window.location.reload();
        }
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchStaticExams();
  }, []);
  return (
    <div className="container py-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Exam</th>
            <th scope="col">Visibility</th>
            <th scope="col">Visible</th>
            <th scope="col">Not Visible</th>
          </tr>
        </thead>
        <tbody>
          {staticExams.length > 0 &&
            staticExams.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.isVisible ? "Visible" : "Not Visible"}</td>
                <td>
                  <button
                    onClick={() => {
                      changeVisibilityOn(e._id);
                    }}
                    className="btn btn-primary"
                  >
                    Make visible
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      changeVisibilityOff(e._id);
                    }}
                    className="btn btn-danger"
                  >
                    Make invisible
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Arrangement;
