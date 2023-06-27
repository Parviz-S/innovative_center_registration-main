import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { BASE_URL } from "../../../constants/baseurl";

function AdminExamsTable({ head = [], body = [] }) {
  // const [dColor, setDcolor] = useState("#e96479");
  const delete_exam = (exam_id) => {
    console.log(exam_id);
    axios
      .post(BASE_URL + "/api/delete_ielts_exam", { exam_id })
      .then((response) => {
        const { status } = response.data;
        if (status === "deleted") {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const delete_ielts_exam = (exam_id) => {
    console.log(exam_id);
    axios
      .post(BASE_URL + "/api/delete_ielts_exam", { exam_id })
      .then((response) => {
        const { status } = response.data;
        console.log(response.data);
        if (status === "deleted") {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container-fluid table-container my-5">
        <table
          style={{
            borderRadius: "10px",
          }}
          className="table  table-hover "
        >
          <thead className="text-bg-info rounded-2">
            <tr>
              {head.map((header, i) => {
                return (
                  <th
                    key={i}
                    style={{
                      textAlign: header === "Delete" ? "center" : "left",
                    }}
                    scope="col"
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {body.map((b, i) => {
              console.log(b);
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{b.exam_type}</td>
                  <td>{b.exam_date}</td>
                  <td>{b.exam_time}</td>
                  <td>{b.price || "Not provided"} UZS </td>
                  {b.exam_type === "IELTS Mock" ? (
                    <td className="">
                      <center>
                        <MdDelete
                          onClick={() => {
                            delete_ielts_exam(b._id);
                          }}
                          color={"red"}
                          size={30}
                        />
                      </center>
                    </td>
                  ) : (
                    <td className="">
                      <center>
                        <MdDelete
                          onClick={() => {
                            delete_exam(b._id);
                          }}
                          color={"red"}
                          size={30}
                        />
                      </center>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {body.length === 0 && (
          <center>
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </center>
        )}
      </div>
    </>
  );
}

export default AdminExamsTable;
