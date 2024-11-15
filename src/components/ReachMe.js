import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Reachme = () => {  // Capitalized the component name here
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyEmail: '',
        company: '',
        password: '',
    });
    const [agreement, setAgreement] = useState({
        communications: false,
        dataProcessing: false,
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setAgreement({ ...agreement, [name]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.companyEmail) {
            setErrorMessage('Please provide a valid email and fill the missing details!');
            return;
        }

        const templateParams = {
            user_name: formData.firstName,
            company_email: formData.companyEmail,
            company: formData.company,
            comment: formData.comment,
        };

        emailjs
            .send('service_j8etyhp', 'template_bi1ncrc', templateParams, 'FSopHUtEMq6xHKp5f')
            .then((response) => {
                setSuccessMessage('Thank you for connecting with us!');
                setErrorMessage('');

                setFormData({ firstName: '', companyEmail: '', company: '', comment: '' });
                setAgreement({ communications: false, dataProcessing: false });

                navigate('/home');
            })
            .catch((error) => {
                setErrorMessage('An error occurred. Please try again.');
                setSuccessMessage('');
            });
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #4b6cb7, #182848)',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapers.com/images/featured/avengers-infinity-war-pictures-4yngzhbhqmtam73j.jpg')`,
                height: '100vh',
                padding: 4,
                marginTop:'0px',
            }}
        >
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center', color: '#fff', padding: 3 }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FFD700', marginTop: 2, fontFamily: 'Poppins' }}>
                        Welcome Indeed My Enthusiast!
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2, color: '#FFD700', fontSize: '1.1rem', fontFamily: 'Poppins' }}>
                        "Embark me with unforgettable dream adventures!"
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}
                    sx={{
                        maxWidth: '900px',
                        borderRadius: 3,
                        boxShadow: 8,
                        overflow: 'hidden',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                    }}>
                    <Box sx={{ padding: 4, borderRadius: 3 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFD700', textAlign: 'center', mb: 3 }}>
                            Reach Me
                        </Typography>

                        {successMessage && <Alert severity="success">{successMessage}</Alert>}
                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Company Email"
                                name="companyEmail"
                                value={formData.companyEmail}
                                onChange={handleInputChange}
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Comment"
                                name="Comment"
                                value={formData.Comment}
                                onChange={handleInputChange}
                                variant="outlined"
                                margin="normal"
                            />

                            <Typography variant="body2" sx={{ margin: '16px 0', color: '#FFD700' }}>
                                Feel free to share your message; we read them all!
                            </Typography>


                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={agreement.communications}
                                        onChange={handleCheckboxChange}
                                        name="communications"
                                        sx={{ color: '#FFD700' }} // Checkbox color
                                    />
                                }
                                label={<span style={{ color: '#FFD700' }}>I agree to receive communications from Brand Embassy.</span>} // Label color
                            />


                            <Button
                                type="submit"
                                variant="contained"
                                color= "#FFD700"
                                endIcon={<SendIcon />}
                                sx={{
                                    marginTop: 2,
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    padding: '10px 20px',
                                    backgroundColor: 'black',
                                    color: '#FFD700',
                                    '&:hover': { backgroundColor: '#FFD700',color:'black' },
                                }}
                                fullWidth
                            >
                                Send
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Reachme;
