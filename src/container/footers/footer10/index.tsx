import React from 'react';
import { Box, Grid } from '@mui/material';
import Copyright from '@/components/copyright';
import FooterMenuGroup from '@/components/footerMenuGroup';

function Footer10() {
  /* pages */
  const pages2 = [
    {
      name: 'Term of Servcies',
      link: '/',
    },
    {
      name: 'Privacy Policy',
      link: '/',
    },
  ];

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
              mb: {
                xs: 2,
                lg: 0,
                md: 0,
                sm: 0,
              },
              justifyContent: {
                xs: 'center',
                lg: 'flex-end',
                md: 'flex-end',
                sm: 'flex-end',
              },
              flexDirection: {
                xs: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
              },
            }}
          >
            <FooterMenuGroup pages={pages2} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer10;
