var FruitMaker = (function() {
  var fruits = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits: function(){
      console.log("FruitMaker", FruitMaker);
      return fruits
    },
    addFruit: function(fruit){
      fruits.push(fruit);
    }
  }

})();
