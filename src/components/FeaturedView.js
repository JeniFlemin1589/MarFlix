import React from 'react';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CardData from './CardData';

// Custom-styled container for masonry effect
const MasonryGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '10px', // Fixed gap between all cards (vertical & horizontal)
  gridTemplateColumns: 'repeat(5, 1fr)', // First row has 5 equal columns
  gridAutoRows: 'minmax(250px, auto)', // Variable height for each card
  marginTop: '70px',
  '@media (max-width: 1200px)': {
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards on smaller screens
  },
  '@media (max-width: 900px)': {
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 cards on smaller screens
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 cards on mobile
  },
}));

// Styled card container
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1px',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5px', // Consistent padding for all cards
  '&:hover .overlay': {
    opacity: 1,
  },
}));

// Styled card image
const StyledCardMedia = styled(CardMedia)(({
  width: '100%',
  height: '100%', // Ensure the image covers the entire card
  objectFit: 'cover', // Avoid image distortion
}));

// Overlay with play icon button
const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent overlay
  display: 'flex',
  justifyContent: 'center', // Center icon horizontally
  alignItems: 'center', // Center icon vertically
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

// Function to generate random heights for cards (subsequent rows)
const getRandomHeight = () => {
  return Math.floor(Math.random() * (400 - 250 + 1)) + 250; // Random height between 250px and 400px
};

const CardComponent = () => {
  return (
    <MasonryGrid>
      {/* Fixed top row with 5 cards, all with the same height */}
      {CardData.slice(0, 5).map((card) => (
        <StyledCard key={card.id} sx={{ height: 300 }}> {/* Fixed height for top row */}
          <StyledCardMedia
            component="img"
            image={card.image}
            alt={card.title}
            sx={{ height: '100%' }}
          />
          <Overlay className="overlay">
            <IconButton
              href={card.link} // Link to video
              target="_blank" // Open link in new tab
              rel="noopener noreferrer"
              sx={{
                color: '#FFD700', // Gold color
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background circle
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
                fontSize: '2rem',
              }}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          </Overlay>
        </StyledCard>
      ))}
      
      {/* Flexible subsequent rows with variable heights */}
      {CardData.slice(5).map((card) => (
        <StyledCard key={card.id} sx={{ height: getRandomHeight() }}>
          <StyledCardMedia
            component="img"
            image={card.image}
            alt={card.title}
            sx={{ height: '100%' }}
          />
          <Overlay className="overlay">
            <IconButton
              href={card.link} // Link to video
              target="_blank" // Open link in new tab
              rel="noopener noreferrer"
              sx={{
                color: '#FFD700', // Gold color
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
                fontSize: '2rem',
              }}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          </Overlay>
        </StyledCard>
      ))}
    </MasonryGrid>
  );
};

export default CardComponent;
