import React from 'react';
import Logo from '@/components/logo';
import { Box, Grid } from '@mui/material';
import Copyright from '@/components/copyright';

function Contact1() {
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
      {/* left start */}
      <Grid item xs={3} sm={6} md={6} lg={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Logo />
        </Box>
      </Grid>
      {/* left end */}

      {/* right start */}
      <Grid item xs={9} sm={6} md={6} lg={6} sx={{}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Copyright />
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Contact1;
