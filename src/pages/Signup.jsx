/* eslint-disable no-unused-vars */
import Input from "./inputbox/Input";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import Header from "../ParentContComponents/Header";


function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <Header btn1="Home" btn2="Become Recruiter" typeOfBtn="Login" />
    <div className="signup">
      <h2>
        Signup to <span>ReSUMO</span>
      </h2>
      <Input className="input" type="text" label="User Name" />
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <Input type="password" label="Confirm Password" />
      <button onClick={() => navigate("/login")} className="btn signup-btn">
        Signup
      </button>
      Already have an account? <br />
      <button onClick={() => navigate("/login")} className="btn signup-btn">
        Login
      </button>
      <p></p>
    </div>
    </>
  );
}

export default Signup;
