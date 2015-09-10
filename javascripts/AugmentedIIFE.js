var FruitMaker = (function(fruitmaker) {
  

  fruitmaker.slices = function(fruit, numSlices){
      var slicesArray = [];
      for (var i = 0; i < numSlices; i++) {
        slicesArray[i]=fruit
      }
      return slicesArray
    }

  return fruitmaker

})(FruitMaker);


console.log(FruitMaker.slices("apple", 2));