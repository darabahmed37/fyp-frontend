import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const AboutPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        About Our Services
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="body1" paragraph>
          Welcome to our mechanic services platform! We are dedicated to providing you with top-notch
          mechanical services for all your automotive needs.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team of skilled and experienced mechanics is committed to delivering high-quality services
          that ensure your vehicle is in the best condition possible.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether it's routine maintenance, repairs, or upgrades, we have you covered. We understand the
          importance of a well-maintained vehicle and are here to keep you on the road safely.
        </Typography>
      </Paper>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2">
              Our mission is to provide reliable and efficient mechanical services to our customers. We
              aim to exceed your expectations by offering exceptional workmanship and personalized
              attention to your vehicle's needs.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Our Team
            </Typography>
            <Typography variant="body2">
              Our team consists of highly trained mechanics with years of experience in the automotive
              industry. We are passionate about what we do and take pride in delivering results that
              matter.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
