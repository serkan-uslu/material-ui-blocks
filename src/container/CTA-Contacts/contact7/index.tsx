import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact7() {
  /* colors */
  const background = '#eeeeee';

  return (
    <Grid
      container
      sx={{
        background: background,
        p: 4,
        alignItems: 'center',
      }}
    >
      {/* left start */}
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              p: 2,
            }}
          >
            <FacebookIcon
              sx={{
                fontSize: '32px',
              }}
            ></FacebookIcon>
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <TwitterIcon
              sx={{
                fontSize: '32px',
              }}
            ></TwitterIcon>
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <InstagramIcon
              sx={{
                fontSize: '32px',
              }}
            ></InstagramIcon>
          </Box>
        </Box>
      </Grid>
      {/* left end */}
    </Grid>
  );
}

export default Contact7;
