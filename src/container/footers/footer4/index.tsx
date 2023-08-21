import React from 'react';
import Logo from '@/components/logo';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';
import { Box, Grid, Typography } from '@mui/material';

function Footer4() {
  return (
    <Grid
      container
      sx={{
        background: '#eeeeee',
        p: 4,
        alignItems: 'center',
      }}
    >
      {/* left start */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box
              sx={{
                mb: {
                  xs: 2,
                },
              }}
            >
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Box
              sx={{
                mb: {
                  xs: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nec bibendum nisi, et sagittis tortor.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* left end */}

      {/* right start */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
              xs: 'flex-start',
              lg: 'flex-end',
              md: 'flex-end',
              sm: 'flex-start',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              ml: {
                xs: -1,
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: {
                xs: 'flex-start',
                lg: 'flex-end',
                md: 'flex-end',
                sm: 'flex-end',
              },
            }}
          >
            <Copyright />
          </Box>
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Footer4;
