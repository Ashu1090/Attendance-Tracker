import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axios from "axios";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(dayjs());
  const [isWorkingDay, setIsWorkingDay] = useState(true);
  const [reason, setReason] = useState("");
  const [monthlyAttendance, setMonthlyAttendance] = useState([]);

  const fetchAttendance = async (selectedDate) => {
    try {
      const response = await axios.get("/api/attendance", {
        params: { date: selectedDate.format("YYYY-MM-DD") },
      });

      if (response.data.students.length > 0 || !response.data.isWorkingDay) {
        setStudents(response.data.students);
        setIsWorkingDay(response.data.isWorkingDay);
        setReason(response.data.reason);
      } else {
        alert("No attendance details found for the selected date.");
        setStudents([]);
      }
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const handleSaveAttendance = async () => {
    try {
      const attendanceData = {
        date: date.format("YYYY-MM-DD"),
        isWorkingDay,
        reason,
        students,
      };
      await axios.post("/api/attendance", attendanceData);
      alert("Attendance saved successfully!");
    } catch (error) {
      console.error("Error saving attendance:", error);
    }
  };

  const fetchMonthlyAttendance = async (selectedMonth) => {
    try {
      const response = await axios.get("/api/attendance/month", {
        params: { month: selectedMonth },
      });
      setMonthlyAttendance(response.data);
    } catch (error) {
      console.error("Error fetching monthly attendance:", error);
    }
  };

  useEffect(() => {
    fetchAttendance(date);
  }, [date]);

  return (
    <Container sx={{ padding: 3 , marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        Attendance Management
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              views={["year", "month", "day"]}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Reason (if not working day)"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            disabled={isWorkingDay}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isWorkingDay}
                onChange={(e) => setIsWorkingDay(e.target.checked)}
              />
            }
            label="Is Working Day"
          />
        </Grid>
      </Grid>

      <Paper sx={{ marginTop: 3, padding: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Roll Number</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Attendance Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.rollNum}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={student.status}
                          onChange={(e) =>
                            setStudents((prev) =>
                              prev.map((s, i) =>
                                i === index ? { ...s, status: e.target.checked } : s
                              )
                            )
                          }
                        />
                      }
                      label={student.status ? "Present" : "Absent"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveAttendance}
          sx={{ marginTop: 2 }}
        >
          Save Attendance
        </Button>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
        Monthly Attendance
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year", "month"]}
          label="Select Month"
          onChange={(newMonth) => fetchMonthlyAttendance(newMonth.format("YYYY-MM"))}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      <Paper sx={{ marginTop: 3, padding: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Roll Number</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Present Days</TableCell>
                <TableCell>Total Days</TableCell>
                <TableCell>Percentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {monthlyAttendance.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.rollNum}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.presentDays}</TableCell>
                  <TableCell>{student.totalDays}</TableCell>
                  <TableCell>{student.percentage}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Attendance;

