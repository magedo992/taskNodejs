
const express = require('express');
const app = express();
const DBconfig = require('./dbconfig/dbconfig'); 
require('dotenv').config();
const port = process.env.PORT; 
const courseRoute = require('./route/courseRoute');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api', courseRoute);

app.get('/', (req, res) => {
  res.status(200).json({ message: "hello world" });
});


DBconfig()
  .then(() => {
    console.log("Connected to database");
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1); 
  });