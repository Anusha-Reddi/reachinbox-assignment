import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/db.js';
import mentorRoutes from './routes/mentorRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', mentorRoutes);
app.use('/api', studentRoutes);
app.use('/api', bookingRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});

