import React, { useEffect, useState } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { supabase } from '../../supabaseClient'; // Assuming you have Supabase setup

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchRecords = async () => {
      const { data, error } = await supabase.from('medical_records').select('*');
      if (error) {
        console.error(error);
        setLoading(false);
      } else {
        setRecords(data);
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

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
        Medical Records
      </Typography>
      {loading ? (
        <CircularProgress style={{ margin: '20px auto', display: 'block' }} /> // Centered loading spinner
      ) : (
        <List>
          {records.length > 0 ? (
            records.map((record, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={record.title} 
                  secondary={`Date: ${record.date}`} 
                  primaryTypographyProps={{ style: { color: '#4f4f4f' } }} // Color for primary text
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" style={{ color: '#4f4f4f', textAlign: 'center' }}>
              No medical records found.
            </Typography>
          )}
        </List>
      )}
    </Paper>
  );
};

export default MedicalRecords;
