// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import SignIn from "auth/signIn";
// import SignUp from "auth/signUp";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.tsx</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

//     <BrowserRouter>
//     <Routes>
//       <Route path="/signin" element={<SignIn onLogin={handleLogin}/>} />
//       <Route path="/signup" element={<SignUp  />} />
//     </Routes>
//     </BrowserRouter>

//       {/* <SignUp /> */}
//   );
// }

// export default App;



import SignIn from 'auth/signIn';
import SignUp from 'auth/signUp';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from 'bookings/booking';
import Packages from 'packages/packagelist';
import PackageDetail from 'packages/packagedetail';
import WishList from 'packages/wishlist';
import HomeScreen from './HomePage/HomeScreen';
import ResponsiveAppBar from './NavBar';
import Faq from './Faq';
import BookingConfirm from 'bookings/Confirmation';
// import ResponsiveAppBar from './components/NavBar';
// import MainComponent from './components/MainComponent';
// import MainComponent2 from './components/MainComp';
// import SignInForm from './components/SignIn';
// import PackageList from './components/Packages';
// import PackageDetail from './components/PackageDetail';
// import HomeScreen from './components/HomePage/HomeScreen';
// import Bookings from './components/Bookings';
// import MyBookings from './components/Bookings';
// import WishList from './components/Wishlist';
// import FAQ from './components/Faq';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name: string) => {
    setIsAuthenticated(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ResponsiveAppBar
        isAuthenticated={isAuthenticated}
        username={username}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />}>
      
      
        <Route index element={<HomeScreen />} />
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/bookingconfirm' element={<BookingConfirm />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/package/:packageid' element={<PackageDetail />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/faq' element={<Faq />} />
        {/* <Route path="/packages" element={<PackageList />} /> */}
        {/* <Route path="/package/:packageid" element={<PackageDetail />} /> */}
        {/* <Route path='/my-bookings' element={<MyBookings/>} /> */}
        {/* <Route path='/wishlist' element={<WishList/>} /> */}
        {/* <Route path='/faq' element={<FAQ/>} /> */}
        {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
