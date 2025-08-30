import React from 'react'
import { useRecoilState } from 'recoil'
import { $auth } from '../store/auth'
import { Navigate } from 'react-router-dom';

export default function PNotLogin({children}) {

    const [auth] = useRecoilState($auth);
    if(auth.isAuth) return <Navigate to='/' />;
    
  return (
    <div>{children}</div>
  )
}
