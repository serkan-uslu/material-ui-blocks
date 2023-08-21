import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

function Contact2() {
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
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Get in touch
          </Typography>
        </Box>
      </Grid>
      {/* left end */}

      {/* right start */}
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vitae nisl finibus risus imperdiet molestie. Aliquam tristique
            ornare auctor.
          </Typography>
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Contact2;
