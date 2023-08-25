const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Color extends Model { }

Color.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    color_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id'
        }
    },
     created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
  },
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'color',
  }
);

module.exports = Color;
