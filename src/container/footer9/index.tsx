import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Footer3() {
  const pages = ['About', 'Portfolio', 'Blog', 'Contact'];
  const pages2 = ['Tern of Servcies', 'Privacy Policy'];

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
            <Typography
              variant="body2"
              sx={{
                fontSize: '12px',
              }}
            >
              © Copyright Lorem ipsum 2023
            </Typography>
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
            {pages2.map((page) => (
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
      </Grid>
    </>
  );
}

export default Footer3;
