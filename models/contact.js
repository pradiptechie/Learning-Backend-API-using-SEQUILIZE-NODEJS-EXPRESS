// BY Extending Model

// const {DataTypes, Model } = require('sequelize');
// const sequelize = require('./index');

module.exports = (sequelize, DataTypes, Model)=>{

    class Contact extends Model {}

    Contact.init({
    Address1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address2: {
        type: DataTypes.STRING
    }
    }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Contact'
    });

    console.log(Contact === sequelize.models.Contact); // true
}

// module.exports = Contact;
