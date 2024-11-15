import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Paper, Typography, Link, TextField, IconButton } from '@mui/material';
import CardData from './CardData';
import FeaturedView from './FeaturedView';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';

const ServiceDetail = () => {
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const videoRef = useRef(null);
    const service = CardData.find(item => item.id.toString() === id);

    if (!service) return <Typography variant="h5" align="center" sx={{ marginTop: '50px', color: '#e5c100' }}>Service not found.</Typography>;

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        const templateParams = {
            service_name: service.name,
            service_price: service.price,
            comment: comment,
        };

        emailjs.send('service_j8etyhp', 'template_bi1ncrc', templateParams, 'FSopHUtEMq6xHKp5f')
            .then((response) => {
                console.log('Success:', response);
                alert('Your comment has been submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to submit comment. Please try again later.');
            });

        setComment('');
    };

    // Filter similar services by matching the first word in the name, excluding the current service
    const similarServices = CardData
        .filter(item => item.name.includes(service.name.split(' ')[0]) && item.id !== service.id)
        .slice(0, 3); // Limit to 3 similar services

    return (
        <Box sx={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <Container sx={{ minWidth: '500px', height: '100%', backgroundColor: 'transparent', paddingTop: '70px' }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    minHeight: '100vh',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                }}>
                    <Box sx={{
                        marginTop: '70px',
                        marginLeft: '120px',
                        width: '400px', // Custom width for the Box
                        height: '500px', // Custom height for the Box
                        borderRadius: '15px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.8)', // White shadow effect
                        backgroundImage: `url(${service.image})`, // Use the image as a background
                        backgroundSize: 'cover', // Ensures the image fills the box without distortion
                        backgroundPosition: 'center', // Centers the image
                        backgroundRepeat: 'no-repeat', // Prevents tiling if image is too small
                    }}>
                    </Box>






                    {/* Right Side - Text Content */}
                    <Paper sx={{
                        width: '400px',
                        height: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: '-30px',
                        marginTop: '20px',
                        padding: '50px',
                        boxShadow: '0px 4px 20px rgba(255, 255, 0, 0.8)', borderRadius: '15px',
                        backgroundColor: 'black',
                        alignItems: 'center',
                    }}>
                        <Typography variant="h1" sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            fontSize: '2.5rem',
                            color: '#e5c100',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        }}>
                            {service.name}
                        </Typography>


                        <Typography variant="body1" sx={{
                            color: '#ffffff',
                            fontSize: '1.2rem',
                            marginBottom: '20px',
                            lineHeight: '1.8',
                            opacity: 0.9,
                            textAlign: 'center',
                        }}>
                            {service.info || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nunc ut magna vehicula dapibus non ac orci.'}
                        </Typography>

                        <Typography variant="h5" sx={{
                            fontWeight: 600,
                            color: '#ffb700',
                            marginBottom: '20px',
                            fontSize: '1.8rem',
                        }}>
                            {service.price}
                        </Typography>
                        {/* Trailer Button */}
                        <Box sx={{ marginTop: '20px' }}>
                            <Link href={service.link} target="_blank" sx={{
                                fontSize: '1.2rem',
                                color: '#e5c100',
                                textDecoration: 'none',
                                fontWeight: 600,
                                padding: '10px 20px',
                                border: '2px solid #e5c100',
                                borderRadius: '30px',
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#e5c100',
                                    color: '#141414',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 10px rgba(229, 193, 0, 0.6)',
                                },
                            }}>
                                View Trailer
                            </Link>
                        </Box>

                        {/* Comment Section */}
                        <Box sx={{
                            marginTop: '30px',
                            backgroundColor: '#1c1c1c',
                            padding: '15px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                        }}>
                            <TextField
                                rows={1}
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder="Write your comment here..."
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <IconButton
                                            sx={{ color: '#e5c100' }}
                                            onClick={handleCommentSubmit}
                                        >
                                            <SendIcon />
                                        </IconButton>
                                    ),
                                }}
                                sx={{
                                    backgroundColor: '#2b2b2b',
                                    borderRadius: '8px',
                                    input: { color: '#ffffff' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#444',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#e5c100',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#e5c100',
                                        },
                                    },
                                }}
                            />
                        </Box>
                    </Paper>
                </Box>

                {/* Similar Services Section
                <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ color: '#e5c100', fontWeight: 'bold', marginBottom: '20px' }}>
                        Similar Services
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        {similarServices.map((similarService) => (
                            <Box key={similarService.id} sx={{ width: '30%', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                                <img src={similarService.image} alt={similarService.name} style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                    borderRadius: '10px 10px 0 0',
                                }} />
                                <Box sx={{ padding: '10px', backgroundColor: '#1c1c1c', color: '#ffffff' }}>
                                    <Typography variant="h6">{similarService.name}</Typography>
                                    <Typography variant="body2" sx={{ color: '#ffb700', marginBottom: '10px' }}>{similarService.price}</Typography>
                                    <Link href={similarService.siteLink} target="_blank" sx={{ color: '#e5c100', textDecoration: 'none' }}>
                                        View Details
                                    </Link>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box> */}
            </Container>
            <FeaturedView />
        </Box>
    );
};

export default ServiceDetail;
