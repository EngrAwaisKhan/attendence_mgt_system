import React from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();

  const gotoRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const gotoLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="content">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Attendence Management System</h1>
      <Button type="button" onClick={gotoRegister}>
        Register
      </Button>{' '}
      ||
      <Button type="button" onClick={gotoLogin}>
        Login
      </Button>
    </div>
  );
}
