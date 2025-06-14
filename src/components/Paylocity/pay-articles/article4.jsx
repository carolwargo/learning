// src/components/HumanResources/pay-articles/Article3.jsx
import { Typography, Box, Paper, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import badge images (adjust paths based on your project structure)
import appStoreBadge from '../../../assets/images/appStoreBadge.png'; // Official Apple badge
import googlePlayBadge from '../../../assets/images/googlePlayBadge.png'; // Official Google badge

// Custom styled component for the timeline marker
const TimelineMarker = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '-32px',
  top: 0,
  width: 16,
  height: 16,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  zIndex: 1,
}));

// Custom styled component for the timeline container
const TimelineStep = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(5),
  marginLeft: theme.spacing(4),
}));

// Styled badge container for consistent sizing and hover effects
const BadgeLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', // Subtle hover effect to simulate interaction
  },
  // Ensure minimum height per Apple guidelines (200px onscreen)
  '& img': {
    height: '50px', // Adjust based on your design; ensure legibility
    width: 'auto',
  },
}));

export default function Article3() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Header with Badges */}
      <Typography
        variant="h1"
        sx={{ my: 2, fontSize: '2.5rem', fontWeight: 'bold', color: 'text.primary' }}
      >
       New Employees: Start Here!
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 2 }}
      >
        Welcome Aboard! Things to know before you start.
      </Typography>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <BadgeLink
          href="https://apps.apple.com/us/app/paylocity-mobile/id573346597"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Paylocity on the App Store"
        >
          <img src={appStoreBadge} alt="Download on the App Store"  className='rounded shadow-lg'/>
        </BadgeLink>
        <BadgeLink
          href="https://play.google.com/store/apps/details?id=com.paylocity.paylocitymobile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Paylocity on Google Play"
        >
          <img src={googlePlayBadge} alt="Get it on Google Play"  className='rounded shadow-lg'/>
        </BadgeLink>
      </Box>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 5 }}
      >
        Follow these steps to take control of your profile using the web portal or mobile app.
      </Typography>

      {/* Timeline */}
      <Box sx={{ position: 'relative', pl: 4 }}>
        {/* Vertical timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: '-28px',
            top: 0,
            bottom: 0,
            width: '4px',
            backgroundColor: 'primary.main',
            zIndex: 0,
          }}
        />

        {/* Step 1: Log In */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 1: Log into Paylocity
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            On <strong>desktop</strong>, visit <Link>company’s Paylocity web portal</Link> and sign in with your credentials. On the <strong>mobile app</strong>, download the Paylocity app (iOS or Android), log in, and access the dashboard. If you need help, contact <Link>HR</Link> at anytime, or <Link>Paylocity support</Link> (7:00 AM–7:00 PM CST, Monday–Friday).
          </Typography>
        </TimelineStep>

        {/* Step 2: Update Personal Information */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 2: Update Personal Information
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Navigate to the <strong>Employee Self-Service</strong> section. On <strong>desktop</strong>, click “Employee Info” to edit your name, address, phone number, or email. On the <strong>mobile app</strong>, tap “Personal Info” to make changes. Save updates to keep your profile current.
          </Typography>
        </TimelineStep>

        {/* Step 3: Manage Tax Forms */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 3: Manage Tax Forms
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
            Go to the “Pay” section and select “Tax Exemptions.” On <strong>desktop</strong>, update your W-4 form to adjust federal/state tax withholdings. On the <strong>mobile app</strong>, tap “Taxes” to edit withholding details. Save and submit for HR approval.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Download your W-2 or 1099 at year-end from the “Tax Forms” section on either platform.
          </Typography>
        </TimelineStep>

        {/* Step 4: Set Up or Update Direct Deposit */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 4: Set Up or Update Direct Deposit
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            In the “Pay” section, select “Direct Deposit.” On <strong>desktop</strong>, enter or update your bank account and routing numbers. On the <strong>mobile app</strong>, tap “Payment Preferences” to add or edit accounts. Verify and save changes to ensure timely payments.
          </Typography>
        </TimelineStep>

        {/* Step 5: Enroll in or Update Benefits */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 5: Enroll in or Update Benefits
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            During open enrollment or qualifying events, go to the “Benefits” section. On <strong>desktop</strong>, select health, dental, or other plans and confirm elections. On the <strong>mobile app</strong>, tap “Benefits” to review or update coverage. Submit changes for processing.
          </Typography>
        </TimelineStep>

        {/* Step 6: Request Time Off */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 6: Request Time Off
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            In the “Time & Labor” section, select “Request Time Off.” On <strong>desktop</strong>, choose vacation, sick, or other leave types and submit dates. On the <strong>mobile app</strong>, tap “Time Off” to submit requests and track balances. Monitor approval status in real-time.
          </Typography>
        </TimelineStep>

        {/* Step 7: View Pay Stubs and Request On-Demand Pay */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 7: View Pay Stubs and Request On-Demand Pay
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
            Access the “Pay” section to view pay stubs. On <strong>desktop</strong>, click “Pay History” to download or review earnings. On the <strong>mobile app</strong>, tap “Paychecks” for the same.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            If enabled, request early wage access via “On-Demand Pay” on either platform to receive earned wages before payday.
          </Typography>
        </TimelineStep>
      </Box>

      {/* Pro Tips */}
      <Box sx={{ pl: 4, mt: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: '1.25rem', fontWeight: 'bold', mb: 2, color: 'text.primary' }}
        >
          Pro Tips
        </Typography>
        <Box component="ul" sx={{ pl: 2, color: 'text.secondary', fontSize: '1rem' }}>
          <Box component="li" sx={{ mb: 1 }}>
            Use the mobile app for quick updates and notifications on the go.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Regularly check your profile to ensure personal and tax information is up to date.
          </Box>
          <Box component="li">
            Contact <Link>HR</Link> or <Link>Paylocity support</Link> (7:00 AM–7:00 PM CST, Monday–Friday) for help with complex changes.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}