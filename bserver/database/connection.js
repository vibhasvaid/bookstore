import { Sequelize,DataTypes } from "sequelize";
import 'dotenv/config';
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
     {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,   
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;   
db.DataTypes = DataTypes;

export default db;