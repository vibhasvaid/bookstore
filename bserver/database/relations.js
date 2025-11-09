import User from "../models/User.js";
import Address from "../models/Address.js";
import db from "../database/connection.js";
// Define relationships
User.hasMany(Address);
Address.belongsTo(User);

db.sequelize.sync();