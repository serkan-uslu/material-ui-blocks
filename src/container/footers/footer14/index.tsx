import React from 'react';
import Copyright from '@/components/copyright';
import { Box, Button, Grid } from '@mui/material';
import SocialLinks from '@/components/socialLinks';
import FooterMenuGroup from '@/components/footerMenuGroup';

function Footer14() {
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
          p: 3,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}>
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
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              About
            </Button>
            <FooterMenuGroup pages={pages} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
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
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              Contact
            </Button>
            <FooterMenuGroup pages={pages} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
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
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              Service
            </Button>
            <FooterMenuGroup pages={pages} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
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
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              Information
            </Button>
            <FooterMenuGroup pages={pages} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: '#dedede',
          p: 2,
          alignItems: 'center',
        }}
      >
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
    </>
  );
}

export default Footer14;
