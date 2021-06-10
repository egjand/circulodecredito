import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import useToggleTheme from './Mui-theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FormControlLabel, Switch, CssBaseline } from '@material-ui/core';
import Layout from './pages/Layout';
import Consulta from './pages/Consulta';
const App = () => {
   const [theme, mode, toggleTheme] = useToggleTheme();
   const themeConfig = createMuiTheme(theme);
   return (
      <MuiThemeProvider theme={themeConfig}>
         <CssBaseline />
         <Router>
            <Layout>
               <FormControlLabel
                  control={<Switch onChange={toggleTheme} name='checkedA' />}
                  label={mode}
               />
               <Route exact path='/' component={Consulta} />
            </Layout>
         </Router>
      </MuiThemeProvider>
   );
}; 

export default App;
