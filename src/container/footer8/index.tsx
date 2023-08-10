import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  TextField,
} from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Footer3() {
  const pages = ['About', 'Portfolio', 'Blog', 'Contact'];

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
      </Grid>

      <Grid
        container
        sx={{
          background: '#dedede',
          p: 2,
          alignItems: 'center',
        }}
      >
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
              flexDirection: 'row',
              mb: {
                xs: 2,
              },
              justifyContent: {
                xs: 'center',
                sm: 'flex-end',
                md: 'flex-end',
                lg: 'flex-end',
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
    </>
  );
}

export default Footer3;
