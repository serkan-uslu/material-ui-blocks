import React from 'react';
import Logo from '@/components/logo';
import { Box, Button, Grid, Typography } from '@mui/material';
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
        <Grid item xs={12} sm={6} md={3} lg={3}>
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
            <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <IconLink
              link={'/'}
              text={'serkanuslu.info@gmail.com'}
              icon={
                <MailOutlineIcon
                  sx={{
                    mr: 1,
                    fontSize: '16px',
                  }}
                ></MailOutlineIcon>
              }
            ></IconLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <IconLink
              link={'/'}
              text={'serkanuslu.info@gmail.com'}
              icon={
                <MailOutlineIcon
                  sx={{
                    mr: 1,
                    fontSize: '16px',
                  }}
                ></MailOutlineIcon>
              }
            ></IconLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <IconLink
              link={'/'}
              text={'serkanuslu.info@gmail.com'}
              icon={
                <MailOutlineIcon
                  sx={{
                    mr: 1,
                    fontSize: '16px',
                  }}
                ></MailOutlineIcon>
              }
            ></IconLink>
          </Box>
        </Grid>
        {/* col */}

        {/* col */}
        <Grid item xs={12} sm={6} md={3} lg={3}>
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
            <FooterMenuGroup my={0} pages={pages} />
          </Box>
        </Grid>
        {/* col */}

        {/* col */}
        <Grid item xs={12} sm={6} md={3} lg={3}>
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
              Blog
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
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Button
            sx={{
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'black',
              display: 'block',
            }}
          >
            Instagram
          </Button>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box>
              <Box
                sx={{
                  px: 1,
                }}
              >
                <img src={'https://placehold.co/100x60'}></img>
              </Box>
              <Box
                sx={{
                  px: 1,
                }}
              >
                <img src={'https://placehold.co/100x60'}></img>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  px: 1,
                }}
              >
                <img src={'https://placehold.co/100x60'}></img>
              </Box>
              <Box
                sx={{
                  px: 1,
                }}
              >
                <img src={'https://placehold.co/100x60'}></img>
              </Box>
            </Box>
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
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer3;
