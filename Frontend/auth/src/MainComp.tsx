// import React from 'react';
// import { Box, Grid } from '@mui/material';
// import { styled } from '@mui/system';
// import SignInForm from './SignIn'; // adjust the import path accordingly
// import FooterComponent from './Footer'; // adjust the import path accordingly

// const MainContainer = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   minHeight: '100vh',
// });

// const FormGrid = styled(Grid)({
//   marginTop: '2rem',
//   justifyContent: 'center',
//   alignItems: 'center',
//   display: 'flex',
// });

// const MainComponent2 = () => (
//   <MainContainer>
//     <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
//       <FormGrid container>
//         <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <img src="./images/travel.png" alt="Travelers" style={{ maxWidth: '100%', height: 'auto' }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <SignInForm />
//         </Grid>
//       </FormGrid>
//     </Box>
//     <FooterComponent />
//   </MainContainer>
// );

// export default MainComponent2;


import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import SignInForm from './SignIn'; // adjust the import path accordingly
import FooterComponent from './Footer'; // adjust the import path accordingly
import Travel from './image/travel.png';

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const FormGrid = styled(Grid)({
  marginTop: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
});

interface MainComponent2Props {
  onLogin: (username: string) => void;
  // onLogin: any
}

const MainComponent2: React.FC<MainComponent2Props> = ({ onLogin }) => (
  <MainContainer>
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
      <FormGrid container>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={Travel} alt="Travelers" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SignInForm onLogin={onLogin} />
        </Grid>
      </FormGrid>
    </Box>
    <FooterComponent />
  </MainContainer>
);

export default MainComponent2;

