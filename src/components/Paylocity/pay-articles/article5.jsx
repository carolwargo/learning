//Benefits overview: 
// src/components/HumanResources/pay-articles/Article5.jsx
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

export default function Article5() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Header with Badges */}
      <Typography
        variant="h1"
        sx={{ my: 2, fontSize: '2.5rem', fontWeight: 'bold', color: 'text.primary' }}
      >
        Top Employee Benefits to Attract and Retain Talent
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 2 }}
      >
        Competitive salaries are key, but robust benefits reduce turnover, boost morale, and make your company irresistible. Explore these 14 benefits to enhance employee satisfaction, manageable via platforms like Paylocity’s Employee Self-Service portal. Download the app to manage benefits on the go:
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
        Discover the top benefits that attract and retain talent in today’s competitive market.
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

        {/* Benefit 1: Health Insurance */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Health Insurance
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Offer comprehensive health plans, including dental and vision, to show employee care. Reduces sick days and boosts productivity, especially for younger workers (42% of Gen Z consider switching for better healthcare).{' '}
            <Link href="/benefits/health-insurance" target="_blank" rel="noopener noreferrer">
              Learn more about health insurance benefits
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 2: Retirement Benefits */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Retirement Benefits
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Provide 401(k) plans and financial planning for long-term security, increasing retention by supporting employees’ future.{' '}
            <Link href="/benefits/retirement-plans" target="_blank" rel="noopener noreferrer">
              Explore retirement benefits
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 3: Vacation Time/Paid Time Off (PTO) */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Vacation Time/Paid Time Off (PTO)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Generous PTO, unlimited PTO, or floating holidays prevent burnout. Streamline requests with self-service portals for ease.{' '}
            <Link href="/benefits/pto-policies" target="_blank" rel="noopener noreferrer">
              Learn about PTO strategies
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 4: Flexible Schedule */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Flexible Schedule
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Adjustable hours or shift swapping enhance work-life balance, boosting happiness and productivity.{' '}
            <Link href="/benefits/flexible-scheduling" target="_blank" rel="noopener noreferrer">
              Discover flexible schedule benefits
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 5: Remote Work Options */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Remote Work Options
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Remote or hybrid work saves commuting costs and expands talent pools, with 87% of employees preferring it.{' '}
            <Link href="/benefits/remote-work" target="_blank" rel="noopener noreferrer">
              Explore remote work options
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 6: Wellness Benefits */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Wellness Benefits
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Gym memberships, yoga, or EAPs improve health and productivity, valued by 79% of employees.{' '}
            <Link href="/benefits/wellness-programs" target="_blank" rel="noopener noreferrer">
              Learn about wellness benefits
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 7: Education and Career Growth */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Education and Career Growth
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Tuition reimbursement and learning management systems drive skill development and retention.{' '}
            <Link href="/benefits/career-growth" target="_blank" rel="noopener noreferrer">
              Explore career growth opportunities
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 8: Employee Savings Account */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Employee Savings Account
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Matching savings plans for goals like home purchases offer financial security and tax benefits.{' '}
            <Link href="/benefits/savings-plans" target="_blank" rel="noopener noreferrer">
              Learn about savings accounts
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 9: Flexible Benefits System */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Flexible Benefits System
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Customizable benefits or “benefits credit” schemes cater to diverse needs, enhancing engagement.{' '}
            <Link href="/benefits/flexible-benefits" target="_blank" rel="noopener noreferrer">
              Discover flexible benefits systems
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 10: Discounts and Rewards */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Discounts and Rewards
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Staff discounts on shopping or entertainment offset living costs and boost morale.{' '}
            <Link href="/benefits/discounts-rewards" target="_blank" rel="noopener noreferrer">
              Explore discount programs
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 11: Recognition Programs */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Recognition Programs
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Peer recognition software fosters appreciation, with 37% of employees citing it as a top motivator.{' '}
            <Link href="/benefits/recognition-programs" target="_blank" rel="noopener noreferrer">
              Learn about recognition programs
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 12: Performance Bonuses */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Performance Bonuses
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Personalized rewards, like gift cards, motivate high performance and build positive culture.{' '}
            <Link href="/benefits/performance-bonuses" target="_blank" rel="noopener noreferrer">
              Explore performance bonuses
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 13: Childcare Assistance */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Childcare Assistance
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Subsidies or Dependent Care FSAs reduce financial burdens, freeing employees to focus on work.{' '}
            <Link href="/benefits/childcare-assistance" target="_blank" rel="noopener noreferrer">
              Learn about childcare benefits
            </Link>.
          </Typography>
        </TimelineStep>

        {/* Benefit 14: Home Office Budget */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Home Office Budget
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Support for ergonomic setups enhances remote work comfort and productivity.{' '}
            <Link href="/benefits/home-office-budget" target="_blank" rel="noopener noreferrer">
              Explore home office benefits
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
          <Box component="li" sx={{ mb: 1}}>
            Use HR platforms like Paylocity to streamline benefit management and updates.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Regularly review employee feedback to tailor benefits to workforce needs.
          </Box>
          <Box component="li">
            Contact <Link href="/support/hr">HR</Link> or <Link href="https://www.paylocity.com/help/">Paylocity support</Link> (7:00 AM–7:00 PM CST, Monday–Friday) for assistance with benefit enrollment.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}