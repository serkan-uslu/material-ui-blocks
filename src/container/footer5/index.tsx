import React from 'react';
import Logo from '@/components/logo';
import { Box, Grid } from '@mui/material';
import IconLink from '@/components/iconLink';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';
import FooterMenuGroup from '@/components/footerMenuGroup';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer5() {
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
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box
            sx={{
              display: 'flex',
              mb: {
                xs: 2,
              },
              flexDirection: {
                xs: 'column',
                lg: 'row',
              },
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                },
              }}
            >
              <IconLink
                link={'/'}
                text={'serkanuslu.info@gmail.com'}
                icon={
                  <MailOutlineIcon
                    sx={{
                      mr: 1,
                      fontSize: '16px',
                    }}
                  ></MailOutlineIcon>
                }
              ></IconLink>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                },
              }}
            >
              <IconLink
                link={'/'}
                text={' +90 534 000 00 00'}
                icon={
                  <LocalPhoneIcon
                    sx={{
                      mr: 1,
                      fontSize: '16px',
                    }}
                  ></LocalPhoneIcon>
                }
              ></IconLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mb: {
                xs: 2,
                lg: 0,
                md: 0,
                sm: 0,
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
              mb: {
                xs: 3,
                lg: 0,
                md: 0,
                sm: 0,
              },
              flexDirection: {
                xs: 'column',
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

export default Footer5;
