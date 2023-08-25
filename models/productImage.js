// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class ProductImage extends Model { }

// set up fields and rules for Product model
ProductImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
       
        product_image: {
            type: DataTypes.BLOB('long'),
            allowNull: true
        },
         product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'

            }
        },
        created_at: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productImage',
    }
);

module.exports = ProductImage;
