import React from 'react';
import { Button, TextField } from '@mui/material';

function NewsletterInput() {
  return (
    <TextField
      sx={{
        background: '#fff',
      }}
      id="standard-name"
      placeholder="Your Email"
      InputProps={{
        endAdornment: (
          <Button variant="contained" disableElevation color="primary">
            SEND
          </Button>
        ),
      }}
    />
  );
}

export default NewsletterInput;
