import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

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


const DatosUsuario = (props) => {
    
    const classes = useStyles();
    
    return (
        <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
            <h1>Confirme sus Datos</h1>
            <br/>
            <h3>Datos del solicitante</h3>
            <br/>
            <p>Primer Nombre: {props.datos.primer_nombre} </p>
            <p>Segundo Nombre: {props.datos.segundo_nombre} </p>
            <p>Apellido Paterno: {props.datos.apellido_paterno} </p>
            <p>Apellido Materno: {props.datos.apellido_materno} </p>
            <p>Sexo: {props.datos.sexo}</p>
            <p>Estado Civil: {props.datos.estado_civil}</p>
            <p>Fecha de Nacimiento: {props.datos.fecha_nacimiento}</p>
            <br/>
            <h3>Direccion del solicitante</h3> 
            <p>Calle: {props.datos.calle}</p>
            <p>Numero Exterior: {props.datos.numero_exterior}</p>
            <p>Numero Interior: {props.datos.numero_interior}</p>
            <p>Codigo Postal: {props.datos.codigo_postal}</p>
            <p>Telefono Celular: {props.datos.telefono_cel}</p>
            <p>Colonia: {props.datos.colonia}</p>
            <p>Municipio: {props.datos.municipio}</p>
            <p>Ciudad: {props.datos.ciudad}</p>
            <p>Estado: {props.datos.estado}</p>
        </div>
        </Container>
    );
}

export default DatosUsuario