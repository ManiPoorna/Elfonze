/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useContext,useState } from 'react'
import { ResumeFlags } from '../../../pages/enduser/Dashboard_User'
import { Skeleton } from '@mui/material';
import ResumeViewer from '../ResumeViewer';

function Resume({ resume }) {
  const [message,setMessage] = useState()
  const { handleViewerFlag, handleVersionManageFlag } = useContext(ResumeFlags)

  // 
 const downloadResume = async () => {
   const pdfUrl = ""; // Replace '1' with the correct ID
   try {
     const response = await fetch(pdfUrl);
     const blob = await response.blob();
     const url = window.URL.createObjectURL(blob);
     const a = document.createElement("a");
     a.href = url;
     a.download = "document.pdf"; // Specify the file name here
     document.body.appendChild(a);
     a.click();
     window.URL.revokeObjectURL(url);
     setMessage("PDF downloaded successfully");
   } catch (error) {
     console.error("Error downloading PDF:", error);
     setMessage("Failed to download PDF");
   }
 };


  return (
    <div className="resume" onClick={ ()=>downloadResume()}>
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
  );
}

export default Resume