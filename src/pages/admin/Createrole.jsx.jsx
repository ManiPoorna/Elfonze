/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const Rolecard = ({role}) => {
  return (
    <div className="admin-roles">
      <div className="post-section">
        <br />
        <div className="heading">
          <h2>{role} Role</h2>
        </div>
        <br />
        <div className="role-vacancy d-flex">
          <div className="role d-flex">
            <p>Job Role : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
          <div className="vacancy d-flex">
            <p>Vacancy : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
        </div>
        <br />
        <div className="desc">
          Job Description :<br /> <textarea rows={10} cols={70} />
        </div>
        <br />
        <div className="ctc-location d-flex">
          <div className="ctc d-flex">
            <p>CTC : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
          <div className="location d-flex">
            <p>Location : </p>
            <div>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </div>
          </div>
        </div>
        <br />
        <button className="btn">Create</button>
      </div>
    </div>
  );
};

export default Rolecard;
