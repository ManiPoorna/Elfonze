/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./adminStyle.css"


const Pendingclient = ({ role1, role2 }) => {
  
  const approveOrDisapprove = async (action) => {
    if (action === "Approve") {
      const resp = await fetch(/* some api call to approve */);
      const data = await resp.json();
    } else {
      const resp = await fetch(/* some api call to approve */);
      const data = await resp.json();
    }
  };

  const manageItem = async (action) => {
    if (action === "Deactivate") {
      const resp = await fetch(/* some api call to deactivate  */);
      const data = await resp.json();
    } else if (action === "activate") {
      const resp = await fetch(/* some api call to activate */);
      const data = await resp.json();
    }
    // Delete btn handle
    else {
      const resp = await fetch(/* some api call to delete */);
      const data = await resp.json();
    }
  };

  function handleClick(role) {
    if (role === "Approve") {
      approveOrDisapprove(role)
    }
    else if (role === "Reject") {
      approveOrDisapprove(role);
    }
    else if (role === "Deactivate") {
      manageItem(role)
    }
    else if (role === "Delete") {
      manageItem(role)
    }
  }

  return (
    <div className="application-admin">
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="name">
        <h3>Recruiter role</h3>
      </div>
      <div className="percentage">
        <h4>UI Designer</h4>
      </div>
      <div className="recruit-approve">
        <button onClick={() => handleClick(role1)} className="btn">
          {role1}
        </button>
        <button onClick={() => handleClick(role2)} className="btn">
          {role2}
        </button>
      </div>
    </div>
  );
}

export default Pendingclient