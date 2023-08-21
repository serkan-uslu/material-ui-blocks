import React from 'react';
import Logo from '@/components/logo';
import { Box, Grid } from '@mui/material';
import Copyright from '@/components/copyright';
import FooterMenuGroup from '@/components/footerMenuGroup';
import SocialLinks from '@/components/socialLinks';

function Footer15() {
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
    <>
      <Grid
        container
        sx={{
          background: '#eeeeee',
          p: 4,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: {
                xs: 'center',
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'flex-start',
              },
              mb: {
                xs: 2,
              },
            }}
          >
            <Logo />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: 'flex',
                  mb: {
                    xs: 2,
                  },
                  flexDirection: {
                    xs: 'column',
                  },
                  justifyContent: {
                    xs: 'center',
                  },
                }}
              >
                <FooterMenuGroup pages={pages} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: 'flex',
                  mb: {
                    xs: 2,
                  },
                  flexDirection: {
                    xs: 'column',
                  },
                  justifyContent: {
                    xs: 'center',
                  },
                }}
              >
                <FooterMenuGroup pages={pages} />
              </Box>
            </Grid>
          </Grid>
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
                xs: 2,
                lg: 0,
                md: 0,
                sm: 0,
              },
              justifyContent: {
                xs: 'center',
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'flex-start',
              },
            }}
          >
            <SocialLinks />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
                sm: 'flex-end',
                lg: 'flex-end',
              },
            }}
          >
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer15;
