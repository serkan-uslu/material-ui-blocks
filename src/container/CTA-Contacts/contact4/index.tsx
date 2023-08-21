import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

function Contact4() {
  /* colors */
  const background = '#eeeeee';

  return (
    <Grid
      container
      sx={{
        background: background,
        p: 4,
        alignItems: 'center',
      }}
    >
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#ddd',
            p: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Let's work together
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button variant="contained" disableElevation color="primary">
              Lorem Ipsum
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact4;
