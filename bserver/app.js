import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import db from './database/connection.js';
const app = express();
import ur from './routes/userroutes.js';
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);   
    })
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

app.use('/user', ur);
import './database/relations.js';