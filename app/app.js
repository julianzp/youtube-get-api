const express = require('express');
const app = express();
const appRouter = require('./routes/appRoute');

// Use the router in API '/api/youtube'
app.use(express.json());
app.use('/api/youtube', appRouter); 

module.exports = app;
