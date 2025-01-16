import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  CssBaseline,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const [event, setEvent] = useState('');
  const [events, setEvents] = useState([
    'Annual Day Celebration - 2025-02-15',
    'Midterm Exams - 2025-03-01',
    'Sports Week - 2025-04-10',
  ]);

  const handleAddEvent = () => {
    if (event.trim() !== '') {
      setEvents([...events, event]);
      setEvent('');
    }
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
       
       {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f4f4f4' }}>
        <Typography variant="h4" gutterBottom marginTop="30px">
          Manage Upcoming Events
        </Typography>
        <Typography variant="body1" gutterBottom marginBottom="20px">
          Add, edit, or remove upcoming events from this page.
        </Typography>

        <Grid container spacing={3}>
          {/* Event Input */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Add New Event
                </Typography>
                <TextField
                  label="Event Description"
                  variant="outlined"
                  fullWidth
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddEvent}
                >
                  Add Event
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Event List */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Events
                </Typography>
                <List>
                  {events.map((event, index) => (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDeleteEvent(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={event} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Settings;
