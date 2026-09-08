import express from 'express';         
import dotenv  from 'dotenv';
dotenv.config();                       

const app  = express();
const port = process.env.PORT || 3000;  

// basic route
app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({error: 'Something broke!'});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
