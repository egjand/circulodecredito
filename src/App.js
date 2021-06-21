import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import useToggleTheme from './Mui-theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Layout from './pages/Layout';
import Consulta from './pages/Consulta';
const App = () => {
   const [theme] = useToggleTheme();
   const themeConfig = createMuiTheme(theme);
   return (
      <MuiThemeProvider theme={themeConfig}>
         <CssBaseline />
         <Router>
            <Layout>
               <Route exact path='/' component={Consulta} />
            </Layout>
         </Router>
      </MuiThemeProvider>
   );
}; 

export default App;
