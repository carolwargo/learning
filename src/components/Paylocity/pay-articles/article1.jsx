// src/components/HumanResources/pay-articles/Article1.jsx
// src/components/HumanResources/pay-articles/Article1.jsx
import { Typography, Box, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';

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

export default function Article1() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto',  }}>
      {/* Header */}
      <Typography
        variant="h1"
        sx={{ my: 2, fontSize: '2.5rem', fontWeight: 'bold', color: 'primary.main' }}
      >
       Learn To Automate & Customize Payroll Workflows
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', color: 'text.secondary', mb: 5 }}
      >
        Payroll processing ensures employees are paid accurately and on time, handling wages, taxes, and deductions. Follow this timeline to streamline your process using Paylocity’s automation features.
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

        {/* Step 1 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 1: Log into Paylocity
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Access the Paylocity platform via the web or mobile app using your credentials. Navigate to the main dashboard to begin.
          </Typography>
        </TimelineStep>

        {/* Step 2 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 2: Verify Pay Period Dates
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Go to the Payroll module and check the current pay period dates for accuracy. Edit any discrepancies by selecting the pay period and updating the dates.
          </Typography>
        </TimelineStep>

        {/* Step 3 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 3: Input Payroll Data
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
            Enter employee data, including hours worked, overtime, and bonuses. For hourly employees, import time and attendance data from the Time & Labor module, which syncs automatically. For salaried employees, verify fixed wages.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Use the Payroll Readiness Dashboard to review tasks and flag errors, such as unexpected pay spikes or missing data.
          </Typography>
        </TimelineStep>

        {/* Step 4 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 4: Customize Workflows
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Configure workflows in the Payroll module to suit your organization. Set up approval processes for adjustments or reimbursements. Map earnings, deductions, and taxes to your general ledger for seamless accounting.
          </Typography>
        </TimelineStep>

        {/* Step 5 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 5: Run Payroll Preview
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Generate a paycheck preview to review gross wages, deductions, and net pay. Check for accuracy and resolve any flagged issues, such as incorrect hours or deductions.
          </Typography>
        </TimelineStep>

        {/* Step 6 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 6: Process Payroll
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Submit the payroll for processing. Paylocity’s automated system calculates wages, applies deductions, and generates direct deposit files or check orders.
          </Typography>
        </TimelineStep>

        {/* Step 7 */}
        <TimelineStep>
          <TimelineMarker />
          <Typography
            variant="h3"
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1, color: 'primary.main' }}
          >
            Step 7: Review and Approve
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Use automated audits to ensure error-free processing. Approve the payroll run, and the system finalizes payments and updates records.
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
            Schedule recurring payroll reports to track data and prepare for audits.
          </Box>
          <Box component="li" sx={{ mb: 1 }}>
            Use Paylocity’s mobile app for on-the-go approvals and monitoring.
          </Box>
          <Box component="li">
            Contact Paylocity support (7:00 AM–7:00 PM CST, Monday–Friday) for assistance.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}