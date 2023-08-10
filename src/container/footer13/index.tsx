import React from 'react';
import { Box, Grid } from '@mui/material';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';
import FooterMenuGroup from '@/components/footerMenuGroup';

function Footer13() {
  /* pages */
  const pages = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <Grid
      container
      sx={{
        background: '#eeeeee',
        p: 4,
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            display: 'flex',
            mb: {
              xs: 2,
            },
            flexDirection: {
              xs: 'column',
              lg: 'row',
              md: 'row',
              sm: 'row',
            },
            justifyContent: {
              xs: 'center',
            },
          }}
        >
          <FooterMenuGroup pages={pages} centered />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mb: {
              xs: 2,
            },
            justifyContent: {
              xs: 'center',
            },
          }}
        >
          <Copyright />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
              xs: 'center',
            },
          }}
        >
          <SocialLinks />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer13;
