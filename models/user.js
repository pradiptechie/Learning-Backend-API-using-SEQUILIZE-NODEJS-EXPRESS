// BY Using sequelize.define

// const {DataTypes} = require('sequelize');
// const sequelize = require('./index');

module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,

        //constraints: SQL query was performed, an error will be thrown by the database
        allowNull: false,
        defaultValue: "Pradip",
        unique: true,

        //validatios: no SQL query will be sent to the database if failed
        validate:{
            isAlpha:true
        }
        
    },
    middleName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'user',

    //   timestamps: false

        timestamps: true,

        createdAt: false,

        updatedAt: 'updateTimestamp'
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User);
    
    return User;

}

// module.exports = User;