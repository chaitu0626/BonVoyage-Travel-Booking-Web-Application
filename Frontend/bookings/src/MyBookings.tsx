// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

// interface Booking {
//   userid: string;
//   bookingid: string;
//   packageid: string;
//   packagename: string;
//   packageimage: string;
//   bookingperson: number;
//   bookingrooms: number;
//   bookingdate: string;
// }

// const Bookings: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/bookings');
//         setBookings(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         My Bookings
//       </Typography>
//       <Grid container spacing={4}>
//         {bookings.map((booking) => (
//           <Grid item xs={12} key={booking.bookingid}>
//             <Card sx={{ display: 'flex', alignItems: 'center' }}>
//               <CardMedia
//                 component="img"
//                 sx={{ width: 151 }}
//                 image={booking.packageimage || 'placeholder_image_url'}
//                 alt={booking.packagename}
//               />
//               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <CardContent>
//                   <Typography component="div" variant="h5">
//                     {booking.packagename}
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary" component="div">
//                     Start date: {booking.bookingdate}
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary" component="div">
//                     Total Rooms Booked: {booking.bookingrooms} Rooms
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary" component="div">
//                     Total Number of Guests: {booking.bookingperson} Adults
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary" component="div">
//                     Your Booking ID: {booking.bookingid}
//                   </Typography>
//                 </CardContent>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Bookings;


// import React, { useEffect, useState } from "react";
// import "./MyBookings.css";
// import paris from "./image/paris.jpg";
// import axios from "axios";
// import FooterComponent from "./Footer";
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteIcon from '@mui/icons-material/Delete';

// interface booking {
//   packagename: string;
//   packageimage: string;
//   bookingperson: number;
//   bookingrooms: number;
//   bookingid: number;
// }
// const MyBookings = () => {
//   const [book, setBook] = useState<booking[]>([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/bookings").then((res) => {
//       console.log(res.data);
//       setBook(res.data);
//     });
//   }, []);
//   return (
//     <>
//       <div className="MyBookingsMainDiv">
//         <div className="MyBookingswritten">My Bookings</div>
//       </div>

//       {book.map((item, index) => {
//         return (
//           <div className="mybookingsbox">
//             <div className="mybookingsimg">
//               <img src={item.packageimage} />
//             </div>

//             <div className="mybbokingwrittenpart">
//               <div className="mybookingptag">
//                 <p>{item.packagename}</p>
//               </div>

//               <div>
//                 <p>Start Date</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   23.01.2023
//                 </p>
//                 <p>Total Number of Guests</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   {item.bookingperson}
//                 </p>
//               </div>

//               <div>
//                 <p>Total Rooms Booked</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   {item.bookingrooms}
//                 </p>
//                 <p>Your Booking Id</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   {item.bookingid}
//                 </p>
//                 <div className="icons" style={{display:'flex',flexDirection:'row',marginTop:'5rem', justifyContent:'space-evenly'}}>
//               <CreateIcon />
//               <DeleteIcon />
//             </div>
//               </div>
              
//             </div>
            
//           </div>
//         );
//       })}
//       <FooterComponent />
//     </>
//   );
// };

// export default MyBookings;



// import React, { useEffect, useState } from "react";
// import "./MyBookings.css";
// import axios from "axios";
// import FooterComponent from "./Footer";
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

// interface Booking {
//   packagename: string;
//   packageimage: string;
//   bookingperson: number;
//   bookingrooms: number;
//   bookingid: number;
// }

// const MyBookings: React.FC = () => {
//   const [book, setBook] = useState<Booking[]>([]);
//   const [open, setOpen] = useState(false);
//   const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
//   const [formData, setFormData] = useState({ bookingperson: 0, bookingrooms: 0 });

//   useEffect(() => {
//     axios.get("http://localhost:8080/bookings").then((res) => {
//       console.log(res.data);
//       setBook(res.data);
//     });
//   }, []);

//   const handleClickOpen = (booking: Booking) => {
//     setCurrentBooking(booking);
//     setFormData({ bookingperson: booking.bookingperson, bookingrooms: booking.bookingrooms });
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentBooking(null);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: Number(value),
//     }));
//   };

//   const handleSubmit = () => {
//     if (currentBooking) {
//       // Here you would send the updated booking data to your server
//       axios.put(`http://localhost:8080/bookings/${currentBooking.bookingid}`, formData)
//         .then(() => {
//           setBook((prevBookings) =>
//             prevBookings.map((booking) =>
//               booking.bookingid === currentBooking.bookingid
//                 ? { ...booking, ...formData }
//                 : booking
//             )
//           );
//           handleClose();
//         });
//     }
//   };

//   return (
//     <>
//       <div className="MyBookingsMainDiv">
//         <div className="MyBookingswritten">My Bookings</div>
//       </div>

//       {book.map((item, index) => {
//         return (
//           <div className="mybookingsbox" key={index}>
//             <div className="mybookingsimg">
//               <img src={item.packageimage} alt={item.packagename} />
//             </div>

//             <div className="mybbokingwrittenpart">
//               <div className="mybookingptag">
//                 <p>{item.packagename}</p>
//               </div>

//               <div>
//                 <p>Start Date</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   23.01.2023
//                 </p>
//                 <p>Total Number of Guests</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   {item.bookingperson}
//                 </p>
//               </div>

//               <div>
//                 <p>Total Rooms Booked</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   {item.bookingrooms}
//                 </p>
//                 <p>Your Booking Id</p>
//                 <p style={{ fontSize: "14px", fontWeight: "400" }}>
//                   {item.bookingid}
//                 </p>
//                 <div className="icons" style={{ display: 'flex', flexDirection: 'row', marginTop: '5rem', justifyContent: 'space-evenly' }}>
//                   <CreateIcon onClick={() => handleClickOpen(item)} />
//                   <DeleteIcon />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Edit Booking</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             label="Number of Guests"
//             type="number"
//             name="bookingperson"
//             value={formData.bookingperson}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             margin="dense"
//             label="Number of Rooms"
//             type="number"
//             name="bookingrooms"
//             value={formData.bookingrooms}
//             onChange={handleChange}
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleSubmit}>Save</Button>
//         </DialogActions>
//       </Dialog>

//       <FooterComponent />
//     </>
//   );
// };

// export default MyBookings;



import React, { useEffect, useState } from "react";
import "./MyBookings.css";
import axios from "axios";
import FooterComponent from "./Footer";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

interface Booking {
  packagename: string;
  packageimage: string;
  bookingperson: number;
  bookingrooms: number;
  bookingid: number;
}

const MyBookings: React.FC = () => {
  const [book, setBook] = useState<Booking[]>([]);
  const [open, setOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
  const [formData, setFormData] = useState({ bookingperson: 0, bookingrooms: 0 });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:8080/bookings");
      setBook(res.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleClickOpen = (booking: Booking) => {
    setCurrentBooking(booking);
    setFormData({ bookingperson: booking.bookingperson, bookingrooms: booking.bookingrooms });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentBooking(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  const handleSubmit = async () => {
    if (currentBooking) {
      try {
        await axios.put(`http://localhost:8080/bookings/${currentBooking.bookingid}`, formData);
        setBook((prevBookings) =>
          prevBookings.map((booking) =>
            booking.bookingid === currentBooking.bookingid
              ? { ...booking, ...formData }
              : booking
          )
        );
        handleClose();
      } catch (error) {
        console.error('Error updating booking:', error);
      }
    }
  };

  const handleDelete = async (bookingid: number) => {
    try {
      await axios.delete(`http://localhost:8080/bookings/${bookingid}`);
      setBook((prevBookings) =>
        prevBookings.filter((booking) => booking.bookingid !== bookingid)
      );
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <>
      <div className="MyBookingsMainDiv">
        <div className="MyBookingswritten">My Bookings</div>
      </div>

      {book.length === 0 ? (
        <div className="noBookingsMessage">No bookings found.</div>
      ) : (
        book.map((item, index) => {
          return (
            <div className="mybookingsbox" key={index}>
              <div className="mybookingsimg">
                <img src={item.packageimage} alt={item.packagename} />
              </div>

              <div className="mybbokingwrittenpart">
                <div className="mybookingptag">
                  <p>{item.packagename}</p>
                </div>

                <div>
                  <p>Start Date</p>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>
                    23.01.2023
                  </p>
                  <p>Total Number of Guests</p>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>
                    {item.bookingperson}
                  </p>
                </div>

                <div>
                  <p>Total Rooms Booked</p>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>
                    {item.bookingrooms}
                  </p>
                  <p>Your Booking Id</p>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>
                    {item.bookingid}
                  </p>
                  <div className="icons" style={{ display: 'flex', flexDirection: 'row', marginTop: '5rem', justifyContent: 'space-evenly' }}>
                    <CreateIcon onClick={() => handleClickOpen(item)} />
                    <DeleteIcon onClick={() => handleDelete(item.bookingid)} />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Booking</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Number of Guests"
            type="number"
            name="bookingperson"
            value={formData.bookingperson}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Number of Rooms"
            type="number"
            name="bookingrooms"
            value={formData.bookingrooms}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

      <FooterComponent />
    </>
  );
};

export default MyBookings;



