const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

app.use('/api', leaderboardRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
