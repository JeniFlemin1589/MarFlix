// CardItem.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ id, image, name, price, siteLink }) => {
  const navigate = useNavigate();
  
  return (
    <Card
      onClick={() => navigate(`/services/${id}`)}  // Navigate to ServiceDetail on click
      sx={{
        maxWidth: 250,
        cursor: 'pointer',
        boxShadow: 3,
        marginTop: '20px',
        borderRadius: 2,
        transition: '0.3s',
        height: '330px',
        backgroundColor: '#f9f9f9',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
        },
        marginBottom: '20px',
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={name} sx={{ objectFit: 'cover' }} />
      <CardContent
    sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow:'hidden',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Blurred background effect
        borderRadius: '10px', // Optional: adjust as needed for rounded corners
        padding: '20px', // Adjust padding for spacing
    }}
>
    <Typography variant="h6" component="div" sx={{ fontWeight: '600', color: 'black' }}>{name}</Typography>
    <Typography variant="body2" color="gold" fontSize="1rem" paddingTop="5px">
        {price}
    </Typography>
</CardContent>

    </Card>
  );
};

export default CardItem;
