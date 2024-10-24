import React, { useState } from 'react';
import { TextField, Button, Grid2, Paper, Typography } from '@mui/material';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic with Supabase
  };

  return (
    <Paper 
      style={{
        padding: '24px',
        background: 'linear-gradient(to top, #BBE6E4, #f5f5f5)', // Light turquoise gradient
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        style={{ color: '#327f92', fontWeight: 600 }} // Teal header color
      >
        Update Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#327f92' } }} // Teal label color
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#327f92' } }} // Teal label color
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              required
              variant="outlined"
              InputLabelProps={{ style: { color: '#327f92' } }} // Teal label color
            />
          </Grid2>
          {/* Add more fields as needed */}
          <Grid2 item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ backgroundColor: '#327f92' }} // Teal button color
            >
              Update Profile
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Paper>
  );
};

export default Profile;
