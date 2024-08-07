import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({children, authentication = true}) {
    const [loader, setLoader] = useState(true);
    const authStatus = useDispatch(state => state.auth.status)
    const navigate  = useNavigate()

    useEffect(()=>{
        if(authentication && authentication !== authStatus){
            navigate('/login')
        }
        else if(!authentication && authentication && authStatus){
            navigate('/');
        }
        setLoader(false);
    }, [navigate, authStatus, authentication])
  
    return (
        loader? <h1>Loading....</h1> : <>{children}</>
  )
}