import React from "react";
import { Typography, Box, Divider } from "@mui/material";

const About = () => {
  return (
    <div
      className="bg-gray-100"
      style={{
        padding: "20px 40px", // Add padding to avoid sticking to window edges
        minHeight: "calc(100vh - 150px)", // Fit neatly between navbar and footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* About Us Section */}
      <Box>
        <Typography
          variant="h4"
          align="center"
          style={{
            color: "#1976c7",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "-40px", // Space from navbar
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: "#333",
            lineHeight: "1.6",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
         Welcome to the Attendance Tracker Web Application!

Our mission is to simplify attendance management and ensure data accuracy with an intuitive interface designed for all users, including administrators, teachers, and students. This application empowers you to manage attendance effortlessly, streamlining processes and saving valuable time.

Key Features of the Attendance Tracker Web App
Student Management

Add new students with essential details like name, roll number, and contact information.
Edit or update student records easily in case of changes.
Remove inactive or graduated students from the system.

        </Typography>
      </Box>

      {/* Meet Our Team Section */}
      <Box
        className="bg-white p-5 rounded-lg shadow-lg"
        style={{
          margin: "20px 0",
          padding: "30px",
          textAlign: "center",
          background: "linear-gradient(to bottom, #ffffff, #f0f8ff)",
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "#1976d2",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Meet Our Team
        </Typography>
        <ul
          className="list-none"
          style={{
            padding: "0",
            margin: "0",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            color: "#555",
          }}
        >
          <li>
            <strong>Mohammed Ashiq</strong> (Creator)
          </li>
          <li>
            <strong>Ajith</strong> (Co-worker)
          </li>
          <li>
            <strong>Naga Dhanush</strong> (Co-worker)
          </li>
        </ul>
      </Box>

      {/* Additional Design */}
      <Box className="text-center mt-10">
        <Typography
          variant="body2"
          style={{
            fontStyle: "italic",
            color: "#777",
            marginTop: "20px",
          }}
        >
          "Efficiency and simplicity at your fingertips!"
        </Typography>
        <Divider
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#4FC3F7",
          }}
        />
        <Typography variant="caption" style={{ color: "#333" }}>
          
        </Typography>
      </Box>
    </div>
  );
};

export default About;
