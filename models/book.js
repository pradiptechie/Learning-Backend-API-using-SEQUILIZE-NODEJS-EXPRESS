
module.exports = (sequelize, DataTypes)=>{
    const Book = sequelize.define('Book', {
    bookId: {
        type: DataTypes.STRING
    },
    bookName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pradip"
    }
    }, {
    tableName: 'Book',
    timestamps: false

    });

    console.log(Book === sequelize.models.Book);

}