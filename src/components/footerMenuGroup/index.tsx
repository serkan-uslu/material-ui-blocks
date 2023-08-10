import React from 'react';
import { Button } from '@mui/material';

function FooterMenuGroup(props: any) {
  const { pages, centered = false, bold = false } = props;

  return pages.map((page: any, index: any) => (
    <Button
      key={index}
      href={page.link}
      sx={{
        my: 1,
        textAlign: centered && 'center',
        fontSize: '12px',
        fontWeight: bold && 'bold',
        color: 'black',
        display: 'block',
      }}
    >
      {page.name}
    </Button>
  ));
}

export default FooterMenuGroup;
