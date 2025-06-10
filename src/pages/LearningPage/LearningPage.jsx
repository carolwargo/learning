import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/Paylocity/AppAppBar';
import LearningContent from '../../components/Paylocity/PaylocityContent';
import Latest from '../../components/Paylocity/Latest';
import Footer from '../../components/Paylocity/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function LearningPage(props) {
  return (
    
    <AppTheme {...props}>
       <AppAppBar />
      <CssBaseline enableColorScheme />
     
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

