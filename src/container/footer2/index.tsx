import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

function Footer2() {
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
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 2,
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
  );
}

export default Footer2;
