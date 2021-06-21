import { useState } from 'react';
import logopng from '../img/logo/logo.jpg';
import {
   AppBar,
   Toolbar,
   Grid,
   makeStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/auth-action';

const useStyles = makeStyles(theme => ({
   logo: {
      width: '15%',

   },
   title: {
      marginRight: 'auto'
   },
   searchInput: {
      backgroundColor: 'inherit',
      color: '#f2f2f2',
      padding: `0px ${theme.spacing(1)}px`,
      borderRadius: '5px',
      fontSize: '0.8rem',
      '&:hover': {
         // backgroundColor: '#f2f2f2'
      },
      '& .MuiInputBase-input': {
         width: '200px',
         transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: '.4s'
         })
      },
      '& .MuiInputBase-input:focus': {
         width: '230px'
      },

      '& .MuiSvgIcon-root': {
         marginRight: theme.spacing(1)
      },
      [theme.breakpoints.up('xs')]: {
         display: 'none'
      },
      [theme.breakpoints.up('md')]: {
         display: 'inline-flex'
      }
   },
   button: {
      margin: '1rem',
      backgroundColor: '#ffeb3b',
      '&:hover': {
         backgroundColor: '#fdd835'
      }
   }
}));

/* const routes = [
   {
      label: 'Home',
      forUser: true,
      path: '/dashboard',
      icon: <HomeIcon />
   },
   {
      label: 'Learn',
      forUser: true,
      path: '/words',
      icon: <SchoolIcon />
   },
   {
      label: 'Add Words',
      forUser: true,
      path: '/newwords',
      icon: <AddCircleIcon />
   },
   {
      label: 'Log Out',
      forUser: true,
      path: '/',
      icon: <ExitToAppIcon />
   },
   {
      label: 'Log In',
      forUser: false,
      path: '/login',
      icon: <LockOpenIcon />
   },
   {
      label: 'Register',
      forUser: false,
      path: '/register',
      icon: <EnhancedEncryptionIcon />
   }
];
 */
const Menu = withRouter(({ history, classnames, open, setOpen }) => {
   const classes = useStyles();
   const dispatch = useDispatch();
   //correcting acitve tabs on refreshing
   /* useEffect(() => {
      const path = history.location.pathname;
      const getIndex = routes.findIndex(item => item.path === path);
      setValue(getIndex);
   }, []); */

   return (
      <AppBar position='static' color='secondary' className={classnames}>
         <Toolbar>
            {/* <IconButton
               color='inherit'
               edge='start'
               className={classes.menuButton}
               onClick={() => setOpen(!open)}>
               <MenuIcon />
            </IconButton> */}
            <img src={logopng} className={classes.logo}/>
            <Grid
               container
               spacing={3}
               direction='row'
               justify='flex-end'
               alignItems='center'>
               <Grid item>
                  {/* <InputBase
                     placeholder='Search topics'
                     className={classes.searchInput}
                     startAdornment={<SearchIcon fontSize='small' />}
                  /> */}
               </Grid>
               {/* <Grid item>
                  <Tabs value={value} onChange={onChange}>
                     {routes // ! filter all private tabs for users if logged in
                        .filter(route =>
                           isLogged ? route.forUser : !route.forUser
                        ) // ! Or, filter public tabs
                        .map(route => (
                           <Tab
                              icon={route.icon}
                              label={route.label}
                              component={Link}
                              onClick={
                                 route.label === 'Log Out' ? logOutHandler : ''
                              }
                              to={route.path}
                           />
                        ))}
                  </Tabs>
               </Grid>
                */}{/* <Grid item>
                  <IconButton aria-label='Home' style={isActive(history, '/')}>
                     <HomeIcon />
                  </IconButton>
               </Grid>
               <Grid item>
                  <IconButton>
                     <Badge badgeContent={4} color='primary'>
                        <NotificationsNoneIcon
                           fontSize='small'
                           color='inherit'
                        />
                     </Badge>
                  </IconButton>
                  <IconButton>
                     <Badge badgeContent={3} color='primary'>
                        <ChatBubbleOutlineIcon
                           fontSize='small'
                           color='inherit'
                        />
                     </Badge>
                  </IconButton>
                  <IconButton>
                     <PowerSettingsNewIcon fontSize='small' />
                  </IconButton> 
               </Grid> */}
            </Grid>
         </Toolbar>
      </AppBar>
   );
});
export default Menu;
