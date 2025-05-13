import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
// import Lottie from 'lottie-react';
// import heroAnimation from '../public/assets/hero-lottie.json';

const Hero = () => (
  <Box sx={{ py: 8, textAlign: 'center' }}>
    <Typography variant="h2" fontWeight={700} gutterBottom>
      Custom Web Development Agency for Small Businesses
    </Typography>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Premium WordPress development, Shopify e-commerce solutions, and custom web app services designed to accelerate your online growth.
    </Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mt={4}>
      <Button variant="contained" color="primary" size="large">Get a Free Quote</Button>
      <Button variant="outlined" color="primary" size="large">Schedule a Consultation</Button>
    </Stack>
    {/* <Box mt={6}><Lottie animationData={heroAnimation} loop /></Box> */}
  </Box>
);

export default Hero; 