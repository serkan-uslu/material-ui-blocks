import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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
            variant="h5"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Contact
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mb: 2,
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
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              +90 555 55 55
            </Typography>
          </Container>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              p: 1,
            }}
          >
            <FacebookIcon
              sx={{
                fontSize: '24px',
              }}
            ></FacebookIcon>
          </Box>
          <Box
            sx={{
              p: 1,
            }}
          >
            <TwitterIcon
              sx={{
                fontSize: '24px',
              }}
            ></TwitterIcon>
          </Box>
          <Box
            sx={{
              p: 1,
            }}
          >
            <InstagramIcon
              sx={{
                fontSize: '24px',
              }}
            ></InstagramIcon>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact1;
