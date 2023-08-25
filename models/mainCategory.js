const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class MainCategory extends Model { }

MainCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    main_category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        lowercase:true
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
    modelName: 'mainCategory',
  }
);

module.exports = MainCategory;
