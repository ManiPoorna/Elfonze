/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Header from "../../ParentContComponents/Header";
import { useEffect,useState } from "react";

function Profile_Admin({ typeOfUser }) {

  const [message, setMessage] = useState();


  const fetchUserDetails = async () => {
    const resp = await fetch(" ");
    const data = await resp.json();
  };


  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append("file", file);

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



  useEffect(() => {
    fetchUserDetails();
  }, []);

  const updateDetails = async () => {
    const resp = await fetch(" ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(""),
    });
    const data = await resp.json();
  };

  return (
    <>
      <Header
        btn2="Manage Requests"
        btn1="My DashBoard"
        typeOfBtn="Logout"
        array={["Manage Requests", "My_Profile", "My DashBoard", "Logout"]}
      />
      <div className="profile-page">
        <div className="user-details">
          <div className="top">
            <div className="image">
              <div className="left">
                <img src="" alt="" />
              </div>
              <form id="uploadForm" encType="multipart/form-data">
                <label className="btn input-btn" htmlFor="upload-resume">
                  Select Profile
                </label>
                <span> </span>
                <input
                  onChange={handleUpload}
                  style={{ display: "none" }}
                  id="upload-resume"
                  type="file"
                />
                <button className="btn" type="submit">
                  Upload
                </button>
              </form>
            </div>
            <div className="right">
              <div className="greeting">
                <h1>Welcome {typeOfUser}..!</h1>
                <TextField
                  label="User Name..."
                  id="outlined-basic"
                  variant="outlined"></TextField>
              </div>
            </div>
          </div>
          <div className="bottom">
            <TextField
              label="Expected CTC"
              id="outlined-basic"
              variant="outlined"
              type="number"
            />
            <TextField
              label="Expected Job Role"
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              label="Location"
              id="outlined-basic"
              variant="outlined"
            />
            <button onClick={() => updateDetails()} className="btn">
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <div className="delete-account d-flex">
        <h3>Delete My Profile</h3>
        <button className="btn">Delete</button>
      </div>
    </>
  );
}

export default Profile_Admin;
