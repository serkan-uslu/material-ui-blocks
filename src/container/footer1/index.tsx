import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

function Footer1() {
  return (
    <Grid
      container
      sx={{
        background: '#eeeeee',
        p: 4,
        alignItems: 'center',
      }}
    >
      <Grid item xs={3} sm={6} md={6} lg={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
            }}
          >
            LOGO
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={9} sm={6} md={6} lg={6} sx={{}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
            }}
          >
            © Copyright Lorem ipsum 2023
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer1;
