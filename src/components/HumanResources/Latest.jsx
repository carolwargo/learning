// src/components/Latest.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import businessLearning from '../../data/businessLearning.jsx';

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity- ease-in-out',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ display: 'flex', mt: 1, flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24, padding: 0.5, fontSize: '0.75rem' }}
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

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');

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

  // Get unique categories from businessLearning
  const categories = ['All Categories', ...new Set(businessLearning.map((article) => article.tag))];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'All Categories'
    ? businessLearning
    : businessLearning.filter((article) => article.tag === selectedCategory);

  return (
    <div>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h2" gutterBottom>
        Latest
      </Typography>
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          gap: 1,
          overflow: 'auto',
          flexWrap: 'wrap',
          mb: 4,
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            size="medium"
            onClick={handleChipClick(category)}
            variant={selectedCategory === category ? 'filled' : 'outlined'}
            color={selectedCategory === category ? 'primary' : 'default'}
            aria-pressed={selectedCategory === category}
            sx={{ fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
          />
        ))}
      </Box>
      <Grid container spacing={8} columns={12}>
        {filteredArticles.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%',
                backgroundColor: 'background.paper',
                boxShadow: 3,
              }}
            >
              <Box sx={{ p: 5, flexGrow: 1 }}>
                <Typography gutterBottom variant="caption" component="div">
                  {article.tag}
                </Typography>
                <Author authors={article.authors} />
                <TitleTypography
                  gutterBottom
                  variant="h6"
                  onFocus={() => handleFocus(index)}
                  onBlur={handleBlur}
                  tabIndex={0}
                  className={focusedCardIndex === index ? 'Mui-focused' : ''}
                  sx={{ my: 1 }}
                >
                  {article.title}
                  <NavigateNextRoundedIcon
                    className="arrow"
                    sx={{ fontSize: '1rem' }}
                  />
                </TitleTypography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {article.description}
                </StyledTypography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, mb: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<InfoRoundedIcon />}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<ShoppingCartRoundedIcon />}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/*
     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
        <Pagination count={9} boundaryCount={9} />
      </Box>
      */}
    </div>
  );
}
   