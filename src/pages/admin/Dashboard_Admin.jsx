/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import Header from "../../ParentContComponents/Header";
import Charts from "../chart/Charts";

function Dashboard_Admin() {
  const navigate = useNavigate();
  const all_roles = [
    ["Task", "Percentage"],
    ["SDE", 5],
    ["Frontend", 2],
    ["Backend", 3],
  ];
  const roles_title = {
    title: "Roles",
  };

  const recruiter_roles = [
    ["Task", "Percentage"],
    ["Approver", 5],
    ["Reviewer", 5],
    ["Commentor", 5],
  ];
  const recruiter_title = {
    title: "Recruiters",
  };

  

  return (
    /* build stats and just insert the data through stats */
    <>
      <Header
        btn1="Manage Requests"
        btn2="My_Profile"
        typeOfBtn="Logout"
        array={["Manage Requests", "My_Profile", "My DashBoard", "Logout"]}
      />
      <div className="admin-statistics">
        <button
          onClick={() => navigate("/admin/adminid/roles/approve")}
          className="btn create-btn">
          Create / Update Job Roles
        </button>
        <Charts data={all_roles} title="Roles" options={roles_title} />
        <Charts
          data={recruiter_roles}
          title="Recruiters created"
          options={recruiter_title}
        />
      </div>
    </>
  );
}
export default Dashboard_Admin;
