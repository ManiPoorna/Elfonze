/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Assignrole = ({ person }) => {

  // funtion to manage roles
  const sendAssignedRole = async (permission) => {
    // console.log(permission)
    const resp = await fetch(/* some api call to assign role */);
    /*  */
    const data = await resp.json();
  };

  return (
    <div className="application-admin">
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="name">
        <h3>{person}</h3>
      </div>
      <div className="percentage">
        <h4>UI Designer</h4>
      </div>
      <div className="recruit-approve">
        <select onChange={(e)=>sendAssignedRole(e.target.value)} className="dropdown" >
          <option value="">Roles</option>
          <option value="approve">Approve</option>
          <option value="review">Review</option>
          <option value="comment">Comment</option>
        </select>
      </div>
    </div>
  );
}

export default Assignrole