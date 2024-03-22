// BY Using sequelize.define

// const {DataTypes} = require('sequelize');
// const sequelize = require('./index');

module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pradip"
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

}

// module.exports = User;