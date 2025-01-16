import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function SideNavbar({ mobileOpen, handleDrawerToggle }) {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          bgcolor: '#f4f4f4',
          color: '#fff',
          marginTop: '64px', // Pushes the Drawer below the AdminNavbar
          height: 'calc(100vh - 64px)', // Makes the Drawer height fit the remaining screen space
        },
      }}
    >
      <Box>
        <List>
          <ListItem
            component={Link}
            to="/admindashboard"
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            component={Link}
            to="/students"
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem
            component={Link}
            to="/attendance"
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText primary="Attendance" />
          </ListItem>
          <ListItem
            component={Link}
            to="/setting"
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem
            component={Link}
            to="/reports"
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default SideNavbar;
