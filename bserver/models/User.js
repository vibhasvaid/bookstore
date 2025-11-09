import db from '../database/connection.js';

const User = db.sequelize.define('users', {
    username: {
        type: db.DataTypes.STRING,
        allowNull: false,
               },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
        unique: true,
          },
    password: {
        type: db.DataTypes.STRING,
        allowNull: false,

            },
            

});

export default User;