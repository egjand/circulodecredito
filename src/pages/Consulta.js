import {useState} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Controls from '../components/controls/Controls';
import Genero from '../components/Genero';
import Estado from '../components/EstadoCivil';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Calendar from 'react-calendar';

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
      marginTop: theme.spacing(3)
   },
   submit: {
      margin: theme.spacing(3, 0, 2)
   }
}));

export default function Consulta() {
   const classes = useStyles();
   const [value, onChange] = useState(new Date());

   return (
      <Container component='main' maxWidth='xs'>
         <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
               Datos del solicitante
            </Typography>
            <form className={classes.form} noValidate>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Controls.Input
                        autoComplete='fname'
                        name='firstName'
                        required
                        fullWidth
                        id='primer_nombre'
                        label='Primer Nombre'
                        variant='standard'
                        autoFocus
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Controls.Input
                        required
                        fullWidth
                        id='lastName'
                        label='Segundo Nombre'
                        name='lastName'
                        variant='standard'
                        autoComplete='lname'
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Controls.Input
                        required
                        fullWidth
                        id='apellido_paterno'
                        label='Apellido Paterno'
                        name='paterno'
                        variant='standard'
                        autoComplete='lname'
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Controls.Input
                        required
                        fullWidth
                        id='apellido_materno'
                        label='Apellido Materno'
                        name='materno'
                        variant='standard'
                        autoComplete='lname'
                     />
                  </Grid>
                  <Genero/>
                  <Estado/>
                  <Calendar
                   onChange={onChange}
                   value={value}/>
                  <Grid item xs={12}>
                     <Controls.Input
                        required
                        fullWidth
                        id='fecha_nacimiento'
                        label='Fecha de Nacimiento'
                        name='Fnacimiento'
                        variant='standard'
                        autoComplete='email'
                     />
                  </Grid><DateRangeIcon/>
                  
                  <Grid item xs={12}>
                     <FormControlLabel
                        control={
                           <Checkbox value='allowExtraEmails' color='primary' />
                        }
                        label='I want to receive inspiration, marketing promotions and updates via email.'
                     />
                  </Grid>
               </Grid>
               <Controls.Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  text='Sign Up'
               />
               <Grid container justifyContent='flex-end'>
                  <Grid item>
                     <Typography component={Link} to='/login' variant='p'>
                        Already have an account? Sign in
                     </Typography>
                  </Grid>
               </Grid>
            </form>
         </div>
      </Container>
   );
}
