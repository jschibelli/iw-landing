import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1E40AF' },        // Primary blue
    secondary: { main: '#10B981' },      // Teal accent
    neutral: {
      light: '#F3F4F6',                  // Light gray background
      main: '#4B5563',                   // Mid gray text
      dark: '#111827',                   // Dark text color
    },
  },
  typography: {
    fontFamily: ['Inter', 'Poppins', 'sans-serif'].join(','),
  },
});

export default theme; 