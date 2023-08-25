
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'PartWear Suits',
    slug:'PartWear Suits',
    main_category_id: 1,
  },
  {
    category_name: 'Nehru jacket',
    slug: 'Nehru jacket',
    main_category_id: 1,
  },
   {
    category_name: 'Gowns',
    slug: 'Gowns',
    main_category_id: 2,
  },
  {
    category_name: 'Dresses',
    slug: 'Dresses',
    main_category_id: 2,
  },
  {
    category_name: 'Frocks',
    slug: 'Frocks',
    main_category_id: 3,
  },
  {
    category_name: 'Dresses',
    slug:'Dresses',
    main_category_id: 3,
  },
];

const seedcategories = () => Category.bulkCreate(categoryData);

module.exports = seedcategories;
