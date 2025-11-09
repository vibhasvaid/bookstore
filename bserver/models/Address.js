import db from "../database/connection.js";

const Address = db.sequelize.define("address", {
  phone: {
    type: db.DataTypes.STRING,
    allowNull: true,
  },
  street: {
    type: db.DataTypes.STRING,
    allowNull: false,
  },

  city: {
    type: db.DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: db.DataTypes.STRING,
    allowNull: true,
  },
  pin: {
    type: db.DataTypes.STRING,
    allowNull: true,
  },
});

export default Address;
