import React, { useState } from "react";
import { TextField, Button, Alert, Box, Typography } from "@mui/material";
import axios from "axios";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState({ show: false, message: "", severity: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/forget-password", { email });
            setFeedback({ show: true, message: response.data.message, severity: "success" });
        } catch (error) {
            const errorMessage =
                error.response && error.response.data && error.response.data.error
                    ? error.response.data.error
                    : "An error occurred.";
            setFeedback({ show: true, message: errorMessage, severity: "error" });
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                margin: "auto",
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#fff",
                mt: 10,
            }}
        >
            <Typography variant="h5" sx={{ mb: 2, textAlign: "center", color: "#1976d2" }}>
                Forget Password
            </Typography>
            {feedback.show && <Alert severity={feedback.severity}>{feedback.message}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" fullWidth>
                    Send Reset Link
                </Button>
            </form>
        </Box>
    );
};

export default ForgetPassword;
