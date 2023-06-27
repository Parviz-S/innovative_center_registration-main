import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../constants/baseurl";
import AdminTable from "../AdminExam/Edit/Table";
import "./css.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async () => {
    axios.get(BASE_URL + "/api/allUsers").then((res) => {
      console.log(users);
      setUsers(res.data.users);
      setFilteredUsers(res.data.users);
    });
  };

  useEffect(() => {
    fetchUsers();

    console.log("users fetched");
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <input
              type="search"
              placeholder="Search Users"
              value={searchQuery}
              className="searcUser"
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setFilteredUsers(
                  users.filter((user) =>
                    user.first_name
                      .toLowerCase()
                      .includes(event.target.value.toLowerCase())
                  )
                );
                console.log({ filteredUsers });
              }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <input
              type="search"
              placeholder="Search by Exam type"
              value={searchQuery}
              className="searcUser"
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setFilteredUsers(
                  users.filter((user) =>
                    user.exam_type
                      .toLowerCase()
                      .includes(event.target.value.toLowerCase())
                  )
                );
                console.log({ filteredUsers });
              }}
            />
          </div>
        </div>
      </div>
      <AdminTable
        head={[
          "No",
          "First Name",
          "Last Name",
          "Gender",
          "Date of Birth",
          "Region",
          "Phone",
          "Email",
          "Exam Type",
          "Exam Date",
          "Exam Time",
          "Passport",
          "Paid Status",
          "Delete",
        ]}
        body={filteredUsers.length > 0 ? filteredUsers : users}
      />
      {console.log({ users })}
    </div>
  );
};

export default Admin;
