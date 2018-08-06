module.exports = function(sequelize, DataTypes) {
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  }, {
      timestamps: false
    });

  // Messages have one author
  Message.associate = function(models) {
    Message.belongsTo(models.Author, {
      onDelete: "cascade"
    });
  };

  return Message;
};