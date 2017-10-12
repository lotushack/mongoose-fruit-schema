const mongoose = require('mongoose');
const Fruit = require('./models/Fruits');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://127.0.0.1:27017/fruits', {
  useMongoClient: true
});
// console.log('Fruit', FruitModel);

function getAllFruits() {
  return Fruit.find()
}

function addNewFruit(fruitData) {
   let fruits = new Fruit(fruitData)
   return fruits.save()
}
// function getFruit(fruitId) {
//   return FruitModel.find({
//     id: fruitId
//   }).catch(function(err) {
//     // console.log(fruitId);
//   })
// }
//
// function getFruitByName(name) {
//   return FruitModel.find({
//     name
//   }).catch(function(err) {
//     // console.log(name);
//   })
// }
//
// function addFruit(newFruit) {
//   const fruity = new fruit(newFruit)
//   FruitModel.save(function(err, Fruit) {
//     user.find({
//       name,
//       avatar
//     }).then(function(fruits) {
//       FruitModel.push(fruity)
//     })
//     // console.log(newFruit);
//   })
//   return Promise.resolve('donezo')
// }
//
// function deleteFruit(fruitId) {
//   return FruitModel.deleteOne({
//     id: fruitId
//   })
// }

module.exports = {
  getAllFruits,
  addNewFruit
  // getFruit,
  // getFruitByName,
  // addFruit,
  // deleteFruit
}
