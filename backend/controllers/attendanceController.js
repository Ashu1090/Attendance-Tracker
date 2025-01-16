const Attendance = require('../models/Attendance');

// Create a new attendance record
exports.createAttendance = async (req, res) => {
  try {
    const { roll_no, student_name, date, status, hour, working_day, reason } = req.body;

    const newAttendance = await Attendance.create({
      roll_no,
      student_name,
      date,
      status,
      hour,
      working_day,
      reason,
    });

    res.status(201).json({ message: 'Attendance record created successfully', data: newAttendance });
  } catch (error) {
    console.error('Error creating attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.findAll();
    res.status(200).json(attendanceRecords);
  } catch (error) {
    console.error('Error fetching attendance records:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single attendance record by ID
exports.getAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await Attendance.findByPk(id);

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error fetching attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update an attendance record by ID
exports.updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { roll_no, student_name, date, status, hour, working_day, reason } = req.body;

    const attendance = await Attendance.findByPk(id);

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    await attendance.update({
      roll_no,
      student_name,
      date,
      status,
      hour,
      working_day,
      reason,
    });

    res.status(200).json({ message: 'Attendance record updated successfully', data: attendance });
  } catch (error) {
    console.error('Error updating attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete an attendance record by ID
exports.deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await Attendance.findByPk(id);

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    await attendance.destroy();

    res.status(200).json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
