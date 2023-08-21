import React from 'react';
import { Box, Divider } from '@mui/material';
import Contact1 from 'container/CTA-Contacts/contact1/index';

function HomePage() {
  return (
    <Box>
      <Box my={2}>
        <Divider></Divider>
      </Box>
      <Contact1 />
    </Box>
  );
}

export default HomePage;
