import React from 'react';
import { TextField } from '@material-ui/core';

const Textbox = ({ label, onChange, value }) => {
  const handleChange = (e) => onChange(e.target.value);

  return (
    <TextField
      label={label}
      onChange={handleChange}
      value={value}
      variant="standard"
    />
  );
};

Textbox.defaultProps = {
  onChange: (f) => f,
};

export default Textbox;
