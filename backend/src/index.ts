import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import offerRoutes from './routes/offers';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/offers', offerRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 