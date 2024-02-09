/* eslint-disable react/prop-types */
import "./adminStyle.css"


const Pendingclient = ({role1,role2}) => {
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
        <button className="btn">{role1}</button>
        <button className="btn">{ role2}</button>
      </div>
    </div>
  );
}

export default Pendingclient