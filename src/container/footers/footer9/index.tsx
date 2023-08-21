import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FooterMenuGroup from '@/components/footerMenuGroup';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';

function Footer9() {
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
              mb: {
                xs: 3,
              },
              justifyContent: {
                xs: 'center',
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'flex-start',
              },
              flexDirection: {
                xs: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
              },
            }}
          >
            <FooterMenuGroup centered pages={pages} />
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
                sm: 0,
                md: 0,
              },
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
                xs: 3,
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
            <FooterMenuGroup centered pages={pages2} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer9;
