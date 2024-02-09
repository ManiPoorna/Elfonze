/* eslint-disable no-unused-vars */
import Recruitrole from "./Recruitrole";
import Createrole from "./Createrole.jsx";
import { useState } from "react";
import AssignroleList from "./AssignroleList.jsx";
import Header from "../../ParentContComponents/Header.jsx";



function Roles_Admin() {
  // UsuseState for changing form according to role
  const [role, setRole] = useState("create")

  return (
    <>
      <Header
        btn1="Manage Requests"
        btn2="My DashBoard"
        typeOfBtn="Logout"
        array={["Manage Requests", "My_Profile", "My DashBoard", "Logout"]}
      />
      <div className="role-controller">
        <button
          onClick={() => setRole("create")}
          className={role === "create" ? "btn active" : "btn"}>
          Create
        </button>
        <span> </span>
        <button
          onClick={() => setRole("assign")}
          className={role === "assign" ? "btn active" : "btn"}>
          Assign
        </button>
        <span> </span>
        <button
          onClick={() => setRole("manage")}
          className={role === "manage" ? "btn active" : "btn"}>
          Manage
        </button>
      </div>
      {role === "create" ? (
        <Createrole role="Create" />
      ) : role === "assign" ? (
        <AssignroleList />
      ) : role === "manage" ? (
        <>
          <Createrole role="Update" />
          <Recruitrole />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Roles_Admin