import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1E40AF' },        // Primary blue
    secondary: { main: '#10B981' },      // Teal accent
  },
  typography: {
    fontFamily: ['Inter', 'Poppins', 'sans-serif'].join(','),
  },
});

export default theme; 