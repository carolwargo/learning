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
import payData from '../data/payData.jsx';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme.jsx';
import AppAppBar from '../components/HumanResources/AppAppBar.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Paylocity from '../components/HumanResources/pay-articles/Paylocity.jsx';
import RodNReel from '../assets/images/RodNReel.png';

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

export default function  PaylocityPage(props) {
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

  // Get unique categories from payData
  const categories = ['All Categories', ...new Set(payData.map((article) => article.tag))];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'All Categories'
    ?payData
    :payData.filter((article) => article.tag === selectedCategory);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
        <Box
      component="img"
      src={RodNReel}
      alt="Paylocity Hero"
      sx={{
        width: '100%',
        maxHeight: '500px',
        objectFit: 'cover',
        mt: 2, // margin-top spacing
        mb: 4, // margin-bottom spacing
      }}
    />
          <Container maxWidth={false} 
        component="main"
        sx={{ display: 'flex',     
          maxWidth: '100%',
            width: '1370px', 
            flexDirection: 'column', 
            mt: 2, 
            gap: 4,
        }}
      >

      <Typography variant="h1" gutterBottom
      sx={{color:'#ff3600', fontWeight: 'bold'}}>
      Paylocity
      </Typography>
      
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
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          gap: 1,
          overflow: 'auto',
          flexWrap: 'wrap',

        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            size="medium"
            onClick={handleChipClick(category)}
            variant={selectedCategory === category ? 'filled' : 'outlined'}
            color={selectedCategory === category ? 'secondary' : 'default'}
            aria-pressed={selectedCategory === category}
            sx={{ fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
          />
        ))}
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
         <Chip
  label={article.tag}
  size="small"
       color= 'secondary' 
  sx={{
    fontWeight: 'bold',
    py: 1.5,
    px: 1,
    mb: 1,
  }}
/>

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
         <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
 <Paylocity/>
         </Box>
     
      {/*
     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
        <Pagination count={9} boundaryCount={9} />
      </Box>
      */}
        </Container>
     </AppTheme>
  );
}
