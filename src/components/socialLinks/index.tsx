import React from 'react';
import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialLinks() {
  return (
    <>
      <IconButton href={'/'}>
        <FacebookIcon></FacebookIcon>
      </IconButton>
      <IconButton href={'/'}>
        <TwitterIcon></TwitterIcon>
      </IconButton>
      <IconButton href={'/'}>
        <InstagramIcon></InstagramIcon>
      </IconButton>
    </>
  );
}

export default SocialLinks;
