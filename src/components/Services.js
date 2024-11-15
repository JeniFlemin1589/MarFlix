import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import CardItem from './CardItem';
import CardData from './CardData';

function Services() {
  const [filterText, setFilterText] = useState('');
  const location = useLocation(); // Get the current path

  // Filter movies by name based on the input text
  const filteredData = CardData.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleClearFilter = () => {
    setFilterText('');
  };

  // Conditionally apply the background image only on the /movies page
  const backgroundStyle = location.pathname === '/movies' 
    ? 'url("https://wallpapers.com/images/hd/avengers-minimalist-0vt0iaej1fq10m6w.webp")' 
    : 'transparent';

  // Conditionally change the title and text color based on the current page
  const pageTitle = location.pathname === '/movies' ? 'Our Movies' : 'Our Top Movies';
  const textColor = location.pathname === '/movies' ? 'white' : 'black';

  return (
    <Box
      sx={{
        marginTop: '0px',
        padding: '0',
        background: backgroundStyle,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ padding: '0' }}>
        <Box sx={{ padding: '40px 0' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              marginTop: '30px',
              marginBottom: '20px', 
              textAlign: 'center', 
              fontFamily: 'Poppins', 
              color: textColor, // Conditionally set text color
            }}
          >
            {pageTitle} {/* Conditionally set the page title */}
          </Typography>
          
          {/* Conditionally render the Filter Input and Button only on /movies path */}
          {location.pathname === '/movies' && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '20px', 
              marginLeft: '50px' ,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}>
              <TextField
                label="Search Movies"
                variant="outlined"
                size="small"
                value={filterText}
                onChange={handleFilterChange}
                sx={{ 
                  width: '250px',
                  color: 'white',  // White text color when on /movies page
                  borderColor: 'white', // Black border for the outline
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Black border when focused
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // Black border when hovered
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // Black border when focused
                    },
                  },
                }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleClearFilter}
              >
                Clear
              </Button>
            </Box>
          )}

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => <CardItem key={item.id} {...item} />)
            ) : (
              <Typography 
                variant="h6" 
                sx={{ 
                  textAlign: 'center', 
                  width: '100%', 
                  fontFamily: 'Poppins', 
                  color: 'black' 
                }}
              >
                No movies found.
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
