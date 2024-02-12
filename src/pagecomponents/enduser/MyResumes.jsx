/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Resume from "./myresumecomp/Resume";


// const [resumelist, setReusmeList] = useState([]);

function MyResumes() {


  // //async useeffect call at mount
  useEffect(() => {
    const fetchResumes = async () => {
      const response = await fetch(/* someapicall/resumes */);
      const data = await response.json();
      setReusmeList(data);
    };
    //fetchResumes();
  }, []);


  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // const file = event.target.files[0];
    formData.append("file", file);

    //http: localhost:8080/upload
    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const resumelist = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  return (
    <div className="my-resumes">
      <div className="head d-flex">
        <h1>
          <u>My Resumes</u>
        </h1>
        {/* Resme Upload btn */}
        <div>
          <div>
          </div>
          <form id="uploadForm" encType="multipart/form-data">
            <label className="btn input-btn" htmlFor="upload-resume">
              Add Resume
            </label>
            <span> </span>
            <input onChange={handleUpload} style={{display:"none"}} id="upload-resume" type="file" />        
            <button className="btn" type="submit">
              Upload
            </button>
          </form>
        </div>
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
