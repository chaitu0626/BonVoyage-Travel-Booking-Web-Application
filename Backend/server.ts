import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

interface User {
  
  userName: string;
  userEmail: string;
  userPhone: number;
  userPassword: string;
  userAddress: string;
  userRole: string;
  userWishlist: string[];
}

// Create an instance of express
const app = express();
const port = 8080;
const saltRounds = 10;
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Configure the PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BonVoyage',
  password: 'Nirmal123#',
  port: 5432,
});

// Endpoint to get all packages
app.get('/packages', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Package');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/packages/:packageid', async (req, res) => {
  const { packageid } = req.params;

  try {
    const result = await pool.query('SELECT * FROM Package WHERE packageid = $1', [packageid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching package data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.use(bodyParser.json());
app.post('/users', async (req: Request, res: Response) => {
  const { userName, userEmail, userPhone, userPassword, userAddress, userRole, userWishlist } = req.body as User;

  if (!userName || !userEmail || !userPhone || !userPassword || !userAddress || !userRole || !userWishlist) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Generate the next user ID using the sequence
    const resultSeq = await pool.query(`SELECT nextval('user_id_seq')`);
    const nextId = resultSeq.rows[0].nextval;
    const userID = `U${nextId}`;

    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    const queryText = `
      INSERT INTO Users (userID, userName, userEmail, userPhone, userPassword, userAddress, userRole, userWishlist, createdAt, updatedAt)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING *;
    `;

    const result = await pool.query(queryText, [userID, userName, userEmail, userPhone, hashedPassword, userAddress, userRole, userWishlist]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/verify-user', async (req: Request, res: Response) => {
  interface User {
    userEmail: string;
    userPassword: string;
  }

  const { userEmail, userPassword } = req.body as User;

  if (!userEmail || !userPassword) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const queryText = `
      SELECT * FROM users
      WHERE useremail = $1;
    `;
    const result = await pool.query(queryText, [userEmail]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(userPassword, user.userpassword);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is correct, user is verified
    res.status(200).json({ message: 'User verified successfully', user });
  } catch (error) {
    console.error('Error verifying user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/bookings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM booking');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/wishlist/:userid', async (req, res) => {
  const userid = req.params.userid;
  console.log(userid)
  try {
    const userRes = await pool.query('SELECT userwishlist FROM users WHERE userid = $1', [userid]);
    console.log(userRes.rows);
    const userWishlist = userRes.rows[0].userwishlist || [];
    console.log(userWishlist);

    if (userWishlist.length > 0) {
      const placeholders = userWishlist.map((_: any, i: any) => `$${i + 1}`).join(',');
      console.log(placeholders);
      const packagesRes = await pool.query(`SELECT * FROM package WHERE packageid IN (${placeholders})`, userWishlist);
      console.log(packagesRes);
      res.status(200).json(packagesRes.rows);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.put('/bookings/:bookingid', async (req: Request, res: Response) => {
  const bookingId = req.params.bookingid;
  const { bookingperson, bookingrooms } = req.body;

  if (typeof bookingperson !== 'number' || typeof bookingrooms !== 'number') {
    return res.status(400).send('Invalid input: bookingperson and bookingrooms must be numbers.');
  }

  try {
    const result = await pool.query(
      'UPDATE booking SET bookingperson = $1, bookingrooms = $2 WHERE bookingid = $3 RETURNING *',
      [bookingperson, bookingrooms, bookingId]
    );

    if (result.rowCount === 0) {
      return res.status(404).send('Booking not found.');
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).send('Server error.');
  }
});

app.delete('/bookings/:bookingid', async (req: Request, res: Response) => {
  const bookingId = req.params.bookingid;

  try {
    const result = await pool.query(
      'DELETE FROM booking WHERE bookingid = $1 RETURNING *',
      [bookingId]
    );

    if (result.rowCount === 0) {
      return res.status(404).send('Booking not found.');
    }

    res.send(`Booking with ID ${bookingId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).send('Server error.');
  }
});

// app.get('/bookings', async (req: Request, res: Response) => {
//   const { userID } = req.query;
//   if (!userID) {
//     return res.status(400).json({ error: 'Missing userID' });
//   }

//   try {
//     const result = await pool.query('SELECT * FROM booking WHERE "userid" = $1', [userID]);
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching bookings:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
