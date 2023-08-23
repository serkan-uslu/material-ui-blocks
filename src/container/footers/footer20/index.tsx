import React from 'react';
import Logo from '@/components/logo';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import Copyright from '@/components/copyright';
import SocialLinks from '@/components/socialLinks';
import FooterMenuGroup from '@/components/footerMenuGroup';
import IconLink from '@/components/iconLink';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
          p: 2,
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
              display: 'flex',
              flexDirection: 'row',
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
                sm: 'flex-start',
                lg: 'flex-start',
              },
              mb: {
                xs: 1,
              },
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
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
              About
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

            {/* block */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  px: 1,
                }}
              >
                <img src={'https://placehold.co/100x60'}></img>
              </Box>
              <Box>
                <Box
                  sx={{
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                    }}
                  >
                    Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum
                    dolor sit.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    Lorem ipsum dolor
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* block */}
            {/* block */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  px: 1,
                }}
              >
                <img src={'https://placehold.co/100x60'}></img>
              </Box>
              <Box>
                <Box
                  sx={{
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                    }}
                  >
                    Lorem ipsum dolor sit
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    Lorem ipsum dolor
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* block */}
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
          <Button
            sx={{
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'black',
              display: 'block',
            }}
          >
            Map
          </Button>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=istanbul+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              style={{
                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
              }}
            ></iframe>
          </Box>
        </Grid>
        {/* col */}
      </Grid>
    </>
  );
}

export default Footer3;
