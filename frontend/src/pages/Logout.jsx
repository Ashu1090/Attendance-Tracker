import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data (e.g., token, role) from localStorage or sessionStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');

    // Redirect to the home page or login page after logout
    navigate('/');
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, color: '#1976d2' }}>
        You have been logged out!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default Logout;
