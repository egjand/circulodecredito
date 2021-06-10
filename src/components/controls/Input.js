import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input({
   name,
   label,
   value,
   onChange,
   variant,
   error = null,
   password = null,
   helperText = null,
   ...other
}) {
   return (
      <TextField
         margin='normal'
         variant={variant || 'outlined'}
         required
         fullWidth
         autoFocus
         onBlur={onChange}
         type={password || 'text'}
         label={label}
         name={name}
         value={value}
         onChange={onChange}
         error={error}
         helperText={error && helperText}
         {...other}
      />
   );
}
