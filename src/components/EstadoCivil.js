import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Estado() {
  const classes = useStyles();
  const [estado, setEstado] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Estado Civil</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={estado}
          onChange={handleChange}
        >
          <MenuItem value='soltero/a'>Soltero/a</MenuItem>
          <MenuItem value='casado/a'>Casado/a</MenuItem> 
          <MenuItem value='divorciado/a'>Divorciado/a</MenuItem>
          <MenuItem value='viudo/a'>Viudo/a</MenuItem>
          <MenuItem value='union_libre'>Union Libre</MenuItem>    
        </Select>
      </FormControl>
    </div>
  );
}