/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "../../ParentContComponents/Header";
import Pendingclient from "./Pendingclient";

function Clients() {
  const [type, setType] = useState("approve");
  const clientReq = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <>
      <Header
        btn1="My DashBoard"
        btn2="My_Profile"
        typeOfBtn="Logout"
        array={["Manage Requests", "My_Profile", "My DashBoard", "Logout"]}
      />
      <div className="admin-page">
        <button
          onClick={() => setType("approve")}
          className={type === "approve" ? "btn active" : "btn"}>
          Approve
        </button>{" "}
        <span></span>
        <button
          onClick={() => setType("manage")}
          className={type === "manage" ? "btn active" : "btn"}>
          Manage
        </button>
        <div className="roles-admin">
          {type && type === "approve"
            ? clientReq.map((client, index) => (
                <Pendingclient key={index} role1="Approve" role2="Reject" />
              ))
            : clientReq.map((client, index) => (
                <Pendingclient key={index} role1="Deactivate" role2="Delete" />
              ))}
        </div>
      </div>
    </>
  );
}

export default Clients;
