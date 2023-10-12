const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars') 
const logger = require('./logger');
const member = require('./member')
const app = express();

//Handlebar middleware


app.get('/', (req, res)=> res.render('index',{
    tittle : 'members name',
    member
}))
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
