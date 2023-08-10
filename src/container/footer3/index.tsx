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
      <Grid item xs={12} sm={4} md={4} lg={4}>
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
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row',
              md: 'row',
              sm: 'row',
            },
            justifyContent: {
              xs: 'center',
            },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              {page}
            </Button>
          ))}
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
      </Grid>
    </Grid>
  );
}

export default Footer3;
