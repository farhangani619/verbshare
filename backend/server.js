const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const db = 'YOUR_MONGODB_URI_HERE'; // Replace with your MongoDB URI
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const items = require('./routes/item');
app.use('/api/items', items);

app.listen(port, () => console.log(`Server running on port ${port}`));
