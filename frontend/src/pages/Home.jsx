import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import logo from "/src/images/logo.png";


const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop:"-40px",
        py: 2.5,  
        px: 2,  
        gap: 4,  
      }}
      className="bg-gray-100"
    >
          {/* Welcome Text Section */}
          <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mt: 2, color: "#1976d2" }}
        className="text-gray-700"
      >
      Welcome to Attendance Tracker
      </Typography>
      <Typography
        variant="body1"
        sx={{ mt: 1, mb: 3, fontSize: "1rem", color: "#555" }}
      >
        The easiest way to manage attendance for students, teachers, and administrators.
      </Typography>

      {/* Attendance Content Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 4,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {attendanceFeatures.map((feature, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            sx={{
              maxWidth: 345,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                boxShadow: "0px 8px 16px rgba(135, 206, 235, 0.5)", // Light sky-blue shadow
                transform: "scale(1.05)", // Zooms the card slightly
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={feature.image} // Dynamic image reference
              alt={`${feature.title} image`}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-gray-800 hover:cursor-pointer" // Pointer on hover
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="hover:cursor-pointer" // Pointer on hover
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* CTA Section */}
      <Button
        variant="contained"
        color="primary"
        href="/"
        sx={{ mt: 4 }}
        className="text-white bg-blue-500 hover:bg-blue-700"
      >
        GET STARTED
      </Button>
    </Box>
  );
};

// Attendance Features Data
const attendanceFeatures = [
  {
    title: "Real-Time Attendance Tracking",
    description: "Monitor attendance in real-time with automated systems for students and employees.",
    image: "/src/images/real_time_tracking.jpg", // Local image path
  },
  {
    title: "Analytics and Reporting",
    description: "Generate insightful attendance reports and trends for better decision-making.",
    image: "/src/images/analytics_reporting.jpg", // Local image path
  },
  {
    title: "Multi-User Management",
    description: "Support for admin, teacher, and student roles to streamline attendance processes.",
    image: "/src/images/multi_user_management.jpg", // Local image path
  },
];

export default Home;
