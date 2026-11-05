import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
// Middlewares
app.use(express.json()); // converter request body to JSON
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) 