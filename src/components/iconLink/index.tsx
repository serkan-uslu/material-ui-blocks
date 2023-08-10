import React from 'react';
import { IconButton, Typography, Icon } from '@mui/material';

function IconLink(props: any) {
  const { icon, text, link } = props;
  return (
    <IconButton href={link}>
      {icon}
      <Typography
        sx={{
          fontSize: '12px',
        }}
      >
        {text}
      </Typography>
    </IconButton>
  );
}

export default IconLink;
