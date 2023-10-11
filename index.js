const express = require('express');
const path = require('path');
const logger = require('./logger');
const app = express();
// Body parser middleware initialization
app.use(express.json());
// Import the routes for '/api/member'
app.use('/api/member', require('./routes/api/Member'));

// Middleware initialization
// Uncomment the following line if you want to use the 'logger' middleware
// app.use(logger);




// Set the static directory for serving static files
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
