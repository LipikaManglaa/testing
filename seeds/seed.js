const sequelize = require('../config/connection');
const categoryData = require('./category-seed');
console.log(categoryData)
const colorData = require('./color-seed');
const mainCategoryData = require('./mainCategory-seed');
const productData = require('./product-seed');
const productImageData = require('./productImage-seed');





const seedAll = async () => {
  await sequelize.sync({ force: true });

  await categoryData();

  await colorData();
  await mainCategoryData();

  await productData();
  await productImageData();



  process.exit(0);
};

seedAll();


