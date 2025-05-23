import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/Learning/AppAppBar';
import LearningContent from '../../components/Learning/LearningContent';
import Latest from '../../components/Learning/Latest';
import Footer from '../../components/Learning/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function LearningPage(props) {
  return (
    
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <LearningContent />
        <Latest />
        <Footer />
      </Container>
    </AppTheme>
  );
}

