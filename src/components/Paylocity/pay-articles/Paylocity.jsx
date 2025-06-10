import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';


const PaylocityOverview = () => {
  return (
    <Box sx={{ p: 3 }}>
 

      <Typography variant="h3" gutterBottom>
        Core Features
      </Typography>

      <Typography variant="h4" gutterBottom>Payroll Processing</Typography>
            <Typography variant="h6" gutterBottom>Payroll Processing</Typography>
      <List dense>
        <ListItem><ListItemText primary="Automated and customizable payroll workflows" /></ListItem>
        <ListItem><ListItemText primary="Tax calculation and filing" /></ListItem>
        <ListItem><ListItemText primary="Direct deposit and wage garnishment handling" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Human Resources (HR) Management</Typography>
        <Typography variant="h6" gutterBottom>Payroll Processing</Typography>
      <List dense>
        <ListItem><ListItemText primary="Employee records and digital file storage" /></ListItem>
        <ListItem><ListItemText primary="Onboarding workflows" /></ListItem>
        <ListItem><ListItemText primary="Compliance tracking (e.g., EEO, ACA)" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Time and Attendance</Typography>
        <Typography variant="h6" gutterBottom>Tracking</Typography>
      <List dense>
        <ListItem><ListItemText primary="Time tracking" /></ListItem>
        <ListItem><ListItemText primary="PTO requests and approvals" /></ListItem>
        <ListItem><ListItemText primary="Scheduling" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Benefits Administration</Typography>
        <Typography variant="h6" gutterBottom>Benefits</Typography>
      <List dense>
        <ListItem><ListItemText primary="Open enrollment tools" /></ListItem>
        <ListItem><ListItemText primary="Benefits tracking" /></ListItem>
        <ListItem><ListItemText primary="Integration with insurance carriers" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Talent Management</Typography>
       <Typography variant="h4" gutterBottom>Talent</Typography>
      <List dense>
        <ListItem><ListItemText primary="Recruiting and applicant tracking" /></ListItem>
        <ListItem><ListItemText primary="Learning management" /></ListItem>
        <ListItem><ListItemText primary="Performance reviews" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Employee Self-Service</Typography>
      <List dense>
        <ListItem><ListItemText primary="Employees can update personal info, view pay stubs, and request time off via mobile or web" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Mobile App</Typography>
      <List dense>
        <ListItem><ListItemText primary="Full-featured mobile access for both employees and administrators" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Reporting & Analytics</Typography>
      <List dense>
        <ListItem><ListItemText primary="Customizable dashboards and real-time reporting" /></ListItem>
        <ListItem><ListItemText primary="Workforce analytics for strategic decision-making" /></ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Engagement Tools</Typography>
      <List dense>
        <ListItem><ListItemText primary="Peer recognition" /></ListItem>
        <ListItem><ListItemText primary="Internal social feed (similar to a company Facebook)" /></ListItem>
      </List>

      <Typography variant="h5" gutterBottom>Who Uses Paylocity?</Typography>
      <List dense>
        <ListItem><ListItemText primary="HR departments looking to consolidate payroll and HR tasks in one system" /></ListItem>
        <ListItem><ListItemText primary="Mid-sized companies across various industries (healthcare, education, retail, etc.)" /></ListItem>
        <ListItem><ListItemText primary="Organizations transitioning from manual HR processes or legacy systems" /></ListItem>
      </List>

      <Typography variant="h5" gutterBottom>Why It's Popular</Typography>
      <List dense>
        <ListItem><ListItemText primary="All-in-one HR and payroll platform" /></ListItem>
        <ListItem><ListItemText primary="Modern interface and mobile-friendly tools" /></ListItem>
        <ListItem><ListItemText primary="Strong customer support and implementation services" /></ListItem>
        <ListItem><ListItemText primary="Frequent updates and new feature rollouts" /></ListItem>
      </List>
    </Box>
  );
};

export default PaylocityOverview;
