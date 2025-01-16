import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Box, Grid, Paper, Card, CardContent, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import SideNavbar from '../components/SideNavbar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Data for Pie Chart
  const pieData = {
    labels: ['Students Present', 'Students Absent'],
    datasets: [
      {
        label: 'Attendance',
        data: [75, 25],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#e57373'],
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [90, 0, 0, 0, 0],
        backgroundColor: '#2196f3',
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#1976d2' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SideNavbar */}
      <SideNavbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 3 },
          bgcolor: '#f4f4f4',
          minHeight: '100vh',
          marginTop: '30px',
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Welcome to the Admin Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom marginBottom="20px" textAlign="center"> 
          Here is an overview of the attendance data and system insights.
        </Typography>

        {/* Dashboard Content */}
        <Grid container spacing={3}>
          {/* Pie Chart Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Attendance Overview
                </Typography>
                <Pie data={pieData} />
              </CardContent>
            </Card>
          </Grid>

          {/* Bar Chart Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Monthly Attendance
                </Typography>
                <Bar data={barData} />
              </CardContent>
            </Card>
          </Grid>

          {/* Stats and Actions */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Stats
                </Typography>
                <Typography variant="body2">Total Students: 500</Typography>
                <Typography variant="body2">Active Classes: 10</Typography>
                <Typography variant="body2">Average Attendance: 85%</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  startIcon={<TrendingUpIcon />}
                  onClick={() => navigate('/reports')}
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Settings Shortcut */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Settings
                </Typography>
                <Typography variant="body2">Manage your preferences and system settings.</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2 }}
                  startIcon={<SettingsIcon />}
                  onClick={() => navigate('/setting')}
                >
                  Go to Settings
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Announcements Section */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Announcements
                </Typography>
                <Typography variant="body2">New policy updates are available. Check them now!</Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2">Upcoming event: Annual Day on March 10th.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
