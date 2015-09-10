var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

var vanilla_output = document.getElementById("vanilla_output");

vanilla_output.innerHTML = "This content generated with vanilla JavaScript";

$("#jquery_output").html("This content generated with jQuery");



function modulus(num1, num2){
  return num1%num2
}

function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function doMath(num1, num2, func){
 var doneMath = func(num1, num2);
 return doneMath
}

function sortedPlanets(arr){
 return arr.sort();
}

function reversedPlanets(arr){
  var reversedArray = [];
  $.each(arr, function( index, value ) {
    var reversedWord = value.split('').reverse().join('');
    reversedArray.push(reversedWord);
  });
  return reversedArray;
}


function longPlanets(arr){
  var longArray = [];

  $.each(arr, function(index, value){
    if(value.length >= 7){
      longArray.push(value);
    }
  });

  return longArray
}

function getAnimals(){
  $.getJSON( "data/animals.json", function( data ) {
    console.log("animals", data.animals);
  });
}

doMath(6,7,add);
doMath(7,6,subtract);
getAnimals();

