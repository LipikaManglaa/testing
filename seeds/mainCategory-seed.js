const { MainCategory } = require('../models');


const mainCategoryData = [
  {
     main_category_name: 'Men',
     slug:'Men',
   
  },
  {
     main_category_name: 'Women',
     slug:'Men',
  },
  {
     main_category_name: 'Kids',
     slug:'Men',
  },
 
];

const seedMainCategories = () => MainCategory.bulkCreate(mainCategoryData);

module.exports = seedMainCategories;
