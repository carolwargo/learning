import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/HR/AppAppBar';
import BusinessContent from '../../components/HR/HRContent';
import Latest from '../../components/HR/Latest';
import Footer from '../../components/HR/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function HRPage(props) {
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


