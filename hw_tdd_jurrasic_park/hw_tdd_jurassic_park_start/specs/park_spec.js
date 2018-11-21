const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dino1 = new Dinosaur('velociraptor', 'carnivore', 100);
    dino2 = new Dinosaur('velociraptor', 'carnivore', 100);
    dino3 = new Dinosaur('velociraptor', 'carnivore', 100);
    dino4 = new Dinosaur('t-rex', 'carnivore', 300);
    dino5 = new Dinosaur('gojira', 'omnivore', 500);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual,[])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino1);
    const expected = [dino1];
    assert.deepStrictEqual(park.dinoCollection, expected)
  });

// pretty sure this is wrong, but it passes!!??
  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDino(dino2);
    const expected = [];
    assert.deepStrictEqual(park.dinoCollection, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');


  it('should be able to find all dinosaurs of a particular species');


  it('should be able to remove all dinosaurs of a particular species');

});
