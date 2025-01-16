import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Alert,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // Default role is student
  });
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState({ show: false, message: '', severity: 'info' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, role } = formData;

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role, // Send role to backend
      });

      if (response.status === 201) {
        setFeedback({ show: true, message: 'Signup Successful!', severity: 'success' });
        setTimeout(() => {
          navigate('/'); // Redirect to login page after successful signup
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : 'Signup failed. Please try again.';
      setFeedback({ show: true, message: errorMessage, severity: 'error' });
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 600,
          width: '90%',
          backgroundColor: '#fff',
          marginTop:"-64px",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', color: '#1976d2', fontSize: '2.5rem' }}>
          Signup
        </Typography>
        {feedback.show && <Alert severity={feedback.severity}>{feedback.message}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Role"
            name="role"
            select
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.role}
            onChange={handleChange}
            required
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
            Signup
          </Button>
        </form>
        <Typography variant="h6" textAlign="center">
          Already have an account?{' '}
          <Link href="/" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Signup;
