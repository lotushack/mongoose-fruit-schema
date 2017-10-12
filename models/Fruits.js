const mongoose = require('mongoose');

const FruitSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  avatar: {type: String, required: true},
  grownIn: [{type: String}]
})

const Fruit = mongoose.model('Fruit', FruitSchema)

module.exports = Fruit
