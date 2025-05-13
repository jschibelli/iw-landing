import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const services = [
  {
    title: 'WordPress Website Development',
    desc: 'SEO-optimized, custom WordPress sites with secure hosting, regular maintenance, and performance tuning.'
  },
  {
    title: 'Shopify E-Commerce Development',
    desc: 'Conversion-focused Shopify stores, seamless data migration, and ongoing optimization to increase sales.'
  },
  {
    title: 'Custom Web Application Development',
    desc: 'Scalable web apps built with modern frameworks, tailored to your business logic and integrated with essential APIs.'
  },
  {
    title: 'Automation & Workflow Integration',
    desc: 'Automated processes and API integrations that streamline operations and reduce manual work.'
  },
  {
    title: 'Ongoing Support & Training',
    desc: 'Dedicated maintenance, security updates, and training sessions to keep your site secure, up-to-date, and easy to manage.'
  },
];

const ServicesGrid = () => (
  <Box sx={{ py: 8 }}>
    <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>{service.title}</Typography>
              <Typography variant="body2" color="text.secondary">{service.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServicesGrid; 