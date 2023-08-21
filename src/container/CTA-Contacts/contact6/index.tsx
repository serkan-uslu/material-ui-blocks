import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import NewsletterInput from '@/components/newsletterInput';

function Contact6() {
  /* colors */
  const background = '#eeeeee';

  return (
    <Grid
      container
      sx={{
        background: background,
        p: {
          xs: 2,
          lg: 6,
          md: 6,
          sm: 6,
        },
      }}
    >
      {/* left start */}
      <Grid
        item
        xs={12}
        lg={6}
        md={6}
        sm={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
            Subscribe to our newsletter
          </Typography>
        </Box>
      </Grid>
      {/* left end */}

      {/* right start */}
      <Grid item xs={12} lg={6} md={6} sm={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
              xs: 'flex-start',
              lg: 'flex-end',
              md: 'flex-end',
              sm: 'flex-end',
            },
          }}
        >
          <NewsletterInput></NewsletterInput>
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Contact6;
