const {Sequelize, DataTypes, Model} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('CONNECTED TO DB');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.contact = require('./contact')(sequelize, DataTypes, Model)
db.User = require('./user')(sequelize, DataTypes)
db.Book = require('./book')(sequelize, DataTypes)
db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });
// db.sequelize.drop();
module.exports = db;


  // module.exports = sequelize;