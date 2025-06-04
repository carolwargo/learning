// src/components/HumanResources/ArticlePage.jsx
// src/components/HumanResources/ArticlePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import cardData from '../../data/cardData';

export default function ArticlePage() {
  const { id } = useParams();
  const article = cardData.find((card) => card.id === id);

  if (!article) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Article not found</Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBackRoundedIcon />}
          component={Link}
          to="/hr"
          sx={{ mt: 2 }}
        >
          Back to Human Resources
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackRoundedIcon />}
        component={Link}
        to="/hr"
        sx={{ mb: 2 }}
      >
        Back to Human Resources
      </Button>
      <Typography variant="caption" component="div" gutterBottom>
        {article.tag}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        By {article.authors.map((author) => author.name).join(', ')}
      </Typography>
      {article.img && (
        <Box
          component="img"
          src={article.img}
          alt={article.title}
          sx={{ width: '100%', maxHeight: '400px', objectFit: 'cover', mb: 2 }}
        />
      )}
      <Typography variant="body1" paragraph>
        {article.fullContent}
      </Typography>
    </Box>
  );
}