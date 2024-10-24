import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid2, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();

      if (session?.session) {
        setUser(session.session.user); // Get user info from session
      }
    };

    getSession();
  }, []);

  if (!user) return <CircularProgress />;

  return (
    <Grid2 container spacing={4} style={{ padding: '20px' }}>
      {/* Welcome Message */}
      <Grid2 item xs={12} style={{}}>
        <Paper 
          elevation={3} 
          style={{
            padding: '24px',
            background: 'linear-gradient(to top, #BBE6E4, #BBE6E4)', // Light turquoise
            border: '2px solid #327f92' // Teal border for alignment with login page
          }}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 600, color: '#327f92' }}>
            Welcome, [Patient Name]!
          </Typography>
          <Typography variant="body1" style={{ color: '#4f4f4f' }}>
            Here’s an overview of your health information and upcoming appointments.
          </Typography>
        </Paper>
      </Grid2>

      {/* Quick Links - Appointments */}
      <Grid2 item xs={12} md={6}>
        <Paper 
          elevation={2} 
          style={{
            padding: '24px',
            background: 'linear-gradient(to top, #BBE6E4, #f5f5f5)', // Gradient matching login colors
            border: '2px solid #327f92' // Teal border
          }}>
          <Typography variant="h5" gutterBottom style={{ color: '#327f92' }}>
            Upcoming Appointments
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px' }}>
            View and manage your upcoming appointments.
          </Typography>
          <Button
            component={Link}
            variant="outlined"
            color="primary"
            fullWidth
            to="/portal/appointments"
            style={{
                marginTop: '16px',
                borderRadius: '8px',
                padding: '12px',
                textTransform: 'none',
                fontWeight: 500,
                backgroundColor: '#327f92', // Teal button background
                color: '#fff'
              }}
          >
            View Appointments
          </Button>
        </Paper>
      </Grid2>

      {/* Quick Links - Medical Records */}
      <Grid2 item xs={12} md={6}>
        <Paper 
          elevation={2} 
          style={{
            padding: '24px',
            background: 'linear-gradient(to top, #BBE6E4, #f5f5f5)', // Consistent with login
            border: '2px solid #327f92'
          }}>
          <Typography variant="h5" gutterBottom style={{ color: '#327f92' }}>
            Medical Records
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px' }}>
            Access your medical records and test results.
          </Typography>
          <Button
            component={Link}
            variant="outlined"
            color="secondary"
            fullWidth
            to="/portal/medical-records"
            style={{
                marginTop: '16px',
                borderRadius: '8px',
                padding: '12px',
                textTransform: 'none',
                fontWeight: 500,
                backgroundColor: '#327f92', // Teal button background
                color: '#fff'
              }}
          >
            View Medical Records
          </Button>
        </Paper>
      </Grid2>

      {/* Quick Links - Notifications */}
      <Grid2 item xs={12}>
        <Paper 
          elevation={2} 
          style={{
            padding: '24px',
            background: 'linear-gradient(to top, #BBE6E4, #f5f5f5)', 
            border: '2px solid #327f92'
          }}>
          <Typography variant="h5" gutterBottom style={{ color: '#327f92' }}>
            Notifications
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px' }}>
            Stay updated with your healthcare notifications.
          </Typography>
          <Button
            component={Link}
            variant="contained"
            color="info"
            fullWidth
            to="/portal/notifications"
            style={{
              marginTop: '16px',
              borderRadius: '8px',
              padding: '12px',
              textTransform: 'none',
              fontWeight: 500,
              backgroundColor: '#327f92', // Teal button background
              color: '#fff'
            }}
          >
            View Notifications
          </Button>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
