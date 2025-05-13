import React from 'react';
import { Box, Typography, Card, CardContent, Stack } from '@mui/material';

const testimonials = [
  {
    quote: 'IntraWeb boosted our site traffic by 200% with their SEO-focused WordPress rebuild.',
    author: 'Jane Doe, CEO at StartupX',
  },
  {
    quote: 'Their Shopify expertise increased our conversion rate by 35% in three months.',
    author: 'John Smith, Marketing Lead at BrandCo',
  },
];

const Testimonials = () => (
  <Box sx={{ py: 8, bgcolor: 'neutral.light' }}>
    <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
      What Our Clients Say
    </Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center">
      {testimonials.map((t, idx) => (
        <Card key={idx} sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography variant="body1" gutterBottom>“{t.quote}”</Typography>
            <Typography variant="subtitle2" color="text.secondary">{t.author}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Testimonials; 