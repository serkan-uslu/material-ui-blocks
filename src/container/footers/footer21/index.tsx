import React from 'react';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';
import { Box, Grid, Typography } from '@mui/material';
import Logo from '@/components/logo';

function Footer12() {
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
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Mea an decore veritus probataus
            </Typography>
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
              mb: {
                xs: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet.
            </Typography>
          </Box>
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
            <SocialLinks />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer12;
