import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {  // Capitalized the component name here
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

    if (!formData.companyEmail || !formData.password) {
      setErrorMessage('Please provide a valid email and password.');
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://getwallpapers.com/wallpaper/full/a/8/6/1263136-free-world-most-beautiful-places-wallpapers-1920x1200-xiaomi.jpg')`,
        height: '100vh',
        paddingTop: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', color: '#fff', padding: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold',color:'#FFD700', marginTop: 2 , fontFamily:'Poppins'}}>
            Welcome Travel Enthusiast!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2,color:'#FFD700', fontSize: '1.1rem', fontFamily:'Poppins' }}>
            "Embark on unforgettable journeys, where your dream adventure awaits at every corner!"
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
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4b6cb7', textAlign: 'center', mb: 3 }}>
              Sign Up
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

              <Typography variant="body2" sx={{ margin: '16px 0', color: '#777' }}>
                Feel free to share your message; we read them all!
              </Typography>

              <Typography variant="body2" sx={{ marginBottom: 1, color: 'white' }}>
                Brand Embassy is committed to protecting and respecting your privacy.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreement.communications}
                    onChange={handleCheckboxChange}
                    name="communications"
                    sx={{ color: '#4b6cb7' }}
                  />
                }
                label="I agree to receive communications from Brand Embassy."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreement.dataProcessing}
                    onChange={handleCheckboxChange}
                    name="dataProcessing"
                    sx={{ color: '#4b6cb7' }}
                  />
                }
                label="I agree to allow Brand Embassy to store and process my personal data."
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{
                  marginTop: 2,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  padding: '10px 20px',
                  backgroundColor: '#4b6cb7',
                  '&:hover': { backgroundColor: '#3b5998' },
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

export default ContactMe;
