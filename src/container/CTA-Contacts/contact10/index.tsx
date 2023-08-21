import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact1() {
  /* colors */
  const background = '#eeeeee';

  return (
    <Grid
      container
      sx={{
        background: background,
        alignItems: 'center',
      }}
    >
      <Grid item xs={4}>
        <Box
          sx={{
            p: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FacebookIcon
            sx={{
              fontSize: '32px',
            }}
          ></FacebookIcon>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          backgroundColor: '#ddd',
        }}
      >
        <Box
          sx={{
            p: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TwitterIcon
            sx={{
              fontSize: '32px',
            }}
          ></TwitterIcon>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            p: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <InstagramIcon
            sx={{
              fontSize: '32px',
            }}
          ></InstagramIcon>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact1;
