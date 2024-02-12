/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function UserJobApplication({ application, deleteUserJobApplication,serialnumber }) {
  const [jobstatus, setJobStatus] = useState();
  //async call in useEffect to get application job status
  useEffect(() => {
    const fetchJobStatus = async () => {
      const resp = await fetch(/* some api call to check job status */);
      const data = await resp.json();
      setJobStatus(data);
      console.log("User Application data",data)
    };
  }, []);

  return (
    <div className="job-status-application">
      <div className="s-no">{serialnumber+1}</div>
      <div className="company-name">Frontend Developer</div>
      <div className="package">8LPA</div>
      <div className="job-status">Pending</div>
    </div>
  );
}

export default UserJobApplication;
