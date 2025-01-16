import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CssBaseline,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = () => {
  const navigate = useNavigate();

  // Data for Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [90, 85, 80, 95, 88],
        backgroundColor: '#1976d2',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Attendance Report',
      },
    },
  };

  // Sample Data for Table
  const rows = [
    { date: '2025-01-01', present: 45, absent: 5 },
    { date: '2025-01-02', present: 43, absent: 7 },
    { date: '2025-01-03', present: 48, absent: 2 },
    { date: '2025-01-04', present: 44, absent: 6 },
    { date: '2025-01-05', present: 46, absent: 4 },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      {/* AppBar */}
     
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f4f4f4', marginTop: '30px' }}>
        <Typography variant="h4" gutterBottom>
          Attendance Reports
        </Typography>
        <Typography variant="body1" gutterBottom marginBottom="20px">
          View detailed attendance reports and analytics below.
        </Typography>

        <Grid container spacing={3}>
          {/* Bar Chart */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Monthly Attendance Overview
                </Typography>
                <Bar data={barData} options={barOptions} />
              </CardContent>
            </Card>
          </Grid>

          {/* Attendance Table */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Daily Attendance Records
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Present</TableCell>
                        <TableCell align="right">Absent</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell align="right">{row.present}</TableCell>
                          <TableCell align="right">{row.absent}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Reports;
