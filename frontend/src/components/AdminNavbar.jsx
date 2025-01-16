import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function AdminNavbar({ title }) {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1976d2', color: '#fff' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AdminNavbar;



