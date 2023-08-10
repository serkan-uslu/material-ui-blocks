import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import Footer1 from 'container/footer1/index';
import Footer2 from 'container/footer2/index';
import Footer3 from 'container/footer3/index';

function HomePage() {
  return (
    <Box>
      <Footer1 />
      <Box my={2}>
        <Divider></Divider>
      </Box>
      <Footer2 />
      <Box my={2}>
        <Divider></Divider>
      </Box>
      <Footer3 />
    </Box>
  );
}

export default HomePage;
