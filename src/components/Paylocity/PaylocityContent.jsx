// src/components/HumanResources/HumanResourcesContent.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import cardData from '../../data/payData';

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 8,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        pt:"16px"
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export function Search({ id = 'search' }) {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} 
    variant="outlined">
      <OutlinedInput
        size="small"
        id={id}
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function HumanResourcesContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('All categories');

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleChipClick = (category) => () => {
    setSelectedCategory(category);
    console.info(`Filter chip clicked: ${category}`);
  };

  const filteredCards = selectedCategory === 'All categories'
    ? cardData
    : cardData.filter((card) => card.tag === selectedCategory);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom
        color='#ff5722'
        sx={{ fontWeight: 'bold', mt: 5 }}>   
        Paylocity 
        Cheatsheet
        </Typography>
</div>


          {/* Mobile Search */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search id="mobile-search" />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>



          {/*Nav */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        {/* Chips Nav */}
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 1,
            overflow: 'auto',
            flexWrap: 'wrap',
          }}
        >
          <Chip
            label="All categories"
            size="medium"
            onClick={handleChipClick('All categories')}
            variant={selectedCategory === 'All categories' ? 'filled' : 'outlined'}
            color={selectedCategory === 'All categories' ? 'secondary' : 'default'}
            aria-pressed={selectedCategory === 'All categories'}
            sx={{ fontWeight: selectedCategory === 'All categories' ? 'bold' : 'normal' }}
          />
          {/* PAYROLL */}
          <Chip
            label="Payroll"
            size="medium"
            onClick={handleChipClick('Payroll')}
            variant={selectedCategory === 'Payroll' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Payroll' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Payroll'}
            sx={{ fontWeight: selectedCategory === 'Payroll' ? 'bold' : 'normal' }}
          />
               {/* BENEFITS */}
          <Chip
            label="Benefits"
            size="medium"
            onClick={handleChipClick('Benefits')}
            variant={selectedCategory === 'Benefits' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Benefits' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Benefits'}
            sx={{ fontWeight: selectedCategory === 'Benefits' ? 'bold' : 'normal' }}
          />

          <Chip
            label="Onboarding"
            size="medium"
            onClick={handleChipClick('Onboarding')}
            variant={selectedCategory === 'Onboarding' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Onboarding' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Onboarding'}
            sx={{ fontWeight: selectedCategory === 'Onboarding' ? 'bold' : 'normal' }}
          />

             {/** MANAGEMENT */}
          <Chip
            label="Management"
            size="medium"
            onClick={handleChipClick('Management')}
            variant={selectedCategory === 'Management' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Management' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Management'}
            sx={{ fontWeight: selectedCategory === 'Management' ? 'bold' : 'normal' }}
          />

   {/** ATTENDANCE */}
              <Chip
            label="Attendance"
            size="medium"
            onClick={handleChipClick('Attendance')}
            variant={selectedCategory === 'Attendance' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Attendance' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Attendance'}
            sx={{ fontWeight: selectedCategory === 'Attendance' ? 'bold' : 'normal' }}
          />
        </Box>
        
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search id="desktop-search" />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>



<Grid container spacing={2} columns={12}>
  {filteredCards.map((card, index) => (
    <Grid
      size={{ xs: 12, md: 6 }}
      key={card.id}
    >
      <SyledCard
        variant="outlined"
        onFocus={() => handleFocus(index)}
        onBlur={handleBlur}
        tabIndex={0}
        className={focusedCardIndex === index ? 'Mui-focused' : ''}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {card.img && (
          <CardMedia
            component="img"
            alt={card.title}
            image={card.img}
            sx={{
              aspectRatio: '16 / 9',
              objectFit: 'cover',
              width: '100%',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
        )}

        <SyledCardContent sx={{ flexGrow: 1 }}>
          <div>
            <Typography gutterBottom variant="caption" component="div">
              {card.tag}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {card.title}
            </Typography>
            <StyledTypography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              {card.description}
            </StyledTypography>
            <Button
              variant="outlined"
              size="small"
              component={Link}
              to={`/paylocity/article/${card.id}`}
              sx={{ mt: 2,
                boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                }
               }}
              aria-label={`View full article: ${card.title}`}
            >
              View Full Article
            </Button>
          </div>
          <Box>   <Author authors={card.authors} /> </Box>
        </SyledCardContent>

     
      </SyledCard>
    </Grid>
  ))}
</Grid>

    </Box>
  );
}