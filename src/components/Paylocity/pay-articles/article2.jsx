// src/components/HumanResources/pay-articles/article1.jsx
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

export default function Article2() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 3, fontSize: '2rem', fontWeight: 'bold' }}>
        Maryland Wage & Hour Law Overview
      </Typography>

      <Typography variant="body1" paragraph sx={{ fontSize: '1rem', mb: 2 }}>
        The Maryland Wage and Hour Law regulates minimum wage, overtime, and payment practices. This article outlines the key components of the law and how it affects employers and employees.
      </Typography>

      <Typography variant="h3" sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}>
        Key Provisions
      </Typography>

      <List sx={{ pl: 4, mb: 2 }}>
        <ListItem>
          <ListItemText primary="Minimum wage requirements." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Overtime regulations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pay frequency standards." />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph sx={{ fontSize: '1rem' }}>
        For more information, visit the
        {' '}
        <a href="https://www.dllr.state.md.us/labor/wages/" target="_blank" rel="noopener noreferrer">
          Maryland Department of Labor
        </a>
        .
      </Typography>
    </Box>
  );
}
