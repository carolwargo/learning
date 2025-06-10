//src/pages/HumanResourcesPage/HumanResourcesPage.jsx
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/HumanResources/AppAppBar';
import PaylocityContent from '../../components/Paylocity/PaylocityContent.jsx';
import PayHero from '../../assets/images/PayHero.png';  
import Footer from '../../components/HumanResources/Footer';
import Box from '@mui/material/Box';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function HumanResourcesPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />

      {/* Hero Section with overlay text */}
      <Box sx={{ position: 'relative', mt: 2 }}>
        <Box
          component="img"
          src={PayHero}
          alt="Paylocity Hero"
          sx={{
            width: '100%',
            maxHeight: '450px',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '5%',
            width: '40%',
            padding: 2,
            borderRadius: 2,
          }}
        >
 
        </Box>
      </Box>
    
          <Container maxWidth={false} 
        component="main"
        sx={{ display: 'flex',     
          maxWidth: '100%',
            width: '1370px', 
            flexDirection: 'column', 
            mt: 4, 
            gap: 4,
        }}
      >
        <PaylocityContent />

      </Container>
          <Footer />
    </AppTheme>
  );
}


/**Payroll Software, benefits Administration, HR Software, Time and Attendance, talent management, employee experience  */
/**Payroll, Benefits, Management, Attendance, Talent, Employees, Analytics*/
