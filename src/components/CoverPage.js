import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import backgroundVideo from '../videos/video1.mp4';

const CoverPage = ({ onGetStarted }) => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        if (onGetStarted) onGetStarted();
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            navigate('/home');
        }, 600);
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: '#fff',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >
            {/* Background Video */}
            <Box
                component="video"
                src={backgroundVideo}
                autoPlay
                muted
                loop
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />

            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
                    zIndex: 1,
                }}
            />

            {/* Content Box */}
            <Box sx={{ textAlign: 'center', zIndex: 2, px: 3, maxWidth: '80%' }}>
                <Typography
                    variant="h2"
                    sx={{
                        mb: 3,
                        fontWeight: 'bold',
                        textShadow: '0px 0px 15px rgba(0, 0, 0, 0.9)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: { xs: '2.8rem', md: '4.5rem' },
                        color: 'gold',
                    }}
                >
                    The Marvel Universe
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        maxWidth: '800px',
                        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        lineHeight: '1.6',
                        mx: 'auto',
                    }}
                >
                    Embark on a journey of adventure and power with the iconic heroes of the Marvel universe!
                </Typography>

                {/* Button with Splash Effect */}
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    {isClicked && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-15%',
                                left: '-15%',
                                width: '150%',
                                height: '150%',
                                borderRadius: '50%',
                                background: 'rgba(229, 193, 0, 0.7)',
                                animation: 'splash 0.6s ease-out forwards',
                            }}
                        />
                    )}

                    <IconButton
                        sx={{
                            color: '#e5c100',
                            fontSize: '4rem',
                            width: '85px',
                            height: '85px',
                            '&:hover': {
                                color: '#ffecb3',
                                transform: 'scale(1.2)',
                                transition: '0.3s',
                                boxShadow: '0 8px 25px rgba(255, 193, 7, 0.6)',
                            },
                            zIndex: 2,
                        }}
                        onClick={handleButtonClick}
                        aria-label="Get Started"
                    >
                        <SendIcon sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

// Splash Animation Styles
const styles = `
  @keyframes splash {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

// Inject splash animation into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default CoverPage;
