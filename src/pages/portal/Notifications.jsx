import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const Notifications = () => {
  const notifications = [
    { message: 'Appointment with Dr. Smith on 25th Oct', date: '2024-10-24' },
    { message: 'Time to refill your prescription for blood pressure', date: '2024-10-20' },
  ];

  return (
    <Paper 
      style={{
        padding: '24px',
        background: 'linear-gradient(to top, #BBE6E4, #f5f5f5)', // Light turquoise gradient
        border: '2px solid #327f92', // Teal border
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h5" gutterBottom style={{ color: '#327f92', fontWeight: 600 }}>
        Notifications
      </Typography>
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <ListItem key={index} style={{ padding: '12px 0' }}>
              <ListItemText 
                primary={notification.message} 
                secondary={`Date: ${notification.date}`} 
                primaryTypographyProps={{ style: { color: '#4f4f4f' } }} // Color for primary text
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" style={{ color: '#4f4f4f', textAlign: 'center' }}>
            No notifications found.
          </Typography>
        )}
      </List>
    </Paper>
  );
};

export default Notifications;
