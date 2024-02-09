import Header from "../ParentContComponents/Header";
import Input from "./inputbox/Input";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Header btn1="Home" btn2="Become Recruiter" typeOfBtn="Signup" />
      <div className="signup">
        <h2>
          Login to <span>ReSUMO</span>
        </h2>
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <button
          onClick={() => navigate("/user/manipoorna/dashboard")}
          className="btn signup-btn">
          Login
        </button>
        Dont have an account?
        <button onClick={() => navigate("/signup")} className="btn signup-btn">
          Signup
        </button>
      </div>
    </>
  );
}

export default Login;
