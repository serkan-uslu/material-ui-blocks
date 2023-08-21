import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

function Contact5() {
  /* colors */
  const background = '#eeeeee';

  return (
    <Grid
      container
      sx={{
        background: background,
        p: 6,
      }}
    >
      {/* left start */}
      <Grid item xs={12} lg={6} md={6} sm={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Work with us
          </Typography>
        </Box>
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
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vitae nisl finibus risus imperdiet molestie. Aliquam tristique
            ornare auctor.
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
          <Button variant="contained" color="primary">
            Lorem Ipsum
          </Button>
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Contact5;
