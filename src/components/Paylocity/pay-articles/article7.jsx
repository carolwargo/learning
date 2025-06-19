// src/components/HumanResources/pay-articles/Article7.jsx
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

export default function Article7() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Header with Badges */}
      <Typography
        variant="h1"
        sx={{ my: 2, fontSize: '2.5rem', fontWeight: 'bold', color: 'text.primary' }}
      >
        Advanced AI Applications for Hospitality HR Beyond Paylocity
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 2 }}
      >
        As an HR manager for a hotel, spa, wedding venue, or restaurant, leverage AI tools to complement Paylocity’s features, addressing unique hospitality HR needs like retention, diversity, and wellness. Download the Paylocity app to manage core HR tasks on the go:
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
        Explore eight advanced AI applications tailored to hospitality, enhancing HR processes beyond Paylocity’s recruiting, onboarding, scheduling, and analytics.
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

        {/* Step 1: AI-Driven Predictive Retention Models */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI-Driven Predictive Retention Models
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI analyzes attendance, performance, and external factors to predict turnover risk. In hospitality, flag at-risk restaurant servers or spa therapists during peak seasons for proactive retention (e.g., bonuses). Reduces turnover where 70% report burnout. Tools: Visier, IBM Watson.{' '}
            <Link href="/ai/predictive-retention" target="_blank" rel="noopener noreferrer">
              Learn more about retention models
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 2: AI-Powered Diversity and Inclusion Analytics */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI-Powered Diversity and Inclusion Analytics
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI audits hiring and reviews for bias, optimizing job ads for diverse restaurant or wedding venue staff. Enhances inclusivity for multilingual teams, appealing to luxury venue guests. Tools: Textio, TalVista.{' '}
            <Link href="/ai/diversity-inclusion" target="_blank" rel="noopener noreferrer">
              Explore diversity analytics
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 3: AI-Enhanced Employee Wellness Programs */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI-Enhanced Employee Wellness Programs
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI personalizes wellness via wearables or apps, recommending interventions for stressed event planners or chefs. Suggests mindfulness for spa staff or breaks for restaurant workers, reducing absenteeism. Tools: Wellable, Virgin Pulse.{' '}
            <Link href="/ai/wellness-programs" target="_blank" rel="noopener noreferrer">
              Learn about AI wellness programs
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 4: AI for Real-Time Conflict Resolution Insights */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI for Real-Time Conflict Resolution Insights
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI analyzes communications to detect conflicts among banquet or front desk staff, enabling early HR intervention. Maintains harmony for seamless guest experiences at wedding venues or restaurants. Tools: Humu, Workhuman.{' '}
            <Link href="/ai/conflict-resolution" target="_blank" rel="noopener noreferrer">
              Explore conflict resolution AI
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 5: AI-Optimized Career Pathing and Succession Planning */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI-Optimized Career Pathing and Succession Planning
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI maps skills to recommend career paths, like promoting servers to restaurant supervisors or spa receptionists to event planners. Boosts retention by preventing career stagnation. Tools: Gloat, Eightfold AI.{' '}
            <Link href="/ai/career-pathing" target="_blank" rel="noopener noreferrer">
              Learn about career pathing AI
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 6: AI for Automated Exit Interview Analysis */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI for Automated Exit Interview Analysis
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI processes exit interviews to identify turnover reasons (e.g., scheduling issues for housekeepers), informing retention strategies like rewards programs for restaurant staff. Tools: Qualtrics XM, MonkeyLearn.{' '}
            <Link href="/ai/exit-interview-analysis" target="_blank" rel="noopener noreferrer">
              Explore exit interview AI
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 7: AI-Driven Labor Law Compliance Monitoring */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI-Driven Labor Law Compliance Monitoring
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI monitors labor laws, ensuring compliance with tipped wage rules for restaurant staff or overtime for hotel workers, reducing audit risks. Tools: ComplianceHR, Brightmine.{' '}
            <Link href="/ai/labor-law-compliance" target="_blank" rel="noopener noreferrer">
              Learn about compliance monitoring
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Step 8: AI for Gamified Employee Engagement */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            AI for Gamified Employee Engagement
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            AI creates gamified platforms with rewards for upselling (servers) or guest satisfaction (venue staff), tailoring incentives to boost motivation. Enhances service quality. Tools: Badgeville, Hoopla.{' '}
            <Link href="/ai/gamified-engagement" target="_blank" rel="noopener noreferrer">
              Explore gamified engagement
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
            Integrate AI tools with your property management system (PMS) or Paylocity for seamless data flow, avoiding overlap with existing features.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Pilot one tool (e.g., wellness apps for spa staff) to assess ROI and staff adoption before scaling to all departments.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Train employees on AI tools, emphasizing they enhance, not replace, human roles in hospitality.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Balance AI insights with personal HR interactions for sensitive tasks like conflict resolution or career coaching.
          </Box>
          <Box component="li">
            Ensure AI tools comply with GDPR or CCPA to protect employee data. For API integrations, explore <Link href="https://x.ai/api" target="_blank" rel="noopener noreferrer">xAI’s API</Link>. Verify Paylocity’s latest features and check <Link href="https://x.ai/grok" target="_blank" rel="noopener noreferrer">SuperGrok</Link> or <Link href="https://help.x.com/en/using-x/x-premium" target="_blank" rel="noopener noreferrer">x.com subscriptions</Link> for pricing details. Contact <Link href="/support/hr">HR</Link> or <Link href="https://www.paylocity.com/help/">Paylocity support</Link> (7:00 AM–7:00 PM CST, Monday–Friday) for assistance.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}