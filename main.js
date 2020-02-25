//Higher order functions
//Filter, Map, Reject

//Array of animals to use
var animals = [
  { name: 'Fluff', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

//Creating a new array of names using a for loop

var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}


//Creating a new array using the map method (HOF)

/*
var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})
*/

//Creating a new array of the dogs from the orignal array using a for loop

/*
var dogs = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dogs.push(animals[i])
}
*/

//Creating a new array of the dogs from the
//orignal array using the filter method (HOF)

/*
var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})
*/


//Storing a function in a varible to later be
//passed into another function(Higher Order Function)

/*
var isDog = function(animal) {
  return animal.species === 'dog'
}
*/

//The stored function can now be passed to other functions like filter

/*
var dogs = animals.filter(isDog)
*/
