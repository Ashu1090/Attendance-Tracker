import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Public Navbar
import Footer from './components/Footer'; // Footer for public pages

// Public Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';

// Admin Pages
import DashboardLayout from './layout/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import Students from './pages/Students';
import Setting from './pages/Setting';
import Attendance from './pages/Attendance';
import Reports from './pages/Reports';
import Logout from './pages/Logout';

// Student Pages
import StudentDashboardLayout from './layout/StudentDashboardLayout'; // Layout for Student Pages
import StudentDashboard from './pages/StudentDashboard';
import StudentAttendance from './pages/StudentAttendance';
import StudentList from './pages/StudentList';
import Manual from './pages/Manual';

// Miscellaneous Pages
const TermsConditions = () => <div>Terms & Conditions Page</div>;

function App() {
  const location = useLocation();

  // Define Admin and Student routes
  const adminPages = ['/admindashboard', '/students', '/attendance', '/setting','/reports'];
  const studentPages = ['/studentdashboard', '/studentattendance', '/studentlist','/manual'];

  // Determine if the current route is part of Admin or Student panel
  const isAdminPage = adminPages.some((path) => location.pathname.startsWith(path));
  const isStudentPage = studentPages.some((path) => location.pathname.startsWith(path));

  // Set page titles dynamically based on the current route
  const getPageTitle = () => {
    if (isAdminPage) {
      switch (location.pathname) {
        case '/students':
          return 'Students';
        case '/attendance':
          return 'Attendance';
        case '/setting':
          return 'Settings';
        case '/reports':
          return 'Reports';
        default:
          return 'Admin Dashboard';
      }
    } else if (isStudentPage) {
      switch (location.pathname) {
        case '/studentattendance':
          return 'Student Attendance';
        case '/studentlist':
          return 'Student List';
        case '/manual':
          return 'Manual Calculation';
        default:
          return 'Student Dashboard';
      }
    }
    return '';
  };

  return (
    <>
      {isAdminPage ? (
        // Admin Layout
        <DashboardLayout title={getPageTitle()}>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </DashboardLayout>
      ) : isStudentPage ? (
        // Student Layout
        <StudentDashboardLayout title={getPageTitle()}>
          <Routes>
            {/* Student Routes */}
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/studentattendance" element={<StudentAttendance />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/manual" element={<Manual />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </StudentDashboardLayout>
      ) : (
        // Public Pages Layout with Navbar and Footer
        <>
          <Navbar /> {/* Public Navbar */}
          <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/logout" element={<Logout />} />

              {/* Footer Routes */}
              <Route path="/terms" element={<TermsConditions />} />
            </Routes>
          </div>
          <Footer /> {/* Footer displayed on public pages */}
        </>
      )}
    </>
  );
}

export default App;
