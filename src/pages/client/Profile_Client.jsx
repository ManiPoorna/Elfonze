import { TextField } from "@mui/material";
import "./clientStyle.css";
import Header from "../../ParentContComponents/Header";

function Profile_Client() {
  return (
    <>
      <Header
        btn1="My Dashboard(C)"
        btn2="Pending Applications"
        typeOfBtn="Logout"
        array={[
          "My Dashboard(C)",
          "My Profile(C)",
          "Pending Applications",
          "Logout",
        ]}
      />
      <div className="profile-page">
        <div className="user-details">
          <div className="top">
            <div className="left">
              <img src="" alt="" />
            </div>
            <div className="right">
              <div className="greeting">
                <h1>Welcome User..!</h1>
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

export default Profile_Client;
