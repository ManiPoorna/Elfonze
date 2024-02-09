/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import UserJobApplication from "./myapplications/UserJobApplication";
import FilterApplications from "./myapplications/FilterApplications";

function MyApplications() {
  // const [applications, setApplicationsList] = useState([]);
  // const [savedapplications, setSavedApplications] = useState([]);
  // const [jobrolefilter, setJobRoleFilter] = useState();
  // const [joblocationfilter, setJobLocationFilter] = useState();
  // const [jobctcfilter, setJobCtcFilter] = useState();
  // const [filterchange, setFilterChange] = useState();

  // //set filters of the appilication
  // const handleJobRoleFilter = (role) => {
  //   setJobRoleFilter(role);
  //   setFilterChange(Math.floor(Math.random() * 100));
  // };
  // const handleJobLocationFilter = (location) => {
  //   setJobLocationFilter(location);
  //   setFilterChange(Math.floor(Math.random() * 100));
  // };
  // const handleJobCtcFilter = (ctc) => {
  //   setJobCtcFilter(ctc);
  //   setFilterChange(Math.floor(Math.random() * 100));
  // };

  // //func call to delete job application applied by user
  // const deleteUserJobApplication = async (application) => {
  //   let templist = [...applications];
  //   templist = templist.filter((item) => {
  //     return item.id !== application.id;
  //   });
  //   setApplicationsList(templist);
  //   setSavedApplications(templist);
  //   const resp = await fetch(/* some api call to delete application */);
  //   const data = await resp.json();
  // };

  // //useEffect with filterchange state

  // //async call in useEffect to fetch job applications applied by user
  // useEffect(() => {
  //   const fetchJobApplications = async () => {
  //     const resp = await fetch(/* some api call to fetch jobapplication */);
  //     const data = await resp.json();
  //     setApplicationsList(data);
  //     setSavedApplications(data);
  //   };
  // }, []);

  const applications = [1,2,3,4,5,6,7,8];


  return (
    <div className="my-applications">
      {/* <FilterApplications /> */}
      <div className="application-status">
        <h1>
          <u>My Applications</u>
        </h1>
        <div className="d-flex select-sort">
          <select className="select" name="" id="">
            <option value="">Jobe Role</option>
            <option value="sde">SDE</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="analyst">Analyst</option>
          </select>
          <select className="select" name="" id="">
            <option value="">CTC</option>
            <option value="below3">Below 3,00,000</option>
            <option value="3to5">3,00,000 - 5,00,000</option>
            <option value="5to8">5,00,000 - 8,00,000</option>
            <option value="above8">Above 8,00,000</option>
          </select>
          <select className="select" name="" id="">
            <option value="">Job Status</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="job-status-application-header">
          <div className="s-no">S.No</div>
          <div className="company-name">Company Name</div>
          <div className="package">Job CTC</div>
          <div className="job-status">Status of Job</div>
        </div>
        {applications.map((application, index) => {
          return (
            <UserJobApplication
              key={index}
              application={application}
              // deleteUserJobApplication={deleteUserJobApplication}
              serialnumber={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyApplications;
