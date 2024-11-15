import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Services from './Services';
import Reachme from './ReachMe';

// Styled components
const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("https://images5.alphacoders.com/886/886533.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '64px', // Offset for the fixed navbar
  position: 'relative',
  color: 'white',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for contrast
    zIndex: 0,
  },
}));

const ContentBox = styled(Container)(({ theme }) => ({
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column', // Change to column for better layout
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: theme.spacing(3), // Space between elements
  padding: theme.spacing(3),
}));

function HomePage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to navigate to the /projects page
  const handleMoveInClick = () => {
    navigate('/movies'); // This will navigate to the /projects route
  };

  return (
    <div>
      <BackgroundBox>
        <ContentBox>
          <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                color: '#ffb74d',
                mb: 1,
              }}
            >
              Hello!
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              I'm the Marvel
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.2rem',
                maxWidth: '600px',
                margin: '20px 0',
                lineHeight: 1.6,
                color: 'white',
                fontFamily: 'Poppins',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
              }}
            >
              I dive very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies, or books.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  backgroundColor: '#ffb74d',
                  fontFamily: 'Poppins',
                  '&:hover': {
                    backgroundColor: 'white',
                    color:'gold'
                  },
                }}
                onClick={handleMoveInClick} // Call the navigate function when clicked
              >
                Move In
              </Button>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontSize: '1rem',
                  opacity: 0.8,
                  color: 'white',
                  marginLeft: '10px',
                  fontFamily: 'Poppins',
                }}
              >
                <a
                  href="mailto:hello.alime@gmail.com"
                  style={{ color: '#FFD700', textDecoration: 'none' }}
                >
                  hello.marvel@gmail.com
                </a>
              </Typography>
            </Box>
          </Box>
        </ContentBox>
      </BackgroundBox>

      {/* Now move Services outside of BackgroundBox */}
      <Services />
    </div>
  );
}

export default HomePage;
