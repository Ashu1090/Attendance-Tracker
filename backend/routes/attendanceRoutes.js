const express = require("express");
const router = express.Router();

let attendanceRecords = [
  {
    date: "2025-01-02",
    isWorkingDay: true,
    reason: "",
    students: [
      { name: "John Doe", rollNum: "101", department: "CS", status: true },
      { name: "Jane Smith", rollNum: "102", department: "IT", status: false },
      { name: "Alice Johnson", rollNum: "103", department: "ME", status: true },
    ],
  },
  {
    date: "2025-01-03",
    isWorkingDay: true,
    reason: "",
    students: [
      { name: "John Doe", rollNum: "101", department: "CS", status: true },
      { name: "Jane Smith", rollNum: "102", department: "IT", status: true },
      { name: "Alice Johnson", rollNum: "103", department: "ME", status: false },
    ],
  },
  {
    date: "2025-01-04",
    isWorkingDay: false,
    reason: "Sunday",
    students: [],
  },
];

// Save attendance data
router.post("/", (req, res) => {
  const { date, isWorkingDay, reason, students } = req.body;

  const existingRecordIndex = attendanceRecords.findIndex((record) => record.date === date);
  if (existingRecordIndex !== -1) {
    attendanceRecords[existingRecordIndex] = { date, isWorkingDay, reason, students };
  } else {
    attendanceRecords.push({ date, isWorkingDay, reason, students });
  }

  res.status(201).send({ message: "Attendance saved successfully!" });
});

// Fetch attendance data by date
router.get("/", (req, res) => {
  const { date } = req.query;
  const record = attendanceRecords.find((record) => record.date === date);

  if (record) {
    res.send(record);
  } else {
    res.status(404).send({ message: "No attendance details found for the selected date.", students: [] });
  }
});

// Fetch attendance data by month
router.get("/month", (req, res) => {
  const { month } = req.query;
  const filteredRecords = attendanceRecords.filter((record) => record.date.startsWith(month));

  const monthlyAttendance = filteredRecords.reduce((acc, record) => {
    record.students.forEach((student) => {
      if (!acc[student.rollNum]) {
        acc[student.rollNum] = { name: student.name, rollNum: student.rollNum, presentDays: 0, totalDays: 0 };
      }
      if (record.isWorkingDay) {
        acc[student.rollNum].totalDays += 1;
        if (student.status) acc[student.rollNum].presentDays += 1;
      }
    });
    return acc;
  }, {});

  const results = Object.values(monthlyAttendance).map((student) => ({
    ...student,
    percentage: ((student.presentDays / student.totalDays) * 100).toFixed(2),
  }));

  res.send(results);
});

module.exports = router;
// Compare this snippet from frontend/src/pages/AttendanceDashboard.jsx: