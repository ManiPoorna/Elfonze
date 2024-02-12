/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

const Application = () => {

  const [userList, setUserList] = useState();
  const [message, setMessage] = useState("");

  const performAction = async (value) => {
    const resp = await fetch(/* some api call to check permission */);
    const data = await resp.json();
  };

  const checkPermission = async () => {
    const resp = await fetch(/* some api call to check permission */);
    const data = await resp.json();
    setUserList(data);
  };

  const getPdf = async () => {
        const pdfUrl = "" // Replace '1' with the correct ID
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'document.pdf'; // Specify the file name here
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            setMessage('PDF downloaded successfully');
        } catch (error) {
            console.error('Error downloading PDF:', error);
            setMessage('Failed to download PDF');
        }
    };

  useEffect(() => {
    // checkPermission();
  }, []);



  return (
    <>
      <div className="application">
        <div className="name">
          <h3>User Name</h3>
        </div>
        <div className="percentage">
          <h4>75%</h4>
        </div>
        <div className="approve">
          <p>Approver, Commenter</p>
        </div>
        <div className="view-resume">
          <DownloadIcon
            onClick={() => getPdf()}
            className="eye-icon"
            fontSize="small"
          />
          <button
            onClick={(e) => performAction(e.target.value)}
            className="btn">
            Approve, Comment, Review
          </button>
        </div>
      </div>
    </>
  );
};

export default Application;
