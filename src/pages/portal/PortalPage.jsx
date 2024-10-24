import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const PortalPage = () => {
  return (
    <div>
      <AppBar position="static" style={{ background: '#327f92' }}> {/* Teal background for AppBar */}
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Patient Portal
          </Typography>
          <Button component={Link} to="/portal" color="inherit">
            Dashboard
          </Button>
          <Button component={Link} to="/appointment" color="inherit">
            Appointments
          </Button>
          <Button component={Link} to="/portal/medical-records" color="inherit">
            Medical Records
          </Button>
          <Button component={Link} to="/portal/notifications" color="inherit">
            Notifications
          </Button>
        </Toolbar>
      </AppBar>

      <Paper 
        style={{
          padding: '24px',
          margin: '20px',
          background: 'linear-gradient(to top, #BBE6E4, #f5f5f5)', // Light turquoise gradient for the Paper
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Outlet will render the nested routes (Dashboard, Appointments, etc.) */}
        <Outlet />
      </Paper>
    </div>
  );
};

export default PortalPage;
