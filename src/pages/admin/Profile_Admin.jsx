/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Header from "../../ParentContComponents/Header";

function Profile_Admin({typeOfUser}) {
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
            <div className="left">
              <img src="" alt="" />
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
            <button className="btn">Update Profile</button>
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

export default Profile_Admin