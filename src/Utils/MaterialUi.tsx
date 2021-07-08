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
    }
  });
}