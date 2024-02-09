import Header from "../../ParentContComponents/Header";
import Application from "./Application"

function Roles_Client() {
  const applications = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
  return (
    <>
      <Header
        btn1="My Dashboard(C)"
        btn2="My Profile(C)"
        typeOfBtn="Logout"
        array={[
          "My Dashboard(C)",
          "My Profile(C)",
          "Pending Applications",
          "Logout",
        ]}
      />
      <div className="client-roles">
        {
          applications && applications.map((application, index) => (
            <Application key={index} />
          ))
        }
      </div>
      {/* <div className="application-footer">
        <div className="left">
          <h2>Job Role :</h2>
          <select>
            <option value="all">All</option>
            <option value="sde">SDE</option>
            <option value="frontend">FrontEnd</option>
            <option value="backend">Backend</option>
            <option value="analyst">Analyst</option>
          </select>
        </div>
        <div className="btns">
          <div className="btn">Approve</div>
          <div className="btn">Reviewed</div>
          <div className="btn">Comment</div>
        </div>
      </div> */}
    </>
  );
}

export default Roles_Client