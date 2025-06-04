// src/components/MainContent.jsx
import * as React from 'react';
import { Box, Chip, Grid, Typography, IconButton, Button } from '@mui/material';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import { Link } from 'react-router-dom';
import SyledCard from './SyledCard'; // Adjust import path
import SyledCardContent from './SyledCardContent'; // Adjust import path
import StyledTypography from './StyledTypography'; // Adjust import path
import CardMedia from './CardMedia'; // Adjust import path
import Author from './Author'; // Adjust import path
import Search from './Search'; // Adjust import path
import cardData from '../data/cardData'; // Adjust import path

export default function MainContent() {
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

  // Filter cards based on selected category
  const filteredCards = selectedCategory === 'All categories'
    ? cardData
    : cardData.filter((card) => card.tag === selectedCategory);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h2" gutterBottom>
          Human Resources Tools
        </Typography>
        <Typography>
          Explore available resource articles by selecting a category of interest below to filter.
        </Typography>
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
            onClick={handleChipClick('All categories')}
            variant={selectedCategory === 'All categories' ? 'filled' : 'outlined'}
            color={selectedCategory === 'All categories' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'All categories'}
            sx={{ fontWeight: selectedCategory === 'All categories' ? 'bold' : 'normal' }}
          />
          <Chip
            label="Business"
            size="medium"
            onClick={handleChipClick('Business')}
            variant={selectedCategory === 'Business' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Business' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Business'}
            sx={{ fontWeight: selectedCategory === 'Business' ? 'bold' : 'normal' }}
          />
          <Chip
            label="Certification"
            size="medium"
            onClick={handleChipClick('Certification')}
            variant={selectedCategory === 'Certification' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Certification' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Certification'}
            sx={{ fontWeight: selectedCategory === 'Certification' ? 'bold' : 'normal' }}
          />
          <Chip
            label="Enrichment"
            size="medium"
            onClick={handleChipClick('Enrichment')}
            variant={selectedCategory === 'Enrichment' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Enrichment' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Enrichment'}
            sx={{ fontWeight: selectedCategory === 'Enrichment' ? 'bold' : 'normal' }}
          />
          <Chip
            label="Technology"
            size="medium"
            onClick={handleChipClick('Technology')}
            variant={selectedCategory === 'Technology' ? 'filled' : 'outlined'}
            color={selectedCategory === 'Technology' ? 'primary' : 'default'}
            aria-pressed={selectedCategory === 'Technology'}
            sx={{ fontWeight: selectedCategory === 'Technology' ? 'bold' : 'normal' }}
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
        ))}
      </Grid>
    </Box>
  );
}