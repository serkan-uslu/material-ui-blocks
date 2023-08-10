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
          p: 3,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box
            sx={{
              display: 'flex',
              mb: {
                xs: 2,
              },
              flexDirection: {
                xs: 'column',
              },
              justifyContent: {
                xs: 'center',
              },
            }}
          >
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              About
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  textAlign: 'left',
                  fontSize: '12px',
                  color: 'black',
                  display: 'block',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box
            sx={{
              display: 'flex',
              mb: {
                xs: 2,
              },
              flexDirection: {
                xs: 'column',
              },
              justifyContent: {
                xs: 'center',
              },
            }}
          >
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              Contact
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  textAlign: 'left',
                  fontSize: '12px',
                  color: 'black',
                  display: 'block',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box
            sx={{
              display: 'flex',
              mb: {
                xs: 2,
              },
              flexDirection: {
                xs: 'column',
              },
              justifyContent: {
                xs: 'center',
              },
            }}
          >
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              Service
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  textAlign: 'left',
                  fontSize: '12px',
                  color: 'black',
                  display: 'block',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box
            sx={{
              display: 'flex',
              mb: {
                xs: 2,
              },
              flexDirection: {
                xs: 'column',
              },
              justifyContent: {
                xs: 'center',
              },
            }}
          >
            <Button
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
              }}
            >
              Information
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  textAlign: 'left',
                  fontSize: '12px',
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
      <Grid
        container
        sx={{
          background: '#dedede',
          p: 2,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
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
