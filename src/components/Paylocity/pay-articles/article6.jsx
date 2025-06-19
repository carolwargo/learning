// src/components/HumanResources/pay-articles/Article6.jsx
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
  '& img': {
    height: '50px', // Adjust based on your design; ensure legibility
    width: 'auto',
  },
}));

export default function Article6() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Header with Badges */}
      <Typography
        variant="h1"
        sx={{ my: 2, fontSize: '2.5rem', fontWeight: 'bold', color: 'text.primary' }}
      >
        Leverage AI with Paylocity for Hospitality HR Management
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 2 }}
      >
        As an HR manager for a hotel, spa, wedding venue, or restaurant, AI can streamline operations, boost employee engagement, and enhance decision-making. Paylocity’s AI tools offer practical solutions for hospitality’s unique challenges. Download the Paylocity app to manage HR tasks on the go:
      </Typography>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <BadgeLink
          href="https://apps.apple.com/us/app/paylocity-mobile/id573346597"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Paylocity on the App Store"
        >
          <img src={appStoreBadge} alt="Download on the App Store" className='rounded shadow-lg'/>
        </BadgeLink>
        <BadgeLink
          href="https://play.google.com/store/apps/details?id=com.paylocity.paylocitymobile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Paylocity on Google Play"
        >
          <img src={googlePlayBadge} alt="Get it on Google Play" className='rounded shadow-lg'/>
        </BadgeLink>
      </Box>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 5 }}
      >
        Explore these eight ways to leverage AI with Paylocity to optimize HR processes in hospitality.
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

        {/* Step 1: Automate Recruitment and Hiring */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Automate Recruitment and Hiring
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Use Paylocity’s AI-enabled recruiting workflows to automate job postings, screen candidates, and schedule interviews. In hospitality, AI matches resumes to roles like chefs or event coordinators, ideal for high-turnover restaurant or seasonal spa staff.{' '}
            <Link href="/ai/recruitment-hiring" target="_blank" rel="noopener noreferrer">
              Learn more about AI recruitment
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 2: Streamline Onboarding with AI Workflows */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Streamline Onboarding with AI Workflows
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Automate onboarding tasks like collecting tax forms or routing approvals with Paylocity’s HR workflows. For hotel, spa, or restaurant hires, employees can complete paperwork on mobile devices, perfect for peak wedding or tourism seasons.{' '}
            <Link href="/ai/onboarding-workflows" target="_blank" rel="noopener noreferrer">
              Explore AI onboarding
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 3: Enhance Employee Engagement with AI Chatbots */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Enhance Employee Engagement with AI Chatbots
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Paylocity’s AI chatbots handle inquiries like pay stub access or time-off requests, while Employee Voice analyzes feedback. In hospitality, chatbots support servers or venue staff, addressing burnout concerns (80% in restaurants).{' '}
            <Link href="/ai/employee-engagement" target="_blank" rel="noopener noreferrer">
              Learn about AI chatbots
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 4: Optimize Workforce Scheduling */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Optimize Workforce Scheduling
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Paylocity’s AI scheduling tools manage shift swapping and align staffing with sales data. In hospitality, forecast needs for wedding weekends or busy restaurant nights, ensuring optimal coverage for spa therapists or banquet servers.{' '}
            <Link href="/ai/workforce-scheduling" target="_blank" rel="noopener noreferrer">
              Explore AI scheduling
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 5: Improve Performance Management and Training */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Improve Performance Management and Training
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Paylocity’s AI analytics identify training gaps, and chatbots guide employees through modules. Train hotel staff on customer service or restaurant servers on upselling, enhancing guest satisfaction in high-churn roles.{' '}
            <Link href="/ai/performance-training" target="_blank" rel="noopener noreferrer">
              Learn about AI performance management
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 6: Ensure Compliance and Data Security */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Ensure Compliance and Data Security
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Paylocity automates compliance for tipped employees and secures data with encryption. AI flags payroll or overtime issues, ensuring compliance with restaurant wage laws or spa safety standards.{' '}
            <Link href="/ai/compliance-security" target="_blank" rel="noopener noreferrer">
              Explore AI compliance tools
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 7: Leverage Data-Driven Insights for Retention */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Leverage Data-Driven Insights for Retention
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Paylocity’s AI analytics identify turnover patterns and tailor retention strategies, like flexible schedules for spa staff or rewards for engaged wedding venue employees, reducing recruitment costs.{' '}
            <Link href="/ai/retention-insights" target="_blank" rel="noopener noreferrer">
              Learn about AI retention strategies
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 8: Support Multilingual Communication */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Support Multilingual Communication
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Use AI chatbots alongside Paylocity to communicate in multiple languages with diverse hotel or spa staff, ensuring clear policy or schedule communication for international hires.{' '}
            <Link href="/ai/multilingual-communication" target="_blank" rel="noopener noreferrer">
              Explore multilingual AI tools
            </Link>.
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
            Start with Paylocity’s AI chatbots for routine HR tasks to test impact before scaling to scheduling or analytics.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Train staff on using Paylocity’s mobile app and chatbots to maximize adoption across hotel, spa, and restaurant teams.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Integrate Paylocity with your property management system (PMS) or POS for seamless data flow in hospitality operations.
          </Box>
          <Box component="li">
            Prioritize human interaction for sensitive issues like conflict resolution, using AI for repetitive tasks. Contact <Link href="/support/hr">HR</Link> or <Link href="https://www.paylocity.com/help/">Paylocity support</Link> (7:00 AM–7:00 PM CST, Monday–Friday) for assistance.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}