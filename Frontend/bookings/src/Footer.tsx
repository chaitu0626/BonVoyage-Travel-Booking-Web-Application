import React from 'react';
import { Box, Container, Grid, Link, TextField, Typography,InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import { start } from 'repl';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = styled(Box)({
  marginTop: 'auto',
  backgroundColor: '#f1f1f1',
  padding: '1rem 0',
  textAlign: 'center',
});

const Links = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  
});

const FooterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  paddingTop: '2rem',
});

const FooterComponent = () => (
  <Footer>
    <FooterContainer maxWidth="lg">
      <Box sx={{width:'30%', textAlign:'start', display:'flex', flexDirection:'column', rowGap:'1rem' }}>
        <Typography variant="body1" color="textSecondary">BonVoyage</Typography>
        <Typography variant="body2" color="textSecondary">
          We always make our customers happy by providing as many choices as possible.
        </Typography>
        <Box sx={{color:'purple' , display:'flex' , gap:'1rem'}}>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '4rem'}}>
      <Box sx={{textAlign:'start', display:'flex', flexDirection:'column', rowGap:'1rem'}}>
        <Typography variant="h6" color="textSecondary">About</Typography>
        <Typography variant="body2" ><Links href="#">About Us</Links></Typography>
        <Typography variant="body2"><Links href="#">Features</Links></Typography>
        <Typography variant="body2"><Links href="#">News</Links></Typography>
        <Typography variant="body2"><Links href="#">Menu</Links></Typography>
      </Box>
      <Box sx={{textAlign:'start', display:'flex', flexDirection:'column', rowGap:'1rem'}}>
        <Typography variant="h6" color="textSecondary">Company</Typography>
        <Typography variant="body2"><Links href="#">Why BonVoyage</Links></Typography>
        <Typography variant="body2"><Links href="#">Partner With Us</Links></Typography>
        <Typography variant="body2"><Links href="#">FAQ</Links></Typography>
        <Typography variant="body2"><Links href="#">Blog</Links></Typography>
      </Box>
      <Box sx={{textAlign:'start', display:'flex', flexDirection:'column', rowGap:'1rem'}}>
        <Typography variant="h6" color="textSecondary">Support</Typography>
        <Typography variant="body2"><Links href="#">Account</Links></Typography>
        <Typography variant="body2"><Links href="#">Support Center</Links></Typography>
        <Typography variant="body2"><Links href="#">Feedback</Links></Typography>
        <Typography variant="body2"><Links href="#">Contact Us</Links></Typography>
      </Box>
      </Box>
      <Box sx={{ maxWidth: '280px' }}>
        <Typography variant="h6" color="textSecondary">Subscribe to our destination review newsletters</Typography>
        <TextField fullWidth placeholder="Your Email" variant="outlined" size="small" sx={{backgroundColor:'white'}} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon style={{color:'orange'}} />
                  </InputAdornment>
                ),
              }}/>
      </Box>
    </FooterContainer>
  </Footer>
);

export default FooterComponent;
