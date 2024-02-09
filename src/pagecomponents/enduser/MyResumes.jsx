/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Resume from "./myresumecomp/Resume";


function MyResumes() {
  // const [resumelist, setReusmeList] = useState([]);
  // //async useeffect call at mount
  // useEffect(() => {
  //   const fetchResumes = async () => {
  //     const response = await fetch(/* someapicall/resumes */);
  //     const data = await response.json();
  //     setReusmeList(data);
  //   };
  //   //fetchResumes();
  // }, []);

  const resumelist = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  return (
    <div className="my-resumes">
      <div className="head d-flex">
        <h1>
          <u>My Resumes</u>
        </h1>
        <button className="btn upload-btn">+</button>
      </div>
      <div className="all-resumes">
        {resumelist.map((resume, index) => {
          return <Resume key={index} resume={resume} />;
        })}
      </div>
      {/* upload resume btn */}
    </div>
  );
}

export default MyResumes;
