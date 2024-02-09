/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useContext } from 'react'
import { ResumeFlags } from '../../../pages/enduser/Dashboard_User'
import { Skeleton } from '@mui/material';
import ResumeViewer from '../ResumeViewer';

function Resume( { resume } ) {

  const { handleViewerFlag, handleVersionManageFlag } = useContext(ResumeFlags)

  const openViewer = () => {
    localStorage.setItem('resumeid',JSON.parse(resume));
    handleViewerFlag(true);
  }

  const openVersioner = () => {
    localStorage.setItem('resumeid',JSON.parse(resume));
    handleVersionManageFlag(true);
  }

  return (
    <div
      className="resume"
      onClick={ openViewer }
      // onClick={ openVersioner }
    >
      <Skeleton variant="rectangular" width={210} height={118} />
      {/* { resume } */}
    </div>
  );
}

export default Resume