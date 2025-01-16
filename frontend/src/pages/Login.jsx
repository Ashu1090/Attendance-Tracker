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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState({ show: false, message: '', severity: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

        if (response.status === 200) {
            setFeedback({ show: true, message: "Login Successful!", severity: "success" });
            localStorage.setItem("token", response.data.token); // Save JWT token
            localStorage.setItem("role", response.data.role);  // Save role for redirection
            setTimeout(() => {
                // Redirect based on role
                if (response.data.role === "admin") {
                    navigate("/admindashboard");
                } else {
                    navigate("/studentdashboard");
                }
            }, 2000);
        }
    } catch (error) {
        const errorMessage =
            error.response && error.response.data && error.response.data.error
                ? error.response.data.error
                : "Login failed. Please try again.";
        setFeedback({ show: true, message: errorMessage, severity: "error" });
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
          marginTop:"-150px",
          marginBottom: "-50px"
         
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', color: '#1976d2' ,fontSize: "2.5rem" }}>
          Login
        </Typography>
        {feedback.show && <Alert severity={feedback.severity}>{feedback.message}</Alert>}
        <form onSubmit={handleSubmit}>
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
          <Typography variant="body2" sx={{ textAlign: 'left', mb: 2 }}>
            <Link href="/forgot-password" underline="hover">
              Forgot Password?
            </Link>
          </Typography>
          <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
            Login
          </Button>
        </form>
        <Typography variant="h6" textAlign="center">
          Don't have an account?{' '}
          <Link href="/Register" underline="hover">
            Signup
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Login;
