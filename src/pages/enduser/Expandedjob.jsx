import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Header from "../../ParentContComponents/Header";

const Expandedjob = () => {

  const onApply = async () => {
    const resp = await fetch(/* some api call to apply for this job */);
    const data = await resp.json();
    console.log("Job Data => ",data)
  };

  


  return (
    <>
      <Header btn1="Find Jobs" btn2="My Dashboard" typeOfBtn="Logout"/>
      <div className="job-card-expanded">
        <div className="top">
          <div className="left">
            <div className="img"></div>
            <div className="desc">
              <h3>JOB TITILE</h3>
              <p>Working Place</p>
            </div>
          </div>
          <div className="right">
            <button onClick={()=>onApply()} className="btn">Apply</button>
          </div>
        </div>
        <div className="bottom">
          <div className="vacancy d-flex">
            <div>
              <AccountCircleIcon />
            </div>
            <div>5 - 10</div>
          </div>
          <div className="package d-flex">
            <div>
              <AccountBalanceWalletIcon />
            </div>
            <div>5,00,000</div>
          </div>
        </div>
        <div className="job-desc">
          <h3>Job Description:</h3>
          <br />
          <p>
            [Company Name] is a leading technology company specializing in
            [brief description of companys focus or industry]. We are committed
            to pushing the boundaries of innovation and delivering high-quality
            solutions to our clients worldwide. As we continue to expand our
            team, we are seeking a talented Software Engineer to join us in
            revolutionizing the way [describe the industry or domain] operates.
          </p>
          <br />
          <h3>Address : </h3>
          <br />
          <p>
            XYZ Building
            <br /> Street No 7 Chikpet
            <br /> Benguluru Karnataka
          </p>
        </div>
      </div>
    </>
  );
};

export default Expandedjob;
