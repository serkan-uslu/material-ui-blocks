import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer3() {
  const pages = ['About', 'Portfolio', 'Blog', 'Contact'];

  return (
    <Grid
      container
      sx={{
        background: '#eeeeee',
        p: 4,
        alignItems: 'center',
      }}
    >
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
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                LOGO
              </Typography>
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
                  fontSize: '14px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nec bibendum nisi, et sagittis tortor.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
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
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <TwitterIcon></TwitterIcon>
            </IconButton>
            <IconButton>
              <InstagramIcon></InstagramIcon>
            </IconButton>
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
            <Typography
              variant="body2"
              sx={{
                fontSize: '12px',
              }}
            >
              © Copyright Lorem ipsum 2023
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer3;
