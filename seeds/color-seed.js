
const { Color } = require('../models');

const colorData = [
  {
    color_name: 'Red',
    product_id: 1,
  },
  {
    color_name: 'Green',
    product_id: 1,
  },
   {
    color_name: 'Brown',
    product_id: 1,
  },
  {
    color_name: 'Red',
    product_id: 1,
  },
  {
    color_name: 'Green',
    product_id: 1,
  },
   {
    color_name: 'Brown',
    product_id: 1,
  },
  {
    color_name: 'Red',
    product_id: 1,
  },
  {
    color_name: 'Green',
    product_id: 1,
  },
   {
    color_name: 'Brown',
    product_id: 2,
  },
  {
    color_name: 'Red',
    product_id: 2,
  },
  {
    color_name: 'Green',
    product_id: 2,
  },
   {
    color_name: 'Brown',
    product_id: 3,
  },
  {
    color_name: 'Red',
    product_id: 4,
  },
  {
    color_name: 'Green',
    product_id: 4,
  },
   {
    color_name: 'Brown',
    product_id: 5,
  },
  {
    color_name: 'Red',
    product_id: 5,
  },
  {
    color_name: 'Green',
    product_id: 7,
  },
   {
    color_name: 'Brown',
    product_id: 6,
  },
  {
    color_name: 'Red',
    product_id: 7,
  },
  {
    color_name: 'Green',
    product_id: 8,
  },
   {
    color_name: 'Brown',
    product_id: 8,
  },
  {
    color_name: 'Red',
    product_id: 9,
  },
  {
    color_name: 'Green',
    product_id: 9,
  },
   {
    color_name: 'Brown',
    product_id: 9,
  },
];

const seedcolors = () => Category.bulkCreate(colorData);

module.exports = seedcolors;
