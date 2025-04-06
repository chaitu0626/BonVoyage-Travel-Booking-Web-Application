// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Outlet, Link } from 'react-router-dom';

// const pages = [
//   { name: 'Home', path: '/' },
//   { name: 'Package', path: '/packages' },
//   { name: 'FAQ', path: '/faq' }
// ];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: 'white', color: '#00dddd', boxShadow: 'none' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               marginLeft: '5rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             BonVoyage
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem style={{ marginLeft: '10rem' }} key={page.name} onClick={handleCloseNavMenu}>
//                   <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Typography textAlign="center">{page.name}</Typography>
//                   </Link>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             BonVoyage
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '20rem', gap: '2rem', color: 'blue' }}>
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 onClick={handleCloseNavMenu}
//                 sx={{
//                   my: 2,
//                   color: 'grey',
//                   display: 'block',
//                   '&:hover': {
//                     color: '#00dddd',
//                   },
//                 }}
//               >
//                 <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
//                   {page.name}
//                 </Link>
//               </Button>
//             ))}
//           </Box>
//           <Link to="/sign-up">
//             <Button
//               sx={{
//                 color: 'white',
//                 backgroundColor: '#00dddd',
//                 marginRight: '5rem',
//                 '&:hover': {
//                   color: 'white',
//                   backgroundColor: '#00dddd',
//                 },
//               }}
//             >
//               LOGIN/SIGNUP
//             </Button>
//           </Link>
//         </Toolbar>
//       </Container>
//       <Outlet />
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'FAQ', path: '/faq' }
];

const userPages = [
  { name: 'My Bookings', path: '/booking' },
  { name: 'Wishlist', path: '/wishlist' }
];

interface ResponsiveAppBarProps {
  isAuthenticated: boolean;
  username: string;
  onLogin: (name: string) => void;
  onLogout: () => void;
}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({ isAuthenticated, username, onLogout }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: '#00dddd', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isAuthenticated && (
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'block', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                marginLeft: '5rem',
                color: '#009b9b',
                textDecoration: 'none',
                overflow: 'visible',
              }}
            >
              BonVoyage
            </Typography>
          )}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} style={{marginLeft:'0rem'}}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center" style={{marginLeft:'0rem'}}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {isAuthenticated && userPages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} style={{marginLeft:'0rem'}}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center" style={{marginLeft:'0rem'}}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          {!isAuthenticated && (
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'block' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: '#009b9b',
                textDecoration: 'none',
                overflow:'visible',
                marginLeft:'3rem'
              }}
            >
              BonVoyage
            </Typography>
          )}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '1rem', color: 'blue', marginLeft: '9rem',
    marginRight: '5rem' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'grey',
                  display: 'block',
                  '&:hover': {
                    color: '#009b9b',
                  },
                }}
              >
                <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
            {isAuthenticated && userPages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'grey',
                  display: 'block',
                  '&:hover': {
                    color: '#009b9b',
                  },
                }}
              >
                <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          {isAuthenticated ? (
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '5rem', gap: '1rem' }}>
              <Typography>{`Hey, ${username}`}</Typography>
              <Button
                onClick={onLogout}
                sx={{
                  color: 'white',
                  backgroundColor: '#009b9b',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#009b9b',
                  },
                }}
              >
                LOGOUT
              </Button>
            </Box>
          ) : (
            <Link to="/signup">
              <Button
                sx={{
                  color: 'white',
                  backgroundColor: '#009b9b',
                  marginRight: '5rem',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#009b9b',
                  },
                }}
              >
                LOGIN/SIGNUP
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
      <Outlet />
    </AppBar>
  );
};

export default ResponsiveAppBar;


