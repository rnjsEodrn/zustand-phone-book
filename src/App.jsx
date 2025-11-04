import { useState } from 'react';
import './App.css';
import { Grid, Box } from '@mui/material';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <Box display={'flex'} justifyContent={'center'} borderBottom={'1px solid black'} marginBottom={'20px'}>
        <h1>Phone Book</h1>
      </Box>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
