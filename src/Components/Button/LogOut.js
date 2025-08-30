import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { $auth } from '../store/auth';

export default function LogOut() {
  const [auth, setAuth] = useRecoilState($auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ isAuth: false, user: null });
    localStorage.removeItem('logged in');
    navigate('/login');
  };

  return (
    <button className="btn btn-danger w-100" onClick={handleLogout}>
      Log Out
    </button>
  );
}