/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

function ProtectedRoutes( { Comp } ) {

    const [ user, setUser ] = useState(true);

  
    /* useEffect(() => {
        setUser(useAuth());
    },[]) */

  return (
    user ? <> { Comp } </> : <>Login </>
  )
}

export default ProtectedRoutes