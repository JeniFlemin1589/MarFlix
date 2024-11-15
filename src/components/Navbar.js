import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light transparent overlay
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        backdropFilter: 'blur(4px)', // Slight blur effect
        padding: '1px 10px',
      }}
    >
      <Toolbar>
        {/* Brand Name */}
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            color: '#FFD700',
            fontWeight: 'bold',
            letterSpacing: 2,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          EenR
        </Typography>

        {/* Navigation Links */}
        <Box>
          {['Home', 'About', 'Movies', 'Contact'].map((text) => (
            <Button
              key={text}
              component={Link} // Set Link component here
              to={`/${text.toLowerCase()}`} // Set dynamic link
              sx={{
                color: '#FFD700',
                marginLeft: 2,
                fontFamily: 'Poppins',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s, transform 0.3s',
                borderRadius: '25%',
                '&:hover': {
                  color: '#FFD700', // Gold color on hover
                  transform: 'scale(1.1)',
                  backgroundColor: 'white',
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
