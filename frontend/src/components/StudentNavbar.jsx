import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const StudentNavbar = ({ mobileOpen, handleDrawerToggle }) => {
  const navItems = [
    { text: 'StudentDashboard', path: '/studentdashboard' },
    { text: 'StudentAttendance', path: '/studentattendance' },
    { text: 'StudentList', path: '/studentlist' },
    { text: 'ManualCaculation', path: '/manual' },
    { text: 'Logout', path: '/logout' },
  ];

  return (
    <>
      {/* Drawer for All Screen Sizes */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Improves performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default StudentNavbar;
