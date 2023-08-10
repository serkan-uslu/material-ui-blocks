import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
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
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box
            sx={{
              display: 'flex',
              mb: {
                xs: 2,
              },
              flexDirection: {
                xs: 'column',
                lg: 'row',
              },
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                },
              }}
            >
              <IconButton>
                <MailOutlineIcon
                  sx={{
                    mr: 1,
                    fontSize: '16px',
                  }}
                ></MailOutlineIcon>
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  serkanuslu.info@gmail.com
                </Typography>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                },
              }}
            >
              <IconButton>
                <LocalPhoneIcon
                  sx={{
                    mr: 1,
                    fontSize: '16px',
                  }}
                ></LocalPhoneIcon>
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  +90 534 000 00 00
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mb: {
                xs: 2,
                lg: 0,
                md: 0,
                sm: 0,
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
              mb: {
                xs: 3,
              },
              flexDirection: {
                xs: 'column',
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
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
                sm: 'flex-end',
                lg: 'flex-end',
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
      </Grid>
    </>
  );
}

export default Footer3;
