import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import NewsletterInput from '@/components/newsletterInput';

function Contact6() {
  /* colors */
  const background = '#f9f9f9';

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
        lg={5}
        md={5}
        sm={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              mb: {
                xs: 2,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Subscribe and get coupon
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              mb: {
                xs: 2,
              },
            }}
          >
            <NewsletterInput></NewsletterInput>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              mb: {
                xs: 2,
              },
            }}
          >
            <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
          </Box>
        </Box>
      </Grid>
      {/* left end */}

      {/* right start */}
      <Grid item xs={12} lg={7} md={7} sm={7}>
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: {
                xs: 'center',
                lg: 'flex-end',
              },
            }}
          >
            <img
              style={{
                maxWidth: '320px',
                width: '100%',
              }}
              src="./circle.png"
            ></img>
          </Box>
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Contact6;
