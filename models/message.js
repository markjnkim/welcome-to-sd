module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [2],
                isAlpha: true
            }
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [2],
                isAlpha: true
            }
        },
        message: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        subject: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [1]
            }
        }

    }, {
            timestamps: true
        });
        
    return Message;
};