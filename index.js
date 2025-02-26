import express from 'express';
import { dbConnect } from './config/db.js';
import { userRouter } from './routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(express.json())
app.use(userRouter)

app.get('/',(req, res) => {
  res.send('hello world');
})
dbConnect();
app.listen(port, () => `Server running on port ${port}`);