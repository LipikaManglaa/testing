const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
       lowercase:true
      },
    main_category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'mainCategory',
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
    modelName: 'category',
  }
);


Category.afterCreate(function(cat, options, fn) {
    var slugify = require('slug');
    var s = slugify(cat.category_name);
    cat.updateAttributes({ slug: s });
    fn(null, cat);
});  
// sequelize.define('Category', attributes, {
//     hooks: {
//         afterCreate: function (instance) {
//             instance.set('slug', slugify(instance.get('category_name')));
//         }
//     }
// });
module.exports = Category;
