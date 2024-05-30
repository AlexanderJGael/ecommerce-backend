// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Model } = require('sequelize');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  },
  as: 'tagged_products',
  foreignKey: 'product_id',
  otherKey: 'tag_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  as: 'product_tags',
  foreignKey: 'tag_id',
  otherKey: 'product_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
