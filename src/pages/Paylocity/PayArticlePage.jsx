import  { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import payData from '../../data/payData'; // use your actual data file here

export default function PayArticleIndexPage() {
  const { id } = useParams();
  const article = payData.find((card) => card.id === id);
  const [DynamicContent, setDynamicContent] = useState(null);

  useEffect(() => {
    if (!article?.fullContent) {
      const loadFallback = async () => {
        try {
          const module = await import(`../../content/articles/FullContent_${id}.jsx`);
          setDynamicContent(() => module.default);
        } catch (err) {
          console.error('Fallback content not found:', err);
        }
      };
      loadFallback();
    }
  }, [id, article]);

  if (!article) {
    return (
      /* BACK BUTTON Article not found */
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Article not found</Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBackRoundedIcon />}
          component={RouterLink}
          to="/paylocity"
          sx={{ mt: 2 }}
        >
          Back 
        </Button>
      </Box>
    );
  }

  const Content = article.fullContent || DynamicContent;

  return (
   
    <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackRoundedIcon />}
        component={RouterLink}
        to="/paylocity"
        sx={{ mb: 2}}
      >
        Back
      </Button>
 <Box>

      {article.img && (
        <Box
          component="img"
          src={article.img}
          alt={article.title}
          sx={{ width: '100%', maxHeight: 400, objectFit: 'cover', mb: 2, mt:1 }}
        />
      )}



      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        By {article.authors.map((a) => a.name).join(', ')}
      </Typography>
   {/* article page CONTENT */}
      {Content ? <Content /> : <Typography>Loading article...</Typography>}
   {/* BACK BUTTON */}
      <Button
        variant="outlined"
        startIcon={<ArrowBackRoundedIcon />}
        component={RouterLink}
        to="/paylocity"
        sx={{ mt: 3 }}
      >
        Back
      </Button>
    </Box>
    </Box>
  );
}

