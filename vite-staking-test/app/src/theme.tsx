import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
// https://github.com/mui-org/material-ui/tree/master/examples/create-react-app-with-typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '16181e',
    },
    secondary: {
      main: '#35363a',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;