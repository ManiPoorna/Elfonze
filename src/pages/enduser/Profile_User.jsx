import { TextField } from '@mui/material';
import { useEffect } from 'react'

import { useParams } from 'react-router-dom';
import Header from '../../ParentContComponents/Header';

function Profile_User() {

    const obj = useParams();

    useEffect(() => {
        console.log(obj);
    },[ obj ]);

  return (
    <>
      <Header
        btn1="Find Jobs"
        btn2="My Dashboard"
        typeOfBtn="Logout"
        array={["Find Jobs", "My Profile", "My Dashboard", "Logout"]}
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

export default Profile_User