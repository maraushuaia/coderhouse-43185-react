import {TextField} from '@mui/material';

// Componente InputField
const InputField = ({label, name, value, onChange, required}) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      fullWidth
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      margin='normal'
    />
  );
};

export default InputField;
