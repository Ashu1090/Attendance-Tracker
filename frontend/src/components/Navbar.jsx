import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from localStorage (or sessionStorage)
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Update state based on token presence
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    // Clear authentication data and update state
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to login or home
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/home" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/help" onClick={handleDrawerToggle}>
          <ListItemText primary="Help" />
        </ListItem>
        {isLoggedIn ? (
          <ListItem button onClick={() => { handleDrawerToggle(); handleLogout(); }}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#1976d2', color: '#fff' }}>
        <Toolbar>
          {/* Logo or Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05rem',
            }}
          >
            Attendance Tracker
          </Typography>

          {/* Buttons for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              component={Link}
              to="/home"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                marginLeft: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                marginLeft: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/help"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                marginLeft: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Help
            </Button>
            {isLoggedIn ? (
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginLeft: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginLeft: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>

          {/* Hamburger Menu for smaller screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for smaller screens */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#1a237e',
            color: '#fff',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
