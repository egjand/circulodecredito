import { useState } from 'react';

const themeObj = {
   palette: {
      type: 'light',
      primary: {
         main: '#333996',
         light: '#3c44b126'
      },
      secondary: {
         main: '#2b384e',
         light: '#f8324526'
      }
   },

   typography: {
      fontFamily: 'Nunito',
      h5: {
         fontWeight: 700,
         fontSize: '1.7rem'
      },
      basic: {
         fontFamily: 'Nunito'
      }
   },
   overrides: {
      MuiAppBar: {
         root: {
            transform: 'translateZ(0)'
         }
      }
   },
   props: {
      MuiIconButton: {
         disableRipple: true
      }
      // Style sheet name ⚛️
      // MuiInputBase: {
      //    // Name of the rule
      //    input: {
      //       // Some CSS
      //       // color: 'white'
      //    }
      // },
      // MuiOutlinedInput: {
      //    // Name of the rule
      //    root: {
      //       // Some CSS
      //       '& fieldset': {
      //          borderColor: '#e8eaf6',
      //          borderWidth: '2px'
      //       },
      //       '&:hover .MuiOutlinedInput-notchedOutline': {
      //          borderColor: '#fff59d'
      //       },
      //       '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      //          borderColor: '#d81b60'
      //       }
      //    }
      // },
      // MuiInputLabel: {
      //    // Name of the rule
      //    root: {
      //       // Some CSS
      //       color: 'white'
      //    }
      // },
      // MuiFormLabel: {
      //    root: {
      //       '&.Mui-focused': {
      //          color: 'white'
      //       }
      //    }
      // },
      // MuiCheckbox: {
      //    // Name of the rule
      //    root: {
      //       color: '#d81b60'
      //    },
      //    colorPrimary: {
      //       '&.Mui-checked': {
      //          color: '#d81b60'
      //       }
      //    }
      // }
   }
};

const useToggleTheme = () => {
   const [theme, setTheme] = useState(themeObj);
   const {
      palette: { type }
   } = theme;
   const [mode, setMode] = useState('dark');

   const toggleTheme = () => {
      const updatedTheme = {
         ...theme,
         palette: {
            ...theme.palette,
            type: type === 'dark' ? 'light' : 'light'
         },
         overrides:
            type === 'dark'
               ? {
                  MuiCssBaseline: {
                     '@global': {
                        body: {
                           backgroundColor: '#212121'
                        }
                     }
                  }
               }
               : ''
      };
      setTheme(updatedTheme);
      setMode(mode === 'dark' ? 'light' : 'dark');
   };
   return [theme, mode, toggleTheme];
};

export default useToggleTheme;
