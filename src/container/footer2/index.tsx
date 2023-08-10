import React from 'react';
import Logo from '@/components/logo';
import { Box, Grid } from '@mui/material';
import FooterMenuGroup from '@/components/footerMenuGroup';

function Footer2() {
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
      <Grid item xs={12} sm={6} md={6} lg={6}>
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
            mb: {
              xs: 1,
              lg: 0,
              md: 0,
              sm: 0,
            },
          }}
        >
          <Logo />
        </Box>
      </Grid>
      {/* left end */}

      {/* right start */}
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{}}>
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
          <FooterMenuGroup pages={pages} />
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Footer2;
