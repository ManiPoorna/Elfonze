import Header from "../../ParentContComponents/Header";
import Charts from "../chart/Charts";

function Dashboard_Client() {
  const applicants = [
    ["Task", "Percentage"],
    ["Approved", 5],
    ["Reviewed", 2],
    ["Commented", 3],
  ];
  const applicant_title = {
    title: "Job Applicants",
  };

  const action_roles = [
    ["Task", "Percentage"],
    ["Rejected", 5],
    ["Sent Request", 5],
  ];
  const action_title = {
    title: "Actions",
  };
  return (
    <>
      <Header btn2="My Profile(C)" btn1="Pending Applications" typeOfBtn="Logout"
      array={["My Dashboard(C)","My Profile(C)","Pending Applications","Logout"]}
      />
    <div className="admin-statistics">
      <Charts
        data={applicants}
        title="Job Applicants"
        options={applicant_title}
        />
      <Charts data={action_roles} title="Actions" options={action_title} />
    </div>
        </>
  );
}

export default Dashboard_Client;
