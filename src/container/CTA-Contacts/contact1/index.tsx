import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

function Contact1() {
  /* colors */
  const background = '#eeeeee';

  return (
    <Grid
      container
      sx={{
        background: background,
        p: 6,
        alignItems: 'center',
      }}
    >
      {/* left start */}
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Contact us
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
            justifyContent: 'center',
          }}
        >
          <Container maxWidth={'sm'}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae nisl finibus risus imperdiet molestie. Aliquam tristique
              ornare auctor.
            </Typography>
          </Container>
        </Box>
      </Grid>
      {/* right end */}
    </Grid>
  );
}

export default Contact1;
