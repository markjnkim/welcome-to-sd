module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
        // Giving the Author model a name of type STRING
        first_name: {
            type: DataTypes.STRING(255),
            // allowNull: false,
            // validate: {
            //     len: [1],
            //     isAlpha:true
            // }
        },
        last_name: {
            type: DataTypes.STRING(255),
            // allowNull: false,
            // validate: {
            //     len: [2],
            //     isAlpha:true
            // }
        }
    },{
        timestamps: false
    });

    // Author.associate = models => {
    //     // Associateing Author to Messages
    //     // When an Author is deleted, also delete any associated Messages
    //     Author.hasMany(models.Message, {
    //         onDelete: "cascade"
    //     });
    // };

    return Author;
};