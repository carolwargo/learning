//src/pages/HumanResourcesPage/HumanResourcesPage.jsx
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/HumanResources/AppAppBar';
import HumanResourcesContent from '../../components/HumanResources/HumanResourcesContent';
import Latest from '../../components/HumanResources/Latest';
import Footer from '../../components/HumanResources/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function HumanResourcesPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
          <Container maxWidth={false} 
        component="main"
        sx={{ display: 'flex',     
          maxWidth: '100%',
            width: '1370px', 
            flexDirection: 'column', 
            mt: 12, 
            gap: 4,
        }}
      >
        <HumanResourcesContent />
        <Latest />
    
      </Container>
          <Footer />
    </AppTheme>
  );
}


