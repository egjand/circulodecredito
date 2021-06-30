import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Controls from '../components/controls/Controls';
import Genero from '../components/Genero';
import Estado from '../components/EstadoCivil';
import Button from '../components/controls/Button';
import DatosUsuario from './DatosUsuario';
import { useEffect } from 'react';

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



export default function Consulta({ value = 0 }, props) {
   const [paso, setPaso] = useState(value)

   const [FormState, setFormState] = useState({
      primer_nombre: "",
      segundo_nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      fecha_nacimiento: "",
      calle: "",
      numero_exterior: "",
      numero_interior: "",
      codigo_postal: "",
      telefono_cel: "",
      colonia: "",
      municipio: "",
      ciudad: "",
      estado: "",
   })

   const { primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, calle, numero_exterior, numero_interior,
      codigo_postal, telefono_cel, colonia, municipio, ciudad, estado } = FormState;
   const classes = useStyles();



   useEffect(() => {

   }, []);

   const previous = (e) => {

      setPaso(paso - 1);

   }
   const next = (e) => {

      setPaso(paso + 1);

   }
   

   const handleInputChange = ({ target }) => {

      setFormState({
         ...FormState,
         [target.name]: target.value
      });

   }


   return (

      <Container component='main' maxWidth='xs'>
         <div className={classes.paper}>
            <form className={classes.form} noValidate>

               {paso === 0 &&
                  <div>
                     <Typography component='h1' variant='h5'>
                        Datos del solicitante
                     </Typography>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete="nombre"
                              name="primer_nombre"
                              required
                              fullWidth
                              label="Primer Nombre"
                              variant="standard"
                              value={primer_nombre}
                              onChange={handleInputChange}
                              autoFocus
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete="segundo Nombre"
                              fullWidth
                              label='Segundo Nombre'
                              name='segundo_nombre'
                              variant='standard'
                              value={segundo_nombre}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              required
                              fullWidth
                              label='Apellido Paterno'
                              name='apellido_paterno'
                              variant='standard'
                              autoComplete='Apellido'
                              value={apellido_paterno}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              required
                              fullWidth
                              name="apellido_materno"
                              label='Apellido Materno'
                              variant='standard'
                              autoComplete='Apellido'
                              value={apellido_materno}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Genero />
                        <Estado />

                        <Grid item xs={12}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              required
                              fullWidth
                              name='fecha_nacimiento'
                              label='Fecha de Nacimiento'
                              variant='standard'
                              autoComplete='email'
                              value={fecha_nacimiento}
                              onChange={handleInputChange}
                           />
                        </Grid>


                     </Grid>
                  </div>
               }
               {paso === 1 &&
                  <div>
                     <Typography component='h1' variant='h5'>
                        Dirección
                     </Typography>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete='calle'
                              required
                              fullWidth
                              name='calle'
                              label='Calle'
                              variant='standard'
                              autoFocus
                              value={calle}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete='numeroext'
                              name='numero_exterior'
                              label='Numero Exterior'
                              variant='standard'
                              autoFocus
                              value={numero_exterior}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete='numeroint'
                              name='numero_interior'
                              label='Numero Interior'
                              variant='standard'
                              autoFocus
                              value={numero_interior}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete='codigo'
                              required
                              fullWidth
                              name='codigo_postal'
                              label='Codigo Postal'
                              variant='standard'
                              autoFocus
                              value={codigo_postal}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete='telefono'
                              required
                              fullWidth
                              name='telefono_cel'
                              label='Telefono Celular'
                              variant='standard'
                              autoFocus
                              value={telefono_cel}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              autoComplete='col'
                              required
                              fullWidth
                              name='colonia'
                              label='Colonia'
                              variant='standard'
                              autoFocus
                              value={colonia}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              required
                              fullWidth
                              name='municipio'
                              label='Municipio'
                              variant='standard'
                              autoFocus
                              value={municipio}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              required
                              fullWidth
                              name='ciudad'
                              label='Ciudad'
                              variant='standard'
                              autoFocus
                              value={ciudad}
                              onChange={handleInputChange}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Controls.Input
                              type="text"
                              className="form-control"
                              required
                              fullWidth
                              name='estado'
                              label='Estado'
                              variant='standard'
                              autoFocus
                              value={estado}
                              onChange={handleInputChange}
                           />
                        </Grid>
                     </Grid>
                  </div>
               }
               {paso === 2 &&
                  <DatosUsuario datos={FormState} />

               }
               {paso === 3 &&
                  <div>
                     <Grid item xs={12}>
                        <FormControlLabel
                           control={
                              <Checkbox value='allowExtraEmails' color='primary' />
                           }
                        />
                        <a target="_blank" href="https://ventas.casa/avisodeprivacidad.html" rel="noopener noreferrer">Politica de privacidad</a>
                     </Grid>
                  </div>
               }
               <Button
                  disabled={paso === 0}
                  disableElevation
                  onClick={previous}
                  type='button'
                  variant='contained'
                  text='Anterior'
               />




               <Button
                  disabled={paso === 4}
                  disableElevation
                  onClick={next}
                  type='button'
                  variant='contained'
                  text='Siguiente'
               />

            </form>
         </div>
      </Container>
   );
}
