import React from 'react';
import Logo from '@/components/logo';
import { Box, Grid } from '@mui/material';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';

function Footer11() {
  return (
    <Grid
      container
      sx={{
        background: '#eee',
        p: 4,
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mb: {
              xs: 2,
              lg: 0,
              sm: 0,
              md: 0,
            },
            justifyContent: {
              xs: 'center',
              lg: 'flex-start',
              md: 'flex-start',
              sm: 'flex-start',
            },
          }}
        >
          <Logo />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mb: {
              xs: 1,
              sm: 0,
              md: 0,
              lg: 0,
            },
            justifyContent: {
              xs: 'center',
            },
          }}
        >
          <Copyright />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
              xs: 'center',
              lg: 'flex-end',
              md: 'flex-end',
              sm: 'flex-end',
            },
          }}
        >
          <SocialLinks />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer11;
