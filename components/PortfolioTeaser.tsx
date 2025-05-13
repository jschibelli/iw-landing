import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

// Placeholder projects
const projects = [
  { title: 'StartupX', result: 'SEO +200%', thumbnail: '/assets/project1.svg' },
  { title: 'BrandCo', result: 'Conversion +35%', thumbnail: '/assets/project2.svg' },
  { title: 'AppSuite', result: 'Performance +50%', thumbnail: '/assets/project3.svg' },
];

const PortfolioTeaser = () => (
  <Box sx={{ py: 8 }}>
    <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
      Featured Projects
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card>
            {/* Replace with <CardMedia> for real images */}
            <Box sx={{ height: 140, bgcolor: 'neutral.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={project.thumbnail} alt={project.title} style={{ maxHeight: 80 }} />
            </Box>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">{project.result}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default PortfolioTeaser; 