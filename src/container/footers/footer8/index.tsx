import React from 'react';
import Logo from '@/components/logo';
import { Box, Grid } from '@mui/material';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';

function Footer8() {
  return (
    <>
      <Grid
        container
        sx={{
          background: '#eee',
          p: 4,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: {
                xs: 'center',
              },
              mb: {
                xs: 2,
              },
            }}
          >
            <Logo />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          background: '#dedede',
          px: 4,
          py: 1,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
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
                sm: 'flex-start',
                md: 'flex-start',
                lg: 'flex-start',
              },
            }}
          >
            <Copyright />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mb: {
                xs: 2,
                lg: 0,
                md: 0,
                sm: 0,
              },
              justifyContent: {
                xs: 'center',
                sm: 'flex-end',
                md: 'flex-end',
                lg: 'flex-end',
              },
            }}
          >
            <SocialLinks />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer8;
