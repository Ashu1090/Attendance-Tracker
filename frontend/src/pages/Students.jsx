import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import DashboardLayout from '../layout/DashboardLayout';



const Students = () => {
 
  
  const [students, setStudents] = useState([
    { id: 1, name: 'Ajith G', department: 'Bsc CS', rollNo: '22101' },
    { id: 2, name: 'Arasu', department: 'Bsc CS', rollNo: '22102' },
    { id: 3, name: 'Dinesh T', department: 'Bsc CS', rollNo: '22103' },
    { id: 4, name: 'Guna', department: 'Bsc CS', rollNo: '22104' },
    { id: 5, name: 'Hariharan', department: 'Bsc CS', rollNo: '22105' },
    { id: 6, name: 'Hari Krishnan', department: 'Bsc CS', rollNo: '22106' },
    { id: 7, name: 'Lakshmanan', department: 'Bsc CS', rollNo: '22107' },
    { id: 8, name: 'Malik', department: 'Bsc CS', rollNo: '22108' },
    { id: 9, name: 'Mohammed Rafik', department: 'Bsc CS', rollNo: '22109' },
    { id: 10, name: 'Mohammed Ashiq', department: 'Bsc CS', rollNo: '22110' },
  ]);


  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: '', department: 'Bsc CS', rollNo: '' });

  const handleOpen = (student = null) => {
    if (student) {
      setEditMode(true);
      setCurrentId(student.id);
      setNewStudent({ name: student.name, department: student.department, rollNo: student.rollNo });
    } else {
      setEditMode(false);
      setCurrentId(null);
      setNewStudent({ name: '', department: 'Bsc CS', rollNo: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewStudent({ name: '', department: 'Bsc CS', rollNo: '' });
  };

  const handleSave = () => {
    if (editMode) {
      setStudents(
        students.map((student) =>
          student.id === currentId
            ? { ...student, name: newStudent.name, department: newStudent.department, rollNo: newStudent.rollNo }
            : student
        )
      );
    } else {
      setStudents([
        ...students,
        {
          id: students.length + 1,
          name: newStudent.name,
          department: newStudent.department,
          rollNo: newStudent.rollNo,
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  return (
    <DashboardLayout title="Students">
      <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h1>Students</h1>
          <Button variant="contained" color="primary" onClick={() => handleOpen()}>
            Add Student
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Roll No</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleOpen(student)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(student.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editMode ? 'Edit Student' : 'Add New Student'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <Select
              margin="dense"
              fullWidth
              value={newStudent.department}
              onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
            >
              <MenuItem value="Bsc CS">Bsc CS</MenuItem>
              <MenuItem value="Bsc IT">BCA</MenuItem>
              <MenuItem value="Bsc Electronics">Bsc Vis.Com</MenuItem>
            </Select>
            <TextField
              margin="dense"
              label="Roll No"
              type="text"
              fullWidth
              value={newStudent.rollNo}
              onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              {editMode ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Students;