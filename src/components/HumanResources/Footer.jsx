import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
//import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Copyright() {
  return (
    
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {'Copyright © '}
      <Link color="text.secondary" href="mailto:carolwargo.dev@gmail.com">
Carol Wargo
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>


     <Container maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4},
          mt: 4,
              pt:  { sm: 4, md: 10 },
          textAlign: { sm: 'center', md: 'left' },
             backgroundColor: 'hsl(220, 20%, 80%)',
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            px: 5,
                   maxWidth: '100%',
            width: '1370px', 
            justifyContent: 'space-between',
              
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, fontSize: '1.2rem', mt: 3 } }
              >
                Join the newsletter
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Subscribe for weekly updates, and exclusive content on career development.
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    },
                  }}
                  sx={{ width: '250px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          
          </Box>



          {/**Large */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
              
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Product
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Features & Highlights
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Testimonials
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Human Resource Guide
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Sample Job Descriptions
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Career Resources
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
  
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Legal
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy Policy   Privacy
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Contact
            </Link>
          </Box>
        </Box>
<Box
  sx={{
    position: 'relative',
    width: '100%',
    maxWidth: '1370px',
    px: 5,
  }}
>
  {/* Typography on top of icons 
  <Typography
    variant="body2"
    sx={{
      color: 'black',
      position: 'absolute',
fontWeight: 200, fontSize: '1rem'
    }}
  >
   Follow us on social media: 
  </Typography>*/}

  {/* Stack of icons */}
  <Stack
    direction="row"
    spacing={1}
    useFlexGap
    sx={{
      justifyContent: 'left',
      color: 'text.secondary',
// push icons down so Typography overlaps visibly
    }}
  >

    <IconButton color="inherit" size="small" href="mailto: " aria-label="Email Us">
  <EmailIcon />
</IconButton>

    <IconButton color="inherit" size="small" href="tel:+11234567890" aria-label="Call Us">
  <FontAwesomeIcon icon={faPhone} />
</IconButton>

        <IconButton color="inherit" size="small" href="https://github.com/" aria-label="GitHub">
      <FacebookIcon/>
    </IconButton>
    <IconButton color="inherit" size="small" href="https://x.com/" aria-label="X">
      <TwitterIcon />
    </IconButton>
    <IconButton color="inherit" size="small" href="https://www.linkedin.com/" aria-label="LinkedIn">
      <LinkedInIcon />
    </IconButton>
  </Stack>
</Box>

        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',

              px: 5,
                   maxWidth: '100%',
            width: '1370px', 
    
          }}
        >
          
             <Divider sx={{ mt: 4 }} />
                <Copyright />
        
        </Box>
      </Container>
    </React.Fragment>
  );
}


 