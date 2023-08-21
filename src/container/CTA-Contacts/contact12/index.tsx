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
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput placeholder="Your name" />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput placeholder="Your email" />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput placeholder="Your phone" />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12} md={12} sm={12}>
            <FormControl
              sx={{ width: '100%', backgroundColor: '#fff' }}
              variant="outlined"
            >
              <OutlinedInput multiline rows={4} placeholder="Your phone" />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={12} md={12} sm={12}>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact1;
