// import React, { useState } from 'react';
// import { Box, Button, Grid, Link, Paper, Snackbar, TextField, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignInPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   maxWidth: '400px',
//   margin: 'auto',
// }));

// const SignInForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState<string>('');
//   const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     try {
//       const response = await axios.post('http://localhost:8080/verify-user', { userEmail: email, userPassword: password });
//       console.log('User verified successfully:', response.data);
//       navigate('/packages');
//     } catch (error) {
//       console.error('Error verifying user:', error);
//       setError('Invalid email or password');
//       setSnackbarOpen(true);
//     }
//   };

//   return (
//     <SignInPaper elevation={3}>
//       <Typography component="h1" variant="h5">
//         Sign in
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//         <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} />
//         <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
//         <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
//           SIGN IN
//         </Button>
//         <Grid container justifyContent="flex-end">
//           <Grid item xs>
//             <Link href="#" variant="body2">
//               Forgot password?
//             </Link>
//           </Grid>
//           <Grid item>
//             <Link href="/sign-up" variant="body2">
//               {"Don't have an account? Sign up"}
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message={error}
//         ContentProps={{
//           sx: {
//             backgroundColor: '#f44336', // Red background color
//           },
//         }}
//       />
//     </SignInPaper>
//   );
// };

// export default SignInForm;



import React, { useState } from 'react';
import { Box, Button, Grid, Link, Paper, Snackbar, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  margin: 'auto',
}));

interface SignInFormProps {
  onLogin: (username: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post('http://localhost:8080/verify-user', { userEmail: email, userPassword: password });
      console.log('User verified successfully:', response.data);
      onLogin(email); // Pass the email or username to onLogin
      navigate('/packages');
    } catch (error) {
      console.error('Error verifying user:', error);
      setError('Invalid email or password');
      setSnackbarOpen(true);
    }
  };

  return (
    <SignInPaper elevation={3}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} />
        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
          SIGN IN
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/sign-up" variant="body2">
              {"Don't have an account? Sign up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
        ContentProps={{
          sx: {
            backgroundColor: '#f44336', // Red background color
          },
        }}
      />
    </SignInPaper>
  );
};

export default SignInForm;





// import React, { useState } from 'react';
// import { Box, Button, Grid, Link, Paper, Snackbar, TextField, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignInPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   maxWidth: '400px',
//   margin: 'auto',
// }));

// interface SignInFormProps {
//   onLogin: (userID: string, username: string) => void;
// }

// const SignInForm: React.FC<SignInFormProps> = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState<string>('');
//   const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     try {
//       const response = await axios.post('http://localhost:8080/verify-user', { userEmail: email, userPassword: password });
//       console.log('User verified successfully:', response.data);
//       onLogin(response.data.userID, email); // Pass userID and email to onLogin
//       navigate('/packages');
//     } catch (error) {
//       console.error('Error verifying user:', error);
//       setError('Invalid email or password');
//       setSnackbarOpen(true);
//     }
//   };

//   return (
//     <SignInPaper elevation={3}>
//       <Typography component="h1" variant="h5">
//         Sign in
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//         <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} />
//         <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleChange} />
//         <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
//           SIGN IN
//         </Button>
//         <Grid container justifyContent="flex-end">
//           <Grid item xs>
//             <Link href="#" variant="body2">
//               Forgot password?
//             </Link>
//           </Grid>
//           <Grid item>
//             <Link href="/sign-up" variant="body2">
//               {"Don't have an account? Sign up"}
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message={error}
//         ContentProps={{
//           sx: {
//             backgroundColor: '#f44336', // Red background color
//           },
//         }}
//       />
//     </SignInPaper>
//   );
// };

// export default SignInForm;

