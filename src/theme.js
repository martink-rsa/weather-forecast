import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import BackgroundImage from './images/background1.jpeg';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: `url(${BackgroundImage})`,
      // default: '#282c34',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 20px',
        margin: '20px 0',
        backgroundColor: 'none', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;
