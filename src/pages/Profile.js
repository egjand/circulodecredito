import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   //html hidden property  https://www.w3schools.com/tags/att_hidden.asp
   return (
      <div role='tabpanel' hidden={value !== index} {...other}>
         {value === index && (
            <Box p={3}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
   },
   tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
   }
}));

export default function VerticalTabs() {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className={classes.root}>
         <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            className={classes.tabs}>
            <Tab label='Item One' />
            <Tab label='Item Two' />
            <Tab label='Item Three' />
            <Tab label='Item Four' />
            <Tab label='Item Five' />
            <Tab label='Item Six' />
            <Tab label='Item Seven' />
         </Tabs>
         <TabPanel value={value} index={0}>
            Item One
         </TabPanel>
         <TabPanel value={value} index={1}>
            Item Two
         </TabPanel>
         <TabPanel value={value} index={2}>
            Item Three
         </TabPanel>
         <TabPanel value={value} index={3}>
            Item Four
         </TabPanel>
         <TabPanel value={value} index={4}>
            Item Five
         </TabPanel>
         <TabPanel value={value} index={5}>
            Item Six
         </TabPanel>
         <TabPanel value={value} index={6}>
            Item Seven
         </TabPanel>
      </div>
   );
}
