import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact1() {
  /* colors */
  const background = '#eee';

  return (
    <Grid
      container
      sx={{
        background: background,
        alignItems: 'center',
        p: 4,
      }}
    >
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box mb={1}>
            <Typography
              sx={{
                textAlign: 'center',
              }}
              variant="body2"
            >
              Contact
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Get in Touch
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container maxWidth={'sm'} spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput size="small" placeholder="Your name" />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput size="small" placeholder="Your company" />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput size="small" placeholder="Your email" />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput size="small" placeholder="Your phone" />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={12} md={12} sm={12}>
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Button disableElevation variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact1;
