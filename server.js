// const express = require('express');
// const { Pool } = require('pg');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database',
//   password: 'your_password',
//   port: 5432,
// });

// app.post('/api/register', async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const result = await pool.query(
//       'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
//       [username, hashedPassword]
//     );
//     const token = jwt.sign({ userId: result.rows[0].id }, 'your_jwt_secret');
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: 'Error registering user' });
//   }
// });

// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
//     if (result.rows.length > 0) {
//       const user = result.rows[0];
//       if (await bcrypt.compare(password, user.password)) {
//         const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
//         res.json({ token });
//       } else {
//         res.status(400).json({ error: 'Invalid credentials' });
//       }
//     } else {
//       res.status(400).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error logging in' });
//   }
// });

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, 'your_jwt_secret', (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// app.get('/api/dashboard', authenticateToken, (req, res) => {
//   res.json({ message: 'You have access to the dashboard!' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));