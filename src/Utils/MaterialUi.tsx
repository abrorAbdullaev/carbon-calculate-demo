import { createTheme } from '@material-ui/core';

export const getAppTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: '#40916c'
      },
      secondary: {
        main: '#95d5b2'
      }
    },
    typography: {
      h3: {
        fontSize: '1.2rem',
        '@media (min-width: 600px)': {
          fontSize: '2.4rem',
        }
      },
      h4: {
        fontSize: '1.2rem',
        '@media (min-width: 600px)': {
          fontSize: '2.4rem',
        }
      },
    }
  });
}