const { Product } = require('../models');

const productData = [
  {
    product_name: 'Double Breasted Beige 2-Piece Suit',
    product_desc:"Tailored V neck notch lapel double breasted beige 2-Piece business suit made from high-quality polyester fabric. It comes with bottom as trouser",
    price: 14.99,
    product_spec:"Large",
    stock: 14,
    is_stock:"Yes",
    slug:"Double Breasted Beige 2-Piece Suit",
    category_id: 1,
  },
  {
    product_name: 'Ethnic Printed Wedding Nehru Waistcoat',
    product_desc:"Ethnic wear Indian designer white piping work on collar and chest pocket classic Nehru collar waistcoat made from black color printed Imported fabric",
    price: 14.99,
    product_spec:"Large",
    stock: 14,
    is_stock:"Yes",
    slug:"Ethnic Printed Wedding Nehru Waistcoat",
    category_id: 2,
  },
  {
    product_name: 'Stylish Blue Embroidered Gown',
    product_desc:"Jennifer Winget looks more beutiful in this blue satin silk anarkali gown with embroidered floral motifs on the yoke",
    price: 14.99,
    product_spec:"Large",
    stock: 10,
    is_stock:"Yes",
    slug:"Stylish Blue Embroidered Gown",
    category_id: 3,
  },
  {
    product_name: 'Grey And Black Lycra Ready To Wear Saree',
    product_desc:"A horizontal self-striped black and grey pre draped lycra saree embellished with thread, cord embroidery and applique work",
    price: 14.99,
    product_spec:"Large",
    stock: 10,
    is_stock:"Yes",
    slug:"Grey And Black Lycra Ready To Wear Saree",
    category_id: 4,
  },
  {
    product_name: 'girls stylish Gown',
    product_desc:"Jennifer Winget looks more beutiful in this blue satin silk anarkali gown with embroidered",
    price: 14.99,
    product_spec:"[small,medium]",
    stock: 10,
    is_stock:"Yes",
    slug:"Stylish Blue Embroidered Gown",
    category_id: 5,
  },
  {
    product_name: 'Grey And Black Frock',
    product_desc:"A horizontal self-striped black and grey Frock",
    price: 24.99,
    product_spec:"Large",
    stock: 10,
    is_stock:"Yes",
    slug:"Grey And Black Lycra Ready To Wear Saree",
    category_id: 6,
  },
  
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
