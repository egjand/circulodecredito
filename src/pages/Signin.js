import { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import _ from '../components/controls/Controls';
import { useForm } from './../components/useForm';
const useStyles = makeStyles(theme => ({
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
   },
   form: {
      width: '100%', // Fix IE11 issue.
      marginTop: theme.spacing(1)
   },
   submit: {
      margin: theme.spacing(3, 0, 2)
   }
}));

const initialValue = [
   {
      type: 'text',
      name: 'email',
      id: 'this-email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      validate: value => value === '' || /\S+@\S+\.\S+/.test(value),
      error: false,
      helperText: 'Please enter correct email'
   },
   {
      type: 'text',
      name: 'Password',
      id: 'this-pass',
      label: 'password',
      placeholder: 'aA-zZ 1-9',
      value: '',
      validate: value => value === '' || value.length > 6,
      error: false,
      helperText: 'Password length must be greater than 6'
   },

   {
      type: 'checkbox',
      name: 'remember',
      label: 'Remember Me',
      checked: false
   }
];

export default function SignIn() {
   const classes = useStyles();
   const history = useHistory();
   const isLogged = useSelector(s => s.auth.user.isLogged);
   // const location = useLocation();
   // console.log(location);
   useEffect(() => {
      if (isLogged) history.push('/dashboard');
   }, []);

   const {
      inputs,
      onChange,
      onChangeValidate,
      errorExist,
      setErrorExits,
      resetForm
   } = useForm(initialValue);
   const submitHandler = e => {
      e.preventDefault();
      if (!errorExist) {
         console.log('ALL OK');
         console.log(inputs);
         setErrorExits(true);
         resetForm();
      }
   };
   return (
      <Container component='main' maxWidth='xs'>
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
               Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={submitHandler}>
               {inputs
                  .filter(input => input.type === 'text')
                  .map(input => (
                     <_.Input
                        key={input.name}
                        label={input.label}
                        id={input.id}
                        name={input.name}
                        value={input.value}
                        password={input.name === 'Password' ? 'password' : ''}
                        onChange={onChangeValidate}
                        helperText={input.error && input.helperText}
                        error={input.error}
                        placeholder={input.placeholder}
                     />
                  ))}
               {inputs
                  .filter(input => input.type === 'checkbox')
                  .map(input => (
                     <_.Checkbox
                        label={input.label}
                        onChange={onChangeValidate}
                        name={input.name}
                        checked={input.checked}
                     />
                  ))}
               <_.Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  className={classes.submit}
                  text='Sign In'
               />
               <Grid container>
                  <Grid item xs>
                     <Typography component={Link} to='/forgot' variant='p'>
                        Forgot Password?
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Typography component={Link} to='/register' variant='p'>
                        "Don't have an account? Sign Up"
                     </Typography>
                  </Grid>
               </Grid>
            </form>
         </div>
      </Container>
   );
}
