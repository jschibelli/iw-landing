import React from 'react';
import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <Box sx={{ py: 4, bgcolor: 'neutral.light', textAlign: 'center' }}>
    <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
      <IconButton href="#" aria-label="Facebook"><FacebookIcon /></IconButton>
      <IconButton href="#" aria-label="Twitter"><TwitterIcon /></IconButton>
      <IconButton href="#" aria-label="LinkedIn"><LinkedInIcon /></IconButton>
    </Stack>
    <Typography variant="body2" color="text.secondary">
      © 2025 IntraWeb Technologies LLC. All rights reserved.<br />
      <Link href="#" underline="hover">Privacy Policy</Link> • <Link href="#" underline="hover">Terms of Service</Link>
    </Typography>
  </Box>
);

export default Footer; 