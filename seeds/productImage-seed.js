
const { productImage } = require('../models');

const productImageData = [
  {
    product_image:"",
    product_id:""
  },
 
];

const productImageseedcategories = () => productImage.bulkCreate(productImageData);

module.exports = productImageseedcategories;
