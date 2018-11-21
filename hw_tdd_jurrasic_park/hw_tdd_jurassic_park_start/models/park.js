const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDino = function(dinosaur) {
  this.dinoCollection.pop(dinosaur);
};

module.exports = Park;
