// Create a three level prototype chain for identifying animals. Pick a couple of your favorite animals, and research their species and the genus that the species belongs to. Wikipedia is a great resource for this.

// Create a genus function for each of your favorite animals that inherits from Animal.
// Create a species function for each of your favorite animals that inherits from the appropriate genus.
// Every animal must have a name property.
// Each genus must have a genusName property.
// Each species must have a speciesName property.


"use strict";


// Create a base Animals function.
function Animal (name) {
  this.name = name;
} 

//genuses of Animal
function Panthera (name) {
  Animal.call(this, name);
  this.genusName = "Panthera";
}
Panthera.prototype = new Animal();

function Canis (name) {
  Animal.call(this, name);
  this.genusName = "Canis";
}
Canis.prototype = new Animal();


//species of Panthera
function Tigris (name) {
  Panthera.call(this, name);
  this.speciesName = "Tiger";
}
Tigris.prototype = new Panthera();

function Leo (name) {
  Panthera.call(this, name);
  this.speciesName = "Lion";
}
Leo.prototype = new Panthera();


//species of Canis
function Dirus (name) {
  Canis.call(this, name);
  this.speciesName = "Direwolf";
}
Dirus.prototype = new Canis();

function Latrans (name) {
  Canis.call(this, name);
  this.speciesName = "Coyote";
}
Latrans.prototype = new Canis();


var direwolf = new Dirus ('Ghost');
console.log("name", direwolf.name );
console.log("genus name", direwolf.genusName);
console.log("species name", direwolf.speciesName);

//note: we tried to use object.create to simulate this and it didn't work. 

var tiger = new Tigris("Kitty");
console.log("name", tiger.name );
console.log("genus name", tiger.genusName);
console.log("species name", tiger.speciesName );
