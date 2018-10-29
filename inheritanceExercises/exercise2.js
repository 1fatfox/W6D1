Function.prototype.inherits = function (SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.costructor = this;
};

function MovingObject () {
  //
  // contructor (name, galaxy) {
  //   this.name = name;
  //   this.galaxy = galaxy;
  // }
}

MovingObject.prototype.flying = function () {
  return "I am flying!";
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
