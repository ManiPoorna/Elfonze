/* eslint-disable react/prop-types */

const Assignrole = ({person}) => {
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
        <select className="dropdown" name="" id="">
          <option value="approve">Roles</option>
          <option value="approve">Approve</option>
          <option value="review">Review</option>
          <option value="comment">Comment</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
}

export default Assignrole