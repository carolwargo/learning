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
import cardData from '../../data/cardData';

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
    paddingBottom: 16,
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
        padding: '16px',
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
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
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

  // Get unique tags from cardData
  const tags = [...new Set(cardData.map((card) => card.tag))];

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleChipClick = (category) => {
    setSelectedCategory(category === selectedCategory ? 'All categories' : category); // Toggle to All if same category
  };

  const filteredCards = selectedCategory === 'All categories'
    ? cardData
    : cardData.filter((card) => card.tag === selectedCategory);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h2" gutterBottom>
          Human Resources Tools
        </Typography>
        <Typography>Explore available resource articles by selecting a category of interest below to filter.</Typography>
      </div>
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
        {/* Nav */}
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
            onClick={() => handleChipClick('All categories')}
            variant={selectedCategory === 'All categories' ? 'filled' : 'outlined'}
            color={selectedCategory === 'All categories' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'All categories'}
            sx={{ fontWeight: selectedCategory === 'All categories' ? 'bold' : 'normal' }}
          />
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="medium"
              onClick={() => handleChipClick(tag)}
              variant={selectedCategory === tag ? 'filled' : 'outlined'}
              color={selectedCategory === tag ? 'primary' : 'default'}
              aria-pressed={selectedCategory === tag}
              sx={{ fontWeight: selectedCategory === tag ? 'bold' : 'normal' }}
            />
          ))}
          {selectedCategory !== 'All categories' && (
            <Chip
              label="Clear Filter"
              size="medium"
              onClick={() => handleChipClick('All categories')}
              variant="outlined"
              color="secondary"
              sx={{ fontWeight: 'normal' }}
            />
          )}
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
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <Grid
              size={{ xs: 12, md: cardData.indexOf(card) < 2 ? 6 : 4 }}
              key={card.id}
            >
              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
                sx={{ height: '100%' }}
              >
                {card.img && (
                  <CardMedia
                    component="img"
                    alt={card.title}
                    image={card.img}
                    sx={{
                      height: { sm: 'auto', md: cardData.indexOf(card) < 2 ? 'auto' : '50%' },
                      aspectRatio: cardData.indexOf(card) < 2 ? '16 / 9' : '',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                )}
                <SyledCardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: card.img ? 'auto' : '100%',
                  }}
                >
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
                      to={`/article/${card.id}`}
                      sx={{ mt: 1 }}
                      aria-label={`View full article: ${card.title}`}
                    >
                      View Full Article
                    </Button>
                  </div>
                </SyledCardContent>
                <Author authors={card.authors} />
              </SyledCard>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1">No articles found for this filter.</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}