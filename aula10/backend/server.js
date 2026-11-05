import express from 'express';
import dotenv from 'dotenv';
import index from './index.js'
dotenv.config();
const app = express();
// Middlewares
app.use(express.json()); // converter request body to JSON
app.use('/', index); // use index.js for routing
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) 