import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1976d2', // Matches Navbar color
        color: 'white',
        py: 2,
        mt: 'auto', // Pushes footer to the bottom
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; {new Date().getFullYear()} Attendance Tracker. All rights reserved.
        </Typography>
        <Link href="/terms" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'lightblue' } }}>
          Terms & Conditions
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
