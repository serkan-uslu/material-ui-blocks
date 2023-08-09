import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import React from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { children } = props;

  return (
    <>
      <Box>
        <Container>{children}</Container>
      </Box>
    </>
  );
}
