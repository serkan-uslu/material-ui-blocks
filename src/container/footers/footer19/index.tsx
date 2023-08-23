import React from 'react';
import Logo from '@/components/logo';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';
import FooterMenuGroup from '@/components/footerMenuGroup';
import IconLink from '@/components/iconLink';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer3() {
  /* pages */
  const pages = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <>
      <Grid
        container
        sx={{
          background: '#eeeeee',
          p: 4,
        }}
      >
        {/* col */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          sx={{
            pr: { lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Link
              href={'/'}
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Information
            </Link>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo
              dui, feugiat vitae diam vel, bibendum mollis purus. Praesent eget
              justo eget sem interdum volutpat ut nec dolor
            </Typography>
          </Box>
        </Grid>
        {/* col */}

        {/* col */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          sx={{
            pr: { lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Link
              href={'/'}
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              News
            </Link>
          </Box>
          <Box>
            <Box>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet,
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
                variant="body2"
              >
                Lorem ipsum dolor sit amet,
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet,
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
                variant="body2"
              >
                Lorem ipsum dolor sit amet,
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* col */}

        {/* col */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          sx={{
            pr: { lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Link
              href={'/'}
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Blog
            </Link>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo
              dui, feugiat vitae diam vel, bibendum mollis purus. Praesent eget
              justo eget sem interdum volutpat ut nec dolor
            </Typography>
          </Box>
        </Grid>
        {/* col */}

        {/* col */}
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Link
              href={'/'}
              sx={{
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              Information
            </Link>
          </Box>
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Button variant="contained" color="primary" disableElevation>
              Lorem
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Lorem
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Lorem
            </Button>
          </Box>
        </Grid>
        {/* col */}
      </Grid>

      <Grid
        container
        sx={{
          background: '#dedede',
          px: 4,
          py: 1,
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mb: {
                xs: 2,
                lg: 0,
                md: 0,
                sm: 0,
              },
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
                sm: 'flex-start',
                lg: 'flex-start',
              },
            }}
          >
            <Copyright />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
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
            <SocialLinks />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer3;
