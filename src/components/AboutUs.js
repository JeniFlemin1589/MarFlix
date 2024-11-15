import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion'; // For smooth animations
import { useTheme } from '@mui/material/styles';

const AboutPage = () => {
    const theme = useTheme(); // To use theme for color palette
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                minHeight: '100vh',
                backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg)',
                backgroundSize: 'cover', // Ensures the image covers the entire background
                backgroundPosition: 'fixed', // Keeps the image centered
                backgroundAttachment: 'fixed', // Fixes the background image while scrolling
            }}
        >
            <Container sx={{
                paddingTop: '100px',
                maxWidth: '1200px',
                paddingBottom: '20px',
                borderRadius: 10,
                boxShadow: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
            }}>
                <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                    <Typography variant="h3" sx={{
                        fontWeight: 700,
                        color: '#e5c100',
                        textAlign: 'center',
                        fontSize: '3rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '40px',
                    }}>
                        About Us
                    </Typography>

                    <Grid container spacing={4} sx={{ textAlign: 'center' }}>
                        {/* Section 1: Who We Are */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={textVariants}>
                                <Typography variant="h5" sx={{
                                    color: '#e5c100',
                                    fontWeight: 600,
                                    marginBottom: '20px',
                                    fontSize: '2.2rem',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}>
                                    Who We Are
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: 'black',
                                    opacity: 0.85,
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    padding: '0 20px',
                                    textAlign: 'center',
                                }}>
                                    At [Your Company Name], we are a team of innovators and thinkers committed to offering the best services in the industry. We aim to drive positive change with cutting-edge technology and unmatched customer service.
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Section 2: Our Vision */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={textVariants}>
                                <Typography variant="h5" sx={{
                                    color: '#e5c100',
                                    fontWeight: 600,
                                    marginBottom: '20px',
                                    fontSize: '2.2rem',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}>
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: 'black',
                                    opacity: 0.85,
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    padding: '0 20px',
                                    textAlign: 'center',
                                }}>
                                    We envision a world where our solutions make every business smarter, more efficient, and future-ready. Our vision is to empower our clients with innovative solutions and exceptional service.
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Section 3: Core Values */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={textVariants}>
                                <Typography variant="h5" sx={{
                                    color: '#e5c100',
                                    fontWeight: 600,
                                    marginBottom: '20px',
                                    fontSize: '2.2rem',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}>
                                    Core Values
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: 'black',
                                    opacity: 0.85,
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    padding: '0 20px',
                                    textAlign: 'center',
                                }}>
                                    Our core values are built on integrity, transparency, and innovation. These values guide us in every decision we make, ensuring that we create a positive impact on our clients and the communities we serve.
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Section 4: Our Expertise */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={textVariants}>
                                <Typography variant="h5" sx={{
                                    color: '#e5c100',
                                    fontWeight: 600,
                                    marginBottom: '20px',
                                    fontSize: '2.2rem',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}>
                                    Our Expertise
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: 'black',
                                    opacity: 0.85,
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                    padding: '0 20px',
                                    textAlign: 'center',
                                }}>
                                    We have a deep understanding of the challenges faced by businesses in today’s fast-paced world. Our team possesses the expertise to craft innovative solutions that solve real-world problems.
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>

                    {/* CTA Button */}
                    <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#e5c100',
                                color: '#141414',
                                padding: '15px 30px',
                                fontSize: '1.2rem',
                                borderRadius: '30px',
                                boxShadow: '0 4px 12px rgba(229, 193, 0, 0.5)',
                                '&:hover': {
                                    backgroundColor: '#ffcc00',
                                    boxShadow: '0 8px 20px rgba(255, 204, 0, 0.6)',
                                },
                            }}
                        >
                            Join Us Today
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default AboutPage;
