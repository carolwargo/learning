import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/HumanResources/AppAppBar';
import HumanResourcesContent from '../../components/HumanResources/HumanResourcesContent';
import Latest from '../../components/HumanResources/Latest';
import Footer from '../../components/HumanResources/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function HRPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', mt: 12, gap: 4 }}
      >
        <HumanResourcesContent />
        <Latest />
        <Footer />
      </Container>
    </AppTheme>
  );
}


