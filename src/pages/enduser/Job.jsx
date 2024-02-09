import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import "./enduserStyle.css";

function Job() {
  const navigate = useNavigate();
  const obj = useParams();

  useEffect(() => {
    console.log(obj);
  }, [obj]);

  function handleJobDescClick() {
    navigate("/user/manipoorna/jobs/:jobid");
  }

  return (
    <div className="job-card">
      <div className="top">
        <div onClick={() => handleJobDescClick()} className="left">
          <div className="img"></div>
          <div className="desc">
            <h3>JOB TITILE</h3>
            <p>Working Place</p>
          </div>
        </div>
        <div className="right">
          <button className="btn">Apply</button>
        </div>
      </div>
      <div onClick={() => handleJobDescClick()} className="bottom">
        <div className="position d-flex">
          <div>
            <BusinessCenterIcon />
          </div>
          <div>Software Engineer</div>
        </div>
        <div className="vacancy d-flex">
          <div>
            <AccountCircleIcon />
          </div>
          <div>5 - 10</div>
        </div>
        <div className="package d-flex">
          <div>
            <AccountBalanceWalletIcon />
          </div>
          <div>5,00,000</div>
        </div>
      </div>
    </div>
  );
}

export default Job;
