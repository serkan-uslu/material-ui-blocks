import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact1() {
  /* colors */
  const background = '#ddd';

  return (
    <Grid
      container
      sx={{
        background: background,
        alignItems: 'center',
        p: 6,
      }}
    >
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <InstagramIcon
            sx={{
              fontSize: '32px',
            }}
          ></InstagramIcon>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mb: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Creative and beautiful
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact1;
