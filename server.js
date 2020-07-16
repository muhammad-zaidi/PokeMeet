const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to Database
connectDB();

//Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

app.get('/', (req, res) => {
  res.send('API running');
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/authenticate', require('./routes/api/authenticate'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
