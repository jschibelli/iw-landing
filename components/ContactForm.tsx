import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');
    // TODO: Implement API call to /api/contact or HubSpot
  };

  return (
    <Box sx={{ py: 8, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        Start Your Project
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField label="Name" name="name" required fullWidth />
          <TextField label="Email" name="email" type="email" required fullWidth />
          <TextField label="Message" name="message" required fullWidth multiline rows={4} />
          {error && <Alert severity="error">{error}</Alert>}
          {submitted && <Alert severity="success">Thank you! We'll be in touch soon.</Alert>}
          <Button type="submit" variant="contained" color="primary" size="large">Send Message</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm; 