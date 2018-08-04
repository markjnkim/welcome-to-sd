module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        body: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        subject: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        response: {
            type: DataTypes.STRING(255),
            allowNull: true,
            validate: {
                len: [1],
            }
        },
        response_type: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: "email",
            validate: {
                len: [1],
                isAlpha: true,
            }
        }
    }, {
            timestamps: true
        });

        // Messages have one author
        Message.associate = models => {
            Message.belongsTo(models.Author, {
                onDelete: "cascade"
            });
        };

    return Message;
};