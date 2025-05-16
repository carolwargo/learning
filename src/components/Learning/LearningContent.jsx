// src/components/Overview.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
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
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import Post18 from '../../assets/Post18.png';
import Post17 from '../../assets/Post17.png';

const learningCardData = [
  {
    img: Post18, // Fixed: Use Post18 directly, not as an object
    tag: 'Hair',
    title: 'Mastering Balayage Techniques',
    description: 'Learn advanced hair coloring methods to create stunning, natural-looking highlights.',
    authors: [
      { name: 'Lila Monroe', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Sofia Vega', avatar: '/static/images/avatar/2.jpg' }
    ]
  },
  {
 img: Post17, // Fixed: Use Post18 directly, not as an object
    tag: 'Hair',
    title: 'Perfecting Ombre Hair Coloring',
    description: 'Discover expert techniques for achieving seamless ombre hair with vibrant, blended hues.',
    authors: [
      { name: 'Emma Claire', avatar: '/static/images/avatar/3.jpg' },
      { name: 'Mia Alvarez', avatar: '/static/images/avatar/4.jpg' }
    ]
  },
  {
    img: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=800&h=450',
    tag: 'Makeup',
    title: 'Bridal Makeup Artistry',
    description: 'Master techniques for creating flawless, long-lasting bridal looks for any style.',
    authors: [{ name: 'Emma Rose', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&h=450',
    tag: 'Skincare',
    title: 'Advanced Skincare Treatments',
    description: 'Explore cutting-edge facial techniques to enhance client skin health and glow.',
    authors: [{ name: 'Ava Lin', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=450',
    tag: 'Business',
    title: 'Salon Success: Business Strategies',
    description: 'Build a thriving salon with marketing, client retention, and financial tips.',
    authors: [{ name: 'Clara Evans', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&w=800&h=450',
    tag: 'Nails',
    title: 'Nail Art Masterclass',
    description: 'Create intricate nail designs with the latest trends and techniques.',
    authors: [
      { name: 'Mia Chen', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Zoe Harper', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&h=450',
    tag: 'Hair',
    title: 'Precision Haircutting Techniques',
    description: 'Elevate your cutting skills with modern styles and precision methods.',
    authors: [{ name: 'Sofia Vega', avatar: '/static/images/avatar/2.jpg' }],
  },
];

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
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
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
        <Typography variant="caption">{authors.map((author) => author.name).join(', ')}</Typography>
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

function Search({ id = 'search' }) {
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
        inputProps={{ 'aria-label': 'search' }}
      />
    </FormControl>
  );
}

export default function Overview() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => setFocusedCardIndex(index);
  const handleBlur = () => setFocusedCardIndex(null);
  const handleClick = () => console.info('You clicked the filter chip.');
  const handleAddToCart = (title) => console.info(`Added "${title}" to cart`);
  const handleLearnMore = (title) => console.info(`Clicked Learn More for "${title}"`);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        p: { xs: 1, md: 2 },
        overflow: 'visible',
        boxSizing: 'border-box',
        minHeight: '200vh', // Force tall content for scrolling test
      }}
    >
      {console.log("Rendering Overview component")}

      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Explore All Learning</Typography>
        <Typography variant="body1">Start with a category of interest below.</Typography>
      </Box>

      {/* Search and RSS (Mobile) */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: '100%',
          overflow: 'auto',
          mb: 2,
        }}
      >
        <Search id="mobile-search" />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>

      {/* Navigation Chips and Search (Desktop) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 2,
          mb: 2,
        }}
      >
        <Box sx={{ display: 'inline-flex', flexDirection: 'row', gap: 1, overflow: 'auto' }}>
          <Chip onClick={handleClick} size="medium" label="All categories" />
          {['Business', 'Certification', 'Enrichment', 'Technology'].map((label) => (
            <Chip
              key={label}
              onClick={handleClick}
              size="medium"
              label={label}
              sx={{ backgroundColor: 'transparent', border: 'none' }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
          }}
        >
          <Search id="desktop-search" />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <hr />

      {/* Featured Learning */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Explore Featured Learning</Typography>
        <Typography variant="body1">Latest learning for beauty professionals.</Typography>
      </Box>
      <Grid container spacing={2} columns={12}>
        {learningCardData.slice(0, 2).map((card, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index ? 'Mui-focused' : ''}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{ aspectRatio: '16 / 9', borderBottom: '1px solid', borderColor: 'divider' }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">{card.tag}</Typography>
                <Typography gutterBottom variant="h6" component="div">{card.title}</Typography>
                <StyledTypography variant="body2" color="text.secondary">{card.description}</StyledTypography>
              </SyledCardContent>
              <Author authors={card.authors} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<InfoRoundedIcon />}
                  onClick={() => handleLearnMore(card.title)}
                >
                  Learn More
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<ShoppingCartRoundedIcon />}
                  onClick={() => handleAddToCart(card.title)}
                >
                  Add to Cart
                </Button>
              </Box>
            </SyledCard>
          </Grid>
        ))}
      </Grid>
      <hr />

      {/* New Learning */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Explore New Learning</Typography>
        <Typography variant="body1">Newly added material to grow your skills.</Typography>
      </Box>
      <Grid container spacing={2} columns={12}>
        {learningCardData.map((card, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index ? 'Mui-focused' : ''}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{ height: 200, borderBottom: '1px solid', borderColor: 'divider' }}
              />
              
              <SyledCardContent>
                <Chip label={card.tag} size="small" sx={{ alignSelf: 'start', mb: 1 }} color="primary" />
                <Typography variant="h6">{card.title}</Typography>
                <StyledTypography variant="body2" color="text.secondary">{card.description}</StyledTypography>
              </SyledCardContent>
              <Author authors={card.authors} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<InfoRoundedIcon />}
                  onClick={() => handleLearnMore(card.title)}
                >
                  Learn More
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<ShoppingCartRoundedIcon />}
                  onClick={() => handleAddToCart(card.title)}
                >
                  Add to Cart
                </Button>
              </Box>
            </SyledCard>
          </Grid>
        ))}
      </Grid>
      <hr />

      {/* Additional Learning */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Additional Learning</Typography>
        <Typography variant="body1">More opportunities to enhance your skills.</Typography>
      </Box>
      <Grid container spacing={2} columns={12}>
        {learningCardData.slice(2).map((card, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index + 2}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index + 2)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index + 2 ? 'Mui-focused' : ''}
              sx={{ height: '100%' }}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{ height: { sm: 'auto', md: '50%' }, aspectRatio: { sm: '16 / 9', md: '' } }}
              />
                 <Author authors={card.authors} />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">{card.tag}</Typography>
                <Typography gutterBottom variant="h6" component="div">{card.title}</Typography>
                <StyledTypography variant="body2" color="text.secondary">{card.description}</StyledTypography>
              </SyledCardContent>
           
           
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<InfoRoundedIcon />}
                  onClick={() => handleLearnMore(card.title)}
                >
                  Learn More
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<ShoppingCartRoundedIcon />}
                  onClick={() => handleAddToCart(card.title)}
                >
                  Add to Cart
                </Button>
              </Box>
          
              
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}