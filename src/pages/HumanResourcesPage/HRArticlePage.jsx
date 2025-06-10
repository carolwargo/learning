// src/components/HumanResources/ArticlePage.jsx
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, ListItemText, Link } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import cardData from '../../data/cardData';

export default function HRArticlePage() {
  const { id } = useParams();
  const article = cardData.find((card) => card.id === id);

  if (!article) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Article not found</Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBackRoundedIcon />}
          component={RouterLink}
          to="/hr"
          sx={{ mt: 2}}
        >
          Back to Resources
        </Button>
      </Box>
    );
  }

  // Parse links and bold in text (e.g., [text](url) to <Link>, **text** to <strong>)
  const renderText = (text) => {
    const parts = [];
    let lastIndex = 0;

    // Combined regex for links and bold
    const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^\*]+)\*\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, linkText, linkUrl, boldText] = match;
      const index = match.index;

      // Add text before the match
      if (index > lastIndex) {
        parts.push(text.slice(lastIndex, index));
      }

      // Handle link or bold
      if (linkText && linkUrl) {
        parts.push(
          <Link key={`link-${index}`} href={linkUrl} color="primary" underline="hover">
            {linkText}
          </Link>
        );
      } else if (boldText) {
        parts.push(
          <strong key={`bold-${index}`} style={{ fontWeight: 'bold' }}>
            {boldText}
          </strong>
        );
      }

      lastIndex = index + fullMatch.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  // Parse fullContent into styled components
  const renderContent = () => {
    const sections = article.fullContent.split('\n\n').filter((section) => section.trim());
    let listItems = [];
    let inList = false;

    return sections.flatMap((section, index) => {
      // Handle h2 headings (##)
      if (section.startsWith('## ')) {
        if (inList && listItems.length > 0) {
          inList = false;
          const listContent = (
            <List key={`list-${index}`} sx={{ pl: 4, mb: 2 }}>
              {listItems.map((item, i) => {
                const isSubItem = item.startsWith('  - ');
                const text = item.replace(/^(- |  - )/, '');
                return (
                  <ListItem key={i} sx={{ pl: isSubItem ? 4 : 0, py: 0.5 }}>
                    <ListItemText
                      primary={<Typography variant="body1" sx={{ fontSize: '1rem' }}>{renderText(text)}</Typography>}
                    />
                  </ListItem>
                );
              })}
            </List>
          );
          listItems = [];
          return [
            listContent,
            <Typography
              key={`h2-${index}`}
              variant="h2"
              sx={{ mb: 3, fontSize: '2rem', fontWeight: 'bold' }}
            >
              {renderText(section.replace('## ', ''))}
            </Typography>,
          ];
        }
        return [
          <Typography
            key={`h2-${index}`}
            variant="h2"
            sx={{ mb: 3, fontSize: '2rem', fontWeight: 'bold' }}
          >
            {renderText(section.replace('## ', ''))}
          </Typography>,
        ];
      }
      // Handle h3 headings (###)
      else if (section.startsWith('### ')) {
        if (inList && listItems.length > 0) {
          inList = false;
          const listContent = (
            <List key={`list-${index}`} sx={{ pl: 4, mb: 2 }}>
              {listItems.map((item, i) => {
                const isSubItem = item.startsWith('  - ');
                const text = item.replace(/^(- |  - )/, '');
                return (
                  <ListItem key={i} sx={{ pl: isSubItem ? 4 : 0, py: 0.5 }}>
                    <ListItemText
                      primary={<Typography variant="body1" sx={{ fontSize: '1rem' }}>{renderText(text)}</Typography>}
                    />
                  </ListItem>
                );
              })}
            </List>
          );
          listItems = [];
          return [
            listContent,
            <Typography
              key={`h3-${index}`}
              variant="h3"
              sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              {renderText(section.replace('### ', ''))}
            </Typography>,
          ];
        }
        return [
          <Typography
            key={`h3-${index}`}
            variant="h3"
            sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            {renderText(section.replace('### ', ''))}
          </Typography>,
        ];
      }
      // Handle bold headings (**text**)
      else if (section.startsWith('**') && section.endsWith('**') && !section.match(/^\*\*[^\*]+\*\*$/)) {
        if (inList && listItems.length > 0) {
          inList = false;
          const listContent = (
            <List key={`list-${index}`} sx={{ pl: 4, mb: 2 }}>
              {listItems.map((item, i) => {
                const isSubItem = item.startsWith('  - ');
                const text = item.replace(/^(- |  - )/, '');
                return (
                  <ListItem key={i} sx={{ pl: isSubItem ? 4 : 0, py: 0.5 }}>
                    <ListItemText
                      primary={<Typography variant="body1" sx={{ fontSize: '1rem' }}>{renderText(text)}</Typography>}
                    />
                  </ListItem>
                );
              })}
            </List>
          );
          listItems = [];
          return [
            listContent,
            <Typography
              key={`bold-heading-${index}`}
              variant="h3"
              sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              {renderText(section.replace(/\*\*/g, ''))}
            </Typography>,
          ];
        }
        return [
          <Typography
            key={`bold-heading-${index}`}
            variant="h3"
            sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            {renderText(section.replace(/\*\*/g, ''))}
          </Typography>,
        ];
      }
      // Handle list items (- or   -)
      else if (section.trim().match(/^(- |  - )/)) {
        // Split section by single newline to get individual list items
        const items = section
          .trim()
          .split('\n')
          .filter((item) => item.trim().startsWith('- ') || item.trim().startsWith('  - '));
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(...items);
        return [];
      }
      // Handle paragraphs
      else {
        if (inList && listItems.length > 0) {
          inList = false;
          const listContent = (
            <List key={`list-${index}`} sx={{ pl: 4, mb: 2 }}>
              {listItems.map((item, i) => {
                const isSubItem = item.startsWith('  - ');
                const text = item.replace(/^(- |  - )/, '');
                return (
                  <ListItem key={i} sx={{ pl: isSubItem ? 4 : 0, py: 0.5 }}>
                    <ListItemText
                      primary={<Typography variant="body1" sx={{ fontSize: '1rem' }}>{renderText(text)}</Typography>}
                    />
                  </ListItem>
                );
              })}
            </List>
          );
          listItems = [];
          return [
            listContent,
            <Typography
              key={`paragraph-${index}`}
              variant="body1"
              paragraph
              sx={{ mb: 2, fontSize: '1rem' }}
            >
              {renderText(section)}
            </Typography>,
          ];
        }
        return [
          <Typography
            key={`paragraph-${index}`}
            variant="body1"
            paragraph
            sx={{ mb: 2, fontSize: '1rem' }}
          >
            {renderText(section)}
          </Typography>,
        ];
      }
    }).concat(
      inList && listItems.length > 0 ? (
        <List key="final-list" sx={{ pl: 4, mb: 2 }}>
          {listItems.map((item, i) => {
            const isSubItem = item.startsWith('  - ');
            const text = item.replace(/^(- |  - )/, '');
            return (
              <ListItem key={i} sx={{ pl: isSubItem ? 4 : 0, py: 0.5 }}>
                <ListItemText
                  primary={<Typography variant="body1" sx={{ fontSize: '1rem' }}>{renderText(text)}</Typography>}
                />
              </ListItem>
            );
          })}
        </List>
      ) : null
    );
  };

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackRoundedIcon />}
        component={RouterLink}
        to="/hr"
        sx={{ mb: 2 }}
      >
        Back to Human Resources
      </Button>
      <Typography
        variant="caption"
        component="div"
        gutterBottom
        sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
      >
        {article.tag}
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '0.875rem' }}>
        By {article.authors.map((author) => author.name).join(', ')}
      </Typography>
      {article.img && (
        <Box
          component="img"
          src={article.img}
          alt={article.title}
        sx={{
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    mb: 2,
    opacity: 5, // fully visible (increase this if it was previously < 1)
        filter: 'grayscale', // remove grayscale, brightness, or blur
    mixBlendMode: 'normal', // prevent blend overlays
  }}
        />
      )}
      {renderContent()}
      <Button
        variant="outlined"
        startIcon={<ArrowBackRoundedIcon />}
        component={RouterLink}
        to="/hr"
        sx={{ mt: 2 }}
      >
        Back to Resources
      </Button>
    </Box>
  );
}