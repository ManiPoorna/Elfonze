import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Application = () => {
  return (
    <>
      <div className="application">
        <div className="checkbox">
          <input type="checkbox" />
        </div>
        <div className="name">
          <h3>User Name</h3>
        </div>
        <div className="percentage">
          <h4>75%</h4>
        </div>
        <div className="approve">
          <p>Approver, Commenter</p>
        </div>
        <div className="view-resume">
          <RemoveRedEyeIcon className="eye-icon" fontSize="small" />
          <button className="btn">Approve, Comment, Review</button>
        </div>
      </div>
    </>
  );
};

export default Application;
