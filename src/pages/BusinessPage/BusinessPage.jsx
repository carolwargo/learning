import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/Business/AppAppBar';
import BusinessContent from '../../components/Business/BusinessContent';
import Latest from '../../components/Business/Latest';
import Footer from '../../components/Business/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function BusinessPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <BusinessContent />
        <Latest />
        <Footer />
      </Container>
    </AppTheme>
  );
}


