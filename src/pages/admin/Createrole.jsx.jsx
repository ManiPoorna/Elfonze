/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const Rolecard = ({ role }) => {
  const [assignRolesList, setAssignRolesList] = useState([]);

  function handleUpdateOrCreateRole(role) {
    if (role === "Create") {
      // Function to create role
      const onCreateRole = async () => {
        const resp = await fetch(" ", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(createroleobj),
        });
        const data = await resp.json();
      }
    } else if (role === "Update") {
      // Function to update role
      const updateRoleObj = async () => {
        const resp = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(roleobj),
        });
        const data = await resp.json();
      };
    }
  }


  function handledeleteRole(){
    const deleteRoleObj = async () => {
      const resp = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roleobj),
      });
      const data = await resp.json();
    };
  }

  const fetchAssignRolesList = async () => {
    const resp = await fetch(/* some api call to fetchroles */);
    const data = resp.json();
    setAssignRolesList(data);
  };

  useEffect(() => {
    // fetchAssignRolesList();
  }, []);

  return (
    <div className="admin-roles">
      <div className="post-section">
        <br />
        <div className="heading">
          <h2>{role} Role</h2>
        </div>
        <br />
        <div className="role-vacancy d-flex">
          {role === "Update" ? (
            <div>
              <p>Job Role : </p>
              <select name="job-role-update" id="job-role-update">
                <option value="sde">SDE</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="analyst">Analyst</option>
              </select>
            </div>
          ) : (
            ""
          )}
          <div className="role d-flex">
            <p>Job Role : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
          <div className="vacancy d-flex">
            <p>Vacancy : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
        </div>
        <br />
        <div className="desc">
          Job Description :<br /> <textarea rows={10} cols={70} />
        </div>
        <br />
        <div className="ctc-location d-flex">
          <div className="ctc d-flex">
            <p>CTC : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
          <div className="location d-flex">
            <p>Location : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
        </div>
        <br />
        <button onClick={() => handleUpdateOrCreateRole()} className="btn">
          {role}
        </button>
        <span> </span>
        {role === "Update" ? (
          <button onClick={() => handledeleteRole()} className="btn">
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Rolecard;
