import React, { useState } from "react";
import { Typography, Box, Paper, Fab, Modal, TextField, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const Help = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => setIsChatOpen(true);
  const handleChatClose = () => setIsChatOpen(false);

  return (
    <div
      style={{
        padding: "20px 40px",
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Help Section */}
      <Box>
        <Typography
          variant="h4"
          align="center"
          style={{
              color: "#1976d4",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "-40px",
          }}
        >
          Help & Support
        </Typography>

        {/* How to Use Section */}
        <Box
          className="bg-white p-5 rounded-lg shadow-lg"
          style={{
            margin: "20px 0",
            padding: "30px",
            background: "linear-gradient(to bottom, #ffffff, #f0f8ff)",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "#4FC3F7",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            How to Use the Attendance Tracker
          </Typography>
          <Typography variant="body1" style={{ lineHeight: "1.8", color: "#333" }}>
            1. **Sign Up**: Create an account using your email address and set up a
            secure password.<br />
            2. **Login**: Access your dashboard with your credentials.<br />
            3. **Manage Attendance**:
            <ul style={{ paddingLeft: "20px" }}>
              <li>Admins can add or remove users and view attendance records.</li>
              <li>Students can view their attendance reports.</li>
            </ul>
         
          </Typography>
        </Box>

        {/* FAQ Section */}
        <Box
          className="bg-white p-5 rounded-lg shadow-lg"
          style={{
            margin: "20px 0",
            padding: "30px",
            background: "#f9f9f9",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "#4FC3F7",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" style={{ lineHeight: "1.8", color: "#333" }}>
            <strong>Q: How can I reset my password?</strong>
            <br />
            A: Click on "Forgot Password" on the login page and follow the instructions sent to your email.
            <br />
            <br />
            <strong>Q: Can I track attendance for multiple classes?</strong>
            <br />
            A: Yes! Our application allows you to manage multiple classes and sections with ease.
          </Typography>
        </Box>

        {/* Contact Us Section */}
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
              color: "#1976d4",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "10px",
            }}
          >
            Have questions? Email us at:{" "}
            <a href="mailto:support@attendancetracker.com" style={{ color: "#4FC3F7" }}>
              support@attendancetracker.com
            </a>
          </Typography>
        </Box>
      </Box>

      {/* Chatbot Icon */}
      <Fab
        color="primary"
        aria-label="chat"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#4FC3F7",
        }}
        onClick={handleChatOpen}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Modal */}
      <Modal open={isChatOpen} onClose={handleChatClose}>
        <Box
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "300px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "#4FC3F7",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Chat Support
          </Typography>
          <TextField
            placeholder="Type your message..."
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4FC3F7",
              color: "#fff",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Help;
