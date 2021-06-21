import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
CssBaseline
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Header from '../components/toolbar';
const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
   appBar: {
      fontWeight: 700,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen
      })
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen
      })
   },
   content: {
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen
      })
   },
   contentShift: {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth //shift content
   }
}));

export default withRouter(({ history, children }) => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   return (
      <div>
         <CssBaseline />
         <Header
            classnames={classNames(classes.appBar, {
               [classes.appBarShift]: open
            })}
            setOpen={setOpen}
            open={open}
         />
         <main
            className={classNames(classes.content, {
               [classes.contentShift]: open
            })}>
            {children}
         </main>
      </div>
   );
});
