const User = require('./User');
const Category = require('./category')
const Product = require('./product')
const Image = require('./productImage')

const Color = require('./color')
const MainCategory = require('./mainCategory')

Category.belongsTo(MainCategory, {
    foreignKey: 'main_category_id',
});

MainCategory.hasMany(Category, {
    foreignKey: 'main_category_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});
Image.belongsTo(Product, {
    foreignKey: 'product_id',
});

Color.belongsTo(Product, {
    foreignKey: 'product_id',
})
Product.hasMany(Color, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Category, Product, Image };
