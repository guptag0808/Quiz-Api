const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config()
// Connect to MongoDB
mongoose.connect(process.env.mongoDbURL)
app.use(express.json())
// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use('/auth', userRoutes);

// Routes
app.use('/api', quizRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
